import React from 'react';
import styles from './HistoryCard.styles';
import { Box, Flex, Image } from '@chakra-ui/react';

const HistoryTalentCard = ({ data = [] }) => {
  const { product_digital_name, total_employee } = data;

  return (
    <Flex
      style={{
        borderWidth: 1,
        flex: 1,
        padding: '12px',
        borderRadius: '10px',
        borderColor: '#AE445A',
        marginRight: '8px',
      }}
    >
      <Box
        style={{
          borderWidth: 3,
          borderColor: '#AE445A',
          borderRadius: '50%',
          padding: '2px',
        }}
      >
        <Image
          src={
            'https://ffis3.is3.cloudhost.id/profile/photo/908/Maudy-Ayunda.jpg'
          }
          style={{ width: '50px', height: '50px', borderRadius: '50%' }}
        />
      </Box>
      <div style={{ width: '12px' }} />
      <Box flex={1} alignItems="center" display="flex">
        <Box>
          <h2 style={styles.title}>{product_digital_name || '-'}</h2>
          <h2 style={styles.subtitle}>{total_employee} Orang</h2>
        </Box>
      </Box>
    </Flex>
  );
};

export default HistoryTalentCard;
