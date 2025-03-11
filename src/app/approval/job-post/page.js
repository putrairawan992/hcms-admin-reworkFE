'use client';
import { Box, Flex, Text, SimpleGrid } from '@chakra-ui/react';
import styles from '../../styles/approvalJobPost.module.css';
import dynamic from 'next/dynamic';
import { SelectField } from '@/app/components/atoms';
import {
  monthLabelOptions,
  statusJobPostOptions,
  yearOptions,
} from '@/shared/general';
import { ApprovalJobPostCard, ListEmpty } from '@/app/components/molecules';
const ConfirmationModalWithNoSSR = dynamic(
  () => import('../../components/confirmationModal'),
  { ssr: false }
);

import useApprovalJobPost from './useApprovalJobPost';
import { isEmpty } from 'lodash';

const ApprovalJobPost = () => {
  const {
    data,
    filters,
    loading,
    productDigitalData,
    text,
    isOpen,
    isApprove,
    selectedId,
    toggleModal,
    onClose,
    onChangeSelect,
    onPressDetails,
    fetchData,
  } = useApprovalJobPost();

  const RenderContent = () => {
    if (!isEmpty(data)) {
      return (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={6} w="full">
          {data?.map((item, index) => (
            <ApprovalJobPostCard
              key={index}
              data={item}
              onClickDetail={onPressDetails}
              onClickIcon={toggleModal}
            />
          ))}
        </SimpleGrid>
      );
    } else {
      return (
        <Flex align={'center'} justify={'center'}>
          <Text>Tidak ada data inbox</Text>
        </Flex>
      );
    }
  };

  return (
    <Box className={styles['job-post-container']}>
      <ConfirmationModalWithNoSSR
        modalText={text}
        isOpen={isOpen}
        onClose={onClose}
        isApprove={isApprove}
        id={selectedId}
        refetch={() => fetchData(filters)}
      />
      <Flex className={styles['job-post-header']}>
        <Text className={styles['job-post-title']}>Approval Job Post</Text>
        <Flex className={styles['job-post-header-wrapper']}>
          <Text className={styles['job-post-header-text']}>
            Perlu Ditinjau:
          </Text>
          <Text className={styles['job-post-header-text']}>{data?.length}</Text>
          <Text className={styles['job-post-header-text']}>Submit</Text>
        </Flex>
      </Flex>
      <Flex className={styles['job-post-filter-container']}>
        <SelectField
          options={yearOptions}
          label="Tahun"
          slug="years"
          onChange={onChangeSelect}
          value={filters.years}
        />
        <SelectField
          options={monthLabelOptions}
          label="Bulan"
          slug="month"
          onChange={onChangeSelect}
          value={filters.month}
        />
        <SelectField
          options={productDigitalData}
          label="Digital Product"
          slug="product_digital_name"
          onChange={onChangeSelect}
          value={filters.product_digital_name}
        />
        <SelectField
          options={statusJobPostOptions}
          label="Status"
          slug="status"
          onChange={onChangeSelect}
          value={filters.status}
        />
      </Flex>
      {loading ? <ListEmpty /> : <RenderContent />}
    </Box>
  );
};

export default ApprovalJobPost;
