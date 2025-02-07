// TalentListAdd.js
'use client';
import { Suspense } from 'react';
import { Box, Button, Flex, Text, Image, Spinner } from '@chakra-ui/react';
import styles from '../../styles/inbox.module.css';
import { FormFields } from '../../components/molecules';
import { Gap } from '../../components/atoms';
import useAddMitra from './useAddMitra';

const TalentListAdd = () => {
  const {
    profileFileInputRef,
    profileImagePreview,
    loading,
    form,
    onChangeText,
    onClickProfile,
    handleFileChange,
    onHandleSubmit,
  } = useAddMitra();

  return (
    <Box className={styles['inbox-container']}>
      <Flex align={'center'} justify={'space-between'}>
        <Text className={styles['inbox-title']}>
          List Mitra / Create Mitra Account
        </Text>
      </Flex>
      <Gap height={6} />
      <Box style={{ borderWidth: 1, borderColor: '#EAEAEA' }} />
      <Gap height={6} />
      <Flex
        flex={1}
        justify="flex-end"
        className={styles['editProfile-change-img-wrapper']}
        mr={5}>
        <Box className={styles['editProfile-img-wrapper']}>
          <Image
            className={styles['editProfile-img']}
            src={profileImagePreview}
            alt="profile-pict"
          />
        </Box>
        <Gap width={4} />
        <Text
          onClick={onClickProfile}
          className={styles['editProfile-change-img-text']}>
          Ganti Foto Profil
        </Text>
        <input
          type="file"
          ref={profileFileInputRef}
          style={{ display: 'none' }}
          onChange={(e) => handleFileChange(e, 'profile')}
          accept="image/*"
        />
      </Flex>
      <Flex>
        <FormFields
          theme="up-down"
          label="Nama"
          slug="name"
          placeholder="Masukan nama mitra"
          value={form.name}
          onChangeText={onChangeText}
        />
        <Gap width={4} />
        <FormFields
          theme="up-down"
          label="Username"
          slug="username"
          placeholder="Masukan username mitra"
          value={form.username}
          onChangeText={onChangeText}
        />
      </Flex>
      <Gap height={4} />
      <FormFields
        theme="up-down"
        label="E-Mail"
        slug="email"
        placeholder="Masukan E-Mail mitra"
        value={form.email}
        onChangeText={onChangeText}
      />
      <Gap height={8} />
      <Button
        className={styles['inbox-btn']}
        paddingX={8}
        onClick={onHandleSubmit}>
        {loading ? <Spinner size="sm" /> : ' Create Account'}
      </Button>
    </Box>
  );
};

// Bungkus komponen dengan Suspense
const TalentListAddWithSuspense = () => (
  <Suspense fallback={<Spinner size="lg" />}>
    <TalentListAdd />
  </Suspense>
);

export default TalentListAddWithSuspense;
