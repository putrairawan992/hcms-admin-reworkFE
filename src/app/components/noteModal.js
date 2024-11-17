'use client';
import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import styles from '../styles/confirmationModal.module.css';
import { useEffect, useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';

const NoteModal = ({ isOpen, onClose }) => {
  const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
  const [size, setSize] = useState('xl');
  const [openText, setOpenText] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    setOpenText(false);
  }, []);

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={size} isCentered>
      <ModalOverlay />
      <ModalContent style={{ padding: '2rem 0' }}>
        <ModalBody className={styles['modal-wrapper']}>
          <Flex className={styles['modal-notes-wrapper']}>
            <Text className={styles['modal-notes-text']}>Notes</Text>
            <ReactQuill
              theme="snow"
              value={text}
              onChange={setText}
              style={{ margin: '1.5rem 0 4rem', height: '249px' }}
            />
            <Button alignSelf={'end'} className={styles['modal-approve']}>
              Submit
            </Button>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default NoteModal;
