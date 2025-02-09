'use client';
import { Gap } from '@/app/components/atoms';
import { Box, Flex, Text, Input, Button, Image } from '@chakra-ui/react';
import { useState, useCallback, memo } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import { dataFormOfferingLatterKhusus } from '../Shared/General';
import { noop } from 'lodash';

const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const RenderForm = memo(({ data, form, onChangeText }) => {
  if (data.type === 'text') {
    return (
      <Input
        flex={1}
        borderWidth={1}
        borderColor="#AE445A"
        borderRadius={10}
        padding="8px 16px"
        type="text"
        value={form[data.slug] || ''}
        onChange={(e) => onChangeText(data.slug, e.target.value)}
      />
    );
  } else if (data.type === 'textarea') {
    return (
      <ReactQuill
        theme="snow"
        style={{ height: '150px', flex: 1, marginBottom: 45 }}
        value={form[data.slug] || ''}
        onChange={(value) => onChangeText(data.slug, value)}
      />
    );
  } else if (data.type === 'date') {
    return (
      <Input
        flex={1}
        borderWidth={1}
        borderColor="#AE445A"
        borderRadius={10}
        padding="8px 16px"
        type="date"
        value={form[data.slug] || ''}
        onChange={(e) => onChangeText(data.slug, e.target.value)}
      />
    );
  }
  return null;
});

const FormFieldsOfferingLatterKhusus = ({
  loading = false,
  onClick = noop,
}) => {
  const [form, setForm] = useState({
    responsible_person: '',
    responsible_role: '',
    responsible_level: '',
  });

  const onHandleSubmit = () => {
    onClick(form);
  };

  const onChangeText = useCallback((slug, value) => {
    setForm((prevData) => ({ ...prevData, [slug]: value }));
  }, []);

  return (
    <Box>
      <Gap height={4} />
      <Text fontSize={16} fontWeight="bold" color="#AE445A">
        Offering Letter Skema Khusus
      </Text>
      <Gap height={4} />
      <Flex>
        <Box flex={1}>
          {dataFormOfferingLatterKhusus.map((item, index) => (
            <Flex
              key={item.id || index}
              flex={1}
              alignItems={item.type === 'textarea' ? 'flex-start' : 'center'}
              marginBottom={2}>
              <Box flex={0.5}>
                <Text fontSize={14} fontWeight="bold" color="#404041">
                  {item.label}:
                </Text>
              </Box>
              <Flex flex={1}>
                <RenderForm
                  data={item}
                  form={form}
                  onChangeText={onChangeText}
                />
              </Flex>
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
          disabled={loading}>
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

export default FormFieldsOfferingLatterKhusus;
