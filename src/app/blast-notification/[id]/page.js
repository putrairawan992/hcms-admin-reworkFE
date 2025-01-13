'use client';
import React, { useState } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import styles from '../../styles/inbox.module.css';
import { Gap } from '@/app/components/atoms';
import { formatDate } from '@/app/utils/helpers';

const BlastNotificationDetails = () => {
  const [dummy, setDummy] = useState({
    "id": "0bc0cb24-68be-4e95-ba44-2fe90d653ede",
    "recipent_id": "some-prod-3",
    "title": "ini judul notif",
    "content": "ini adalah content",
    "date": "2024-10-23T08:19:55.000Z",
    "created_at": "2024-10-23T08:19:56.000Z",
    "updated_at": "2024-10-23T08:19:56.000Z",
    "type_user": "user",
    "sender_id": "2f1f6977-0dc5-4c1c-9766-11a6fbd503b2",
    "is_read": false
  });

  return (
    <Box className={styles['inbox-container']}>
      <Flex align={'center'} justify={'space-between'}>
        <Text className={styles['inbox-title']}>Notification / Detail</Text>
      </Flex>
      <Flex marginBottom={4} marginTop={10}>
        <Box flex={1}>
          <Flex flex={1}>
            <Box flex={0.2}>
              <Text fontSize={16} fontWeight='700' color='#AE445A'>Kepada:</Text>
            </Box>
            <Box flex={1}>
              <Text fontSize={16} fontWeight='700' color='#404041'>{dummy?.type_user || '-'}</Text>
            </Box>
          </Flex>
          <Gap height={4} />
          <Flex>
            <Box flex={0.2}>
              <Text fontSize={16} fontWeight='700' color='#AE445A'>Tanggal Dikirim:</Text>
            </Box>
            <Box flex={1}>
              <Text fontSize={16} fontWeight='700' color='#404041'>{formatDate(dummy?.date, 'DD MMM YYYY') || '-'}</Text>
            </Box>
          </Flex>
          <Gap height={4} />
          <Flex>
            <Box flex={0.2}>
              <Text fontSize={16} fontWeight='700' color='#AE445A'>Isi Pesan:</Text>
            </Box>
            <Box flex={1}>
              <Text fontSize={16} fontWeight='700' color='#404041'>{dummy?.title || '-'}</Text>
              <Text fontSize={16} fontWeight='400' color='#404041'>{dummy?.content || '-'}</Text>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default BlastNotificationDetails;
