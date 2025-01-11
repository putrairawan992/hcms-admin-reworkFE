'use client';
import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react';
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
        <Flex flex={1}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} w="full">
            {data?.data?.map((item, index) => (
              <HistoryTalentCard key={index} data={item} />
            ))}
          </SimpleGrid>
        </Flex>
      </Flex>
    </Box>
  );
};

export default DataTalentHistory;
