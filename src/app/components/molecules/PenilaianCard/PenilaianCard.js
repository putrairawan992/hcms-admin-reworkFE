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
import styles from './PenilaianCard.styles';
import {
  ChatIcon,
  CloseIcon,
  DownloadIcon,
  EyeIcon,
  FileBadgeIcon,
  MessageIcon,
} from '../../icons';
import moment from 'moment';
import { Gap } from '../../atoms';

const PenilaianCard = ({ data = [] }) => {
  const { product_digital_name, status, created_at, employee_list } = data;
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
          <EyeIcon />
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
                  Module Name
                </Text>
              </VStack>
              <VStack flex={1}>
                <Text fontWeight="bold" color="#AE445A">
                  Duration
                </Text>
              </VStack>
              <VStack flex={1}>
                <Text fontWeight="bold" color="#AE445A">
                  Detail
                </Text>
              </VStack>
              <VStack flex={1}>
                <Text fontWeight="bold" color="#AE445A">
                  Score
                </Text>
              </VStack>
            </Flex>
            <Gap height={30} />
            {employee_list?.map((item, index) => (
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
                    <Select height={10} style={styles.select}>
                      <option value="all" selected>
                        Semua
                      </option>
                      <option value="offering_letter_normal">
                        Offering Letter Normal
                      </option>
                      <option value="pkwt">PKWT</option>
                      <option value="offering_letter_khusus">
                        Offering Letter Khusus
                      </option>
                      <option value="amandemen_pkwt">Amandemen PKWT</option>
                      <option value="contract_freelance">
                        Kontrak Freelance
                      </option>
                    </Select>
                  </Box>
                </Flex>
                <Flex
                  flex={1}
                  alignItems="center"
                  justifyContent="space-around"
                  marginLeft={4}
                >
                  <FileBadgeIcon />
                  <MessageIcon />
                  <CloseIcon />
                </Flex>
                <Flex flex={1} alignItems="center" justifyContent="center">
                  <Text fontWeight="bold" color="#AE445A">
                    None
                  </Text>
                </Flex>
              </Flex>
            ))}
            <Gap height={4} />
            <Box borderBottomWidth={3} borderColor="#AE445A" />
            <Gap height={4} />
            <Flex justify="space-around">
              <Text fontWeight="bold" color="#AE445A">
                Average Score
              </Text>
              <Text fontWeight="bold" color="#AE445A">
                0
              </Text>
            </Flex>
            <Gap height={4} />
            <Flex justify="flex-end">
              <Button style={styles.buttonSend}>Save</Button>
            </Flex>
          </Box>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default PenilaianCard;
