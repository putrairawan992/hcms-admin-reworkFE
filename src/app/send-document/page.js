'use client';
import React from 'react';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import styles from '../styles/inbox.module.css';
import moment from 'moment';
import 'moment/locale/id';
import { isEmpty } from 'lodash';
import { ListEmpty, SendDocumentCard } from '../components/molecules';
import useSendDocument from './useSendDocument';
import { SelectField } from '../components/atoms';
import { monthOptions, yearOptions } from '@/shared/general';
import { useRouter } from 'next/navigation';

moment.locale('id');

const SendDocument = () => {
  const router = useRouter();
  const { data, loading, productDigital, filters, onChangeSelect } = useSendDocument();

  const RenderContent = () => {
    if (!isEmpty(data)) {
      return data.map((item, index) => {
        return <SendDocumentCard data={item} key={index} />;
      });
    } else {
      return (
        <Flex align={'center'} justify={'center'}>
          <Text>Tidak ada data inbox</Text>
        </Flex>
      );
    }
  };

  return (
    <Box className={styles['inbox-container']}>
      <Flex align={'center'} justify={'space-between'}>
        <Text className={styles['inbox-title']}>Send Document</Text>
        <Flex>
          <Flex
            borderWidth={1}
            borderColor="#AE445A"
            borderRadius={6}
            paddingX={4}
            paddingY={1}>
            <Text marginRight={3} fontWeight="bold">
              Perlu Ditinjau:{' '}
            </Text>
            <Text marginRight={3} color="#AE445A" fontWeight="bold">
              1
            </Text>
            <Text fontWeight="bold">Submit</Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex marginBottom={4} marginTop={10}>
        <SelectField options={yearOptions} placeholder='Semua' value={filters.years} label='Tahun' slug='years' onChange={onChangeSelect} />
        <SelectField options={monthOptions} placeholder='Semua' value={filters.month} label='Bulan' slug='month' onChange={onChangeSelect} />
        <SelectField options={productDigital} placeholder='Semua' value={filters.product_digital_name} label='Product Digital' slug='product_digital_name' onChange={onChangeSelect} />
      </Flex>
      {loading ? <ListEmpty /> : <RenderContent />}
    </Box>
  );
};

export default SendDocument;
