import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Image,
  Text,
  VStack,
  Spinner,
} from '@chakra-ui/react';
import styles from './PenilaianCard.styles';
import moment from 'moment';
import { Gap } from '../../atoms';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useToast } from '@chakra-ui/react';
const PenilaianCard = ({ data = [] }) => {
  const toast = useToast();
  const router = useRouter();
  const nilai = localStorage.getItem('nilai');
  const { talent_name, status, created_at, employee_list } = data;
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: 'success',
        description: 'Nilai berhasil disimpan',
        duration: 3000,
        status: 'success',
        position: 'top',
        isClosable: true,
      });
    }, 2000);
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
            <Text style={styles.title}>{talent_name}</Text>
          </Flex>

          <Box>
            <Flex flex={1}>
              <Text style={styles.subtitle}>Review Kandidat</Text>
            </Flex>
          </Box>
          <Text style={styles.subtitle}>
            {moment(created_at).locale('en').format('DD MMMM YYYY')}
          </Text>
        </AccordionButton>
        <AccordionPanel
          borderWidth={2}
          borderRadius={10}
          borderColor="#AE445A"
          backgroundColor="#FFFFFF">
          <Box>
            <Flex
              flex={1}
              borderBottomWidth={3}
              borderColor="#AE445A"
              alignItems="center"
              justifyContent="center"
              paddingY={4}>
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
                  <Gap width={3} />
                  <Box flex={1} alignItems="center" justifyContent="center">
                    <Text fontSize={16} fontWeight={600}>
                      {item?.module_name}
                    </Text>
                  </Box>
                </Flex>
                <Flex flex={1} alignItems="center" justifyContent="center">
                  <Box>{item?.duration}</Box>
                </Flex>

                <Flex
                  flex={1}
                  alignItems="center"
                  justifyContent="space-around"
                  marginLeft={4}>
                  <Button
                    style={styles.buttonSend}
                    onClick={() =>
                      router.push('/penilaian-pre-test/wawancara-mandiri')
                    }>
                    Detail
                  </Button>
                </Flex>
                <Flex flex={1} alignItems="center" justifyContent="center">
                  <Text fontWeight="bold" color="#AE445A">
                    {nilai}
                  </Text>
                </Flex>
              </Flex>
            ))}
            <Gap height={4} />
            <Box borderBottomWidth={3} borderColor="#AE445A" />
            <Gap height={4} />

            <Gap height={4} />
            <Flex justify="flex-end">
              <Button style={styles.buttonSend} onClick={handleClick}>
                {isLoading ? <Spinner size="sm" /> : 'Save'}
              </Button>
            </Flex>
          </Box>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default PenilaianCard;
