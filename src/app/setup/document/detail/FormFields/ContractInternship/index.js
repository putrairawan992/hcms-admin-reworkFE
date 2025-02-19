'use client';
import { useState, useCallback } from 'react';
import {
  Box,
  Flex,
  Text,
  Input,
  Button,
  Image,
  useToast,
} from '@chakra-ui/react';
import { Gap } from '@/app/components/atoms';
import { noop } from 'lodash';
import 'react-quill/dist/quill.snow.css';
import { dataFormContractInternship } from '../Shared/General';
import { TextArea } from '@/app/components/atoms';

const INITIAL_FORM = {
  responsible_person: '',
  responsible_role: '',
  responsible_level: '',
};

const FormFieldsContractInternship = ({ loading = false, onClick = noop }) => {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const toast = useToast();

  const validateForm = useCallback(() => {
    const newErrors = {};
    let isValid = true;

    dataFormContractInternship.forEach((field) => {
      if (field.required && !form[field.slug]) {
        newErrors[field.slug] = `${field.label} harus diisi`;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  }, [form]);

  const onHandleSubmit = useCallback(() => {
    if (validateForm()) {
      onClick(form);
    } else {
      toast({
        title: 'Error',
        description: 'Mohon lengkapi semua field yang diperlukan',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  }, [form, onClick, validateForm, toast]);

  const onChangeText = useCallback(
    (slug, value) => {
      setForm((prev) => ({ ...prev, [slug]: value }));
      if (errors[slug]) {
        setErrors((prev) => ({ ...prev, [slug]: '' }));
      }
    },
    [errors]
  );

  const renderField = useCallback(
    (field) => {
      const commonProps = {
        flex: 1,
        borderWidth: 1,
        borderColor: errors[field.slug] ? 'red.500' : '#AE445A',
        borderRadius: 10,
        padding: '8px 16px',
        placeholder: field.placeholder,
        value: form[field.slug],
      };

      switch (field.type) {
        case 'textarea':
          return (
            <TextArea
              theme="snow"
              style={{ height: '150px', flex: 1, marginBottom: 45 }}
              value={form[field.slug]}
              onChange={(value) => onChangeText(field.slug, value)}
            />
          );
        case 'date':
          return (
            <Input
              {...commonProps}
              type="date"
              onChange={(e) => onChangeText(field.slug, e.target.value)}
            />
          );
        default:
          return (
            <Input
              {...commonProps}
              type="text"
              onChange={(e) => onChangeText(field.slug, e.target.value)}
            />
          );
      }
    },
    [form, errors, onChangeText]
  );

  return (
    <Box>
      <Gap height={4} />
      <Text fontSize={16} fontWeight="bold" color="#AE445A">
        Kontrak Internship Skema Khusus & Normal
      </Text>
      <Gap height={4} />
      <Flex>
        <Box flex={1}>
          {dataFormContractInternship.map((field) => (
            <Flex
              key={field.slug}
              flex={1}
              alignItems={field.type === 'textarea' ? 'flex-start' : 'center'}
              marginBottom={2}
              direction="column">
              <Flex width="100%" marginBottom={2} alignItems="center">
                <Box flex={0.5}>
                  <Text fontSize={14} fontWeight="bold" color="#404041" gap={2}>
                    {field.label}:
                    {field.required && (
                      <Text as="span" color="red.500">
                        *
                      </Text>
                    )}
                  </Text>
                </Box>
                <Flex flex={1}>{renderField(field)}</Flex>
              </Flex>
              {errors[field.slug] && (
                <Text fontSize={12} color="red.500" marginLeft="50%">
                  {errors[field.slug]}
                </Text>
              )}
            </Flex>
          ))}
        </Box>
      </Flex>
      <Gap height={6} />
      <Flex flex={1} justifyContent="flex-end">
        <Button
          paddingX={10}
          borderRadius={10}
          background="linear-gradient(90deg, #f39f5a 0%, #ae445a 100%)"
          fontSize={12}
          color="#FFFFFF"
          fontWeight="bold"
          onClick={onHandleSubmit}
          isDisabled={loading}>
          {loading ? (
            <Image
              src="/images/loading-white.gif"
              width={6}
              height={6}
              alt="Loading"
            />
          ) : (
            'Save'
          )}
        </Button>
      </Flex>
    </Box>
  );
};

export default FormFieldsContractInternship;
