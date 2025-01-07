'use client';
import {
  Box,
  Button,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Select,
  Spinner,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import styles from '../styles/inbox.module.css';
import styleModal from '../styles/setupJobPost.module.css';
import React, { useState } from 'react';
import { isEmpty } from 'lodash';
import { ListEmpty, PayslipCard } from '../components/molecules';
import usePayslip from './usePayslip';
import { Gap, SelectField } from '../components/atoms';
import { monthLabelOptions, yearOptions } from '@/shared/general';

const Payslip = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [years, setYears] = useState('2024');

  const {
    data,
    form,
    loading,
    loadingSubmit,
    modalOpen,
    productDigitalData,
    employee,
    filters,
    toggleModal,
    onChangeSelect,
    submitData,
    onHandleDetail,
    onChangeSelectFilter,
  } = usePayslip();

  const RenderContent = () => {
    if (!isEmpty(data)) {
      return data.map((item) => {
        return <PayslipCard data={item} onClick={onHandleDetail} />;
      });
    } else {
      return (
        <Flex align={'center'} justify={'center'}>
          <Text>Tidak ada data inbox</Text>
        </Flex>
      );
    }
  };

  return (
    <Box className={styles['inbox-container']}>
      <Flex align={'center'} justify={'space-between'}>
        <Text className={styles['inbox-title']}>PaySlip</Text>
        <Box>
          <Button
            onClick={toggleModal}
            className={styles['inbox-btn']}
            marginRight={2}
          >
            Manual Send
          </Button>
          <Button onClick={onOpen} className={styles['inbox-btn']}>
            Download All Filtered
          </Button>
        </Box>
      </Flex>
      <Gap height={6} />
      <Flex>
        <Flex
          borderWidth={1}
          borderColor="#AE445A"
          borderRadius={6}
          paddingX={4}
          paddingY={1}
        >
          <Text marginRight={3} fontWeight="bold">
            Total Karyawan:{' '}
          </Text>
          <Text marginRight={3} color="#AE445A" fontWeight="bold">
            {employee?.length}
          </Text>
          <Text fontWeight="bold">Orang</Text>
        </Flex>
      </Flex>
      <Flex marginBottom={4} marginTop={10}>
        <SelectField
          label="Digital Product"
          slug="product_digital_id"
          value={filters.product_digital_id}
          options={productDigitalData}
          placeholder="Pilih produk digital"
          onChange={onChangeSelectFilter}
        />
        <SelectField
          label="Tahun"
          slug="years"
          value={filters.years}
          options={yearOptions}
          placeholder="Pilih tahun"
          onChange={onChangeSelectFilter}
        />
        <SelectField
          label="Bulan"
          slug="month"
          value={filters.month}
          options={monthLabelOptions}
          placeholder="Pilih Bulan"
          onChange={onChangeSelectFilter}
        />
        <SelectField
          label="Nama Karyawan"
          slug="employee"
          value={filters.employee}
          options={employee}
          placeholder="Pilih karyawan"
          onChange={onChangeSelectFilter}
        />
      </Flex>

      {loading ? <ListEmpty /> : <RenderContent />}

      <Modal isOpen={modalOpen} onClose={toggleModal} size={'md'} isCentered>
        <ModalOverlay />
        <ModalContent paddingY={'1.5rem'} borderRadius={20}>
          <ModalBody>
            <Text mb={'2rem'} className={styleModal['job-post-title']}>
              Manual Send
            </Text>
            <Box>
              <Box>
                <SelectField
                  label="Product Digital"
                  options={productDigitalData}
                  slug="product_digital_id"
                  value={form.product_digital_id}
                  onChange={onChangeSelect}
                  placeholder="Pilih produk digital"
                />
                <Gap height={6} />
                <SelectField
                  label="Bulan"
                  options={monthLabelOptions}
                  slug="month"
                  value={form.month}
                  onChange={onChangeSelect}
                  placeholder="Pilih Bulan"
                />
              </Box>
            </Box>
            <Flex align={'center'} justify={'end'} mt={'2.5rem'}>
              <Button
                onClick={toggleModal}
                mr={'0'}
                className={styleModal['job-post-search-btn-cancel']}
              >
                Batal
              </Button>
              <Gap width={4} />
              <Button
                onClick={() => submitData()}
                mr={'0'}
                className={styleModal['job-post-search-btn']}
              >
                {loadingSubmit ? (
                  <Spinner size="sm" color="#FFFFFF" />
                ) : (
                  'Submit'
                )}
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Payslip;
