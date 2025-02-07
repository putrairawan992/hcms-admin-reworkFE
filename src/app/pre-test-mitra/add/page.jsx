'use client';
import { Box, Button, Divider, Flex, Text } from '@chakra-ui/react';
import styles from '../../styles/inbox.module.css';
import { Gap, SelectField, TextArea, Input } from '../../components/atoms';
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import useAddPretestMitra from './useAddPretestMitra';
import { ChooseLogo, QuestionSection } from '@/app/components/molecules';
import { map } from 'lodash';
import axiosInstance from '@/app/api/axiosConfig';
const initialForm = {
  title: '',
  instruction: '',
  category: '',
  duration: '',
  logo: '',
  question: [],
  multiple_choice: [],
};

const PretestMitra = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [module, setModule] = useState(searchParams.get('module') || '');
  const [modulData, setModulData] = useState([]);
  const [durations, setDurations] = useState([]);
  const [form, setForm] = useState(initialForm);
  const {
    questionData,
    setQuestionData,
    addRowQuestion,
    postPretest,
    getDetailPretest,
  } = useAddPretestMitra();

  const pretestModulDetailId = searchParams.get('id') || '';
  const isModuleMultipleChoice = module?.toLowerCase() === 'modul pilih ganda';

  const categoryOptions = map(modulData, (item) => ({
    label: item.category_name,
    value: item.id,
  }));

  const getDetail = async () => {
    try {
      const response = await getDetailPretest(pretestModulDetailId);
      const data = response.data.data;
      setModulData(data.master_data.master_category);
      setDurations(data.master_data.master_duration);
      if (data.type) {
        setModule(data.type);
      }
      setForm({
        title: data.title_test || '',
        instruction: data.instructions || '',
        category: data.category_id || '',
        duration: data.duration || '',
        logo: data.logo || '',
        question: data.question || [],
      });

      setQuestionData(
        data.question.map((q) => ({
          id: q.id,
          question: q.question,
          options: q.options || [],
        }))
      );
      return data;
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  useEffect(() => {
    getDetail();
  }, []);

  const handleSave = async () => {
    const payload = {
      modul_name: module,
      type: module,
      title_test: form.title,
      category_id: form.category,
      instructions: form.instruction,
      logo: form.logo,
      duration: form.duration,
      deadline: '2024-01-10',
      question: isModuleMultipleChoice
        ? []
        : questionData.map((item) => item.question),
      multiple_choice: isModuleMultipleChoice
        ? questionData.map((item) => ({
            question: item.question,
            options: item.options,
          }))
        : [],
    };

    try {
      if (pretestModulDetailId) {
        // Jika ada ID, lakukan update
        await axiosInstance.put(
          `/api/admin/pretest?pretest_modul_detail_id=${pretestModulDetailId}`,
          payload
        );
        alert('Pretest berhasil diupdate!');
      } else {
        // Jika tidak ada ID, lakukan create
        await postPretest(payload);
        alert('Pretest berhasil disimpan!');
      }
      router.back();
    } catch (error) {
      console.error('Error saving pretest:', error);
      alert('Gagal menyimpan pretest.');
    }
  };

  return (
    <Box className={styles['inbox-container']}>
      <Flex justify="space-between">
        <Box>
          <Text className={styles['inbox-title']}>{module}</Text>
          <Text color="gray.500">
            Silahkan atur soal yang akan dijadikan Pre-Test bagi calon Karyawan
          </Text>
        </Box>

        <Button
          style={{
            background: 'linear-gradient(90deg, #f39f5a 0%, #ae445a 100%)',
            color: 'white',
          }}
          onClick={handleSave}>
          Save
        </Button>
      </Flex>
      <Gap height={8} />

      <Input
        label="Judul Test"
        type="text"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        placeholder="Masukkan judul test"
      />

      <Gap height={4} />
      <Text color="gray.800" fontWeight="bold" fontSize="lg">
        Instruksi Tes
      </Text>
      <TextArea
        placeholder="Masukkan deskripsi soal"
        value={form.instruction}
        onChange={(value) => setForm({ ...form, instruction: value })}
        style={{ margin: '0px 0px 2rem 0px', height: '150px' }}
      />
      <Gap height={12} />

      <Flex gap={4}>
        <SelectField
          label="Kategori"
          onChange={(slug, value) => setForm({ ...form, [slug]: value })}
          options={categoryOptions}
          placeholder="Pilih kategori"
          slug="category"
          value={form.category}
        />
        <SelectField
          placeholder="Durasi Waktu"
          label="Durasi Waktu"
          options={durations}
          slug="duration"
          value={form.duration}
          onChange={(slug, value) => setForm({ ...form, [slug]: value })}
        />
      </Flex>

      <Gap height={4} />
      <ChooseLogo onClick={(item) => setForm({ ...form, logo: item.label })} />
      <Gap height={4} />
      <Divider borderColor="gray.300" />
      <Gap height={4} />

      {questionData.map((item, index) => (
        <QuestionSection
          key={index}
          questionNumber={index + 1}
          isMultipleChoice={isModuleMultipleChoice}
          value={item}
          onChange={(updatedData) => {
            const newData = [...questionData];
            newData[index] = { ...newData[index], ...updatedData };
            setQuestionData(newData);
          }}
          onDelete={() => {
            setQuestionData((prevData) =>
              prevData.filter((_, i) => i !== index)
            );
          }}
        />
      ))}
      <div className="flex justify-center">
        <Button
          style={{
            background: 'linear-gradient(90deg, #f39f5a 0%, #ae445a 100%)',
            color: 'white',
          }}
          onClick={addRowQuestion}>
          Tambah Pertanyaan
        </Button>
      </div>
    </Box>
  );
};

export default PretestMitra;
