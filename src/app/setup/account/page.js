'use client';
import SidebarLayout from '@/app/components/sidebarLayout';
import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { AddIcon, DeleteIcon, Search2Icon } from '@chakra-ui/icons';
import styles from '../../styles/accountSetup.module.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useGetAccountSetup } from '@/app/api/setup';
import { isEmpty } from 'lodash';

const AccountSetup = () => {
  const [username, setUsername] = useState();
  const router = useRouter();
  const { data, refetch } = useGetAccountSetup({ username });

  const searchUsernameHandler = () => {
    refetch();
  };

  return (
    <Box className={styles['account-role-container']}>
      <Text className={styles['account-role-title']}>Setup - Account</Text>
      <Flex align={'end'} margin={'2rem 0'}>
        <Box>
          <Text className={styles['account-role-search-text']}>Cari</Text>
          <InputGroup className={styles['account-role-input-container']}>
            <Input
              className={styles['account-role-input']}
              type="text"
              placeholder="Ketikkan Nama"
              onChange={(e) => setUsername(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  searchUsernameHandler();
                }
              }}
            />
            <InputRightElement>
              <Search2Icon cursor={'pointer'} onClick={searchUsernameHandler} />
            </InputRightElement>
          </InputGroup>
        </Box>
        <Button
          onClick={() => router.push('/setup/new-account')}
          className={styles['account-role-search-btn']}
        >
          <AddIcon w={'10px'} height={'10px'} mr={'5px'} />
          New Account
        </Button>
      </Flex>
      <Table>
        <Thead>
          <Tr className={styles['account-role-table-header-container']}>
            <Th className={styles['account-role-table-header']}>No</Th>
            <Th className={styles['account-role-table-header']}>
              Foto Perusahaan
            </Th>
            <Th className={styles['account-role-table-header']}>
              Digital Product
            </Th>
            <Th className={styles['account-role-table-header']}>Username</Th>
            <Th className={styles['account-role-table-header']}>Email</Th>
            <Th className={styles['account-role-table-header']}>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {!isEmpty(data) &&
            data.map((item, index) => {
              const isFirstOccurrence =
                data.findIndex(
                  (i) => i.product_digital_name === item.product_digital_name
                ) === index;
              const firstOccurrenceIndex =
                data
                  .map((i) => i.product_digital_name)
                  .reduce((acc, value) => {
                    if (!acc.includes(value)) acc.push(value);
                    return acc;
                  }, [])
                  .indexOf(item.product_digital_name) + 1;

              return (
                <Tr key={index}>
                  <Td className={styles['account-role-table-data']}>
                    {isFirstOccurrence ? firstOccurrenceIndex : ''}
                  </Td>
                  <Td className={styles['account-role-table-data']}>
                    {isFirstOccurrence && (
                      <Box className={styles['account-setup-img-wrapper']}>
                        <Image
                          src="/images/company-dummy.jpeg"
                          className={styles['account-setup-img']}
                        />
                      </Box>
                    )}
                  </Td>
                  <Td className={styles['account-role-table-data']}>
                    {item.product_digital_name
                      ? isFirstOccurrence
                        ? item.product_digital_name
                        : ''
                      : '-'}
                  </Td>
                  <Td className={styles['account-role-table-data']}>
                    {item.username ? item.username : '-'}
                  </Td>
                  <Td className={styles['account-role-table-data']}>
                    {item.email ? item.email : '-'}
                  </Td>
                  <Td className={styles['account-role-table-data']}>
                    <DeleteIcon w={'18px'} h={'18px'} />
                  </Td>
                </Tr>
              );
            })}
        </Tbody>
      </Table>
    </Box>
  );
};

export default AccountSetup;
