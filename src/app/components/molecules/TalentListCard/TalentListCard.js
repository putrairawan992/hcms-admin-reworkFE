import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Icon,
  Image,
  Switch,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import styles from './TalentListCard.styles';
import Icons, { DownloadIcon, EditIcon, EyeIcon } from '../../icons';
import { employeeTypeOptions } from './shared/general';
import { noop } from '@/app/utils/helpers';
import { Gap } from '../../atoms';

const TalentListCard = ({ data = [], onPress = noop }) => {
  const { employee_id, employee_type, username, photo } = data;

  console.log(photo);

  const employeeTypeBadge = employeeTypeOptions.find(
    (item) => item.id === employee_type
  );

  const onHandlePress = () => {
    onPress(employee_id);
  };

  return (
    <Flex marginBottom={4}>
      <Flex
        flex={1}
        style={{
          borderWidth: 2,
          borderColor: '#AE445A',
          borderRadius: 16,
          padding: 16,
        }}
        alignItems="center"
      >
        <Image
          style={{ width: 80, height: 80, borderRadius: 5 }}
          src="/images/dummy-avatar.jpeg"
          alt="image"
        />
        <Gap width={4} />
        <Box flex={1}>
          <Text color="#404041" fontWeight={700} fontSize={16}>
            Maudy Ayunda
          </Text>
          <Text color="#404041" fontWeight={400} fontSize={12}>
            Diploma/Sarjana S1
          </Text>
          <Text color="#404041" fontWeight={400} fontSize={12}>
            0 - 2 tahun
          </Text>
          <Text color="#404041" fontWeight={400} fontSize={12}>
            Skor: 85
          </Text>
        </Box>
        <Text color="#404041" fontWeight={400} fontSize={14}>
          2 Mei 2023 | 09:00 WIB
        </Text>
      </Flex>
    </Flex>
  );
};

export default TalentListCard;
