'use client';
import React, { useState } from 'react';
import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
  Box,
  Input,
  Spinner,
} from '@chakra-ui/react';
import styles from '../../../styles/setupJobPost.module.css';
import { noop } from '@/app/utils/helpers';

const ConfirmationModal = ({ value = '', isOpen = false, onClose = false, size = 'xl', onSubmit = noop, onChangeText = noop, loading = false }) => {

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
                onChange={(e) => onChangeText(e.target.value)}
                placeholder="Masukan Title..."
                type="text"
                value={value}
              />
            </Box>
          </Box>
          <Flex align={'center'} justify={'end'} mt={'2.5rem'}>
            <Button
              onClick={onSubmit}
              mr={'0'}
              className={styles['job-post-search-btn']}>
              {loading ? <Spinner /> : 'Save'}
            </Button>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ConfirmationModal;
