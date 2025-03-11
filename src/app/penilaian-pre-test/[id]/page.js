'use client';
import { useState } from 'react';
import { Box, Button, Flex, Text, Spinner, useToast } from '@chakra-ui/react';
import styles from '../../styles/inbox.module.css';
import { PenilaianDocumentCard } from '../../components/molecules';
import { Gap } from '../../components/atoms';
import { useRouter, useParams, useSearchParams } from 'next/navigation';
import useDetailPenilaianPretest from './useDetailPenilaianPretest';

const PretestMitra = () => {
  const toast = useToast();
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();

  const jobSeekerId = params?.id || '';

  const pretestModulId = searchParams?.get('pretest-modul-id') || '';

  const {
    questionData,
    isLoading: dataLoading,
    submitScore,
  } = useDetailPenilaianPretest(jobSeekerId, pretestModulId);
  console.log(questionData);
  const [nilai, setNilai] = useState(questionData[0]?.score || null);
  const [isLoading, setIsLoading] = useState(false);

  if (dataLoading) {
    return (
      <Box className={styles['inbox-container']}>
        <Flex justify="center" align="center" height="300px">
          <Spinner size="xl" color="#AE445A" />
        </Flex>
      </Box>
    );
  }

  const handleClick = async () => {
    setIsLoading(true);

    try {
      const response = await submitScore(
        questionData[0]?.apply_job_answer_id,
        nilai
      );
      console.log(response);

      toast({
        title: 'Success',
        description: 'Nilai berhasil disimpan.',
        duration: 3000,
        status: 'success',
        position: 'top',
        isClosable: true,
      });
      router.push('/penilaian-pre-test');
    } catch (error) {
      toast({
        title: 'Error',
        description: `${error.response.data.errors}`,
        duration: 3000,
        status: 'error',
        position: 'top',
        isClosable: true,
      });
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box className={styles['inbox-container']}>
      <Flex align={'center'} justify={'space-between'}>
        <Box>
          <Text className={styles['inbox-title']}>Wawancara Mandiri</Text>
        </Box>
      </Flex>
      <Gap height={8} />
      <Box flex={1}>
        <Box flex={1} alignItems="center">
          <Text color="#404041" fontWeight={700} fontSize={16}>
            Soal dan Jawaban
          </Text>
          <Gap height={4} />
          {questionData && questionData.length > 0 ? (
            <PenilaianDocumentCard
              data={questionData[0]}
              setNilai={setNilai}
              nilai={nilai}
            />
          ) : (
            <Text>Tidak ada data pertanyaan</Text>
          )}
        </Box>
      </Box>
      <Gap height={8} />
      <Flex flex={1} justify="flex-end">
        <Button
          className={styles['inbox-btn']}
          onClick={handleClick}
          paddingX={10}>
          {isLoading ? <Spinner size="sm" /> : 'Save'}
        </Button>
      </Flex>
    </Box>
  );
};

export default PretestMitra;
