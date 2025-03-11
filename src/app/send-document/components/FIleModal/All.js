'use client';
import React from 'react';
import { Flex, Modal, ModalBody, ModalContent, ModalOverlay, Text, Box } from '@chakra-ui/react';
import { noop } from '@/app/utils/helpers';
import { Gap } from '@/app/components/atoms';
import { SettingsIcon } from '@chakra-ui/icons';
import { LuCloudUpload, LuFolder } from 'react-icons/lu';

const FileAllModal = ({ isOpen = false, onClose = noop, size = 'lg', onSubmit = noop }) => {
  const onSubmitHandler = (type, data) => {
    onSubmit(type, data);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={size} isCentered>
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
                New Contract Manual: Setelan Pembuatan Dokumen ini untuk karyawan baru, dan Dokumen tidak sesuai template yang berlaku saat ini
              </Text>
            </Flex>
            <Gap height={2} />
            <Flex>
              <Text>2. </Text>
              <Gap width={4} />
              <Text>
                New Contract Template: Setelan Pembuatan Dokumen ini untuk karyawan baru, dan Dokumen sesuai template yang berlaku saat ini
              </Text>
            </Flex>
            <Gap height={2} />
            <Flex>
              <Text>3. </Text>
              <Gap width={4} />
              <Text>
                Exisiting Contract : Setelan Pembuatan Dokumen ini untuk karyawan lama, dan Dokumen sudah ditandatangani kedua belah pihak.
              </Text>
            </Flex>
            <Gap height={4} />
            <Flex align='center' justifyContent='center'>
              <Flex alignItems='center' justifyContent='center' textAlign={'center'} padding={2} borderWidth={3} borderColor={'#F39F5A'} borderRadius={12} flex={1} onClick={() => onSubmitHandler('all', 'contract_manual')} cursor='pointer'>
                <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" flex={1}>
                  <LuCloudUpload style={{ textAlign: 'center' }} fontSize={30} color='#AE445A' />
                  <Gap height={2} />
                  <Text fontSize={10}>New Contract Manual</Text>
                </Box>
              </Flex>
              <Gap width={2} />
              <Flex alignItems='center' justifyContent='center' textAlign={'center'} padding={2} borderWidth={3} borderColor={'#F39F5A'} borderRadius={12} flex={1} onClick={() => onSubmitHandler('all', 'contract_template')} cursor='pointer'>
                <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" flex={1}>
                  <LuFolder style={{ textAlign: 'center' }} fontSize={30} color='#AE445A' />
                  <Gap height={2} />
                  <Text fontSize={10}>New Contract Template</Text>
                </Box>
              </Flex>
              <Gap width={2} />
              <Flex alignItems='center' justifyContent='center' textAlign={'center'} padding={2} borderWidth={3} borderColor={'#F39F5A'} borderRadius={12} flex={1} onClick={() => onSubmitHandler('all', 'existing_contract')} cursor='pointer'>
                <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" flex={1}>
                  <LuCloudUpload style={{ textAlign: 'center' }} fontSize={30} color='#AE445A' />
                  <Gap height={2} />
                  <Text fontSize={10}>Existing Contract</Text>
                </Box>
              </Flex>
            </Flex>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default FileAllModal;
