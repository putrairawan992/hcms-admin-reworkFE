'use client';
import React, { useEffect, useState } from 'react';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import styles from '../../../styles/inbox.module.css';
import moment from 'moment';
import { useParams, useRouter } from 'next/navigation';
import { httpClient } from '@/app/utils/network';
import { ListEmpty } from '@/app/components/molecules';
import { isEmpty } from 'lodash';

const TrackingDocument = () => {
  const router = useRouter();
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }

    const start = text.slice(0, Math.ceil(maxLength / 2));
    const end = text.slice(-Math.floor(maxLength / 2));

    return `${start}...${end}`;
  }

  const onClickDetail = (href) => {
    window.open(href, '_blank');
  };

  const fetchData = async () => {
    try {
      const response = await httpClient({
        method: 'GET',
        url: `/admin/document/tracking/${id}`
      });

      const responseData = response?.data?.data || [];
      setData(responseData);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error('Failed to fetch data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const RenderContent = () => {
    if (!isEmpty(data)) {
      return data.map((item, index) => {
        return (
          <Flex flex={1} key={index} justify={'space-between'} marginBottom={4}>
            <Box flex={1}>
              <Text
                fontSize={16}
                fontWeight='700'
                color='#AE445A'
                textAlign='left'
              >
                {item?.status || '-'}
              </Text>
            </Box>
            <Box flex={1}>
              <Text
                fontSize={16}
                fontWeight='700'
                color='#5d87ff'
                cursor='pointer'
                textAlign='left'
                onClick={() => onClickDetail(item?.file)}
              >
                {truncateText(item?.file || '-', 50)}
              </Text>
            </Box>
            <Box flex={1}>
              <Text
                fontSize={16}
                fontWeight='700'
                color='#404041'
                textAlign='right'
              >
                {moment(item?.createdAt).format('DD MMM YYYY') || '-'}
              </Text>
            </Box>
          </Flex>
        );
      });
    } else {
      return (
        <Flex align={'center'} justify={'center'}>
          <Text>Tidak ada data inbox</Text>
        </Flex>
      );
    }
  };

  return (
    <Box className={styles['inbox-container']}>
      <Flex align={'center'} justify={'space-between'}>
        <Text className={styles['inbox-title']}>Tracking Document</Text>
      </Flex>
      <Flex marginBottom={4} marginTop={10}>
        <Box flex={1}>
          {loading ? <ListEmpty /> : <RenderContent />}
        </Box>
      </Flex>
      <Flex align={'center'} justify={'right'}>
        <Box>
          <Button
            onClick={() => router.push('/data-talent')}
            className={styles['inbox-btn']}>
            Close
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default TrackingDocument;
