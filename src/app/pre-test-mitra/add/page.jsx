'use client';
import { Box, Button, Divider, Flex, Input, Text } from '@chakra-ui/react';
import styles from '../../styles/inbox.module.css';
import { ChooseLogo, QuestionSection } from '../../components/molecules';
import useAddPretestMitra from './useAddPretestMitra';
import { Gap, SelectField, TextArea } from '../../components/atoms';
import { useMemo, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const categories = [
  { label: 'Wawancara Mandiri', value: 'Wawancara Mandiri' },
  { label: 'Test Kepribadian', value: 'Test Kepribadian' },
  { label: 'Tes Kompetensi', value: 'Tes Kompetensi' },
];

const durations = [
  { label: '15 menit', value: 15 },
  { label: '30 menit', value: 30 },
  { label: '45 menit', value: 45 },
  { label: '60 menit', value: 60 },
  { label: '75 menit', value: 75 },
  { label: '90 menit', value: 90 },
  { label: '105 menit', value: 105 },
  { label: '120 menit', value: 120 },
];

const initialForm = {
  title: '',
  instruction: '',
  category: '',
  duration: 0,
  logo: '',
  question: '',
};
const PretestMitra = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const module = searchParams.get('module') || '';

  const { data, questionData, category, addRowQuestion } = useAddPretestMitra();
  const [form, setForm] = useState(initialForm);
  const RenderContentQuestion = useMemo(
    () =>
      questionData.map((item, index) => (
        <QuestionSection questionNumber={index} key={index} />
      )),
    [questionData]
  );

  const renderContentModuleLiveRecording = useMemo(
    () => (
      <>
        <Text color="gray.800" fontWeight="bold" fontSize="lg">
          Instruksi Tes
        </Text>
        <TextArea
          placeholder="Masukkan deskripsi soal"
          style={{ height: '150px' }}
          className="bg-primary-100"
          value={form.instruction}
          onChange={(e) => setForm({ ...form, instruction: e })}
        />
        <Gap height={12} />
        <Flex gap={4}>
          <SelectField
            label="Kategori"
            onChange={(slug, value) => setForm({ ...form, [slug]: value })}
            options={categories}
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
        <Box>
          <Text color="gray.800" fontWeight="bold" fontSize="lg">
            Pilih logo
          </Text>
          <Gap height={2} />
          <ChooseLogo />
        </Box>
        <Gap height={4} />
        <Divider borderColor="gray.300" />
        <Gap height={4} />
        <Text color="gray.800" fontWeight="bold" fontSize="lg">
          Soal 1
        </Text>
        <TextArea
          placeholder="Masukkan pertanyaan"
          style={{ height: '150px' }}
          value={form.question}
          onChange={(e) => setForm({ ...form, question: e })}
        />

        <div className="flex justify-center mt-16">
          <Button className={styles['inbox-btn']} onClick={addRowQuestion}>
            Tambah Pertanyaan
          </Button>
        </div>
      </>
    ),
    [category, addRowQuestion]
  );

  const renderContentModuleGanda = useMemo(
    () => (
      <>
        <Flex gap={4}>
          <SelectField
            placeholder="Pilih kategori"
            label="Kategori"
            options={category}
          />
          <SelectField placeholder="Durasi Waktu" label="Durasi Waktu" />
        </Flex>
        <Gap height={4} />
        <Box>
          <Text color="gray.800" fontWeight="bold" fontSize="lg">
            Pilih logo
          </Text>
          <Gap height={2} />
          <ChooseLogo />
        </Box>
        <Gap height={4} />
        <Divider borderColor="gray.300" />
        <Gap height={4} />
        {RenderContentQuestion}
        <Gap height={4} />
        <Flex justify="center">
          <Button className={styles['inbox-btn']} onClick={addRowQuestion}>
            Tambah Pertanyaan
          </Button>
        </Flex>
      </>
    ),
    [category, RenderContentQuestion, addRowQuestion]
  );

  return (
    <Box className={styles['inbox-container']}>
      <Flex align="center" justify="space-between">
        <Box>
          <Text className={styles['inbox-title']}>{module}</Text>
          <Text
            fontSize="sm"
            fontWeight="light"
            color="gray.800"
            fontStyle="italic">
            Silahkan atur soal yang akan dijadikan Pre-Test bagi calon Karyawan
          </Text>
        </Box>
        <Button
          className={styles['inbox-btn']}
          px={8}
          onClick={() => {
            localStorage.setItem('save-pretest', true);
            router.push('/pre-test-mitra');
          }}>
          Save
        </Button>
      </Flex>
      <Gap height={8} />
      <Box>
        <Box>
          <Text color="gray.800" fontWeight="bold" fontSize="lg">
            Judul tes
          </Text>
          <Gap height={2} />
          <Input
            className={styles['input-container']}
            type="text"
            placeholder="Masukkan judul tes"
          />
        </Box>
        <Gap height={4} />
        {module.toLowerCase() === 'modul live recording' &&
          renderContentModuleLiveRecording}
        {module.toLowerCase() === 'modul ganda' && renderContentModuleGanda}
      </Box>
    </Box>
  );
};

export default PretestMitra;
