import React from 'react';
import { Box, Divider, Flex, Text } from '@chakra-ui/react';
import { Gap } from '../../atoms';
import { colors } from '@/shared/general';

const ProgressCard = ({ data = [], label = '' }) => {
  const total = data.reduce((sum, value) => sum + value?.total, 0);
  // console.log(currentItem);

  return (
    <Box>
      <Flex
        height="26px"
        backgroundColor="gray.200"
        borderRadius="100"
        overflow="hidden">
        {data?.map((item, index, arr) => {
          const total = arr.reduce(
            (sum, currentItem) => sum + currentItem?.total,
            0
          );
          const percentage = total > 0 ? (item?.total / total) * 100 : 0;
          const itemColor = colors[index % colors.length];
          return (
            <Box
              key={index}
              width={`${percentage}%`}
              backgroundColor={itemColor}
              transition="width 0.3s ease"
            />
          );
        })}
      </Flex>
      <Flex justify="space-between" marginTop={2}>
        <Text fontSize={12}>0%</Text>
        <Text fontSize={12}>100%</Text>
      </Flex>
      <Flex justify="space-between" marginTop={2}>
        <Text fontWeight="bold" color="#404041">
          Total
        </Text>
        <Text fontWeight="bold" color="#AE445A">{`${total} ${label}`}</Text>
      </Flex>
      <Divider borderColor="#AE445A" borderWidth={1} marginY={2} />
      <Gap height={2} />
      {data?.map((item, index) => {
        const itemColor = colors[index % colors.length];

        return (
          <Flex marginBottom={3} key={index}>
            <Flex align="center" flex={1}>
              <Box
                width={15}
                height={15}
                backgroundColor={itemColor}
                marginRight={2}
              />
              <Text fontSize={13} color="#404041">
                {item?.label || '-'}
              </Text>
            </Flex>
            <Flex alignItems="center" justifyContent="center">
              <Text
                flex={1}
                fontSize={13}
                color="#404041">{`${item?.total || 0} ${label}`}</Text>
            </Flex>
            <Flex alignItems="flex-end" justifyContent="flex-end" flex={1}>
              <Text fontSize={13} color="#404041">
                {total > 0
                  ? `${((item?.total / total) * 100).toFixed(2)}%`
                  : '0%'}
              </Text>
            </Flex>
          </Flex>
        );
      })}
    </Box>
  );
};

export default ProgressCard;
