'use client';
import {
  Box,
  Button,
  Flex,
  Text,
  Spinner,
  Center,
  useToast,
} from '@chakra-ui/react';
import styles from '../styles/inbox.module.css';

import PenilaianCard from '../components/molecules/PenilaianCard';
import usePenilaianPretest from './usePenilaianPretest';
import { Gap, SelectField } from '../components/atoms';
import { Pagination } from '../components/molecules';

const PenilaiaanPretest = () => {
  const toast = useToast();
  const {
    data,
    loading,
    currentPage,
    totalPages,
    totalItems,
    itemsPerPage,
    handlePageChange,
    handleJobSpecialistChange,
    jobSpecialistId,
    finishScore,
  } = usePenilaianPretest();

  const calculateToReview = () => {
    if (!data.submit_list) return 0;
    return data.submit_list.filter(
      (item) => item.score && item.score.some((score) => score.score === 0)
    ).length;
  };

  const handleFinishScore = async () => {
    const pretestModulDetailId = data.submit_list[0].score[0].id;
    const jobSeekerId = data.submit_list[0].job_seeker_id;
    try {
      const response = await finishScore(pretestModulDetailId, jobSeekerId);
      console.log(response);
      toast({
        title: 'Success',
        description: 'Nilai berhasil disimpan.',
        duration: 3000,
        status: 'success',
        position: 'top',
        isClosable: true,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box className={styles['inbox-container']}>
      <Flex align={'center'} justify={'space-between'}>
        <Box>
          <Text className={styles['inbox-title']}>Penilaian Pre Test</Text>
        </Box>
        <Gap height={6} />
        <Flex>
          <Flex
            borderWidth={1}
            borderColor="#AE445A"
            borderRadius={6}
            paddingX={4}
            paddingY={1}>
            <Text marginRight={3} fontWeight="bold">
              Perlu Ditinjau:{' '}
            </Text>
            <Text marginRight={3} color="#AE445A" fontWeight="bold">
              {calculateToReview()}
            </Text>
            <Text fontWeight="bold">Submit</Text>
          </Flex>
        </Flex>
      </Flex>
      <Gap height={4} />
      <Flex align={'flex-end'}>
        <Box>
          <SelectField
            placeholder="Pilih spesialisasi pekerjaan"
            label="Spesialisasi Pekerjaan"
            options={
              data.master_job_specialist?.map((item) => ({
                value: item.id,
                label: item.job_specialist_name,
              })) || []
            }
            value={jobSpecialistId}
            onChange={(e) => {
              console.log(e);
              handleJobSpecialistChange(e.target.value);
            }}
          />
        </Box>
        <Button
          className={styles['inbox-btn']}
          paddingX={8}
          onClick={() => handleJobSpecialistChange(jobSpecialistId)}
          isLoading={loading}>
          Generate
        </Button>
      </Flex>
      <Gap height={8} />

      {loading ? (
        <Center py={10}>
          <Spinner size="xl" color="#AE445A" />
        </Center>
      ) : data.submit_list && data.submit_list.length > 0 ? (
        <Box flex={1}>
          {data.submit_list.map((item, index) => (
            <Box key={index} mb={4}>
              <PenilaianCard data={item} onClick={handleFinishScore} />
            </Box>
          ))}

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            totalItems={totalItems}
            itemsPerPage={itemsPerPage}
          />
        </Box>
      ) : (
        <Center py={10}>
          <Text fontSize="lg" color="gray.500">
            No data available
          </Text>
        </Center>
      )}
    </Box>
  );
};

export default PenilaiaanPretest;
