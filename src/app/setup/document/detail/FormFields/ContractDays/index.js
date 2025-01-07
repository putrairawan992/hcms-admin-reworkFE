'use client';
import { Gap } from '@/app/components/atoms';
import { Box, Flex, Text, Input, Button, Image } from '@chakra-ui/react';
import { useCallback, useMemo, useState } from 'react';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';
import { dataFormContractDays } from '../Shared/General';
import { noop } from '@/app/utils/helpers';
import { FormFields } from '@/app/components/molecules';

const FormFieldsContractDays = ({
  data = [],
  loading = false,
  onClick = noop,
}) => {
  const [form, setForm] = useState({
    responsible_person: data?.responsible_person || '',
    responsible_role: data?.responsible_role || '',
    clause_5: data?.clause_5 || '',
    clause_6_2: data?.clause_6_2 || '',
    clause_6_3: data?.clause_6_3 || '',
  });

  const onHandleSubmit = () => {
    onClick(form);
  };

  const onChangeText = useCallback((slug, value) => {
    setForm((prevData) => ({ ...prevData, [slug]: value }));
  }, []);

  const RenderForm = useMemo(
    () =>
      ({ data = [] }) => {
        console.log(form[data.slug]);
        if (data.type === 'text') {
          return (
            <Input
              key={data.slug}
              id={data.slug}
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
              key={data.slug}
              id={data.slug}
              style={{ height: '150px', flex: 1, marginBottom: 45 }}
              value={form[data.slug]}
              onChange={(value) => onChangeText(data.slug, value)}
            />
          );
        } else if (data.type === 'date') {
          return (
            <Input
              key={data.slug}
              id={data.slug}
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
      },
    [form]
  );

  return (
    <Box>
      <Gap height={4} />
      <Text fontSize={16} fontWeight="bold" color="#AE445A">
        Kontrak Perjanjian Pekerja Harian Lepas
      </Text>
      <Gap height={4} />
      <Flex>
        <Box flex={1}>
          <Flex flex={1} alignItems="center" marginBottom={2}>
            <Box flex={0.5}>
              <Text fontSize={14} fontWeight="bold" color="#404041">
                Nama Penanggung Jawab:
              </Text>
            </Box>
            <Flex flex={1}>
              <Input
                flex={1}
                borderWidth={1}
                borderColor="#AE445A"
                borderRadius={10}
                padding="8px 16px"
                type="text"
                value={form.responsible_person}
                onChange={(e) =>
                  onChangeText('responsible_person', e.target.value)
                }
              />
            </Flex>
          </Flex>
          <Flex flex={1} alignItems="center" marginBottom={2}>
            <Box flex={0.5}>
              <Text fontSize={14} fontWeight="bold" color="#404041">
                Role Penanggung Jawab:
              </Text>
            </Box>
            <Flex flex={1}>
              <Input
                flex={1}
                borderWidth={1}
                borderColor="#AE445A"
                borderRadius={10}
                padding="8px 16px"
                type="text"
                value={form.responsible_role}
                onChange={(e) =>
                  onChangeText('responsible_role', e.target.value)
                }
              />
            </Flex>
          </Flex>
          <Flex flex={1} alignItems="flex-start" marginBottom={2}>
            <Box flex={0.5}>
              <Text fontSize={14} fontWeight="bold" color="#404041">
                Pasal 5 Honorium:
              </Text>
            </Box>
            <Flex flex={1}>
              <ReactQuill
                theme="snow"
                style={{ height: '150px', flex: 1, marginBottom: 45 }}
                value={form.clause_5}
                onChange={(value) => onChangeText('clause_5', value)}
              />
            </Flex>
          </Flex>
          <Flex flex={1} alignItems="flex-start" marginBottom={2}>
            <Box flex={0.5}>
              <Text fontSize={14} fontWeight="bold" color="#404041">
                Pasal 6, Nomor 2:
              </Text>
            </Box>
            <Flex flex={1}>
              <ReactQuill
                theme="snow"
                style={{ height: '150px', flex: 1, marginBottom: 45 }}
                value={form.clause_6_2}
                onChange={(value) => onChangeText('clause_6_2', value)}
              />
            </Flex>
          </Flex>
          <Flex flex={1} alignItems="flex-start" marginBottom={2}>
            <Box flex={0.5}>
              <Text fontSize={14} fontWeight="bold" color="#404041">
                Pasal 6, Nomor 3:
              </Text>
            </Box>
            <Flex flex={1}>
              <ReactQuill
                theme="snow"
                style={{ height: '150px', flex: 1, marginBottom: 45 }}
                value={form.clause_6_3}
                onChange={(value) => onChangeText('clause_6_3', value)}
              />
            </Flex>
          </Flex>
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

export default FormFieldsContractDays;
