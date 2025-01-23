'use client';
import { useMemo, useState } from 'react';
import { Box, Button, Flex, Text, Spinner } from '@chakra-ui/react';
import styles from '../../styles/inbox.module.css';
import {
  PenilaianDocumentCard,
  QuestionSection,
} from '../../components/molecules';
import useDetailPenilaianPretest from './useDetailPenilaianPretest';
import { Gap } from '../../components/atoms';
import { useToast } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
const PretestMitra = () => {
  const toast = useToast();
  const router = useRouter();

  const { data, questionData, addRowQuestion } = useDetailPenilaianPretest();
  const [nilai, setNilai] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const RenderContentQuestion = useMemo(() => {
    return questionData.map((item, index) => {
      return <QuestionSection questionNumber={index} key={index} />;
    });
  }, [questionData]);

  const handleClick = () => {
    setIsLoading(true);

    setTimeout(() => {
      localStorage.setItem('nilai', nilai);
      setIsLoading(false);
      toast({
        title: 'success',
        description: 'Nilai berhasil ditambahkan',
        duration: 3000,
        status: 'success',
        position: 'top',
        isClosable: true,
      });
      router.push('/penilaian-pre-test');
    }, 2000);
  };
  console.log({ nilai });
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
          <PenilaianDocumentCard setNilai={setNilai} />
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
