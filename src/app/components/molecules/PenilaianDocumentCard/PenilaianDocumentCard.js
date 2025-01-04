import React from 'react'
import { Box, Flex, Input, Text } from '@chakra-ui/react';
import { noop } from '@/app/utils/helpers';
import { Gap } from '../../atoms';
import styles from './PenilaianDocumentCard.styles';

const PenilaianDocumentCard = ({ data = [], onPress = noop }) => {
  return (
    <Box borderWidth={2} borderColor='#AE445A' borderRadius={16} padding={4} flex={1}>
      <Flex>
        <Text color='#404041' fontWeight={400} fontSize={12}>1. </Text>
        <Gap width={2} />
        <Text color='#404041' fontWeight={400} fontSize={12}>Silahkan kerjakan rumus excel dengan panduan yang tersedia disini: https://google.com Beri nama file sesuai instruksi yang tersedia di link terkait.</Text>
      </Flex>
      <Gap height={4} />
      <Flex>
        <Text color='#404041' fontWeight={700} fontSize={12}>Tes Excel Pegawai ABC 1. XLS</Text>
        <Gap width={4} />
        <Text color='#404041' fontWeight={400} fontSize={12}>18 Juli 2023</Text>
      </Flex>
      <Gap height={4} />
      <Box borderWidth={1} borderColor='#AE445A' />
      <Gap height={4} />
      <Flex justify='center' align='center'>
        <Box flex={1}>
          <Text color='#404041' fontWeight={700} fontSize={12} flex={1}>Score : </Text>
        </Box>
        <Input
          style={styles.inputContainer}
          type="number"
          placeholder="Masukan nilai - 100"
        />
      </Flex>
    </Box>
  );
}

export default PenilaianDocumentCard;