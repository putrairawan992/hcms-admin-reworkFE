'use client';
import {
  Box,
  Button,
  Divider,
  Flex,
  Input,
  Text,
  useToast,
  Image,
} from '@chakra-ui/react';
import SidebarLayout from '../components/sidebarLayout';
import styles from '../styles/editProfile.module.css';
import { useProfileStore } from '@/stores/profileStore';
import { isEmpty } from 'lodash';
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useEditProfile } from '../api/profile';
import { getUserData, saveUserData } from '../utils/localStorage';
import { httpClient } from '../utils/network';
import axios from 'axios';

const EditProfile = () => {
  const toast = useToast();
  const profile = getUserData();
  const profileFileInputRef = useRef(null);
  const companyFileInputRef = useRef(null);
  const [profileImagePreview, setProfileImagePreview] = useState('');
  const [companyImagePreview, setCompanyImagePreview] = useState('');
  const [reload, setReload] = useState(false);
  const { mutate } = useEditProfile();
  const { register, handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      name: profile?.name || '', // Pastikan profil ada
      email: profile?.email || '',
      phone_number: profile?.phone || '',
      address: profile?.address || '',
      password: '',
      new_password: '',
      temp_password: '',
      photo: '',
      currentPhoto: '',
      company_photo: '',
      currentCompanyPhoto: '',
    },
  });

  useEffect(() => {
    if (profile && !isEmpty(profile) && !watch('name')) {
      console.log(profile);
      
      setValue('name', profile.name || '-');
      setValue('email', profile.email || '-');
      setValue('phone_number', profile.phone || '-');
      setValue('address', profile.address || '-');
      setProfileImagePreview(profile.photo || '');
      setCompanyImagePreview(profile.company_photo || '');
    }
  }, [profile, setValue, watch]);

  console.log(profile?.photo);

  const handleTextClick = (type) => {
    if (type === 'profile') {
      profileFileInputRef.current.click();
    } else if (type === 'company') {
      companyFileInputRef.current.click();
    }
  };

  const handleFileChange = (event, type) => {
    const file = event.target.files[0];
    if (file) {
      if (type === 'profile') {
        setValue('photo', file);
        setProfileImagePreview(URL.createObjectURL(file));
      } else if (type === 'company') {
        setValue('company_photo', file);
        setCompanyImagePreview(URL.createObjectURL(file));
      }
    }
  };

  const onSubmit = () => {
    const formData = new FormData();
    formData.append('name', watch('name'));
    formData.append('email', watch('email'));
    formData.append('phone_number', watch('phone_number'));
    formData.append('address', watch('address'));
    formData.append('photo', watch('photo'));

    if (watch('password') !== '') {
      formData.append('new_password', watch('password'));
    }

    mutate(
      {
        dataProfile: formData,
      },
      {
        onSuccess: () => {
          toast({
            title: 'Success',
            description: 'Berhasil mengupdate data diri!',
            duration: 3000,
            status: 'success',
            position: 'top',
            isClosable: true,
          });
          saveUserData(watch());
        },
        onError: (err) => {
          console.error(err);
          toast({
            title: 'Error',
            description: err?.response?.data?.errors || `Something went wrong!`,
            duration: 3000,
            status: 'error',
            position: 'top',
            isClosable: true,
          });
        },
      }
    );
  };

  const fetchDataImage = async () => {
    try {
      const response = await httpClient({
        method: 'GET',
        baseURL: 'https://api-admin-hcms-rework.scalastaging.online',
        url: '/download/profile_photo_admin/UUID-GENERATED-HERE',
        responseType: 'blob',
      });

      const profilePhotoUrl = URL.createObjectURL(response.data);

      // const profilePhotoResponse = await axios.get('https://api-admin-hcms-rework.scalastaging.online/download/profile_photo_admin/UUID-GENERATED-HERE', {
      //   responseType: "blob",
      //   headers,
      //   httpsAgent: new (require("https").Agent)({ rejectUnauthorized: false }),
      // });

      // const responseData = response?.data?.data || [];
      // console.log(profilePhotoUrl);
      setProfileImagePreview(profilePhotoUrl);
      // setData(responseData);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  useEffect(() => {
    fetchDataImage();
  }, []);

  return (
    <>
      {!isEmpty(profile) && (
        <Box className={styles['editProfile-container']}>
          <Text className={styles['editProfile-title']}>Edit Profil</Text>
          <Flex className={styles['editProfile-change-img-container']}>
            <Flex className={styles['editProfile-change-img-wrapper']}>
              <Box className={styles['editProfile-img-wrapper']}>
                <Image
                  className={styles['editProfile-img']}
                  src={profileImagePreview}
                  alt="profile-pict"
                />
              </Box>
              <Text
                onClick={() => handleTextClick('profile')}
                className={styles['editProfile-change-img-text']}
              >
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
          </Flex>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box className={styles['editProfile-upper-input']}>
              <Flex className={styles['editProfile-input-wrapper']}>
                <Text className={styles['editProfile-input-text']}>
                  Nama Lengkap:
                </Text>
                <Input
                  className={styles['editProfile-input']}
                  type="text"
                  {...register('name')}
                />
              </Flex>
              <Flex className={styles['editProfile-input-wrapper']}>
                <Text className={styles['editProfile-input-text']}>
                  Alamat E-Mail:
                </Text>
                <Input
                  className={styles['editProfile-input']}
                  type="email"
                  {...register('email')}
                />
              </Flex>
              <Flex className={styles['editProfile-input-wrapper']}>
                <Text className={styles['editProfile-input-text']}>
                  Nomor Handphone:
                </Text>
                <Input
                  className={styles['editProfile-input']}
                  type="text"
                  {...register('phone_number', { pattern: /^[0-9]*$/ })}
                />
              </Flex>
              <Flex className={styles['editProfile-input-wrapper']}>
                <Text className={styles['editProfile-input-text']}>
                  Alamat Domisili:
                </Text>
                <Input
                  className={styles['editProfile-input']}
                  type="text"
                  {...register('address')}
                />
              </Flex>
            </Box>
            <Flex className={styles['editProfile-btn-container']}>
              <Button
                type="submit"
                className={styles['editProfile-btn']}
                paddingX={10}
              >
                Save
              </Button>
            </Flex>
            <Divider className={styles['editProfile-divider']} />
            <Box className={styles['editProfile-lower-input']}>
              <Flex className={styles['editProfile-input-wrapper']}>
                <Text className={styles['editProfile-input-text']}>
                  Ganti Password:
                </Text>
                <Input
                  className={styles['editProfile-input']}
                  type="password"
                  placeholder="Masukkan Password Baru"
                  {...register('password')}
                />
              </Flex>
            </Box>
            <Flex className={styles['editProfile-btn-container']}>
              <Button
                type="submit"
                className={styles['editProfile-btn']}
                paddingX={6}
              >
                Change Password
              </Button>
            </Flex>
          </form>
        </Box>
      )}
    </>
  );
};

export default EditProfile;
