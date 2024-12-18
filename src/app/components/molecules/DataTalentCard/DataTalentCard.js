import { Box, Button, Flex, Icon, Image } from '@chakra-ui/react';
import React from 'react'
import styles from './DataTalentCard.styles';
import Icons, { DownloadIcon, EyeIcon } from '../../icons';
import { employeeTypeOptions } from './shared/general';
import { noop } from '@/app/utils/helpers';

const DataTalentCard = ({ data = [], onPress = noop }) => {
  const { employee_id, employee_type, username, photo } = data;

  console.log(photo);

  const employeeTypeBadge = employeeTypeOptions.find((item) => item.id === employee_type);

  const onHandlePress = () => {
    onPress(employee_id);
  };

  return (
    <Flex style={styles.container}>
      <Box borderWidth={3} borderColor='#AE445A' borderRadius='100%'>
        <Image
          src={photo}
          width={'38px'}
          height={'38px'}
          borderRadius={'100%'}
        />
      </Box>
      <div style={{ width: '20px' }} />
      <Flex alignItems='center' flex={1}>
        <h2 style={styles.title} onClick={onHandlePress}>{username || '-'}</h2>
      </Flex>
      <Box md alignItems='center'>
        <Flex style={styles.content}>
          <Box width={100} textAlign='center' fontSize={10} borderRightWidth={1} borderColor='#AE445A'>
            -
          </Box>
          <Box width={100} textAlign='center' fontSize={10} borderRightWidth={1} borderColor='#AE445A'>
            None
          </Box>
          <Box width={50}
            textAlign="center"
            fontSize={10}
            borderRightWidth={1}
            borderColor="#AE445A"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flex={1}>
            <EyeIcon />
          </Box>
          <Box width={50}
            textAlign="center"
            fontSize={10}
            borderRightWidth={1}
            borderColor="#AE445A"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flex={1}>
            <DownloadIcon />
          </Box>
          <Box width={100} textAlign='center' fontSize={10}>
            non_selection
          </Box>
        </Flex>
      </Box>
      <Box flex={1}>
        <div style={styles.button}>
          <Button height={8} paddingX={8} fontSize={10} backgroundColor={employeeTypeBadge.color} color='#FFFFFF'>{employeeTypeBadge.name || '-'}</Button>
        </div>
      </Box>
    </Flex>
  )
}

export default DataTalentCard;