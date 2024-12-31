import { Box, Flex, Text, VStack } from '@chakra-ui/react';
import React from 'react'
import { FileIcon } from '../../../components/icons';
import { attachmentFileDataOptions } from './Shared/General';

const AttachmentFileList = ({ data = [] }) => {
  return (
    <Flex justify="space-between" marginBottom={6}>
      {attachmentFileDataOptions.map((item) => {
        return (
          <VStack cursor="pointer">
            <Box borderWidth={2} borderColor="#AE445A" padding={2} borderRadius={10}>
              <FileIcon color="black" style={{ width: '50px', height: '50px' }} />
            </Box>
            <Text fontSize={12}>{item?.label}</Text>
          </VStack>
        );
      })}
    </Flex>
  )
}

export default AttachmentFileList;