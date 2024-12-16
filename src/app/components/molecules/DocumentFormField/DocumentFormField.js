import { Box, Flex, Text, VStack } from '@chakra-ui/react';
import React from 'react'
import styles from './DocumentFormField.styles';
import { FileIcon } from '../../../components/icons';
import { noop } from '@/app/utils/helpers';
import { Gap } from '../../atoms';
import { dataDocsOptions } from './shared/general';

const DocumentFormField = ({ data = [], onPress = noop, isActive = '' }) => {
  const onHandlePress = (value) => {
    onPress(value);
  };

  return (
    <Flex wrap="wrap" justifyContent="flex-start" alignItems="flex-start" display='flex'>
      {dataDocsOptions.map((item, index) => (
        <Box
          key={index}
          flexBasis="calc(50%)"
          marginBottom={6}
        >
          <VStack>
            <Box
              style={styles.box(isActive === item.id)}
              padding={3}
              onClick={() => onHandlePress(item.id)}
            >
              <FileIcon color={isActive === item.id ? '#FFFFFF' : '#AE445A'} />
            </Box>
          </VStack>
          <Gap height={1} />
          <Text fontSize={12} fontWeight={300} textAlign="center">
            {item.label || 'Offering Latter'}
          </Text>
        </Box>
      ))}
    </Flex>

  )
}

export default DocumentFormField;