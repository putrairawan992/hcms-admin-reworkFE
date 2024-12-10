import React from 'react'
import { Box, Button, Flex, Image } from '@chakra-ui/react';
import styles from './PayslipCard.styles';
import { DownloadIcon } from '../../icons';

const PayslipCard = ({ data = [] }) => {
  const { username } = data;

  return (
    <Flex style={styles.container} justifyContent='space-between'>
      <Flex alignItems='center' flex={1}>
        <Box style={styles.imgWrapper}>
          <Image
            style={styles.img}
            src="/images/company-dummy.jpeg"
            alt="image"
          />
        </Box>
        <div style={{ width: '20px' }} />
        <Box>
          <h2 style={styles.title}>{username || '-'}</h2>
        </Box>
      </Flex>
      <Flex marginRight={6}>
        <Box width={50}
          textAlign="center"
          fontSize={10}
          display="flex"
          alignItems="center"
          justifyContent="center"
          marginRight={10}
          flex={1}>
          <DownloadIcon />
        </Box>
        <Button style={styles.button}>Detail</Button>
      </Flex>
    </Flex>
  )
}

export default PayslipCard;