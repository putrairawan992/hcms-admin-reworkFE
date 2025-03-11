'use client';
import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
  useToast,
  Box,
  Spinner,
} from '@chakra-ui/react';
import styles from '../../../styles/confirmationModal.module.css';
import { noop } from '@/app/utils/helpers';
import { Gap } from '@/app/components/atoms';
import { FileIcon } from '@/app/components/icons';
import { useState } from 'react';
import { httpClient } from '@/app/utils/network';

const FileExistingContractModal = ({ data = {}, isOpen = false, onClose = noop, size = 'md', onSubmit = noop }) => {
  const toast = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [file, setFile] = useState({
    sent: null,
    employeeSigned: null,
    fullSigned: null
  });

  const [fileName, setFileName] = useState({
    sent: 'Browse File To Upload (Ukuran file maksimal 2MB)',
    employeeSigned: 'Browse File To Upload (Ukuran file maksimal 2MB)',
    fullSigned: 'Browse File To Upload (Ukuran file maksimal 2MB)'
  });

  const [errorMessage, setErrorMessage] = useState({
    sent: '',
    employeeSigned: '',
    fullSigned: ''
  });

  const handleFileChange = (event, slug) => {
    const file = event.target.files[0];

    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        setErrorMessage(prevData => ({ ...prevData, [slug]: 'File size exceeds 2MB. Please choose a smaller file.' }));
        setFileName(prevData => ({ ...prevData, [slug]: 'Browse File To Upload (Ukuran file maksimal 2MB)' }));
        setFile(prevData => ({ ...prevData, [slug]: null }));
      } else {
        setErrorMessage(prevData => ({ ...prevData, [slug]: '' }));
        setFileName(prevData => ({ ...prevData, [slug]: file?.name }));
        setFile(prevData => ({ ...prevData, [slug]: file }));
      }
    }
  };

  const resetForm = () => {
    setFile({
      sent: null,
      employeeSigned: null,
      fullSigned: null
    });
    setFileName({
      sent: 'Browse File To Upload (Ukuran file maksimal 2MB)',
      employeeSigned: 'Browse File To Upload (Ukuran file maksimal 2MB)',
      fullSigned: 'Browse File To Upload (Ukuran file maksimal 2MB)'
    });

    setErrorMessage({
      sent: '',
      employeeSigned: '',
      fullSigned: ''
    });
  };

  const onSubmitHandler = async () => {
    if (!file?.fullSigned) {
      toast({
        title: 'Error',
        description: `Full Signed File Must be required`,
        duration: 3000,
        status: 'error',
        position: 'top',
        isClosable: true,
      });

      return false;
    }

    try {
      setIsSubmitting(true);

      const formData = new FormData();
      formData.append("file_send", file?.sent);
      formData.append("file_full_signed", file?.fullSigned);
      formData.append("file_employee_signed", file?.employeeSigned);
      formData.append("employee_id", data?.employee?.user_id);
      formData.append("remuneration_id", data?.remuneration_id);

      await httpClient({
        method: 'POST',
        url: '/admin/document/existing_contract/update',
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      toast({
        title: 'Success',
        description: 'Data Berhasil Disimpan',
        duration: 3000,
        status: 'success',
        position: 'top',
        isClosable: true,
      });
      setIsSubmitting(false);
      resetForm();
      onSubmit();
    } catch (error) {
      toast({
        title: 'Error',
        description: error?.response?.data?.errors || `Something went wrong!`,
        duration: 3000,
        status: 'error',
        position: 'top',
        isClosable: true,
      });
      setIsSubmitting(false);
      resetForm();
      onSubmit();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={size} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalBody className={styles['modal-wrapper']} >
          <Box style={{ padding: '12px 20px' }}>
            <Flex justify={'center'} alignItems={'center'} flex={1}>
              <Box>
                <Flex>
                  <Text textAlign='left' fontSize={12} fontWeight='bold'>Sent : </Text>
                  <Text textAlign='left' fontSize={12} fontStyle='italic'>*optional</Text>
                </Flex>
                <Gap height={1} />
                <Flex align={'center'} cursor={'pointer'} borderWidth={2} borderColor={'#F39F5A'} borderRadius={6} padding={2} flex={1} borderStyle='dotted' position='relative'>
                  <input
                    type="file"
                    style={{
                      opacity: 0,
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      cursor: "pointer",
                    }}
                    onChange={(e) => handleFileChange(e, 'sent')}
                  />
                  <FileIcon style={{ width: 20, height: 20 }} />
                  <Gap width={2} />
                  <Text fontSize={12}>{fileName?.sent}</Text>
                </Flex>
              </Box>
            </Flex>
            {errorMessage && (
              <Text fontSize={10} color="red" mt={2}>
                {errorMessage?.sent}
              </Text>
            )}
            <Gap height={4} />
            <Flex justify={'center'} cursor={'pointer'} alignItems={'center'} flex={1}>
              <Box>
                <Flex>
                  <Text textAlign='left' fontSize={12} fontWeight='bold'>Employee Signed : </Text>
                  <Text textAlign='left' fontSize={12} fontStyle='italic'>*optional</Text>
                </Flex>
                <Gap height={1} />
                <Flex align={'center'} borderWidth={2} borderColor={'#F39F5A'} borderRadius={6} padding={2} flex={1} borderStyle='dotted' position='relative'>
                  <input
                    type="file"
                    style={{
                      opacity: 0,
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      cursor: "pointer",
                    }}
                    onChange={(e) => handleFileChange(e, 'employeeSigned')}
                  />
                  <FileIcon style={{ width: 20, height: 20 }} />
                  <Gap width={2} />
                  <Text fontSize={12}>{fileName?.employeeSigned}</Text>
                </Flex>
              </Box>
            </Flex>
            {errorMessage && (
              <Text fontSize={10} color="red" mt={2}>
                {errorMessage?.employeeSigned}
              </Text>
            )}
            <Gap height={4} />
            <Flex justify={'center'} cursor={'pointer'} alignItems={'center'} flex={1}>
              <Box>
                <Flex>
                  <Text textAlign='left' fontSize={12} fontWeight='bold'>Full Signed : </Text>
                  <Text textAlign='left' fontSize={12} fontStyle='italic' color='red'>*required</Text>
                </Flex>
                <Gap height={1} />
                <Flex align={'center'} borderWidth={2} borderColor={'#F39F5A'} borderRadius={6} padding={2} flex={1} borderStyle='dotted' position='relative'>
                  <input
                    type="file"
                    style={{
                      opacity: 0,
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      cursor: "pointer",
                    }}
                    onChange={(e) => handleFileChange(e, 'fullSigned')}
                  />
                  <FileIcon style={{ width: 20, height: 20 }} />
                  <Gap width={2} />
                  <Text fontSize={12}>{fileName?.fullSigned}</Text>
                </Flex>
              </Box>
            </Flex>
            {errorMessage && (
              <Text fontSize={10} color="red" mt={2}>
                {errorMessage?.fullSigned}
              </Text>
            )}
            <Gap height={6} />
            <Flex align={'center'} justify={'center'}>
              <Button onClick={onClose} className={styles['modal-reject']}>
                Batal
              </Button>
              <Button
                onClick={onSubmitHandler}
                className={styles['modal-approve']}>
                {isSubmitting ? <Spinner size="sm" /> : "Kirim"}
              </Button>
            </Flex>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default FileExistingContractModal;
