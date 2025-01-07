'use client';
import {
  Box,
  Button,
  Flex,
  Select,
  Text,
  Image,
  useDisclosure,
  InputGroup,
  Input,
  InputRightElement,
} from '@chakra-ui/react';
import styles from '../../styles/inbox.module.css';
import { useState } from 'react';
import moment from 'moment';
import 'moment/locale/id';
import { isEmpty } from 'lodash';
import Link from 'next/link';

import {
  DataTalentCard,
  HistoryTalentCard,
  BiodataField,
  MitraListCard,
  JobProviderCard,
} from '../../components/molecules';
import useDataTalentDetail from './useDataTalentDetail';
import { formatDate, moveScreen } from '@/app/utils/helpers';
import style from './styles';
import { DownloadIcon, ShareIcon } from '@/app/components/icons';
import { Gap } from '@/app/components/atoms';
import { AddIcon, Search2Icon } from '@chakra-ui/icons';

moment.locale('id');

const DataTalentDetail = () => {
  const yearOptions = [
    { value: '2024', label: '2024' },
    { value: '2023', label: '2023' },
    { value: '2022', label: '2022' },
    { value: '2021', label: '2021' },
    { value: '2020', label: '2020' },
    { value: '2019', label: '2019' },
    { value: '2018', label: '2018' },
    { value: '2017', label: '2017' },
    { value: '2016', label: '2016' },
    { value: '2015', label: '2015' },
  ];
  const monthOptions = [
    { value: '1', label: 'Januari' },
    { value: '2', label: 'Februari' },
    { value: '3', label: 'Maret' },
    { value: '4', label: 'April' },
    { value: '5', label: 'Mei' },
    { value: '6', label: 'Juni' },
    { value: '7', label: 'Juli' },
    { value: '8', label: 'Agustus' },
    { value: '9', label: 'September' },
    { value: '10', label: 'Oktober' },
    { value: '11', label: 'November' },
    { value: '12', label: 'Desember' },
  ];
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [years, setYears] = useState('2024');
  const [month, setMonth] = useState('10');
  const [currentData, setCurrentData] = useState();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const { data } = useDataTalentDetail();

  const renderData = () => {
    <Flex>
      {data.map((item) => {
        return <HistoryTalentCard data={item} />;
      })}
    </Flex>;
  };

  return (
    <Box className={styles['inbox-container']}>
      <Flex align={'center'} justify={'space-between'}>
        <Text className={styles['inbox-title']}>List Mitra / Detail</Text>
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
      <MitraListCard data={[]} isDetail={true} />
      <Text color="#AE445A" fontWeight={700} fontSize={20}>
        Job Provider
      </Text>
      <Gap height={2} />
      <JobProviderCard data={[]} />
    </Box>
  );
};

export default DataTalentDetail;
