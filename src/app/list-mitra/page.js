'use client';
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import { AddIcon, Search2Icon } from '@chakra-ui/icons';
import Link from 'next/link';
import styles from '../styles/inbox.module.css';
import { MitraListCard, Pagination } from '../components/molecules';
import { Gap } from '../components/atoms';
import useListMitra from './useListMitra';

const ListMitra = () => {
  const {
    data,
    loading,
    filters,
    totalPages,
    currentPage,
    handlePageChange,
    handleSearch,
  } = useListMitra();

  return (
    <Box className={styles['inbox-container']}>
      <Flex align={'center'} justify={'space-between'}>
        <Text className={styles['inbox-title']}>List Mitra</Text>
        <Gap height={6} />
        <Flex>
          <Flex flex={1}>
            <Box>
              <InputGroup className={styles['input-container']}>
                <Input
                  className={styles['admin-role-input']}
                  type="text"
                  placeholder="Cari mitra"
                  onChange={(e) => handleSearch(e.target.value)}
                />
                <InputRightElement>
                  <Search2Icon />
                </InputRightElement>
              </InputGroup>
            </Box>
            <Gap width={2} />
            <Link href="/list-mitra/add">
              <Button className={styles['inbox-btn']} marginRight={2}>
                <AddIcon marginRight={4} />
                Create Mitra Account
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>

      <Gap height={6} />
      <Box style={{ borderWidth: 1, borderColor: '#EAEAEA' }} />
      <Gap height={6} />

      {loading ? (
        <Flex align="center" justify="center">
          <Text>Loading...</Text>
        </Flex>
      ) : data.length > 0 ? (
        <MitraListCard data={data} />
      ) : (
        <Flex align="center" justify="center">
          <Text>No data found</Text>
        </Flex>
      )}

      {data.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          totalItems={data.length}
          itemsPerPage={filters.limit}
        />
      )}
    </Box>
  );
};

export default ListMitra;
