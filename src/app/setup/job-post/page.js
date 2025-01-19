'use client';
import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Text,
} from '@chakra-ui/react';
import styles from '../../styles/setupJobPost.module.css';
import { isEmpty } from 'lodash';
import { AddIcon, Search2Icon } from '@chakra-ui/icons';
import AddJobPostSetup from '@/app/components/addJobPostSetup';
import { DataTables, ListEmpty } from '@/app/components/molecules';
import columns from './columns';
import { jobPostOptions } from '@/shared/general';
import { Gap } from '@/app/components/atoms';
import useJobPost from './useJobPost';
import ConfirmationModalWithNoSSR from './components/modal';

const SetupJobPost = () => {
  const { modalOpen, loading, data, selectedOption, keyword, isOpen, onClose, onOpen, onChangeOptions, onChangeStatus, onChangeText, toggleModal } = useJobPost();

  const RenderContent = () => {
    if (!isEmpty(data)) {
      return (
        <DataTables
          data={data}
          columns={columns(1, onChangeStatus, toggleModal)}
          totalData={data?.length}
          keyword={keyword}
          page={1}
        />
      );
    } else {
      return (
        <Box className={styles['job-post-wrapper']}>
          <Image
            src="/images/Select.png"
            className={styles['job-post-empty-img']}
          />
          <Text className={styles['job-post-empty-text']}>
            Pilih Pengaturan terlebih dahulu
          </Text>
        </Box>
      );
    }
  };

  return (
    <>
      <AddJobPostSetup
        isOpen={isOpen}
        onClose={onClose}
        title={
          jobPostOptions.find((item) => item.value === selectedOption)?.label
        }
        option={selectedOption}
      />
      <ConfirmationModalWithNoSSR
        modalText={'Test'}
        isOpen={modalOpen}
        onClose={toggleModal}
      />
      <Box className={styles['job-post-container']}>
        <Text className={styles['job-post-title']}>Setup - Job Post</Text>
        <Flex align={'center'} margin={'2rem 0'}>
          <Text className={styles['job-post-subtitle']}>
            Pilih Pengaturan Untuk:
          </Text>
          <Select
            value={selectedOption}
            onChange={(e) => onChangeOptions(e.target.value)}
            className={styles['job-post-filter-select']}>
            <option value={''} selected disabled hidden>
              Pilih Pengaturan
            </option>
            {jobPostOptions.map((item, index) => (
              <option key={index} value={item.value}>
                {item.label}
              </option>
            ))}
          </Select>
        </Flex>
        {selectedOption && (
          <Flex align={'center'}>
            <Button onClick={onOpen} className={styles['job-post-search-btn']}>
              <AddIcon mr={'5px'} /> Add
            </Button>
            <InputGroup className={styles['job-post-input-container']}>
              <Input
                className={styles['job-post-input']}
                type="text"
                placeholder="Cari"
                value={keyword}
                onChange={(e) => onChangeText(e.target.value)}
              />
              <InputRightElement>
                <Search2Icon />
              </InputRightElement>
            </InputGroup>
          </Flex>
        )}
        <Gap height={4} />
        {loading ? <ListEmpty /> : <RenderContent />}
      </Box>
    </>
  );
};

export default SetupJobPost;
