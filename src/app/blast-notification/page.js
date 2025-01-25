'use client';
import React from 'react';
import { Box, Button, Flex, Input, InputGroup, InputRightElement, Modal, ModalBody, ModalContent, ModalOverlay, Spinner, Text } from '@chakra-ui/react';
import styles from '../styles/inbox.module.css';
import styleModal from '../styles/setupJobPost.module.css';
import moment from 'moment';
import 'moment/locale/id';
import { isEmpty } from 'lodash';
import { BlastNotificationCard, FormFields, ListEmpty } from '../components/molecules';
import useBlastNotification from './useBlastNotification';
import { Gap, SelectField } from '../components/atoms';
import { Search2Icon, SettingsIcon } from '@chakra-ui/icons';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

moment.locale('id');

const BlastNotification = () => {
  const { form, data, dummy, loading, loadingSubmit, modalOpen, productDigital, filters, settingDocument, documentTypeValue, onChangeSelect, toggleModal, onSubmitSettingDocument, onChangeSelectDocumentType, onPressDetails, productDigitalData, onChangeText } = useBlastNotification();

  const RenderContent = () => {
    if (!isEmpty(dummy)) {
      return dummy.map((item) => {
        return <BlastNotificationCard data={item} onPress={onPressDetails} />;
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
        <Text className={styles['inbox-title']}>Notification</Text>
        <Flex>
          <SelectField options={productDigital} placeholder='Pilih product digital' value={productDigitalData} slug='product_digital_name' onChange={onChangeSelect} />
        </Flex>
      </Flex>
      <Gap height={6} />
      <Box>
        <FormFields label='Judul' placeholder='Masukan judul pesan brodcast' theme='up-down' type='text' onChangeText={onChangeText} slug='title' value={form.title} />
        <Gap height={4} />
        <Box
          flex={1}
          alignItems='flex-start'
          marginBottom={2}>
          <Box flex={0.5}>
            <Text fontSize={14} fontWeight="bold" color="#404041">
              Isi Pesan
            </Text>
          </Box>
          <Flex flex={1}>
            <ReactQuill
              theme="snow"
              style={{ height: '150px', flex: 1, marginBottom: 45 }}
              onChange={(value) => onChangeText('message', value)}
            />
          </Flex>
        </Box>
        <Button className={styles['inbox-btn']} paddingX={8}>
          Send
        </Button>
      </Box>

      <Box borderWidth={2} borderColor='#AE445A' marginY={6} />

      <Flex alignItems='center'>
        <Box>
          <InputGroup className={styles['input-container']}>
            <Input
              className={styles['admin-role-input']}
              type="text"
              placeholder="Cari pesan"
            />
            <InputRightElement>
              <Search2Icon />
            </InputRightElement>
          </InputGroup>
        </Box>
        <Gap width={2} />
        <Box>
          <Input
            type="date"
            className={styles['modal-input']}
          />
        </Box>
      </Flex>
      <Gap height={4} />

      {loading ? <ListEmpty /> : <RenderContent />}


      <Modal isOpen={modalOpen} onClose={toggleModal} size={'xl'} isCentered closeOnOverlayClick={false} closeOnEsc={false}>
        <ModalOverlay />
        <ModalContent paddingY={'1.5rem'} paddingX={'1.5rem'} borderRadius={20}>
          <ModalBody>
            <Flex align='center' justifyContent='center'>
              <SettingsIcon color='#ae445a' fontSize={40} />
            </Flex>
            <Gap height={6} />
            <Box>
              <Text>
                Anda akan mengatur Setelan Pembuatan dokumen untuk batch ini.
                Arti dari tiap pilihan dalam dropdown akan dijelaskan di bawah ini:
              </Text>
              <Gap height={4} />
              <Flex>
                <Text>1. </Text>
                <Gap width={4} />
                <Text>
                  <span style={{ fontWeight: 'bold' }}>Semua:</span> Setiap karyawan dalam batch ini memiliki Setelan Pembuatan Dokumen Berbeda-beda (New Contract Manual, New Contract Template, Existing Contract)
                </Text>
              </Flex>
              <Gap height={2} />
              <Flex>
                <Text>2. </Text>
                <Gap width={4} />
                <Text>
                  New Contract Manual: Setelan Pembuatan Dokumen ini untuk karyawan baru, dan Dokumen tidak sesuai template yang berlaku saat ini
                </Text>
              </Flex>
              <Gap height={2} />
              <Flex>
                <Text>3. </Text>
                <Gap width={4} />
                <Text>
                  New Contract Template: Setelan Pembuatan Dokumen ini untuk karyawan baru, dan Dokumen sesuai template yang berlaku saat ini
                </Text>
              </Flex>
              <Gap height={2} />
              <Flex>
                <Text>4. </Text>
                <Gap width={4} />
                <Text>
                  Exisiting Contract : Setelan Pembuatan Dokumen ini untuk karyawan lama, dan Dokumen sudah ditandatangani kedua belah pihak.
                </Text>
              </Flex>

              <Gap height={4} />
              <Flex align='center' justifyContent='center'>
                <SelectField placeholder='Pilih setelan dokumen' label='Setelan Dokumen' options={settingDocument} value={documentTypeValue?.value || ''} slug='document_type' onChange={onChangeSelectDocumentType} />
              </Flex>
              <Gap height={2} />
              <Flex align='center' justifyContent='center'>
                <Text fontSize={12}>Anda bisa mengatur ulang settingan ini dengan kembali memencet tombol</Text>
                <Gap width={2} />
                <SettingsIcon color='#ae445a' fontSize={12} />
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
    </Box>
  );
};

export default BlastNotification;
