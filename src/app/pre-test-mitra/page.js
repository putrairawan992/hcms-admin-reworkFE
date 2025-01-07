'use client';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Switch,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import styles from '../styles/inbox.module.css';
import { useState } from 'react';
import moment from 'moment';
import 'moment/locale/id';
import { isEmpty } from 'lodash';

import { PretestCard, SendDocumentCard } from '../components/molecules';
import usePretestMitra from './usePretestMitra';
import { moveScreen } from '../utils/helpers';
import { Gap, SelectField } from '../components/atoms';
import {
  AlphabetIcon,
  BrainIcon,
  CodeIcon,
  EyeIcon,
  NumberIcon,
  PhotoIcon,
  VideoIcon,
} from '../components/icons';
import { ChevronRightIcon, Search2Icon } from '@chakra-ui/icons';

moment.locale('id');

const PretestMitra = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [years, setYears] = useState('2024');
  const [month, setMonth] = useState('10');
  const [currentData, setCurrentData] = useState();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const { data } = usePretestMitra();

  const renderData = () => {
    return data.map((item) => {
      return <SendDocumentCard data={item} />;
    });
  };

  return (
    <Box className={styles['inbox-container']}>
      <Flex align={'center'} justify={'space-between'}>
        <Box>
          <Text className={styles['inbox-title']}>Modul Rangkaian Tes</Text>
          <Text
            fontSize={12}
            fontWeight={300}
            color="#404041"
            fontStyle="italic"
          >
            Silahkan atur soal yang akan dijadikan Pre-Test bagi calon Karyawan
          </Text>
        </Box>
        <Button className={styles['inbox-btn']}>Save</Button>
      </Flex>
      <Gap height={4} />
      <Flex justifyContent="center" alignItems="center">
        <Box flex={1} alignItems="center">
          <InputGroup className={styles['input-container']}>
            <Input
              className={styles['admin-role-input']}
              type="text"
              placeholder="Ketikkan Nama Modul Rangkaian Tes"
            />
          </InputGroup>
        </Box>
        <Gap width={2} />
        <Box>
          <SelectField placeholder="Buat Module Baru" />
        </Box>
        <Button className={styles['inbox-btn']}>Create</Button>
      </Flex>
      <Gap height={8} />
      <Box flex={1}>
        <Flex flex={1} flexDirection="column">
          <Text color="#404041" fontWeight={700} fontSize={16}>
            Kategori: Wawancara Mandiri
          </Text>
          <Gap height={4} />
          <Flex>
            <PretestCard
              title="Interview Dasar"
              placeholder="Pilih Interview Dasar"
              icon={<VideoIcon color="#FFFFFF" />}
            />
            <Gap width={4} />
            <PretestCard
              title="Interview User"
              placeholder="Pilih Interview User"
              icon={<VideoIcon color="#FFFFFF" />}
            />
          </Flex>
        </Flex>
        <Gap height={6} />
        <Flex flex={1} flexDirection="column">
          <Text color="#404041" fontWeight={700} fontSize={16}>
            Kategori: Tes Kepribadian
          </Text>
          <Gap height={4} />
          <Flex>
            <PretestCard
              title="Tes Potensi Akademik"
              placeholder="Pilih Tes Potensi Akademik"
              icon={<AlphabetIcon color="#FFFFFF" />}
              bgGradient="linear-gradient(90deg, #F39F5A 0%, #AE445A 100%)"
            />
            <Gap width={4} />
            <PretestCard
              title="Psikotest: DISC"
              placeholder="Pilih Psikotest: Disc"
              icon={<BrainIcon color="#FFFFFF" />}
              bgGradient="linear-gradient(90deg, #F39F5A 0%, #AE445A 100%)"
            />
            <Gap width={4} />
            <PretestCard
              title="Tes IQ 2023"
              placeholder="Pilih Tes IQ 2023"
              icon={<BrainIcon color="#FFFFFF" />}
              bgGradient="linear-gradient(90deg, #3B78C2 0%, #AE445A 100%)"
            />
            <Gap width={8} />
            <Flex
              alignItems="center"
              display="flex"
              justifyContent="center"
              textAlign="center"
              flexDirection="column"
            >
              <Box
                bgGradient={'linear-gradient(90deg, #F39F5A 0%, #AE445A 100%)'}
                borderRadius={100}
                width={8}
                height={8}
                alignItems="center"
                justifyContent="center"
                display="flex"
              >
                <ChevronRightIcon color="#FFFFFF" fontSize={28} />
              </Box>
            </Flex>
          </Flex>
        </Flex>
        <Gap height={6} />
        <Flex flex={1} flexDirection="column">
          <Text color="#404041" fontWeight={700} fontSize={16}>
            Kategori: Tes Kompetensi
          </Text>
          <Gap height={4} />
          <Flex>
            <PretestCard
              title="Tes Excel"
              placeholder="Pilih Tes Excel"
              icon={<NumberIcon color="#FFFFFF" />}
              bgGradient="linear-gradient(90deg, #8364BA 0%, #AE445A 100%)"
            />
            <Gap width={4} />
            <PretestCard
              title="Tes Photoshop"
              placeholder="Pilih Tes Photoshop"
              icon={<PhotoIcon color="#FFFFFF" />}
              bgGradient="linear-gradient(90deg, #8364BA 0%, #AE445A 100%)"
            />
            <Gap width={4} />
            <PretestCard
              title="Tes Coding"
              placeholder="Pilih Tes Coding"
              icon={<CodeIcon color="#FFFFFF" />}
              bgGradient="linear-gradient(90deg, #404041 0%, #AE445A 100%)"
            />
            <Gap width={8} />
            <Flex
              alignItems="center"
              display="flex"
              justifyContent="center"
              textAlign="center"
              flexDirection="column"
            >
              <Box
                bgGradient={'linear-gradient(90deg, #F39F5A 0%, #AE445A 100%)'}
                borderRadius={100}
                width={8}
                height={8}
                alignItems="center"
                justifyContent="center"
                display="flex"
              >
                <ChevronRightIcon color="#FFFFFF" fontSize={28} />
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default PretestMitra;
