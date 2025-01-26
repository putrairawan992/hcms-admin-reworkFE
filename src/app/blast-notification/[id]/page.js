'use client';
import React, { useEffect, useState } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import styles from '../../styles/inbox.module.css';
import { Gap } from '@/app/components/atoms';
import { formatDate } from '@/app/utils/helpers';
import { httpClient } from '@/app/utils/network';
import { useParams } from 'next/navigation';
import { ListEmpty } from '@/app/components/molecules';

const BlastNotificationDetails = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await httpClient({
        method: 'GET',
        url: `/admin/notif/detail/${id}`
      });

      const responseData = response?.data?.data || [];
      setData(responseData);
      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box className={styles['inbox-container']}>
      <Flex align={'center'} justify={'space-between'}>
        <Text className={styles['inbox-title']}>Notification / Detail</Text>
      </Flex>
      {loading ? <ListEmpty /> : <Flex marginBottom={4} marginTop={10}>
        <Box flex={1}>
          <Flex flex={1}>
            <Box flex={0.2}>
              <Text fontSize={16} fontWeight='700' color='#AE445A'>Kepada:</Text>
            </Box>
            <Box flex={1}>
              <Text fontSize={16} fontWeight='700' color='#404041'>{data?.type_user || '-'}</Text>
            </Box>
          </Flex>
          <Gap height={4} />
          <Flex>
            <Box flex={0.2}>
              <Text fontSize={16} fontWeight='700' color='#AE445A'>Tanggal Dikirim:</Text>
            </Box>
            <Box flex={1}>
              <Text fontSize={16} fontWeight='700' color='#404041'>{formatDate(data?.created_at, 'DD MMM YYYY') || '-'}</Text>
            </Box>
          </Flex>
          <Gap height={4} />
          <Flex>
            <Box flex={0.2}>
              <Text fontSize={16} fontWeight='700' color='#AE445A'>Isi Pesan:</Text>
            </Box>
            <Box flex={1}>
              <Text fontSize={16} fontWeight='700' color='#404041'>{data?.title || '-'}</Text>
              <Text fontSize={16} fontWeight='400' color='#404041' dangerouslySetInnerHTML={{ __html: data?.content || '' }} />
            </Box>
          </Flex>
        </Box>
      </Flex>}
    </Box>
  );
};

export default BlastNotificationDetails;
