'use client';
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Spinner,
  Text,
} from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';
import styles from '../../styles/accountSetup.module.css';
import stylesheet from './styles';
import useMergeProduct from './useMergeProduct';
import columns from './columns';
import { DataTables } from '@/app/components/molecules';
import { Gap } from '@/app/components/atoms';

const MasterDataMergeProduct = () => {
  const {
    data,
    loading,
    page,
    totalData,
    keyword,
    modalOpen,
    onChangeText,
    onHandleSync,
    onChangePagination,
    toggleModal,
    goToSpreadSheet,
  } = useMergeProduct();

  return (
    <Box style={stylesheet.container}>
      <Flex>
        <Box paddingX={8} paddingY={8}>
          <Text fontSize={22} fontWeight={900} color="#AE445A">
            Master Data - Merge Product
          </Text>
        </Box>
      </Flex>
      <Box paddingX={8}>
        <Flex align={'end'} margin={'0rem 0'}>
          <Button
            onClick={goToSpreadSheet}
            className={styles['account-role-search-btn']}
            marginLeft={0}
          >
            Mirror Spreadsheet
          </Button>
          <Box marginLeft={4}>
            <InputGroup className={styles['account-role-input-container']}>
              <Input
                className={styles['account-role-input']}
                type="text"
                onchan
                placeholder="Cari"
                onChange={onChangeText}
              />
              <InputRightElement>
                <Search2Icon cursor={'pointer'} color="#AE445A" />
              </InputRightElement>
            </InputGroup>
          </Box>
        </Flex>
      </Box>
      <Gap height={4} />
      <Box paddingX={4}>
        <DataTables
          data={data}
          columns={columns(page)}
          totalData={totalData}
          page={page}
          keyword={keyword}
          onChangePagination={onChangePagination}
          loading={loading}
        />
      </Box>
      <Modal
        isOpen={modalOpen}
        onClose={toggleModal}
        size={'md'}
        isCentered
        closeOnOverlayClick={!modalOpen}
      >
        <ModalOverlay />
        <ModalContent paddingY={'1.5rem'} borderRadius={20}>
          <ModalBody>
            <Flex align={'center'} justify={'center'}>
              <Spinner color="#AE445A" size="md" marginRight={4} />
              <Text fontSize={14} fontWeight="700" color="#AE445A">
                Please wait...
              </Text>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default MasterDataMergeProduct;
