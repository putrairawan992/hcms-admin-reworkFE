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

const PenilaianCard = ({ data = {}, onClick }) => {
  const toast = useToast();
  const router = useRouter();
  const nilai = localStorage.getItem('nilai');
  const [isLoading, setIsLoading] = useState(false);

  // Get average score from the data
  const getAverageScore = () => {
    if (!data.score || data.score.length === 0) return 0;
    const totalScore = data.score.reduce((sum, item) => sum + item.score, 0);
    return (totalScore / data.score.length).toFixed(1);
  };

  return (
    <Accordion allowToggle>
      <AccordionItem border="none" key={data.id || 1}>
        <AccordionButton background={'#8364BA'} style={styles.wrapper}>
          <Flex alignItems="center" justifyContent="center">
            <Box style={styles.imgWrapper}>
              <Image
                style={styles.img}
                src={data.photo || '/images/company-dummy.jpeg'}
                alt="candidate profile"
              />
            </Box>
            <Gap width={6} />
            <Text style={styles.title}>{data.name || 'Candidate Name'}</Text>
          </Flex>

          <Box>
            <Flex flex={1}>
              <Text style={styles.subtitle}>Review Kandidat</Text>
            </Flex>
          </Box>
          <Text style={styles.subtitle}>
            {moment(data.created_at).locale('en').format('DD MMMM YYYY')}
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
            {data.score?.map((item, index) => (
              <Flex flex={1} marginBottom={6} key={index}>
                <Flex flex={1} alignItems="center" justifyContent="center">
                  <Gap width={3} />
                  <Box flex={1} alignItems="center" justifyContent="center">
                    <Text fontSize={16} fontWeight={600}>
                      {item?.title_test || 'Module Test'}
                    </Text>
                  </Box>
                </Flex>
                <Flex flex={1} alignItems="center" justifyContent="center">
                  <Box>{item?.duration || '00:00:00'}</Box>
                </Flex>

                <Flex
                  flex={1}
                  alignItems="center"
                  justifyContent="space-around"
                  marginLeft={4}>
                  <Button
                    style={styles.buttonSend}
                    onClick={() =>
                      router.push(
                        `/penilaian-pre-test/${data.job_seeker_id}?pretest-modul-id=${item.id}`
                      )
                    }>
                    Detail
                  </Button>
                </Flex>
                <Flex flex={1} alignItems="center" justifyContent="center">
                  <Text fontWeight="bold" color="#AE445A">
                    {item?.score || nilai || 0}
                  </Text>
                </Flex>
              </Flex>
            ))}
            <Gap height={4} />
            <Box borderBottomWidth={3} borderColor="#AE445A" />
            <Gap height={4} />
            <Flex justifyContent={'space-around'}>
              <Text fontWeight="bold" color="#AE445A">
                Average Score
              </Text>
              <Text fontWeight="bold" color="#AE445A">
                {getAverageScore() || nilai || 0}
              </Text>
            </Flex>
            <Gap height={4} />

            <Flex justify="flex-end">
              <Button style={styles.buttonSend} onClick={onClick}>
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
