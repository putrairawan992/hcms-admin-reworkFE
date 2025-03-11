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
  Spinner,
} from '@chakra-ui/react';
import styles from '../styles/confirmationModal.module.css';
import { noop } from '@/app/utils/helpers';
import { Gap } from '@/app/components/atoms';

const ConfirmationModal = ({ isOpen = false, onClose = false, size = 'sm', onSubmit = noop, loading = false }) => {
  const onSubmitHandler = () => {
    onSubmit();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={size} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalBody className={styles['modal-wrapper']}>
          <Box style={{ padding: '12px' }}>
            <Flex justify={'center'}>
              <Image
                className={styles['modal-info']}
                src={'/images/info-circle.png'}
              />
            </Flex>
            <Gap height={6} />
            <Text className={styles['modal-text']}>Apakah anda yakin ingin menghapus notifikasi ini?</Text>
            <Gap height={6} />
            <Flex align={'center'} justify={'center'}>
              <Button onClick={onClose} className={styles['modal-reject']}>
                Batal
              </Button>
              <Button
                onClick={onSubmitHandler}
                isDisabled={loading}
                className={styles['modal-approve']}>
                {loading ? <Spinner /> : 'Yakin'}
              </Button>
            </Flex>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ConfirmationModal;
