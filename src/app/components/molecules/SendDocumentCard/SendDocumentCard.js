import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Image,
  Select,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import styles from './SendDocumentCard.styles';
import {
  ChatIcon,
  CloseIcon,
  DownloadIcon,
  EyeIcon,
  FileBadgeIcon,
  MessageIcon,
} from '../../icons';
import moment from 'moment';
import { Gap, SelectField } from '../../atoms';
import { SettingsIcon } from '@chakra-ui/icons';
import { noop } from '@/app/utils/helpers';

const SendDocumentCard = ({ data = {}, toggleModal = noop }) => {
  const { product_digital_name, status, created_at, employee_list, document_type, type_setting_document } = data;

  const documentAll = document_type?.map((item) => ({
    id: item?.id,
    label: item?.type_document
  })) || [];

  const onHandleToggleModal = () => {
    toggleModal(data);
  };

  return (
    <Accordion allowToggle>
      <AccordionItem border="none" key={1}>
        <AccordionButton background={'#8364BA'} style={styles.wrapper}>
          <Flex alignItems="center" justifyContent="center">
            <Box style={styles.imgWrapper}>
              <Image
                style={styles.img}
                src="/images/company-dummy.jpeg"
                alt="image"
              />
            </Box>
            <Gap width={6} />
            <Text style={styles.title}>{product_digital_name}</Text>
          </Flex>
          <Text style={styles.subtitle}>
            {moment(created_at).locale('en').format('MMMM YYYY')}
          </Text>
          <EyeIcon color='#ae445a' />
          <SettingsIcon color='#ae445a' onClick={onHandleToggleModal} cursor='pointer' />
          <Box>
            <Flex flex={1}>
              <Box
                borderWidth={1}
                borderColor="#AE445A"
                paddingX={6}
                paddingY={2}
                borderRadius={10}
              >
                <Text style={styles.subtitle}>{status}</Text>
              </Box>
            </Flex>
          </Box>
          <Flex alignItems="center" justifyContent="center">
            <DownloadIcon />
            <Gap width={4} />
            <ChatIcon style={{ width: 20, height: 20 }} />
          </Flex>
          <Flex align={'center'}>
            <Button style={styles.buttonSend}>Send All</Button>
          </Flex>
        </AccordionButton>
        <AccordionPanel
          borderWidth={2}
          borderRadius={10}
          borderColor="#AE445A"
          backgroundColor="#FFFFFF"
        >
          <Box>
            <Flex
              flex={1}
              borderBottomWidth={3}
              borderColor="#AE445A"
              alignItems="center"
              justifyContent="center"
              paddingY={4}
            >
              <VStack flex={1}>
                <Text fontWeight="bold" color="#AE445A">
                  Profil
                </Text>
              </VStack>
              <VStack flex={1}>
                <Text fontWeight="bold" color="#AE445A">
                  Dokumen
                </Text>
              </VStack>
              <VStack flex={1}>
                <Text fontWeight="bold" color="#AE445A">
                  Tombol Aksi
                </Text>
              </VStack>
              <VStack flex={1}>
                <Text fontWeight="bold" color="#AE445A">
                  Status
                </Text>
              </VStack>
            </Flex>
            <Gap height={30} />
            {employee_list.map((item, index) => (
              <Flex flex={1} marginBottom={6} key={index}>
                <Flex flex={1} alignItems="center" justifyContent="center">
                  <Box style={styles.imgWrapper}>
                    <Image
                      style={styles.img}
                      src="/images/company-dummy.jpeg"
                      alt="image"
                    />
                  </Box>
                  <Gap width={3} />
                  <Box flex={1} alignItems="center" justifyContent="center">
                    <Text
                      fontSize={12}
                      fontWeight={700}
                      textDecoration="underline"
                    >
                      {item?.username}
                    </Text>
                    <Text fontSize={12} fontWeight={400}>
                      {item?.employee_type}
                    </Text>
                  </Box>
                </Flex>
                <Flex alignItems="center" justifyContent="center" flex={1}>
                  <Box style={{ width: '200px' }}>
                    <SelectField placeholder='Pilih document' options={documentAll} />
                  </Box>
                </Flex>
                <Flex
                  flex={1}
                  alignItems="center"
                  justifyContent="space-around"
                  marginLeft={4}>
                  <FileBadgeIcon color='#B6B6B6' />
                  <MessageIcon color='#B6B6B6' />
                  <CloseIcon color='#B6B6B6' />
                </Flex>
                <Flex flex={1} alignItems="center" justifyContent="center">
                  <Text fontWeight="bold" color="#AE445A">
                    None
                  </Text>
                </Flex>
              </Flex>
            ))}
          </Box>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default SendDocumentCard;
