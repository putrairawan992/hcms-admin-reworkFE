'use client';
import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
  Box,
} from '@chakra-ui/react';
import styles from '../../../styles/confirmationModal.module.css';
import { noop } from '@/app/utils/helpers';
import { Gap } from '@/app/components/atoms';
import { FormFields } from '@/app/components/molecules';
import { contractTemplateOptions } from './Shared';

const FileContractTemplateModal = ({ isOpen = false, onClose = noop, size = 'xl', onSubmit = noop, typeDocTalent = '' }) => {
  const onSubmitHandler = () => {
    onSubmit();
  };

  const dataFormFields = contractTemplateOptions.find((item) => item.type === typeDocTalent);

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={size} isCentered>
      <ModalOverlay />
      <ModalContent borderRadius={14}>
        <ModalBody className={styles['modal-wrapper-2']}>
          <Box style={{ padding: '12px 0px' }}>
            {
              dataFormFields?.data?.map((item, index) => {
                return (
                  <Box key={index}>
                    <Text fontSize={26} fontWeight='900' color='#AE445A'>{item?.title}</Text>
                    {item?.formField?.map((row, index) => {
                      return (
                        <>
                          <Gap height={2} />
                          <FormFields theme='default' label={row?.label} type={row?.type} key={index} />
                          <Gap height={2} />
                        </>
                      );
                    })}
                  </Box>
                );
              })
            }
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

export default FileContractTemplateModal;
