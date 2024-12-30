import React from 'react'
import { Box, Spinner } from '@chakra-ui/react';
import styles from './ListEmpty.styles';

const ListEmpty = () => {
  return (
    <Box style={styles.container}>
      <Spinner size="lg" color="#AE445A" />
    </Box>
  );
}

export default ListEmpty;