import React from 'react';
import { Box, Flex, Text, Button } from '@chakra-ui/react';
import styles from './BlastNotification.styles';
import { formatDate, noop } from '@/app/utils/helpers';
import { Gap } from '../../atoms';
import { DeleteIcon } from '@chakra-ui/icons';

const BlastNotificationCard = ({ data = [], onPress = noop }) => {
  const { id, title, type_user, created_at, } = data;

  const onHandlePress = () => {
    onPress(id);
  };

  return (
    <Box mb={3}>
      <Flex borderWidth={1} borderColor="#AE445A" flex={1} padding={4} borderRadius={12} alignItems='center' justifyContent='space-between'>
        <Box flex={1}>
          <Text fontSize={14} fontWeight={700} color="#404041">{title || '-'}</Text>
        </Box>
        <Box flex={1}>
          <Text fontSize={12} fontWeight={400} color="#404041">{type_user || '-'}</Text>
        </Box>
        <Box flex={1}>
          <Text fontSize={12} fontWeight={400} color="#404041">{formatDate(created_at, 'DD MMM YYYY')}</Text>
        </Box>
        <Box>
          <Gap width={12} />
          <DeleteIcon />
        </Box>
        <Box>
          <Button style={styles.button} paddingX={8} onClick={onHandlePress}>
            Detail
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default BlastNotificationCard;
