'use client';
import { Box, Button, Divider, Flex, Text } from '@chakra-ui/react';
import styles from '../../styles/inbox.module.css';
import { Gap, Input, TextArea, SelectField } from '../../components/atoms';
import { useState, useEffect, memo } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import useAddPretestMitra from './useAddPretestMitra';
import { QuestionSection, ChooseLogo } from '@/app/components/molecules';
import { map } from 'lodash';
const initialForm = {
  title_test: '',
  instruction: '',
  category: '',
  duration: '',
  logo: '',
  question: [],
  multiple_choice: [],
};

const sanitizeId = (id) => (typeof id === 'number' ? null : id);

const PretestMitra = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [module, setModule] = useState(searchParams.get('module') || '');
  const [modulData, setModulData] = useState([]);
  const [durations, setDurations] = useState([]);
  const [form, setForm] = useState(initialForm);
  const {
    addRowQuestion,
    getDetailPretest,
    postPretest,
    questionData,
    setQuestionData,
    updatePretest,
  } = useAddPretestMitra();

  const pretestModulDetailId = searchParams.get('id') || '';
  const isModuleMultipleChoice =
    module?.toLowerCase() === 'modul pilihan ganda';

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
        title_test: data.title_test || '',
        instruction: data.instructions || '',
        category: data.category_id || '',
        duration: data.duration || '',
        logo: data.logo || '',
        question: data.question || [],
      });

      if (isModuleMultipleChoice) {
        setQuestionData(
          data.multiple_choice.map((q) => ({
            id: q.id,
            question: q.question,
            options: q.option.map((opt) => ({
              id: opt.id,
              alphabet: opt.alphabet,
              text: opt.text,
              is_correction: opt.is_correction,
            })),
          }))
        );
      } else {
        setQuestionData(
          data.question.map((q) => ({
            id: q.id,
            question: q.question,
            options: [],
          }))
        );
      }
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  const handleSave = async () => {
    const isUpdating = Boolean(pretestModulDetailId);

    const payload = {
      modul_name: module,
      type: module,
      title_test: form.title_test,
      category_id: form.category,
      instructions: form.instruction,
      logo: form.logo,
      duration: form.duration,
      deadline: '2024-01-10',
      question: isModuleMultipleChoice
        ? []
        : isUpdating
          ? questionData.map((item) => ({
              id: sanitizeId(item.id), // Ubah ID number ke null
              question: item.question,
            }))
          : questionData.map((item) => item.question), // Saat post, hanya array string
      multiple_choice: isModuleMultipleChoice
        ? questionData.map((item) => ({
            id: sanitizeId(item.id), // Ubah ID number ke null
            question: item.question,
            options: item.options.map((option) => ({
              id: sanitizeId(option.id), // Ubah ID number ke null
              alphabet: option.alphabet,
              text: option.text,
              is_correction: option.is_correction,
            })),
          }))
        : [],
    };

    try {
      if (isUpdating) {
        await updatePretest(payload);
        alert('Pretest berhasil diupdate!');
      } else {
        await postPretest(payload);
        alert('Pretest berhasil disimpan!');
      }
      router.back();
    } catch (error) {
      console.error('Error saving pretest:', error);
      alert('Gagal menyimpan pretest.');
    }
  };

  useEffect(() => {
    getDetail();
  }, []);
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
        value={form.title_test}
        onChange={(e) => setForm({ ...form, title_test: e.target.value })}
        placeholder="Masukkan judul test"
      />

      <Gap height={4} />
      <Text color="gray.800" fontWeight="bold" fontSize="lg">
        Instruksi Tes
      </Text>
      <TextArea
        placeholder="Masukkan deskripsi soal"
        value={form.instruction}
        onChange={(value) =>
          setForm((prevForm) => ({ ...prevForm, instruction: value }))
        }
        style={{ margin: '0px 0px 2rem 0px', height: '150px' }}
      />
      <Gap height={12} />

      <Flex gap={4}>
        <SelectField
          label="Kategori"
          onChange={(slug, value) =>
            setForm((prevForm) => ({ ...prevForm, [slug]: value }))
          }
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
          onChange={(slug, value) =>
            setForm((prevForm) => ({ ...prevForm, [slug]: value }))
          }
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

export default memo(PretestMitra);
