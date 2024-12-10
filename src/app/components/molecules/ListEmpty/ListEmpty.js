import React from 'react'
import { Box, Image } from '@chakra-ui/react';
import styles from './ListEmpty.styles';

const ListEmpty = () => {
  return (
    <Box style={styles.container}>
      <Image src="/images/loading.gif" width="10" height="10" />
    </Box>
  );
}

export default ListEmpty;