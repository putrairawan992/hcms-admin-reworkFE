'use client';
import { Box, Flex, Text } from '@chakra-ui/react';
import styles from '../../styles/inbox.module.css';

import { HistoryTalentCard } from '../../components/molecules';
import useDataTalentHistory from './useDataTalentHistory';

const DataTalentHistory = () => {
  const { data } = useDataTalentHistory();

  return (
    <Box className={styles['inbox-container']}>
      <Flex align={'center'} justify={'space-between'}>
        <Text className={styles['inbox-title']}>Data Talent / History</Text>
      </Flex>
      <Flex marginBottom={4} marginTop={10}>
        <Box
          marginRight={2}
          paddingX={2}
          paddingY={2}
          borderWidth={1}
          borderColor="#AE445A"
          borderRadius={6}
        >
          <Flex justifyContent="space-between" flex={1} alignItems="flex-end">
            <Text className={styles['inbox-filter-text']} marginRight={6}>
              Total Digital Product :{' '}
            </Text>
            <Text className={styles['inbox-filter-text']} color="#AE445A">
              {data?.totalDigitalProduct}
            </Text>
          </Flex>
        </Box>
        <Box
          marginRight={2}
          paddingX={2}
          paddingY={2}
          borderWidth={1}
          borderColor="#AE445A"
          borderRadius={6}
        >
          <Flex justifyContent="space-between" flex={1} alignItems="flex-end">
            <Text className={styles['inbox-filter-text']} marginRight={6}>
              Total Karyawan :{' '}
            </Text>
            <Text className={styles['inbox-filter-text']} color="#AE445A">
              {data?.totalEmployees} Orang
            </Text>
          </Flex>
        </Box>
      </Flex>
      <Flex>
        {data?.data?.map((item) => {
          return <HistoryTalentCard data={item} />;
        })}
      </Flex>
    </Box>
  );
};

export default DataTalentHistory;
