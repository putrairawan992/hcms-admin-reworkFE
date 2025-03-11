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

const ConfirmationModal = ({ modalText = '', isOpen = false, onClose = false, size = 'sm', onSubmit = noop }) => {
  const onSubmitHandler = () => {
    onSubmit();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={size} isCentered>
      <ModalOverlay />
      <ModalContent style={{ padding: '2rem 0' }}>
        <ModalBody className={styles['modal-wrapper']}>
          <Box>
            <Image
              className={styles['modal-info']}
              src={'/images/info-circle.png'}
            />
            <Text className={styles['modal-text']}>{modalText}</Text>
            <Flex align={'center'}>
              <Button onClick={onClose} className={styles['modal-reject']}>
                Batal
              </Button>
              <Button
                onClick={onSubmitHandler}
                className={styles['modal-approve']}>
                Yakin
              </Button>
            </Flex>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ConfirmationModal;
