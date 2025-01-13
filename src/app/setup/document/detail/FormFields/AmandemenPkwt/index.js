'use client';
import { Gap } from '@/app/components/atoms';
import { noop } from '@/app/utils/helpers';
import { Box, Flex, Text, Input, Button, Image } from '@chakra-ui/react';
import moment from 'moment';
import 'moment/locale/id';
import dynamic from 'next/dynamic';
import { useState } from 'react';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';
import { dataFormAmandemenPKWT } from '../Shared/General';

moment.locale('id');

const FormFieldsAmandementPKWT = ({ loading = false, onClick = noop }) => {
  const [form, setForm] = useState({
    responsible_person: '',
    power_of_attorney_number: '',
    power_of_attorney_date: '',
    consideration: '',
    clause_6: '',
    clause_1: '',
    clause_9: '',
  });

  const onHandleSubmit = () => {
    onClick(form);
  };

  const onChangeText = (slug, value) => {
    setForm((prevData) => ({ ...prevData, [slug]: value }));
  };

  const RenderForm = ({ data = [] }) => {
    if (data.type === 'text') {
      return (
        <Input
          flex={1}
          borderWidth={1}
          borderColor="#AE445A"
          borderRadius={10}
          padding="8px 16px"
          type="text"
          value={form[data.slug]}
          onChange={(e) => onChangeText(data.slug, e.target.value)}
        />
      );
    } else if (data.type === 'textarea') {
      return (
        <ReactQuill
          theme="snow"
          style={{ height: '150px', flex: 1, marginBottom: 45 }}
          value={form[data.slug]}
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
          value={form[data.slug]}
          onChange={(e) => onChangeText(data.slug, e.target.value)}
        />
      );
    }
  };

  return (
    <Box>
      <Gap height={4} />
      <Text fontSize={16} fontWeight="bold" color="#AE445A">
        Amandemen PKWT Skema Khusus & Normal
      </Text>
      <Gap height={4} />
      <Flex>
        <Box flex={1}>
          {dataFormAmandemenPKWT.map((item) => {
            return (
              <Flex
                flex={1}
                alignItems={item.type === 'textarea' ? 'flex-start' : 'center'}
                marginBottom={2}>
                <Box flex={0.5}>
                  <Text fontSize={14} fontWeight="bold" color="#404041">
                    {item.label}:
                  </Text>
                </Box>
                <Flex flex={1}>
                  <RenderForm data={item} />
                </Flex>
              </Flex>
            );
          })}
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
          onClick={() => onHandleSubmit()}
        >
          {loading ? (
            <Image src="/images/loading-white.gif" width={6} height={6} />
          ) : (
            'Save'
          )}
        </Button>
      </Flex>
    </Box>
  );
};

export default FormFieldsAmandementPKWT;
