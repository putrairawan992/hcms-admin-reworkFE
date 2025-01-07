'use client';

import { useMemo } from 'react';
import { Box, Button, Divider, Flex, Input, Text } from '@chakra-ui/react';
import styles from '../../styles/inbox.module.css';
import {
  ChooseLogo,
  PenilaianDocumentCard,
  PenilaianMultipleChoiceCard,
  QuestionSection,
} from '../../components/molecules';
import useDetailPenilaianPretest from './useDetailPenilaianPretest';
import { Gap, SelectField } from '../../components/atoms';
import UploadDocument from './UploadDocument';

const PretestMitra = () => {
  const { data, questionData, addRowQuestion } = useDetailPenilaianPretest();

  const RenderContentQuestion = useMemo(() => {
    return questionData.map((item, index) => {
      return <QuestionSection questionNumber={index} key={index} />;
    });
  }, [questionData]);

  return (
    <Box className={styles['inbox-container']}>
      <Flex align={'center'} justify={'space-between'}>
        <Box>
          <Text className={styles['inbox-title']}>Modul Pilihan Ganda</Text>
          <Text
            fontSize={12}
            fontWeight={300}
            color="#404041"
            fontStyle="italic"
          >
            Silahkan atur soal yang akan dijadikan Pre-Test bagi calon Karyawan
          </Text>
        </Box>
      </Flex>
      <Gap height={8} />
      <Box flex={1}>
        <Box flex={1} alignItems="center">
          <Text color="#404041" fontWeight={700} fontSize={16}>
            Soal dan Jawaban
          </Text>
          <Gap height={4} />
          <PenilaianDocumentCard />
          <Gap height={4} />
          <PenilaianMultipleChoiceCard />
        </Box>
      </Box>
      <Gap height={8} />
      <Flex flex={1} justify="flex-end">
        <Button
          className={styles['inbox-btn']}
          onClick={addRowQuestion}
          paddingX={10}
        >
          Save
        </Button>
      </Flex>
    </Box>
  );
};

export default PretestMitra;
