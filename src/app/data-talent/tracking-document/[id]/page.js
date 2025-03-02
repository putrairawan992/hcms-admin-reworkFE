'use client';
import React, { useEffect, useState } from 'react';
import { Box, Button, Divider, Flex, Text } from '@chakra-ui/react';
import styles from '../../../styles/inbox.module.css';
import moment from 'moment';
import { useParams, useRouter } from 'next/navigation';
import { httpClient } from '@/app/utils/network';
import { ListEmpty } from '@/app/components/molecules';
import { isEmpty } from 'lodash';
import FileManualModal from '@/app/send-document/components/FIleModal/Manual';
import useSendDocument from '@/app/send-document/useSendDocument';

const TrackingDocument = () => {
  const router = useRouter();
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDocumentData, setSelectedDocumentData] = useState(null);

  const { onOpen, onClose, typeDocTalent, onSubmit } = useSendDocument();

  const extractFileName = (fileUrl) => {
    if (!fileUrl) return '-';
    const parts = fileUrl.split('/');
    const fileName = parts[parts.length - 1];
    // Extract the actual filename after the timestamp
    const fileNameParts = fileName.split('-');
    if (fileNameParts.length > 1) {
      // Join all parts after the timestamp
      return fileNameParts.slice(1).join('-');
    }
    return fileName;
  };

  const onClickDetail = (href) => {
    window.open(href, '_blank');
  };

  const fetchData = async () => {
    try {
      const response = await httpClient({
        method: 'GET',
        url: `/admin/document/tracking/${id}`,
      });

      const responseData = response?.data?.data || [];

      // Sort data by createdAt (oldest first)
      // const sortedData = [...responseData].sort(
      //   (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
      // );

      setData(responseData);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error('Failed to fetch data:', error);
    }
  };

  const handleStatus = (status) => {
    if (!status || status === null) return;
    return status
      .split('_')
      ?.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  useEffect(() => {
    fetchData();
  }, []);

  const RenderContent = () => {
    if (!isEmpty(data)) {
      return data.map((item, index) => {
        return (
          <div key={index}>
            <Flex
              flex={1}
              key={index}
              justify={'space-between'}
              marginBottom={4}>
              <Box flex={1}>
                <Text
                  fontSize={16}
                  fontWeight="700"
                  color="#AE445A"
                  textAlign="left">
                  {item.status ? handleStatus(item.status) : '-'}
                </Text>
              </Box>
              <Box flex={1}>
                <Text
                  fontSize={16}
                  fontWeight="700"
                  color="#5d87ff"
                  cursor="pointer"
                  textAlign="left"
                  onClick={() => onClickDetail(item?.file)}>
                  {extractFileName(item?.file || '-')}
                </Text>
              </Box>
              <Box flex={1}>
                <Text
                  fontSize={16}
                  fontWeight="700"
                  color="#404041"
                  textAlign="right">
                  {moment.utc(item?.createdAt).format('DD MMM YYYY') || '-'}
                </Text>
              </Box>
            </Flex>

            {item?.status === 'full_signed' && (
              <Divider
                borderWidth={1}
                borderColor={'#AE445A'}
                className="mb-3"
              />
            )}
          </div>
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

  const handleAddDocument = () => {
    if (isEmpty(data)) return false;

    const lastItem = data[data.length - 1];
    return (
      lastItem?.status === 'employee signed' ||
      lastItem?.status === 'full_signed'
    );
  };

  const handleAddDocumentClick = () => {
    // Get the last document in the cycle that needs a new document
    const lastItem = data[data.length - 1];
    setSelectedDocumentData(lastItem);
    setIsOpen(true);
  };

  return (
    <Box className={styles['inbox-container']}>
      <Flex align={'center'} justify={'space-between'}>
        <Text className={styles['inbox-title']}>Tracking Document</Text>
      </Flex>
      <Flex marginBottom={4} marginTop={10}>
        <Box flex={1}>{loading ? <ListEmpty /> : <RenderContent />}</Box>
      </Flex>
      <Flex align={'center'} justify={'right'}>
        <Box>
          <Flex gap={4}>
            {handleAddDocument() && (
              <Button
                className={styles['inbox-btn']}
                onClick={handleAddDocumentClick}>
                Add Document
              </Button>
            )}

            <Button
              onClick={() => router.push('/data-talent')}
              className={styles['inbox-btn']}>
              Close
            </Button>
          </Flex>
        </Box>
      </Flex>

      <FileManualModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        typeDocTalent={typeDocTalent}
        data={selectedDocumentData}
        onSubmit={onSubmit}
      />
    </Box>
  );
};

export default TrackingDocument;
