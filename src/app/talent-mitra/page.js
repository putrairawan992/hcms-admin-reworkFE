'use client';
import { Box, Button, Flex, Text, useDisclosure } from '@chakra-ui/react';
import styles from '../styles/inbox.module.css';
import { useState } from 'react';
import 'moment/locale/id';
import { isEmpty } from 'lodash';
import { TalentListCard } from '../components/molecules';
import useTalentMitra from './useTalentMitra';
import { Gap } from '../components/atoms';
import { AddIcon } from '@chakra-ui/icons';
import { ShareIcon } from '../components/icons';
import Link from 'next/link';
import SearchSection from '../components/molecules/TalentMitra/SearchSection';
import { PenilaianCard } from '../components/molecules';
const dummyData = [
  {
    talent_name: 'Roma',
    status: 'Completed',
    created_at: '2025-01-24T12:00:00Z',
    employee_list: [
      {
        employee_type: 'Full-time',
        module_name: 'Wawancara Mandiri',
        duration: '00:05:42',
        detail: 'Completed with 90% score',
        score: 90,
      },
    ],
  },
];
const TalentMitra = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [years, setYears] = useState('2024');
  const [month, setMonth] = useState('10');
  const [currentData, setCurrentData] = useState();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const {
    data,
    filters,
    loading,
    productDigitalData,
    onHandlePress,
    onChangeSelect,
  } = useTalentMitra();

  const RenderContent = () => {
    if (!isEmpty(data)) {
      return data.map((item) => {
        return <TalentListCard data={item} onPress={onHandlePress} />;
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
        <Text className={styles['inbox-title']}>Talent List</Text>
      </Flex>
      <Gap height={6} />
      <Flex>
        <Flex flex={1}>
          <Link href="/talent-list/add">
            <Button className={styles['inbox-btn']} marginRight={2}>
              <AddIcon marginRight={4} />
              Add Talent
            </Button>
          </Link>
          <Button onClick={onOpen} className={styles['inbox-btn']}>
            <ShareIcon color="#FFFFFF" />
          </Button>
        </Flex>
      </Flex>

      <Gap height={6} />
      <Box style={{ borderWidth: 1, borderColor: '#EAEAEA' }} />
      <Gap height={6} />

      <Flex
        flex={1}
        style={{
          borderWidth: 1,
          borderColor: '#EAEAEA',
          borderRadius: 16,
          padding: 32,
        }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Text
            className={styles['inbox-filter-text']}
            color="#AE445A"
            fontWeight={700}
            fontSize={16}>
            Quick Summary
          </Text>
          <Gap height={4} />
          <Flex>
            <Box
              justifyContent="center"
              flex={1}
              style={{
                borderWidth: 1,
                borderColor: '#EAEAEA',
                borderRadius: 8,
                padding: 16,
              }}>
              <Text color="#292A2E" fontWeight={600} fontSize={11}>
                Active Talent Pool
              </Text>
              <Gap height={2} />
              <Flex flex={1}>
                <Text
                  fontSize={28}
                  color="#404041"
                  fontWeight={800}
                  alignSelf="flex-end"
                  flex={1}
                  marginBottom={6}>
                  29
                </Text>
              </Flex>
            </Box>
            <Gap width={2} />
            <Box
              justifyContent="center"
              flex={1}
              style={{
                borderWidth: 1,
                borderColor: '#EAEAEA',
                borderRadius: 8,
                padding: 16,
              }}>
              <Text color="#292A2E" fontWeight={600} fontSize={11}>
                Total Registered Talents
              </Text>
              <Gap height={2} />
              <Flex flex={1}>
                <Text
                  fontSize={28}
                  color="#404041"
                  fontWeight={800}
                  alignSelf="flex-end"
                  flex={1}
                  marginBottom={6}>
                  29
                </Text>
              </Flex>
            </Box>
            <Gap width={2} />
            <Box
              justifyContent="center"
              flex={1}
              style={{
                borderWidth: 1,
                borderColor: '#EAEAEA',
                borderRadius: 8,
                padding: 16,
              }}>
              <Text color="#292A2E" fontWeight={600} fontSize={11}>
                Talent in hiring process
              </Text>
              <Gap height={2} />
              <Flex flex={1}>
                <Text
                  fontSize={28}
                  color="#404041"
                  fontWeight={800}
                  alignSelf="flex-end"
                  flex={1}
                  marginBottom={6}>
                  29
                </Text>
              </Flex>
            </Box>
            <Gap width={2} />
            <Box
              justifyContent="center"
              flex={1}
              style={{
                borderWidth: 1,
                borderColor: '#EAEAEA',
                borderRadius: 8,
                padding: 16,
              }}>
              <Text color="#292A2E" fontWeight={600} fontSize={11}>
                Hired Talents
              </Text>
              <Gap height={2} />
              <Flex flex={1}>
                <Text
                  fontSize={28}
                  color="#404041"
                  fontWeight={800}
                  alignSelf="flex-end"
                  flex={1}
                  marginBottom={6}>
                  29
                </Text>
              </Flex>
            </Box>
            <Gap width={2} />
            <Box
              justifyContent="center"
              flex={1}
              style={{
                borderWidth: 1,
                borderColor: '#EAEAEA',
                borderRadius: 8,
                padding: 16,
              }}>
              <Text color="#292A2E" fontWeight={600} fontSize={11}>
                Failed Talent Processing
              </Text>
              <Gap height={2} />
              <Flex flex={1}>
                <Text
                  fontSize={28}
                  color="#404041"
                  fontWeight={800}
                  alignSelf="flex-end"
                  flex={1}
                  marginBottom={6}>
                  29
                </Text>
              </Flex>
            </Box>
          </Flex>
        </div>
      </Flex>

      <Gap height={6} />

      <Flex marginBottom={4}>
        <SearchSection />
      </Flex>
      {dummyData?.map((item, index) => (
        <PenilaianCard key={index} data={item} />
      ))}
    </Box>
  );
};

export default TalentMitra;
