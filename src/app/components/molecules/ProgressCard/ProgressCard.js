import React from 'react'
import { Box, Divider, Flex, Text } from '@chakra-ui/react';
import { Gap } from '../../atoms';

const ProgressCard = ({ data = [], label = '' }) => {
  const total = data.reduce((sum, value) => sum + value?.value, 0);

  return (
    <Box>
      <Flex
        height="26px"
        backgroundColor="gray.200"
        borderRadius="100"
        overflow="hidden">
        {data?.map((item, index, arr) => {
          const total = arr.reduce((sum, currentItem) => sum + currentItem?.value, 0);
          return (
            <Box
              key={index}
              width={`${(item?.value / total) * 100}%`}
              backgroundColor={item?.color}
              transition="width 0.3s ease"
            />
          )
        })}
      </Flex>
      <Flex justify='space-between' marginTop={2}>
        <Text>0%</Text>
        <Text>100%</Text>
      </Flex>
      <Flex justify='space-between' marginTop={2}>
        <Text fontWeight='bold' color='#404041'>Total</Text>
        <Text fontWeight='bold' color='#AE445A'>{`${total} ${label}`}</Text>
      </Flex>
      <Divider borderColor='#AE445A' borderWidth={1} marginY={2} />
      <Gap height={2} />
      {data?.map((item, index) => {
        return (
          <Flex marginBottom={3} key={index}>
            <Flex align='center' flex={1}>
              <Box width={15} height={15} backgroundColor={item?.color} marginRight={2} />
              <Text fontSize={13} color='#404041'>{item?.title}</Text>
            </Flex>
            <Text flex={1} fontSize={13} color='#404041'>{`${item?.value} ${label}`}</Text>
            <Text fontSize={13} color='#404041'>{item?.value}%</Text>
          </Flex>
        );
      })}
    </Box>
  )
}

export default ProgressCard;