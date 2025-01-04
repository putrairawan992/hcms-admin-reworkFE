import React from 'react'
import { Box, Flex, Input, Text } from '@chakra-ui/react';
import { noop } from '@/app/utils/helpers';
import { Gap } from '../../atoms';
import styles from './PenilaianMultipleChoiceCard.styles';

const PenilaianMultipleChoiceCard = ({ data = [], onPress = noop }) => {
  return (
    <Flex flex={1}>
      <Box>
        <Text fontSize={16} fontWeight={700} color='#404041'>Jawaban Peserta</Text>
        <Gap height={4} />
        <Flex>
          <Text fontSize={12} fontWeight={400} color='#404041'>1. </Text>
          <Gap width={2} />
          <Text fontSize={12} fontWeight={400} color='#404041'>B. Jawaban yang Benar</Text>
        </Flex>
      </Box>
      <Gap width={4} />
      <Box flex={1}>
        <Text fontSize={16} fontWeight={700} color='#404041'>Jawaban Soal</Text>
        <Gap height={4} />
        <Flex>
          <Text fontSize={12} fontWeight={400} color='#404041'>1. </Text>
          <Gap width={2} />
          <Text fontSize={12} fontWeight={400} color='#404041'>B. Jawaban yang Benar</Text>
        </Flex>
      </Box>
      <Box flex={1} textAlign='center'>
        <Box>
          <Text fontSize={16} fontWeight={700} color='#404041'>Total Jawaban Salah :</Text>
          <Text fontSize={12} fontWeight={400} color='#404041'>15/65 Jawaban</Text>
        </Box>
        <Gap height={6} />
        <Box>
          <Text fontSize={16} fontWeight={700} color='#404041'>Total Jawaban Benar :</Text>
          <Text fontSize={12} fontWeight={400} color='#404041'>50/65 Jawaban</Text>
        </Box>
        <Gap height={6} />
        <Box>
          <Text fontSize={16} fontWeight={700} color='#404041'>Nilai Akhir :</Text>
          <Text fontSize={26} fontWeight={900} color='#AE445A'>76</Text>
        </Box>
      </Box>
    </Flex>
  );
}

export default PenilaianMultipleChoiceCard;