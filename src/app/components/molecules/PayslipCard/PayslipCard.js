import React from 'react';
import { Box, Button, Flex, Image } from '@chakra-ui/react';
import styles from './PayslipCard.styles';
import { DownloadIcon } from '../../icons';
import { noop } from '@/app/utils/helpers';

const PayslipCard = ({ data = [], onClick = noop }) => {
  const { product_digital_name, file } = data;

  const onHandleClick = () => {
    onClick(file);
  };

  return (
    <Flex style={styles.container} justifyContent="space-between">
      <Flex alignItems="center" flex={1}>
        <Box style={styles.imgWrapper}>
          <Image
            style={styles.img}
            src="/images/company-dummy.jpeg"
            alt="image"
          />
        </Box>
        <div style={{ width: '20px' }} />
        <Box>
          <h2 style={styles.title}>{product_digital_name}</h2>
        </Box>
      </Flex>
      <Flex marginRight={6}>
        <Box
          width={50}
          textAlign="center"
          fontSize={10}
          display="flex"
          alignItems="center"
          justifyContent="center"
          marginRight={10}
          flex={1}
        >
          <DownloadIcon />
        </Box>
        <Button style={styles.button} onClick={onHandleClick}>
          Detail
        </Button>
      </Flex>
    </Flex>
  );
};

export default PayslipCard;
