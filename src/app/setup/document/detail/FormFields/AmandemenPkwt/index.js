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
import moment from 'moment';
import 'moment/locale/id';
import { Gap } from '@/app/components/atoms';
import { TextArea } from '@/app/components/atoms';
import { noop } from '@/app/utils/helpers';
import 'react-quill/dist/quill.snow.css';
import { dataFormAmandemenPKWT } from '../Shared/General';

moment.locale('id');

const INITIAL_FORM = {
  responsible_person: '',
  power_of_attorney_number: '',
  power_of_attorney_date: '',
  consideration: '',
  clause_6: '',
  clause_1: '',
  clause_9: '',
};

const FormFieldsAmandementPKWT = ({
  loading = false,
  onClick = noop,
  data,
}) => {
  const [form, setForm] = useState({
    responsible_person: data.responsible_person || '',
    power_of_attorney_number: data.power_of_attorney_number || '',
    power_of_attorney_date: data.power_of_attorney_date || '',
    consideration: data.consideration || '',
    clause_6: data.clause_6 || '',
    clause_1: data.clause_1 || '',
    clause_9: data.clause_9 || '',
  });
  const [errors, setErrors] = useState({});
  const toast = useToast();

  const validateForm = useCallback(() => {
    const newErrors = {};
    let isValid = true;

    dataFormAmandemenPKWT.forEach((field) => {
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

      if (field.type === 'textarea') {
        return (
          <TextArea
            {...commonProps}
            style={{ height: '150px', flex: 1, marginBottom: 45 }}
            onChange={(value) => onChangeText(field.slug, value)}
          />
        );
      }

      return (
        <Input
          {...commonProps}
          type={field.type}
          onChange={(e) => onChangeText(field.slug, e.target.value)}
        />
      );
    },
    [form, errors, onChangeText]
  );

  return (
    <Box>
      <Gap height={4} />
      <Text fontSize={16} fontWeight="bold" color="#AE445A">
        Amandemen PKWT Skema Khusus & Normal
      </Text>
      <Gap height={4} />
      <Flex>
        <Box flex={1}>
          {dataFormAmandemenPKWT.map((field) => (
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

export default FormFieldsAmandementPKWT;
