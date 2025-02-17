'use client';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogOverlay,
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  GridItem,
  InputGroup,
  InputRightElement,
  NumberInput,
  NumberInputField,
  Text,
  Image,
} from '@chakra-ui/react';
import styles from '../../styles/remuneration.module.css';
import { useState, useEffect, useRef } from 'react';
import { httpClient } from '@/app/utils/network';
import { useDisclosure, useToast } from '@chakra-ui/react';

const Remuneration = () => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  const [data, setData] = useState({
    bulan: {
      basic_salary: '',
      position_allowance: '',
      bpjstk_jkk_company: '',
      bpjstk_jkm_company: '',
      bpjstk_jht_company: '',
      bpjstk_jp_company: '',
      premi_bpjskes_company: '',
      tax_company: '',
      bpjstk_jht_employee: '',
      bpjstk_jp_employee: '',
      premi_bpjskes_employee: '',
    },
    kontrak: {
      basic_salary: '',
      position_allowance: '',
      bpjstk_jkk_company: '',
      bpjstk_jkm_company: '',
      bpjstk_jht_company: '',
      bpjstk_jp_company: '',
      premi_bpjskes_company: '',
      tax_company: '',
      bpjstk_jht_employee: '',
      bpjstk_jp_employee: '',
      premi_bpjskes_employee: '',
    },
  });

  const fetchData = async () => {
    try {
      const response = await httpClient({
        method: 'GET',
        url: '/admin/remuneration/calculates',
      });

      if (response?.data?.data) {
        setData(response.data.data);
      }
    } catch (error) {
      console.error('Failed to fetch data:', error);
      toast({
        title: 'Error',
        description: 'Failed to fetch data',
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top',
      });
    }
  };

  const handleInputChange = (e) => {
    const value = Number(e.target.value);
    const [section, field] = e.target.name.split('.');

    if (
      isNaN(value) ||
      value < 0 ||
      value > 100 ||
      /^0{2,}/.test(e.target.value)
    ) {
      return;
    }

    setData((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [field]: value,
      },
    }));
  };

  const onSubmit = async () => {
    try {
      await httpClient({
        method: 'POST',
        url: '/admin/remuneration/calculates',
        data: data,
      });
      onOpen();
    } catch (error) {
      toast({
        title: 'Error',
        description: error?.response?.data?.message || 'Something went wrong!',
        duration: 3000,
        status: 'error',
        position: 'top',
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderInput = (section, field, label) => (
    <Box>
      <Flex align={'center'} justify={'space-between'} wrap="nowrap">
        <Text className={styles['remuneration-search-text']}>{label}:</Text>
        <InputGroup className={styles['remuneration-input-container']}>
          <NumberInput
            name={`${section}.${field}`}
            min={0}
            max={100}
            step="any"
            value={data[section][field] || ''}
            onChangeCapture={handleInputChange}>
            <NumberInputField
              className={styles['remuneration-input']}
              placeholder="0"
            />
          </NumberInput>
          <InputRightElement className={styles['remuneration-input-suffix']}>
            %
          </InputRightElement>
        </InputGroup>
      </Flex>
    </Box>
  );

  return (
    <>
      <Box className={styles['remuneration-container']}>
        <Text className={styles['remuneration-title']} mb={'1rem'}>
          Setup - Remuneration
        </Text>
        <Text className={styles['remuneration-subtitle']} mb={'1rem'}>
          Skema Normal & Khusus
        </Text>
        <Grid templateColumns="1fr auto 1fr;" gap="70px" mb={'2rem'}>
          <GridItem>
            <Text className={styles['remuneration-subtitle']}>
              Remunerasi Per Bulan
            </Text>
          </GridItem>
          <GridItem>
            <span></span>
          </GridItem>
          <GridItem>
            <Text className={styles['remuneration-subtitle']}>
              Remunerasi Sisa kontrak
            </Text>
          </GridItem>
        </Grid>

        <Grid templateColumns="1fr auto 1fr;" gap="70px">
          <GridItem>
            <Flex direction={'column'} gap={'12px'} wrap="nowrap" mb={'2rem'}>
              <Text className={styles['remuneration-form-title']} mb={'1rem'}>
                Penambah Gaji
              </Text>
              {renderInput('bulan', 'basic_salary', 'Basic Salary')}
              {renderInput('bulan', 'position_allowance', 'Tunjangan Posisi')}
              {renderInput('bulan', 'bpjstk_jkk_company', 'BPJSTK Iuran JKK')}
              {renderInput('bulan', 'bpjstk_jkm_company', 'BPJSTK Iuran JKM')}
              {renderInput('bulan', 'bpjstk_jht_company', 'BPJSTK Iuran JHT')}
              {renderInput('bulan', 'bpjstk_jp_company', 'BPJSTK Iuran JP')}
              {renderInput('bulan', 'premi_bpjskes_company', 'Premi BPJSKES')}
              {renderInput('bulan', 'tax_company', 'Pajak')}
            </Flex>

            <Flex direction={'column'} gap={'12px'} wrap="nowrap" mb={'1rem'}>
              <Text className={styles['remuneration-form-title-2']} mb={'1rem'}>
                Pengurang Gaji
              </Text>
              {renderInput('bulan', 'bpjstk_jht_employee', 'BPJSTK Iuran JHT')}
              {renderInput('bulan', 'bpjstk_jp_employee', 'BPJSTK Iuran JP')}
              {renderInput('bulan', 'premi_bpjskes_employee', 'Premi BPJSKES')}
            </Flex>

            <Flex width={'100%'} justify={'end'} marginTop={'2rem'}>
              <Button
                type="button"
                className={styles['remuneration-btn']}
                onClick={onSubmit}>
                Save
              </Button>
            </Flex>
          </GridItem>

          <GridItem>
            <Divider
              size="lg"
              borderWidth="2px"
              borderColor="#AE445A"
              opacity="1"
              orientation="vertical"
            />
          </GridItem>

          <GridItem>
            <Flex direction={'column'} gap={'12px'} wrap="nowrap" mb={'2rem'}>
              <Text className={styles['remuneration-form-title']} mb={'1rem'}>
                Penambah Gaji
              </Text>
              {renderInput('kontrak', 'basic_salary', 'Basic Salary')}
              {renderInput('kontrak', 'position_allowance', 'Tunjangan Posisi')}
              {renderInput('kontrak', 'bpjstk_jkk_company', 'BPJSTK Iuran JKK')}
              {renderInput('kontrak', 'bpjstk_jkm_company', 'BPJSTK Iuran JKM')}
              {renderInput('kontrak', 'bpjstk_jht_company', 'BPJSTK Iuran JHT')}
              {renderInput('kontrak', 'bpjstk_jp_company', 'BPJSTK Iuran JP')}
              {renderInput('kontrak', 'premi_bpjskes_company', 'Premi BPJSKES')}
              {renderInput('kontrak', 'tax_company', 'Pajak')}
            </Flex>

            <Flex direction={'column'} gap={'12px'} wrap="nowrap" mb={'1rem'}>
              <Text className={styles['remuneration-form-title-2']} mb={'1rem'}>
                Pengurang Gaji
              </Text>
              {renderInput(
                'kontrak',
                'bpjstk_jht_employee',
                'BPJSTK Iuran JHT'
              )}
              {renderInput('kontrak', 'bpjstk_jp_employee', 'BPJSTK Iuran JP')}
              {renderInput(
                'kontrak',
                'premi_bpjskes_employee',
                'Premi BPJSKES'
              )}
            </Flex>

            <Flex width={'100%'} justify={'end'} marginTop={'2rem'}>
              <Button
                type="button"
                className={styles['remuneration-btn']}
                onClick={onSubmit}>
                Save
              </Button>
            </Flex>
          </GridItem>
        </Grid>
      </Box>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogBody className={styles['remuneration-success']}>
              <Flex
                direction={'column'}
                align={'center'}
                justify={'center'}
                gap={'24px'}>
                <Image src="/images/Success-Circle.png" />
                <Text>Data berhasil disimpan</Text>
              </Flex>
            </AlertDialogBody>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default Remuneration;
