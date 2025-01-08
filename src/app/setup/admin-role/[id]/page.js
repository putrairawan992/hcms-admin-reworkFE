'use client';
import React from 'react';
import { Box, Button, Flex, Text, Divider, Spinner } from '@chakra-ui/react';
import styles from '../../../styles/adminRole.module.css';

import useAdminRoleDetail from './useAdminRoleDetail';
import style from './styles';
import { Gap } from '@/app/components/atoms';
import { FormFields } from '@/app/components/molecules';
import FormFieldsCheckbox from '@/app/components/molecules/FormFieldsCheckbox';
import { formFieldsAdminOptions } from '@/shared/general';

const AdminRoleDetail = () => {
  const { form, loading, onChangeText, onHandleSubmit, onChangeCheckbox } =
    useAdminRoleDetail();

  return (
    <Box className={styles['admin-role-container']}>
      <Text className={styles['admin-role-title']} mb={'3rem'}>
        Setup - Admin - Edit Admin
      </Text>
      <Flex flex={1} align={'center'} mb={'2rem'}>
        <FormFields
          label="Admin ID"
          type="text"
          theme="up-down"
          placeholder="Masukan admin ID"
          onChangeText={onChangeText}
          slug="admin_id"
          value={form.admin_id}
        />
        <Gap width={12} />
        <FormFields
          label="Nama"
          type="text"
          theme="up-down"
          placeholder="Masukan nama admin"
          onChangeText={onChangeText}
          slug="nama"
          value={form.username}
        />
      </Flex>
      <Flex flex={1} align={'center'} mb={'2rem'}>
        <FormFields
          label="Email"
          type="text"
          theme="up-down"
          placeholder="Masukan email admin"
          onChangeText={onChangeText}
          slug="email"
          value={form.email}
        />
        <Gap width={12} />
        <FormFields
          label="Divisi"
          type="text"
          theme="up-down"
          placeholder="Masukan divisi admin"
          onChangeText={onChangeText}
          slug="divisi"
          value={form.divisi}
        />
      </Flex>
      <Flex flex={1} align={'center'} mb={'2rem'}>
        <FormFields
          label="Jabatan"
          type="text"
          theme="up-down"
          placeholder="Masukan jabatan admin"
          onChangeText={onChangeText}
          slug="jabatan"
          value={form.jabatan}
        />
        <Gap width={12} />
        <FormFields
          label="Password"
          type="text"
          theme="up-down"
          placeholder="Masukan Password"
          onChangeText={onChangeText}
          slug="password"
          value={form.password}
        />
      </Flex>
      <Divider className={styles['admin-new-admin-divider']} />
      <Box className={styles['admin-new-admin-bottom-wrapper']}>
        <Text className={styles['admin-role-title']}>Feature</Text>
        <FormFieldsCheckbox
          data={form.platformAccess}
          form={form.platformAccess}
          onChangeCheckbox={onChangeCheckbox}
        />
        <FormFieldsCheckbox
          title='Dashboard'
          label='dashboard'
          onChangeCheckbox={onChangeCheckbox}
          data={form.platformAccess.find((e) => e.slug === 'dashboard')?.checkbox}
        />
        <FormFieldsCheckbox title='Dashboard' label='Dashbord' withChildren={true} />
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
