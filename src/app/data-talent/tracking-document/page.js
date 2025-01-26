'use client';
import React, { useEffect, useState } from 'react';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import styles from '../../styles/inbox.module.css';
import moment from 'moment';
import { useRouter } from 'next/navigation';

const TrackingDocument = () => {
  const router = useRouter();
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

  useEffect(() => {
    const storedData = localStorage.getItem('document_tracking');
    if (storedData) {
      setData(JSON.parse(storedData));
      console.log(JSON.parse(storedData));
    }
  }, []);

  return (
    <Box className={styles['inbox-container']}>
      <Flex align={'center'} justify={'space-between'}>
        <Text className={styles['inbox-title']}>Tracking Document</Text>
      </Flex>
      <Flex marginBottom={4} marginTop={10}>
        <Box flex={1}>
          {data && data.length > 0 ? (
            data.map((item, index) => (
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
            ))
          ) : (
            <Text fontSize={16} color='#404041' textAlign='center'>
              There are no records to display
            </Text>
          )}
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
