'use client';
import React from 'react';
import { Box, Button, Flex, Text, Divider, Spinner } from '@chakra-ui/react';
import styles from '../../../styles/adminRole.module.css';

import useAdminRoleDetail from './useAdminRoleDetail';
import { Gap } from '@/app/components/atoms';
import { FormFields } from '@/app/components/molecules';
import FormFieldsCheckbox from '@/app/components/molecules/FormFieldsCheckbox';
import { formFieldsAdminOptions } from '@/shared/general';

const AdminRoleDetail = () => {
  const { data, form, loading, onChangeText, onHandleSubmit, onChangeCheckbox } =
    useAdminRoleDetail();

  return (
    <Box className={styles['admin-role-container']}>
      <Text className={styles['admin-role-title']} mb={'3rem'}>
        Setup - Admin - Edit Admin
      </Text>
      <Flex flex={1} align={'center'} mb={'2rem'}>
        <FormFields
          label="Nama"
          type="text"
          theme="up-down"
          placeholder="Masukan nama admin"
          onChangeText={onChangeText}
          slug="name"
          value={form.name}
        />
        <Gap width={12} />
        <FormFields
          label="Email"
          type="text"
          theme="up-down"
          placeholder="Masukan email admin"
          onChangeText={onChangeText}
          slug="email"
          value={form.email}
        />
      </Flex>
      <Flex flex={1} align={'center'} mb={'2rem'}>
        <FormFields
          label="Divisi"
          type="text"
          theme="up-down"
          placeholder="Masukan divisi admin"
          onChangeText={onChangeText}
          slug="divisi"
          value={form.divisi}
        />
        <Gap width={12} />
        <FormFields
          label="Jabatan"
          type="text"
          theme="up-down"
          placeholder="Masukan jabatan admin"
          onChangeText={onChangeText}
          slug="jabatan"
          value={form.jabatan}
        />
      </Flex>
      <Flex flex={1} align={'center'} mb={'2rem'}>
        <FormFields
          label="No Telp"
          type="text"
          theme="up-down"
          placeholder="Masukan no telphone"
          onChangeText={onChangeText}
          slug="phone_number"
          value={form.phone_number}
        />
        <Gap width={12} />
        <FormFields
          label="Address"
          type="text"
          theme="up-down"
          placeholder="Masukan address"
          onChangeText={onChangeText}
          slug="address"
          value={form.address}
        />
      </Flex>
      <Divider className={styles['admin-new-admin-divider']} />
      <Box className={styles['admin-new-admin-bottom-wrapper']}>
        <Text className={styles['admin-role-title']}>Feature</Text>
        <FormFieldsCheckbox data={form.permissions} onChangeCheckbox={onChangeCheckbox} />
      </Box>
      <Flex width={'100%'} justify={'end'} marginTop={'2rem'}>
        <Button
          className={styles['admin-new-admin-btn']}
          onClick={onHandleSubmit}
        >
          {loading ? <Spinner size="sm" /> : 'Save'}
        </Button>
      </Flex>
    </Box>
  );
};

export default AdminRoleDetail;
