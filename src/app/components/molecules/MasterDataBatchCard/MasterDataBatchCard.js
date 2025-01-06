import React from 'react'
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import styles from './MasterDataBatchCard.styles';
import { EyeIcon } from '../../icons';
import { Gap } from '../../atoms';
import { DeleteIcon } from '@chakra-ui/icons';
import { formatDate, noop } from '@/app/utils/helpers';

const MasterDataBatchCard = ({ data = [], onClick = noop }) => {

  const handleOnClick = () => {
    onClick(data?.bulan, data?.tahun);
  };

  return (
    <Flex style={styles.wrapper} mb={2}>
      <Flex alignItems='center'>
        <Box style={styles.imgWrapper}>
          <Image
            style={styles.img}
            src="/images/company-dummy.jpeg"
            alt="image"
          />
        </Box>
      </Flex>
      <Box flex={1} marginLeft={6}>
        <Text style={styles.title}>
          {`Batch ${data?.bulan || '-'} ${data?.tahun || '-'}`}
        </Text>
      </Box>
      <Box flex={1}>
        <Text style={styles.subtitle}>
          {formatDate(data?.created_at, 'DD MMM YYYY | HH:ss')}
        </Text>
      </Box>
      <Flex align={"center"}>
        <EyeIcon style={{ cursor: 'pointer' }} onClick={handleOnClick} />
        <Gap width={4} />
        <DeleteIcon fontSize="11px" color="#ae445a" />
      </Flex>
    </Flex>
  );
}

export default MasterDataBatchCard;