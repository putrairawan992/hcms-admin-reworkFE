import React, { memo } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import styles from './BiodataField.styles';
import { Gap } from '../../atoms';

const BiodataField = ({
  title = '',
  value = '',
  additionalValue = '',
  extraValue = '',
}) => {
  return (
    <Flex flex={1} alignItems="center" marginBottom={2}>
      <Box flex={0.5}>
        <Text fontSize={14} fontWeight="bold" color="#404041">
          {title}
        </Text>
        {title !== '' && (
          <Text fontSize={10} fontStyle="italic">
            (*dapat diubah)
          </Text>
        )}
      </Box>
      <Flex flex={1}>
        <Box
          flex={1}
          borderWidth={1}
          borderColor="#AE445A"
          borderRadius={10}
          padding="8px 16px"
        >
          <Text fontWeight="bold" color="#404041" fontSize={12}>
            {value}
          </Text>
        </Box>
        {additionalValue !== '' && (
          <>
            <Gap width={1} />
            <Box
              flex={1}
              borderWidth={1}
              borderColor="#AE445A"
              borderRadius={10}
              padding="8px 16px"
            >
              <Text fontWeight="bold" color="#404041" fontSize={12}>
                {additionalValue}
              </Text>
            </Box>
          </>
        )}
        {extraValue !== '' && (
          <>
            <Gap width={1} />
            <Box
              flex={1}
              borderWidth={1}
              borderColor="#AE445A"
              borderRadius={10}
              padding="8px 16px"
            >
              <Text fontWeight="bold" color="#404041" fontSize={12}>
                {extraValue}
              </Text>
            </Box>
          </>
        )}
      </Flex>
    </Flex>
  );
};

export default memo(BiodataField);
