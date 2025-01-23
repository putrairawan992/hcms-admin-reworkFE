'use client';
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import styles from '../styles/inbox.module.css';
import { useState } from 'react';
import 'moment/locale/id';
import { isEmpty } from 'lodash';
import { TalentListCard, MitraListCard } from '../components/molecules';
import useListMitra from './useListMitra';
import { Gap } from '../components/atoms';
import { AddIcon, Search2Icon } from '@chakra-ui/icons';
import Link from 'next/link';

const ListMitra = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [years, setYears] = useState('2024');
  const [month, setMonth] = useState('10');
  const [currentData, setCurrentData] = useState();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const dataMitra = JSON.parse(localStorage.getItem('mitra'));
  console.log({ dataMitra });
  const {
    data,
    filters,
    loading,
    productDigitalData,
    onHandlePress,
    onChangeSelect,
  } = useListMitra();

  const RenderContent = () => {
    if (!isEmpty(data)) {
      return data.map((item) => {
        return <TalentListCard data={item} onPress={onHandlePress} />;
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
        <Text className={styles['inbox-title']}>List Mitra</Text>
      </Flex>
      <Gap height={6} />
      <Flex>
        <Flex flex={1}>
          <Box>
            <InputGroup className={styles['input-container']}>
              <Input
                className={styles['admin-role-input']}
                type="text"
                placeholder="Cari mitra"
              />
              <InputRightElement>
                <Search2Icon />
              </InputRightElement>
            </InputGroup>
          </Box>
          <Gap width={2} />
          <Link href="/list-mitra/add">
            <Button className={styles['inbox-btn']} marginRight={2}>
              <AddIcon marginRight={4} />
              Create Mitra Account
            </Button>
          </Link>
        </Flex>
      </Flex>

      <Gap height={6} />
      <Box style={{ borderWidth: 1, borderColor: '#EAEAEA' }} />
      <Gap height={6} />
      {/* {loading ? <ListEmpty /> : <RenderContent />} */}
      <MitraListCard data={dataMitra} onPress={onHandlePress} />
    </Box>
  );
};

export default ListMitra;
