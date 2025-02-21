'use client';
import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Spinner,
  Text,
} from '@chakra-ui/react';
import React, { useMemo } from 'react';
import styles from '../styles/inbox.module.css';
import styleModal from '../styles/setupJobPost.module.css';
import moment from 'moment';
import 'moment/locale/id';
import { isEmpty } from 'lodash';
import { ListEmpty, SendDocumentCard } from '../components/molecules';
import useSendDocument from './useSendDocument';
import { Gap, SelectField } from '../components/atoms';
import { monthOptions, yearOptions } from '@/shared/general';
import { SettingsIcon } from '@chakra-ui/icons';
import ModalSendDocument from './components/modal';

moment.locale('id');

const SendDocument = () => {
  const {
    data,
    documentDetails,
    documentTypeValue,

    employeeDetail,
    filters,
    loading,
    loadingSubmit,
    modalDocType,
    modalOpen,
    modalOpenDoc,
    modalType,
    onChangeSelect,
    onChangeSelectDocumentType,
    onChangeSelectType,
    onClickSendAll,
    onDelete,
    onPressIcon,
    onSubmit,
    onSubmitSettingDocument,
    previewData,
    productDigital,
    selectedDocumentTalent,
    settingDocument,
    toggleModal,
    toggleModalOpen,
    toggleModalOpenDoc,
  } = useSendDocument();
  // console.log(documentDetails);

  const isDisabledModalDocumentType = useMemo(() => {
    return documentDetails?.employee_list?.some(
      (employee) => employee.temporary_status === true
    );
  }, [documentDetails]);

  const RenderContent = () => {
    if (!isEmpty(data)) {
      return data.map((item, index) => {
        return (
          <SendDocumentCard
            data={item}
            key={index}
            toggleModal={toggleModalOpen}
            onPressIcon={onPressIcon}
            onChangeSelect={onChangeSelectType}
            onClickSendAll={onClickSendAll}
          />
        );
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
    <React.Fragment>
      <Box className={styles['inbox-container']}>
        <Flex align={'center'} justify={'space-between'}>
          <Text className={styles['inbox-title']}>Send Document</Text>
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
                1
              </Text>
              <Text fontWeight="bold">Submit</Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex marginBottom={4} marginTop={10}>
          <SelectField
            options={yearOptions}
            placeholder="Semua"
            value={filters.years}
            label="Tahun"
            slug="years"
            onChange={onChangeSelect}
          />
          <SelectField
            options={monthOptions}
            placeholder="Semua"
            value={filters.month}
            label="Bulan"
            slug="month"
            onChange={onChangeSelect}
          />
          <SelectField
            options={productDigital}
            placeholder="Semua"
            value={filters.product_digital_name}
            label="Product Digital"
            slug="product_digital_name"
            onChange={onChangeSelect}
          />
        </Flex>
        {loading ? <ListEmpty /> : <RenderContent />}

        <Modal
          isOpen={modalOpen}
          onClose={toggleModal}
          size={'xl'}
          isCentered
          closeOnOverlayClick={false}
          closeOnEsc={false}>
          <ModalOverlay />
          <ModalContent
            paddingY={'1.5rem'}
            paddingX={'1.5rem'}
            borderRadius={20}>
            <ModalBody>
              <Flex align="center" justifyContent="center">
                <SettingsIcon color="#ae445a" fontSize={40} />
              </Flex>
              <Gap height={6} />
              <Box>
                <Text>
                  Anda akan mengatur Setelan Pembuatan dokumen untuk batch ini.
                  Arti dari tiap pilihan dalam dropdown akan dijelaskan di bawah
                  ini:
                </Text>
                <Gap height={4} />
                <Flex>
                  <Text>1. </Text>
                  <Gap width={4} />
                  <Text>
                    <span style={{ fontWeight: 'bold' }}>Semua:</span> Setiap
                    karyawan dalam batch ini memiliki Setelan Pembuatan Dokumen
                    Berbeda-beda (New Contract Manual, New Contract Template,
                    Existing Contract)
                  </Text>
                </Flex>
                <Gap height={2} />
                <Flex>
                  <Text>2. </Text>
                  <Gap width={4} />
                  <Text>
                    New Contract Manual: Setelan Pembuatan Dokumen ini untuk
                    karyawan baru, dan Dokumen tidak sesuai template yang
                    berlaku saat ini
                  </Text>
                </Flex>
                <Gap height={2} />
                <Flex>
                  <Text>3. </Text>
                  <Gap width={4} />
                  <Text>
                    New Contract Template: Setelan Pembuatan Dokumen ini untuk
                    karyawan baru, dan Dokumen sesuai template yang berlaku saat
                    ini
                  </Text>
                </Flex>
                <Gap height={2} />
                <Flex>
                  <Text>4. </Text>
                  <Gap width={4} />
                  <Text>
                    Exisiting Contract : Setelan Pembuatan Dokumen ini untuk
                    karyawan lama, dan Dokumen sudah ditandatangani kedua belah
                    pihak.
                  </Text>
                </Flex>

                <Gap height={4} />
                <Flex align="center" justifyContent="center">
                  <SelectField
                    placeholder="Pilih setelan dokumen"
                    label="Setelan Dokumen"
                    disabled={isDisabledModalDocumentType}
                    options={settingDocument}
                    value={documentTypeValue?.value || ''}
                    slug="document_type"
                    onChange={onChangeSelectDocumentType}
                  />
                </Flex>
                <Gap height={2} />
                <Flex align="center" justifyContent="center">
                  <Text fontSize={12}>
                    Anda bisa mengatur ulang settingan ini dengan kembali
                    memencet tombol
                  </Text>
                  <Gap width={2} />
                  <SettingsIcon color="#ae445a" fontSize={12} />
                </Flex>
              </Box>
              <Flex align={'center'} justify={'end'} mt={'2.5rem'}>
                <Button
                  onClick={toggleModal}
                  mr={'0'}
                  className={styleModal['job-post-search-btn-cancel']}>
                  Batal
                </Button>
                <Gap width={4} />
                <Button
                  mr={'0'}
                  onClick={onSubmitSettingDocument}
                  className={styleModal['job-post-search-btn']}>
                  {loadingSubmit ? (
                    <Spinner size="sm" color="#FFFFFF" />
                  ) : (
                    'Save'
                  )}
                </Button>
              </Flex>
            </ModalBody>
          </ModalContent>
        </Modal>

        <ModalSendDocument
          type={modalType}
          typeDocument={modalDocType}
          isOpen={modalOpenDoc}
          onClose={toggleModalOpenDoc}
          typeDocTalent={selectedDocumentTalent}
          data={employeeDetail}
          onSubmit={onSubmit}
          previewData={previewData}
          onDelete={onDelete}
          jobProviderId={employeeDetail?.job_provider_id}
        />
      </Box>
    </React.Fragment>
  );
};

export default SendDocument;
