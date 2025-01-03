import React from 'react'
import { Box, Divider, Flex, Image, Text } from '@chakra-ui/react';
import styles from './JobProviderCard.styles';
import { noop } from '@/app/utils/helpers';
import { Gap } from '../../atoms';

const JobProviderCard = ({ data = [], onPress = noop }) => {
  const { employee_id, employee_type, username, photo } = data;

  return (
    <Flex marginBottom={4}>
      <Flex flex={1} style={{ borderWidth: 2, borderColor: '#EAEAEA', borderRadius: 16, padding: 16 }} alignItems='center'>
        <Image
          style={{ width: 48, height: 48, borderRadius: 100, alignSelf: 'flex-start' }}
          src="/images/dummy-avatar.jpeg"
          alt="image"
        />
        <Gap width={8} />
        <Box flex={1}>
          <Flex justify='space-between' alignItems='center'>
            <Box>
              <Text color='#404041' fontWeight={400} fontSize={12}>Perusahaan</Text>
              <Text color='#404041' fontWeight={700} fontSize={12}>PT Gema Insani</Text>
            </Box>
            <Box>
              <Text color='#404041' fontWeight={400} fontSize={12}>Job Title</Text>
              <Text color='#404041' fontWeight={700} fontSize={12}>Front End Engineer</Text>
            </Box>
            <Box>
              <Text color='#404041' fontWeight={400} fontSize={12}>Salary Range</Text>
              <Text color='#404041' fontWeight={700} fontSize={12}>Rp 6,000,000 - Rp 7,500,000</Text>
            </Box>
            <Box>
              <Text color='#404041' fontWeight={400} fontSize={14} textDecoration='underline'>Detail</Text>
            </Box>
          </Flex>
          <Box>
            <Text color='#404041' fontWeight={400} fontSize={14} textDecoration='underline'>Detail</Text>
          </Box>
          <Gap height={4} />
          <Divider borderWidth={1} borderColor='#EAEAEA' />
          <Gap height={4} />
          <Flex justify='space-between' alignItems='center'>
            <Box>
              <Text color='#AE445A' fontWeight={700} fontSize={14}>Diundang</Text>
              <Text color='#AE445A' fontWeight={700} fontSize={12}>0</Text>
            </Box>
            <Box>
              <Text color='#AE445A' fontWeight={700} fontSize={14}>Diproses</Text>
              <Text color='#AE445A' fontWeight={700} fontSize={12}>0</Text>
            </Box>
            <Box>
              <Text color='#AE445A' fontWeight={700} fontSize={14}>Terpilih</Text>
              <Text color='#AE445A' fontWeight={700} fontSize={12}>0</Text>
            </Box>
            <Box>
              <Text color='#AE445A' fontWeight={700} fontSize={14}>Tidak Terpilih</Text>
              <Text color='#AE445A' fontWeight={700} fontSize={12}>0</Text>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  )
}

export default JobProviderCard;