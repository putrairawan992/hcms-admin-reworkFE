'use client';
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Stepper,
  Text,
  useDisclosure,
  Group,
} from '@chakra-ui/react';
import styles from '../../styles/inbox.module.css';
import { useState } from 'react';
import 'moment/locale/id';
import { isEmpty } from 'lodash';
import {
  FormFields,
  ListEmpty,
  TalentListCard,
} from '../../components/molecules';
import useDataTalent from '../useListMitra';
import { moveScreen } from '../../utils/helpers';
import { Gap, SelectField } from '../../components/atoms';
import {
  specializationOptions,
  competenceOptions,
  educationOptions,
  experienceOptions,
} from '../Shared/General';
import { AddIcon, Search2Icon } from '@chakra-ui/icons';
import { ShareIcon } from '../../components/icons';

const TalentListAdd = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [years, setYears] = useState('2024');
  const [month, setMonth] = useState('10');
  const [currentData, setCurrentData] = useState();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const {
    data,
    filters,
    loading,
    productDigitalData,
    onHandlePress,
    onChangeSelect,
  } = useDataTalent();

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
        <Text className={styles['inbox-title']}>
          List Mitra / Create Mitra Account
        </Text>
      </Flex>
      <Gap height={6} />
      <Box style={{ borderWidth: 1, borderColor: '#EAEAEA' }} />
      <Gap height={6} />
      <Flex>
        <FormFields
          theme="up-down"
          label="Nama"
          placeholder="Masukan nama mitra"
        />
        <Gap width={4} />
        <FormFields
          theme="up-down"
          label="Username"
          placeholder="Masukan username mitra"
        />
      </Flex>
      <Gap height={4} />
      <FormFields
        theme="up-down"
        label="E-Mail"
        placeholder="Masukan E-Mail mitra"
      />
      <Gap height={8} />
      <Button className={styles['inbox-btn']} paddingX={8}>
        Create Account
      </Button>
    </Box>
  );
};

export default TalentListAdd;
