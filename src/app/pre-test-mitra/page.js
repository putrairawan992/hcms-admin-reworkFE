'use client';
import {
  Box,
  Button,
  Table,
  Text,
  Th,
  Thead,
  Tr,
  Td,
  Tbody,
} from '@chakra-ui/react';
import styles from '../styles/setupJobPost.module.css';
import { useEffect, useState } from 'react';
import usePretestMitra from './usePretestMitra';
import { useRouter } from 'next/navigation';
const PretestMitra = () => {
  const router = useRouter();
  const [jobSpecialists, setJobSpecialists] = useState([]); // State untuk data job specialist

  const { getJobSpesialist } = usePretestMitra();

  const getData = async () => {
    const payload = {
      limit: 100,
      paginate: 1,
      key_search: '',
    };
    try {
      const response = await getJobSpesialist(payload);
      console.log(response);
      setJobSpecialists(response.data.job_specialist_data); // Simpan data ke state
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Box className={styles['job-post-container']}>
      <Text className={styles['job-post-title']}>Create Pre-test</Text>

      <Table mt={'3rem'}>
        <Thead>
          <Tr className={styles['job-post-table-header-container']}>
            <Th className={styles['job-post-table-header']}>No</Th>
            <Th className={styles['job-post-table-header']}>Job Specialist</Th>
            <Th className={styles['job-post-table-header']}>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {jobSpecialists.map((item, index) => (
            <Tr key={item.id}>
              <Td className={styles['job-post-table-data']}>{index + 1}</Td>
              <Td className={styles['job-post-table-data']}>
                {item.job_specialist_name}
              </Td>
              <Td className={styles['job-post-table-data']}>
                <Button
                  onClick={() => router.push(`/pre-test-mitra/${item.id}`)}
                  className={styles['job-post-search-btn']}>
                  Create
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default PretestMitra;
