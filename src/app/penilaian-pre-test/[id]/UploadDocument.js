'use client';
import { useMemo } from 'react';
import { Box, Text } from '@chakra-ui/react';
import {
  PenilaianDocumentCard,
  QuestionSection,
} from '../../components/molecules';
import useDetailPenilaianPretest from './useDetailPenilaianPretest';
import { Gap } from '../../components/atoms';

const UploadDocument = () => {
  const { data, questionData, addRowQuestion } = useDetailPenilaianPretest();

  const RenderContentQuestion = useMemo(() => {
    return questionData.map((item, index) => {
      return <QuestionSection questionNumber={index} key={index} />;
    });
  }, [questionData]);

  return (
    <Box flex={1}>
      <Box flex={1} alignItems="center">
        <Text color="#404041" fontWeight={700} fontSize={16}>
          Soal dan Jawaban
        </Text>
        <Gap height={4} />
        <PenilaianDocumentCard />
      </Box>
    </Box>
  );
};

export default UploadDocument;
