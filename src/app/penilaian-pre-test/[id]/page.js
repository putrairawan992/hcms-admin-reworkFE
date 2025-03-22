'use client';
import { useState, useEffect } from 'react';
import { Box, Button, Flex, Text, Spinner, useToast } from '@chakra-ui/react';
import styles from '../../styles/inbox.module.css';
import { PenilaianDocumentCard } from '../../components/molecules';
import { Gap } from '../../components/atoms';
import { useRouter, useParams, useSearchParams } from 'next/navigation';
import { httpClient } from '../../utils/network';

// Custom hook for detailed pretest assessment
const useDetailPenilaianPretest = (jobSeekerId, pretestModulId) => {
  const [data, setData] = useState({});
  const [questionData, setQuestionData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    // Don't attempt to fetch if we don't have valid IDs
    if (!jobSeekerId || !pretestModulId) {
      console.error('Missing required parameters for API call');
      setIsLoading(false);
      return;
    }

    try {
      const response = await httpClient({
        method: 'GET',
        url: '/admin/pretest_scoring_detail',
        params: {
          job_seeker_id: jobSeekerId,
          pretest_modul_detail_id: pretestModulId,
        },
      });

      const responseData = response?.data?.data || {};
      setData(responseData);

      if (responseData.detail && responseData.detail.length > 0) {
        setQuestionData(responseData.detail);
      }

      setIsLoading(false);
    } catch (error) {
      console.error('Failed to fetch data:', error);
      setIsLoading(false);
    }
  };

  const submitScore = async (applyJobAnswerId, score) => {
    try {
      const response = await httpClient({
        method: 'PUT',
        url: '/admin/pretest_scoring',
        data: {
          apply_job_answer_id: applyJobAnswerId,
          score: Number(score),
        },
      });

      return response?.data;
    } catch (error) {
      console.error('Failed to submit score:', error);
      throw error;
    }
  };

  useEffect(() => {
    fetchData();
  }, [jobSeekerId, pretestModulId]);

  return { data, questionData, isLoading, submitScore };
};

// Main component
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

  // Initialize with the first question's score if available
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(0);
  const [nilai, setNilai] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Update nilai when questionData changes or when a different question is selected
  useEffect(() => {
    if (
      questionData &&
      questionData.length > 0 &&
      selectedQuestionIndex < questionData.length
    ) {
      setNilai(questionData[selectedQuestionIndex]?.score);
    }
  }, [questionData, selectedQuestionIndex]);

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
    if (questionData.length === 0) {
      toast({
        title: 'Error',
        description: 'Tidak ada data pertanyaan untuk disimpan',
        duration: 3000,
        status: 'error',
        position: 'top',
        isClosable: true,
      });
      return;
    }

    if (nilai === null || nilai === '') {
      toast({
        title: 'Warning',
        description: 'Mohon masukkan nilai terlebih dahulu',
        duration: 3000,
        status: 'warning',
        position: 'top',
        isClosable: true,
      });
      return;
    }

    setIsLoading(true);

    try {
      const currentQuestion = questionData[selectedQuestionIndex];
      const response = await submitScore(
        currentQuestion.apply_job_answer_id,
        nilai
      );

      toast({
        title: 'Success',
        description: 'Nilai berhasil disimpan.',
        duration: 3000,
        status: 'success',
        position: 'top',
        isClosable: true,
      });

      // Check if we need to go to the next question or return to the list
      if (selectedQuestionIndex < questionData.length - 1) {
        setSelectedQuestionIndex(selectedQuestionIndex + 1);
        setNilai(questionData[selectedQuestionIndex + 1]?.score || null);
      } else {
        router.push('/penilaian-pre-test');
      }
    } catch (error) {
      toast({
        title: 'Error',
        description:
          error.response?.data?.errors ||
          'Terjadi kesalahan saat menyimpan nilai',
        duration: 3000,
        status: 'error',
        position: 'top',
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handlePrevQuestion = () => {
    if (selectedQuestionIndex > 0) {
      setSelectedQuestionIndex(selectedQuestionIndex - 1);
    }
  };

  const handleNextQuestion = () => {
    if (selectedQuestionIndex < questionData.length - 1) {
      setSelectedQuestionIndex(selectedQuestionIndex + 1);
    }
  };

  return (
    <Box className={styles['inbox-container']}>
      <Flex align={'center'} justify={'space-between'}>
        <Box>
          <Text className={styles['inbox-title']}>Penilaian Pretest</Text>
        </Box>
      </Flex>
      <Gap height={8} />
      <Box flex={1}>
        <Box flex={1} alignItems="center">
          <Flex justifyContent="space-between" alignItems="center">
            <Text color="#404041" fontWeight={700} fontSize={16}>
              Soal dan Jawaban
            </Text>
            {questionData.length > 1 && (
              <Text color="#404041" fontSize={14}>
                {selectedQuestionIndex + 1} dari {questionData.length} soal
              </Text>
            )}
          </Flex>
          <Gap height={4} />
          {questionData && questionData.length > 0 ? (
            <PenilaianDocumentCard
              data={questionData[selectedQuestionIndex]}
              setNilai={setNilai}
              nilai={nilai}
            />
          ) : (
            <Text>Tidak ada data pertanyaan</Text>
          )}
        </Box>
      </Box>
      <Gap height={8} />
      <Flex flex={1} justify="space-between">
        {questionData.length > 1 && (
          <Flex>
            <Button
              onClick={handlePrevQuestion}
              isDisabled={selectedQuestionIndex === 0}
              variant="outline"
              colorScheme="gray"
              mr={4}>
              Sebelumnya
            </Button>
            <Button
              onClick={handleNextQuestion}
              isDisabled={selectedQuestionIndex === questionData.length - 1}
              variant="outline"
              colorScheme="gray">
              Selanjutnya
            </Button>
          </Flex>
        )}
        <Button
          className={styles['inbox-btn']}
          onClick={handleClick}
          paddingX={10}
          isDisabled={nilai === null || nilai === ''}>
          {isLoading ? (
            <Spinner size="sm" />
          ) : selectedQuestionIndex < questionData.length - 1 ? (
            'Simpan & Lanjut'
          ) : (
            'Simpan & Selesai'
          )}
        </Button>
      </Flex>
    </Box>
  );
};

export default PretestMitra;
