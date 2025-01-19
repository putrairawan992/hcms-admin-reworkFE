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
  Select,
  Input,
} from '@chakra-ui/react';
import styles from '../../../styles/approvalJobPost.module.css';
import { noop } from '@/app/utils/helpers';

const ConfirmationModal = ({ modalText = '', isOpen = false, onClose = false, size = 'xl', onSubmit = noop }) => {
  const onSubmitHandler = () => {
    onSubmit();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={size} isCentered>
      <ModalOverlay />
      <ModalContent style={{ padding: '2rem 0' }}>
        <ModalBody>
          <Text mb={'2rem'} className={styles['job-post-title']}>
            Edit - Setup Job Post
          </Text>
          <Box>
            <Box mb={'1rem'}>
              <Text className={styles['job-post-modal-text']}>
                Masukkan title
              </Text>
              <Input
                onChange={(e) => setName(e.target.value)}
                placeholder={`Masukkan $title`}
                type="text"
              />
            </Box>
          </Box>
          <Flex align={'center'} justify={'end'} mt={'2.5rem'}>
            <Button
              // onClick={submitHandler}
              mr={'0'}
              className={styles['job-post-search-btn']}
            >
              Create
            </Button>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ConfirmationModal;
