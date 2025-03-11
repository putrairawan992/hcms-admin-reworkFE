'use client';
import React from 'react';
import {
  Box,
  Button,
  Divider,
  Flex,
  Input,
  Text,
  useToast,
  Image,
  Spinner,
} from '@chakra-ui/react';
import styles from '../styles/loginPage.module.css';
import { useRouter } from 'next/navigation';
import { useLogin } from '../api/auth';
import { useState } from 'react';
import { httpClient } from '../utils/network';
import { useProfileStore } from '@/stores/profileStore';
import { saveUserData } from '../utils/localStorage';

const LoginPage = () => {
  const toast = useToast();
  const { mutate } = useLogin();
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
  const [emailForReset, setEmailForReset] = useState('');
  const setProfile = useProfileStore((state) => state.setProfile);

  const fetchDataProfile = async () => {
    try {
      const response = await httpClient({
        method: 'GET',
        url: '/admin/detail/account',
      });

      const responseData = response?.data?.data || [];
      console.log(responseData);
      saveUserData(responseData);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  const loginHandler = () => {
    if (!username && !password) {
      return false;
    }


    setLoading(true);
    mutate(
      {
        username,
        password,
      },
      {
        onSuccess: async (res) => {
          toast({
            title: 'Success',
            description: 'Anda berhasil login',
            status: 'success',
            duration: 3000,
            position: 'top',
            isClosable: true,
          });
          document.cookie = `userToken=${res.data.token}; path=/; max-age=86400; SameSite=Lax`;
          fetchDataProfile();
          setLoading(false);
          router.push('/');
        },
        onError: () => {
          setLoading(false);
          toast({
            title: 'Error',
            description: 'Email atau password salah, silahkan coba lagi',
            status: 'error',
            duration: 3000,
            position: 'top',
            isClosable: true,
          });
        },
      }
    );
  };

  const handleResetPassword = async () => {
    try {
      const response = await httpClient({
        method: 'POST',
        url: '/admin/forget',
        data: {
          email: emailForReset,
        },
      });
      
      toast({
        title: 'Berhasil',
        description: 'Link reset password telah dikirim ke email Anda.',
        status: 'success',
        duration: 4000,
        position: 'top',
        isClosable: true,
      });
  
      setShowForgotPasswordModal(false); // Close the modal after success
      setEmailForReset(''); // Clear email input
    } catch (error) {
      console.log('response');
      console.log(error);

      toast({
        title: 'Gagal',
        description: error?.response.data.errors || 'Terjadi kesalahan, silahkan coba lagi.',
        status: 'error',
        duration: 4000,
        position: 'top',
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Flex className={styles['loginpage-container']}>
        <Box className={styles['loginpage-left-wrapper']}>
          <Text className={styles['login-left-title']}>Welcome to Scala!</Text>
          <Box className={styles['input-section-container']}>
            <Box className={styles['logo-container']}>
              <Image src={'/images/scala.png'} width={'87px'} height={'44px'} />
            </Box>
            <Box className={styles['login-section-wrapper']}>
              <Input
                className={styles['input-container']}
                type="text"
                placeholder="Masukkan e-mail atau username"
                onChange={(e) => setUsername(e.target.value)}
              />
              <Input
                className={styles['input-container']}
                type="password"
                placeholder="Masukkan password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                background={username && password ? '#F39F5A' : '#b6b6b6'}
                onClick={loginHandler}
                className={styles['login-button']}
              >
                Login
              </Button>
              <Text
                className={styles['forgot-password-text']}
                onClick={() => setShowForgotPasswordModal(true)}
                style={{ cursor: 'pointer', textDecoration: 'underline' }}
              >
                Lupa Password
              </Text>
              <Divider />
              <Text className={styles['register-text']}>
                Belum ada akun? Silahkan daftar{' '}
                <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>
                  disini
                </span>
              </Text>
              <Text className={styles['copyright-text']}>
                © SCALA. 2023. All Rights Reserved
              </Text>
            </Box>
          </Box>
        </Box>
        <Box className={styles['loginpage-right-wrapper']}>
          <Text className={styles['loginpage-right-title']}>
            “Every problem is a gift - without problems we would not grow.”
          </Text>
          <Image
            src={'/images/login-right.png'}
            alt="Login Right Side"
            width={500}
            height={500}
          />
        </Box>
      </Flex>

      {/* Modal Forgot Password */}
      {showForgotPasswordModal && (
        <Box
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
        >
          <Box
            style={{
              background: 'white',
              padding: '30px',
              borderRadius: '8px',
              width: '400px',
              maxWidth: '90%',
              textAlign: 'center',
            }}
          >
            <Text style={{ marginBottom: '20px', fontSize: '18px', fontWeight: 'bold' }}>
              Reset Password
            </Text>
            <Input
              placeholder="Masukkan e-mail Anda"
              value={emailForReset}
              onChange={(e) => setEmailForReset(e.target.value)}
              style={{ marginBottom: '20px' }}
            />
            <Flex justifyContent="space-between">
              <Button
                onClick={() => setShowForgotPasswordModal(false)}
                style={{
                  backgroundColor: '#b6b6b6',
                  color: 'white',
                  width: '48%',
                }}
              >
                Batal
              </Button>
              <Button
                onClick={handleResetPassword}
                style={{
                  backgroundColor: '#F39F5A',
                  color: 'white',
                  width: '48%',
                }}
                isDisabled={!emailForReset}
              >
                Reset
              </Button>
            </Flex>
          </Box>
        </Box>
      )}
    </>
  );
};

export default LoginPage;