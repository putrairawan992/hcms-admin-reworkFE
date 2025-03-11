'use client';
import React, { useCallback, useState } from 'react';
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
import { Gap, SelectField } from '@/app/components/atoms';
import { inboxSetupAccountOptions, schemaSetupAccountOptions } from '@/shared/general';

const ConfirmationModal = ({ data = {}, value = '', isOpen = false, onClose = false, size = 'xl', onSubmit = noop, loading = false }) => {
  const [form, setForm] = useState({
    inbox: data?.inbox || '',
    remuneration: data?.remuneration || ''
  });

  const onChangeText = (slug, value) => {
    setForm(prevData => ({ ...prevData, [slug]: value }));
  };

  const onHandleSubmit = useCallback(() => {
    onSubmit(form);
  }, [form, data]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={size} isCentered>
      <ModalOverlay />
      <ModalContent style={{ padding: '2rem 0' }}>
        <ModalBody>
          <Text mb={'2rem'} className={styles['job-post-title']}>
            Edit - Setup Account
          </Text>
          <Box>
            <Box mb={'1rem'}>
              <Text className={styles['job-post-modal-text']}>
                Username
              </Text>
              <Input
                placeholder="Masukan username..."
                type="text"
                value={data?.username}
                disabled
              />
            </Box>
            <SelectField label='Inbox' options={inboxSetupAccountOptions} value={form.inbox} slug='inbox' onChange={onChangeText} />
            <Gap height={4} />
            <SelectField label='Skema' options={schemaSetupAccountOptions} value={form.remuneration} slug='remuneration' onChange={onChangeText} />
          </Box>
          <Flex align={'center'} justify={'end'} mt={'2.5rem'}>
            <Button
              onClick={onHandleSubmit}
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
