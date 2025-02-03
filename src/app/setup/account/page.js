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
import styles from '../../styles/accountSetup.module.css';
import { useRouter } from 'next/navigation';
import useSetupAccount from './useSetupAccount';
import { DataTables } from '@/app/components/molecules';
import EditModal from './components/modal';
import ConfirmationModalWithNoSSR from './components/confirmationModal';
import columns from './columns';

const AccountSetup = () => {
  const router = useRouter();
  const { data, loading, keyword, modalOpen, modalOpenDelete, loadingModalDelete, toggleModalDelete, loadingModal, toggleModal, onChangeText, onHandlePress, onSubmitDelete } = useSetupAccount();

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
              onChange={onChangeText}
              value={keyword}
            />
            <InputRightElement>
              <Search2Icon />
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
      <DataTables
        data={data}
        columns={columns(1, onHandlePress)}
        totalData={data?.length}
        page={1}
        keyword={keyword}
        loading={loading}
      />
      <EditModal
        value={'Test'}
        isOpen={modalOpen}
        onClose={toggleModal}
        onChangeText={onChangeText}
        // onSubmit={onSubmitEdit}
        loading={loadingModal}
      />
      <ConfirmationModalWithNoSSR
        modalText="Apakah anda yakin ingin menghapus data ini?"
        isOpen={modalOpenDelete}
        onClose={toggleModalDelete}
        onSubmit={onSubmitDelete}
        loading={loadingModalDelete}
      />
    </Box>
  );
};

export default AccountSetup;
