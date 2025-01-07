'use client';
import SidebarLayout from '@/app/components/sidebarLayout';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Spinner,
  Switch,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from '@chakra-ui/react';
import { AddIcon, EditIcon, Search2Icon } from '@chakra-ui/icons';
import styles from '../../styles/adminRole.module.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { httpClient } from '@/app/utils/network';
import { DataTables, ListEmpty } from '@/app/components/molecules';
import columns from './columns';
import { isEmpty } from 'lodash';

const AdminRole = () => {
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState('');
  const [data, setData] = useState([]);
  const [totalData, setTotalData] = useState([]);
  const [loading, setLoading] = useState(true);
  const ConfirmationModalWithNoSSR = dynamic(
    () => import('../../components/confirmationModal'),
    { ssr: false }
  );
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [text, setText] = useState('');

  const changeAdminStatusHandler = (status) => {
    if (status === 'active') {
      setText('Anda akan menonaktifkan akun ini. Apakah anda yakin?');
    } else {
      setText('Anda akan mengaktifkan akun ini. Apakah anda yakin?');
    }
    onOpen();
  };

  const fetchData = async () => {
    try {
      const response = await httpClient({
        method: 'GET',
        url: '/admin/account',
      });

      const responseData = response?.data?.data || [];
      setData(responseData);
      setTotalData(responseData?.length);
      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch data:', error);
      setLoading(false);
    }
  };

  const onChangeText = (e) => {
    setKeyword(e.target.value);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const RenderContent = () => {
    if (!isEmpty(data)) {
      return (
        <DataTables
          data={data}
          columns={columns(totalData, page)}
          totalData={totalData}
          page={page}
          keyword={keyword}
        />
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
    <>
      <ConfirmationModalWithNoSSR
        modalText={text}
        isOpen={isOpen}
        onClose={onClose}
      />
      <Box className={styles['admin-role-container']}>
        <Text className={styles['admin-role-title']}>Setup - Admin</Text>
        <Flex align={'end'} margin={'2rem 0'}>
          <Box>
            <Text className={styles['admin-role-search-text']}>Cari</Text>
            <InputGroup className={styles['admin-role-input-container']}>
              <Input
                className={styles['admin-role-input']}
                type="text"
                placeholder="Ketikkan Nama"
                value={keyword}
                onChange={onChangeText}
              />
              <InputRightElement>
                <Search2Icon />
              </InputRightElement>
            </InputGroup>
          </Box>
          <Button
            onClick={() => router.push('/setup/new-admin')}
            className={styles['admin-role-search-btn']}
          >
            <AddIcon w={'10px'} height={'10px'} mr={'5px'} />
            New Admin
          </Button>
        </Flex>
        {loading ? <ListEmpty /> : <RenderContent />}
      </Box>
    </>
  );
};

export default AdminRole;
