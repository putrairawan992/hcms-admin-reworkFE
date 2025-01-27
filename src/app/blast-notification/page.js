'use client';
import React from 'react';
import { Box, Button, Flex, Input, InputGroup, InputRightElement, Spinner, Text } from '@chakra-ui/react';
import styles from '../styles/inbox.module.css';
import moment from 'moment';
import 'moment/locale/id';
import { isEmpty } from 'lodash';
import { BlastNotificationCard, FormFields, ListEmpty } from '../components/molecules';
import useBlastNotification from './useBlastNotification';
import { Gap, SelectField } from '../components/atoms';
import { Search2Icon } from '@chakra-ui/icons';
import dynamic from 'next/dynamic';
import ConfirmationModal from './modal';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

moment.locale('id');

const BlastNotification = () => {
  const { form, data, loading, loadingSubmit, modalOpen, productDigital, filters, onChangeSelect, toggleModal, onPressDetails, productDigitalData, onChangeText, onSubmit, isContentValid, onChangeTextFilter, onPressIcon, onSubmitDelete, loadingModal, onHandlePaginate } = useBlastNotification();

  const RenderContent = () => {
    if (!isEmpty(data)) {
      return data.map((item, index) => {
        return <BlastNotificationCard data={item} onPress={onPressDetails} onPressIcon={onPressIcon} key={index} />;
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
        <Text className={styles['inbox-title']}>Notification</Text>
        <Flex>
          <SelectField options={productDigital} placeholder='Pilih product digital' value={productDigitalData} slug='product_digital_name' onChange={onChangeSelect} />
        </Flex>
      </Flex>
      <Gap height={6} />
      <Box>
        <FormFields label='Judul' placeholder='Masukan judul pesan brodcast' theme='up-down' type='text' onChangeText={onChangeText} slug='title' value={form.title} />
        <Gap height={4} />
        <Box
          flex={1}
          alignItems='flex-start'
          marginBottom={2}>
          <Box flex={0.5}>
            <Text fontSize={14} fontWeight="bold" color="#404041">
              Isi Pesan
            </Text>
          </Box>
          <Flex flex={1}>
            <ReactQuill
              theme="snow"
              value={form.content}
              style={{ height: '150px', flex: 1, marginBottom: 45 }}
              onChange={(value) => onChangeText('content', value)}
            />
          </Flex>
        </Box>
        <Button className={styles['inbox-btn']} paddingX={8} onClick={onSubmit} isDisabled={!productDigitalData || loadingSubmit || !form.title || !isContentValid(form.content)}>
          {loadingSubmit ? <Spinner size="sm" /> : "Send"}
        </Button>
      </Box>

      <Box borderWidth={2} borderColor='#AE445A' marginY={6} />

      <Flex alignItems='center'>
        <Box>
          <InputGroup className={styles['input-container']}>
            <Input
              className={styles['admin-role-input']}
              type="text"
              placeholder="Cari pesan"
              value={filters.title}
              onChange={(e) => onChangeTextFilter('title', e.target.value)}
            />
            <InputRightElement>
              <Search2Icon />
            </InputRightElement>
          </InputGroup>
        </Box>
        <Gap width={2} />
        <Box>
          <Input
            type="date"
            onChange={(e) => onChangeTextFilter('date', e.target.value)}
            value={filters.date}
            className={styles['modal-input']}
          />
        </Box>
      </Flex>
      <Gap height={4} />

      {loading ? <ListEmpty /> : <RenderContent />}

      <Gap height={8} />
      <Flex justify="right" alignItems='center'>
        <Button
          className={styles['modal-approve']}
          isDisabled={filters.page === 1}
          onClick={() => onHandlePaginate(filters.page, 'previous')}>
          Previous
        </Button>
        <Text mx={4}>{filters.page}</Text>
        <Button
          className={styles['modal-approve']}
          isDisabled={data.length < 10}
          onClick={() => onHandlePaginate(filters.page, 'next')}>
          Next
        </Button>
      </Flex>

      <ConfirmationModal isOpen={modalOpen} onClose={toggleModal} onSubmit={onSubmitDelete} loading={loadingModal} />
    </Box>
  );
};

export default BlastNotification;
