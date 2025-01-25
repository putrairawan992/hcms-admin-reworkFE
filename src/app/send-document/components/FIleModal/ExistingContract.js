'use client';
import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
  Image,
  Box,
} from '@chakra-ui/react';
import styles from '../../../styles/confirmationModal.module.css';
import { noop } from '@/app/utils/helpers';
import { Gap } from '@/app/components/atoms';
import { FileBadgeIcon, FileIcon } from '@/app/components/icons';

const FileExistingContractModal = ({ modalText = '', isOpen = false, onClose = noop, size = 'md', onSubmit = noop }) => {
  const onSubmitHandler = () => {
    onSubmit();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={size} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalBody className={styles['modal-wrapper']} >
          <Box style={{ padding: '12px 20px' }}>
            <Flex justify={'center'} cursor={'pointer'} alignItems={'center'} flex={1}>
              <Box>
                <Flex>
                  <Text textAlign='left' fontSize={12} fontWeight='bold'>Sent : </Text>
                  <Text textAlign='left' fontSize={12} fontStyle='italic'>*optional</Text>
                </Flex>
                <Gap height={1} />
                <Flex align={'center'} borderWidth={2} borderColor={'#F39F5A'} borderRadius={6} padding={2} flex={1} borderStyle='dotted'>
                  <FileIcon style={{ width: 20, height: 20 }} />
                  <Gap width={2} />
                  <Text fontSize={12}>Browse File To Upload (Ukuran file maksimal 2MB)</Text>
                </Flex>
              </Box>
            </Flex>
            <Gap height={4} />
            <Flex justify={'center'} cursor={'pointer'} alignItems={'center'} flex={1}>
              <Box>
                <Flex>
                  <Text textAlign='left' fontSize={12} fontWeight='bold'>Employee Signed : </Text>
                  <Text textAlign='left' fontSize={12} fontStyle='italic'>*optional</Text>
                </Flex>
                <Gap height={1} />
                <Flex align={'center'} borderWidth={2} borderColor={'#F39F5A'} borderRadius={6} padding={2} flex={1} borderStyle='dotted'>
                  <FileIcon style={{ width: 20, height: 20 }} />
                  <Gap width={2} />
                  <Text fontSize={12}>Browse File To Upload (Ukuran file maksimal 2MB)</Text>
                </Flex>
              </Box>
            </Flex>
            <Gap height={4} />
            <Flex justify={'center'} cursor={'pointer'} alignItems={'center'} flex={1}>
              <Box>
                <Flex>
                  <Text textAlign='left' fontSize={12} fontWeight='bold'>Full Signed : </Text>
                  <Text textAlign='left' fontSize={12} fontStyle='italic' color='red'>*required</Text>
                </Flex>
                <Gap height={1} />
                <Flex align={'center'} borderWidth={2} borderColor={'#F39F5A'} borderRadius={6} padding={2} flex={1} borderStyle='dotted'>
                  <FileIcon style={{ width: 20, height: 20 }} />
                  <Gap width={2} />
                  <Text fontSize={12}>Browse File To Upload (Ukuran file maksimal 2MB)</Text>
                </Flex>
              </Box>
            </Flex>
            <Text className={styles['modal-text']}>{modalText}</Text>
            <Gap height={6} />
            <Flex align={'center'} justify={'center'}>
              <Button onClick={onClose} className={styles['modal-reject']}>
                Batal
              </Button>
              <Button
                onClick={onSubmitHandler}
                className={styles['modal-approve']}>
                Kirim
              </Button>
            </Flex>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default FileExistingContractModal;
