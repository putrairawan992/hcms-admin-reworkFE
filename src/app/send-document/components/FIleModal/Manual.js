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
  useToast,
  Spinner,
} from '@chakra-ui/react';
import styles from '../../../styles/confirmationModal.module.css';
import { noop } from '@/app/utils/helpers';
import { LuCloudUpload } from 'react-icons/lu';
import { Gap } from '@/app/components/atoms';
import { useState } from 'react';
import { httpClient } from '@/app/utils/network';

const FileManualModal = ({ isOpen = false, onClose = noop, size = 'sm', onSubmit = noop, data = {} }) => {
  const [fileName, setFileName] = useState("Browse File To Upload");
  const [selectedFile, setSelectedFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();


  const onSubmitHandler = async () => {
    if (!selectedFile) {
      toast({
        title: 'Error',
        description: error?.response?.data?.errors || `Something went wrong!`,
        duration: 3000,
        status: 'error',
        position: 'top',
        isClosable: true,
      });
      return;
    }

    try {
      setIsSubmitting(true); // Tampilkan loading
      setErrorMessage(""); // Reset error

      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("employee_id", data?.employee?.user_id);
      formData.append("remuneration_id", data?.remuneration_id);

      const payload = {
        file: selectedFile,
        employee_id: data?.employee?.user_id,
        remuneration_id: data?.remuneration_id,
      };

      await httpClient({
        method: 'POST',
        url: '/admin/document/contract_manual/update',
        data: payload
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
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      // Validasi ukuran file (maksimal 2MB)
      if (file.size > 2 * 1024 * 1024) {
        setErrorMessage("File size exceeds 2MB. Please choose a smaller file.");
        setFileName("Browse File To Upload"); // Reset nama file
        setSelectedFile(null); // Reset file
      } else {
        setErrorMessage(""); // Clear error jika valid
        setFileName(file.name); // Set nama file
        setSelectedFile(file); // Simpan file untuk dikirim
      }
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={size} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalBody className={styles['modal-wrapper']}>
          <Box style={{ padding: '12px' }}>
            <Gap height={4} />
            <Box
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              flexDirection="column"
              display="flex"
              borderWidth={4}
              borderRadius={12}
              p={4}
              mt={4}
              borderStyle="dotted"
              borderColor="#F39F5A"
              position="relative"
              cursor="pointer"
            >
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
                onChange={handleFileChange}
              />
              <LuCloudUpload fontSize={60} color="#F39F5A" />
              <Text fontSize={12}>{fileName}</Text>
              <Text fontSize={10} fontStyle="italic">
                (Ukuran file maksimal 2MB)
              </Text>
              {errorMessage && (
                <Text fontSize={10} color="red" mt={2}>
                  {errorMessage}
                </Text>
              )}
            </Box>
            <Gap height={12} />
            <Flex align={'center'} justify={'center'}>
              <Button onClick={onClose} className={styles['modal-reject']}>
                Batal
              </Button>
              <Button
                onClick={onSubmitHandler}
                isDisabled={!selectedFile || isSubmitting}
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

export default FileManualModal;
