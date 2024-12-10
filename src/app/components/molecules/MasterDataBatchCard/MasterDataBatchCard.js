import React from 'react'
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import styles from './MasterDataBatchCard.styles';
import { EyeIcon } from '../../icons';
import { Gap } from '../../atoms';
import { DeleteIcon } from '@chakra-ui/icons';

const MasterDataBatchCard = ({ data = [] }) => {
  return (
    <Flex style={styles.wrapper}>
      <Flex alignItems='center'>
        <Box style={styles.imgWrapper}>
          <Image
            style={styles.img}
            src="/images/company-dummy.jpeg"
            alt="image"
          />
        </Box>
        <Gap width={4} />
        <Text style={styles.title}>
          Batch December 2021
        </Text>
      </Flex>
      <Text style={styles.subtitle}>
        02 Des 2023 | 11:00 WIB
      </Text>

      <Flex align={"center"}>
        <EyeIcon style={{ marginRight: '12px' }} />
        <DeleteIcon fontSize="11px" color="#ae445a" />
      </Flex>
    </Flex>
  );
}

export default MasterDataBatchCard;