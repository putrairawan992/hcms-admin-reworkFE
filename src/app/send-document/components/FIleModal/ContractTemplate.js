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
  Input,
  useToast,
  Spinner,
} from '@chakra-ui/react';
import styles from '../../../styles/confirmationModal.module.css';
import { noop } from '@/app/utils/helpers';
import { Gap } from '@/app/components/atoms';
import { contractTemplateOptions } from './Shared';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import { httpClient } from '@/app/utils/network';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const FileContractTemplateModal = ({
  employeeDetail = {},
  isOpen = false,
  onClose = noop,
  size = 'xl',
  onSubmit = noop,
  typeDocTalent = '',
  jobProviderId = '',
  dataSetup = {},
}) => {
  const toast = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dataFormFields = contractTemplateOptions.find(
    (item) => item.type === typeDocTalent
  );

  // Fields that should only accept letters
  const onlyLettersFields = ['thp', 'gaji_pokok', 'tunjangan_posisi'];

  const onChangeText = (slug, value) => {
    // If the field is in onlyLettersFields and should only accept letters
    if (onlyLettersFields.includes(slug) || onlyLettersFields.includes(`sd_${slug}`)) {
      // Regex to match only letters (including spaces and Indonesian characters)
      const lettersOnly = /^[A-Za-zÀ-ÖØ-öø-ÿĀ-ž\s]+$/;
      
      // Only update if value is empty or contains only letters
      if (value === '' || lettersOnly.test(value)) {
        setForm((prevData) => ({ ...prevData, [slug]: value }));
      }
      // Otherwise ignore the input
    } else {
      // For other fields, process normally
      setForm((prevData) => ({ ...prevData, [slug]: value }));
    }
  };

  const submitData = async () => {
    try {
      const formData = {};

      Object.entries(form).forEach(([key, value]) => {
        if (
          value !== null &&
          value !== undefined &&
          String(value).trim() !== ''
        ) {
          if (!key.startsWith('sd_')) {
            formData[key] = value;
          } else {
            const newKey = key.replace('sd_', '');
            formData[newKey] = value;
          }
        }
      });

      await httpClient({
        method: 'POST',
        url: '/admin/document/setup_document',
        data: formData,
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

  const onSubmitHandler = () => {
    setIsSubmitting(true);
    submitData();
    onSubmit();
  };

  const [form, setForm] = useState({
    type_document: '',
    job_provider_id: '',
    employee_id: '',
    remuneration_id: '',
    remuneration_detail_id: '',
    ruang_lingkup: '',
    no_surat: '',
    sd_letter_no: '',
    sd_scope: '',
    sd_clause_1: '',
    sd_clause_6: '',
    sd_clause_9: '',
    sd_consideration: '',
    sd_power_of_attorney_date: '',
    sd_power_of_attorney_number: '',
    sd_responsible_level: '',
    sd_responsible_person: '',
    sd_responsible_role: '',
    sd_age: '',
    sd_birth_of_date: '',
    sd_thp: '',
    sd_gaji_pokok: '',
    sd_tunjangan_posisi: '',
    sd_durasi_kontrak: '',
    sd_pasal_8: '',
  });

  useEffect(() => {
    setForm((prevForm) => ({
      ...prevForm,
      type_document: typeDocTalent || dataSetup?.type_document || '',
      job_provider_id: jobProviderId || '',
      employee_id: employeeDetail?.employee?.user_id || '',
      remuneration_id: employeeDetail?.remuneration_id || '',
      remuneration_detail_id:
        employeeDetail?.employee?.remuneration_detail_id || '',
      sd_letter_no: dataSetup?.sd_letter_no || '',
      sd_scope: dataSetup?.sd_scope || '',
      sd_clause_1: dataSetup?.sd_clause_1 || '',
      sd_clause_6: dataSetup?.sd_clause_6 || '',
      sd_clause_9: dataSetup?.sd_clause_9 || '',
      sd_consideration: dataSetup?.sd_consideration || '',
      sd_power_of_attorney_date: dataSetup?.sd_power_of_attorney_date || '',
      sd_power_of_attorney_number: dataSetup?.sd_power_of_attorney_number || '',
      sd_responsible_level: dataSetup?.sd_responsible_level || '',
      sd_responsible_person: dataSetup?.sd_responsible_person || '',
      sd_responsible_role: dataSetup?.sd_responsible_role || '',
      sd_age: dataSetup?.sd_age || '',
      sd_birth_of_date: dataSetup?.sd_birth_of_date || '',
      sd_thp: dataSetup?.sd_thp || '',
      sd_gaji_pokok: dataSetup?.sd_gaji_pokok || '',
      sd_tunjangan_posisi: dataSetup?.sd_tunjangan_posisi || '',
      sd_durasi_kontrak: dataSetup?.sd_durasi_kontrak || '',
      sd_pasal_8: dataSetup?.sd_pasal_8 || '',
    }));
  }, [dataSetup, typeDocTalent, jobProviderId]);

  // Helper function to check if field should only accept letters
  const isLettersOnlyField = (fieldName) => {
    return fieldName.includes('thp') || 
           fieldName.includes('gaji_pokok') || 
           fieldName.includes('tunjangan_posisi');
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={size} isCentered keepMounted>
      <ModalOverlay />
      <ModalContent borderRadius={14}>
        <ModalBody className={styles['modal-wrapper-2']}>
          <Box style={{ padding: '12px 0px' }}>
            {dataFormFields?.data?.map((item, index) => {
              return (
                <Box key={index}>
                  <Text fontSize={26} fontWeight="900" color="#AE445A">
                    {item?.title}
                  </Text>
                  {item?.formField?.map((row, index) => {
                    return (
                      <>
                        <Gap height={2} />
                        <Flex
                          key={index}
                          flex={1}
                          alignItems={
                            row?.type === 'textarea' ? 'flex-start' : 'center'
                          }
                          marginBottom={2}>
                          <Box flex={0.5} marginRight={2}>
                            <Text
                              fontSize={12}
                              fontWeight="bold"
                              color="#404041">
                              {row?.label}
                            </Text>
                            {row.isDisabled && (
                              <Text
                                fontSize={12}
                                fontStyle="italic"
                                color="#404041">
                                (Dapat diubah pada menu Setup {'>'} Document)
                              </Text>
                            )}
                            {isLettersOnlyField(row?.field) && (
                              <Text
                                fontSize={12}
                                fontStyle="italic"
                                color="#404041">
                                (Hanya menerima huruf)
                              </Text>
                            )}
                          </Box>
                          <Flex flex={1}>
                            {row?.type === 'text' ? (
                              <Input
                                key={row?.field}
                                id={row?.field}
                                flex={1}
                                borderWidth={1}
                                borderColor="#AE445A"
                                borderRadius={10}
                                padding="8px 16px"
                                type="text"
                                value={form[row?.field] || ''}
                                onChange={(e) =>
                                  onChangeText(row?.field, e.target.value)
                                }
                                disabled={row?.isDisabled}
                              />
                            ) : row?.type === 'textarea' ? (
                              <ReactQuill
                                theme="snow"
                                key={row?.field}
                                id={row?.field}
                                style={{
                                  height: '150px',
                                  flex: 1,
                                  marginBottom: 80,
                                }}
                                value={form[row?.field]}
                                onChange={(value) =>
                                  onChangeText(row?.field, value)
                                }
                                readOnly={row?.isDisabled}
                              />
                            ) : row?.type === 'date' ? (
                              <Input
                                key={row?.field}
                                id={row?.field}
                                flex={1}
                                borderWidth={1}
                                borderColor="#AE445A"
                                borderRadius={10}
                                padding="8px 16px"
                                type="date"
                                value={form[row?.field]}
                                onChange={(e) =>
                                  onChangeText(row?.field, e.target.value)
                                }
                                disabled={row?.isDisabled}
                              />
                            ) : null}
                          </Flex>
                        </Flex>
                        <Gap height={2} />
                      </>
                    );
                  })}
                </Box>
              );
            })}
            <Gap height={6} />
            <Flex align={'center'} justify={'center'}>
              <Button onClick={onClose} className={styles['modal-reject']}>
                Batal
              </Button>
              <Button
                onClick={onSubmitHandler}
                className={styles['modal-approve']}>
                {isSubmitting ? <Spinner size="sm" /> : 'Kirim'}
              </Button>
            </Flex>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default FileContractTemplateModal;