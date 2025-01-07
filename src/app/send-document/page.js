'use client';
import {
  Box,
  Button,
  Flex,
  Select,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import styles from '../styles/inbox.module.css';
import { useState } from 'react';
import moment from 'moment';
import 'moment/locale/id';
import { isEmpty } from 'lodash';

import { DataTalentCard, SendDocumentCard } from '../components/molecules';
import useSendDocument from './useSendDocument';
import { moveScreen } from '../utils/helpers';

moment.locale('id');

const SendDocument = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [years, setYears] = useState('2024');
  const [month, setMonth] = useState('10');
  const [currentData, setCurrentData] = useState();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const { data } = useSendDocument();

  const renderData = () => {
    return data.map((item) => {
      return <SendDocumentCard data={item} />;
    });
  };

  return (
    <Box className={styles['inbox-container']}>
      <Flex align={'center'} justify={'space-between'}>
        <Text className={styles['inbox-title']}>Send Document</Text>
        <Box>
          <Button
            onClick={() => moveScreen('/data-talent/history')}
            className={styles['inbox-btn']}
            marginRight={2}
          >
            History
          </Button>
          <Button onClick={onOpen} className={styles['inbox-btn']} ma>
            Download All
          </Button>
        </Box>
      </Flex>
      <Flex marginBottom={4} marginTop={10}>
        <Box marginRight={2} flex={1}>
          <Text className={styles['inbox-filter-text']}>Tahun</Text>
          <Select
            value={years}
            onChange={(e) => setYears(e.target.value)}
            className={styles['inbox-filter-select']}
          >
            <option value="all" selected>
              Semua
            </option>
          </Select>
        </Box>
        <Box marginRight={2} flex={1}>
          <Text className={styles['inbox-filter-text']}>Bulan</Text>
          <Select
            value={years}
            onChange={(e) => setYears(e.target.value)}
            className={styles['inbox-filter-select']}
          >
            <option value="all" selected>
              Semua
            </option>
            <option value="offering_letter_normal">
              Offering Letter Normal
            </option>
            <option value="pkwt">PKWT</option>
            <option value="offering_letter_khusus">
              Offering Letter Khusus
            </option>
            <option value="amandemen_pkwt">Amandemen PKWT</option>
            <option value="contract_freelance">Kontrak Freelance</option>
          </Select>
        </Box>
        <Box marginRight={2} flex={1}>
          <Text className={styles['inbox-filter-text']}>Digital Product</Text>
          <Select
            value={years}
            onChange={(e) => setYears(e.target.value)}
            className={styles['inbox-filter-select']}
          >
            <option value="all" selected>
              Semua
            </option>
            <option value="sent">Sent</option>
            <option value="employee_signed">Employee Signed</option>
            <option value="full_signed">Full Signed</option>
          </Select>
        </Box>
        <Box marginRight={2} flex={1}>
          <Text className={styles['inbox-filter-text']}>Berkas</Text>
          <Select
            value={years}
            onChange={(e) => setYears(e.target.value)}
            className={styles['inbox-filter-select']}
          >
            <option value="all" selected>
              Semua
            </option>
            <option value="non_selection">Non Selection</option>
            <option value="selection">Selection</option>
          </Select>
        </Box>
        <Box marginRight={2} flex={1}>
          <Text className={styles['inbox-filter-text']}>Status Karyawan</Text>
          <Select
            value={years}
            flex={1}
            onChange={(e) => setYears(e.target.value)}
            className={styles['inbox-filter-select']}
          >
            <option value="all" selected>
              Semua
            </option>
            <option value="contract">Kontrak</option>
            <option value="freelance">Freelance</option>
          </Select>
        </Box>
      </Flex>
      {!isEmpty(data) ? (
        renderData()
      ) : (
        <Flex align={'center'} justify={'center'}>
          <Text>Tidak ada data inbox</Text>
        </Flex>
      )}
    </Box>
  );
};

export default SendDocument;
