"use client";
import {
  Box,
  Button,
  Flex,
  Image,
  Select,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import styles from "../styles/inbox.module.css";
import { useState } from "react";
import moment from "moment";
import "moment/locale/id";
import { isEmpty } from "lodash";

import { SendDocumentCard } from "../components/molecules";
import useDashboardMitra from "./useDashboardMitra";
import { moveScreen } from "../utils/helpers";
import { Gap } from "../components/atoms";
import { EyeIcon } from "../components/icons";

moment.locale("id");

const DashboardMitra = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [years, setYears] = useState("2024");
  const [month, setMonth] = useState("10");
  const [currentData, setCurrentData] = useState();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const { data } = useDashboardMitra();

  const renderData = () => {
    return data.map((item) => {
      return <SendDocumentCard data={item} />;
    });
  };

  return (
    <Box className={styles["inbox-container"]}>
      <Flex align={"center"} justify={"space-between"}>
        <Text className={styles["inbox-title"]}>Dashboard Mitra</Text>
      </Flex>
      <Gap height={8} />
      <Flex flex={1} style={{ borderWidth: 1, borderColor: '#EAEAEA', borderRadius: 16, padding: 32 }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Text className={styles["inbox-filter-text"]} color='#AE445A' fontWeight={700} fontSize={16}>Quick Summary</Text>
          <Gap height={4} />
          <Flex>
            <Box justifyContent='center' flex={1} style={{ borderWidth: 1, borderColor: '#EAEAEA', borderRadius: 8, padding: 16 }}>
              <Text color='#292A2E' fontWeight={600} fontSize={11}>Total Registered Talents</Text>
              <Gap height={2} />
              <Flex flex={1}>
                <Text fontSize={28} color='#404041' fontWeight={800} alignSelf='flex-end' flex={1} marginBottom={6}>29</Text>
              </Flex>
            </Box>
            <Gap width={2} />
            <Box justifyContent='center' flex={1} style={{ borderWidth: 1, borderColor: '#EAEAEA', borderRadius: 8, padding: 16 }}>
              <Text color='#292A2E' fontWeight={600} fontSize={11}>Talent in hiring process</Text>
              <Gap height={2} />
              <Flex flex={1}>
                <Text fontSize={28} color='#404041' fontWeight={800} alignSelf='flex-end' flex={1} marginBottom={6}>29</Text>
              </Flex>
            </Box>
            <Gap width={2} />
            <Box justifyContent='center' flex={1} style={{ borderWidth: 1, borderColor: '#EAEAEA', borderRadius: 8, padding: 16 }}>
              <Text color='#292A2E' fontWeight={600} fontSize={11}>Hired Talents</Text>
              <Gap height={2} />
              <Flex flex={1}>
                <Text fontSize={28} color='#404041' fontWeight={800} alignSelf='flex-end' flex={1} marginBottom={6}>29</Text>
              </Flex>
            </Box>
            <Gap width={2} />
            <Box justifyContent='center' flex={1} style={{ borderWidth: 1, borderColor: '#EAEAEA', borderRadius: 8, padding: 16 }}>
              <Text color='#292A2E' fontWeight={600} fontSize={11}>Talent Pending Assessment</Text>
              <Gap height={2} />
              <Flex flex={1}>
                <Text fontSize={28} color='#404041' fontWeight={800} alignSelf='flex-end' flex={1} marginBottom={6}>29</Text>
              </Flex>
            </Box>
            <Gap width={2} />
            <Box justifyContent='center' flex={1} style={{ borderWidth: 1, borderColor: '#EAEAEA', borderRadius: 8, padding: 16 }}>
              <Text color='#292A2E' fontWeight={600} fontSize={11}>Talent Pending Pretest</Text>
              <Gap height={2} />
              <Flex flex={1}>
                <Text fontSize={28} color='#404041' fontWeight={800} alignSelf='flex-end' flex={1} marginBottom={6}>29</Text>
              </Flex>
            </Box>
          </Flex>
        </div>
      </Flex>
      <Gap height={6} />
      <Flex flex={1} style={{ borderWidth: 1, borderColor: '#EAEAEA', borderRadius: 16, padding: '24px 32px' }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Flex justify='space-between' alignItems='center'>
            <Text className={styles["inbox-filter-text"]} color='#AE445A' fontWeight={700} fontSize={16}>Product Digital</Text>
            <Button className={styles["inbox-btn"]}>
              View All
            </Button>
          </Flex>
          <Gap height={4} />
          <Flex borderWidth={1} borderColor='#EAEAEA' borderRadius={16} padding={6} alignContent='center' justifyContent='center'>
            <Flex flex={1}>
              <Box marginRight={16} alignSelf='center' textAlign='center'>
                <Image
                  style={{ width: 48, height: 48, borderRadius: 100 }}
                  src="/images/company-dummy.jpeg"
                  alt="image"
                />
                <Gap height={2} />
                <Box backgroundColor='#3DB41F' borderRadius={20} color='#FFFFFF'>
                  <Text fontSize={12}>Live</Text>
                </Box>
              </Box>
              <Box flex={1}>
                <Flex>
                  <Box justifyContent='center' flex={1} alignItems='center'>
                    <Text color='#292A2E' fontWeight={600} fontSize={11}>Perusahaan</Text>
                    <Text fontSize={14} color='#404041' fontWeight={800} alignSelf='flex-end' flex={1}>PT. Gema Insani</Text>
                  </Box>
                  <Box justifyContent='center' flex={1}>
                    <Text color='#292A2E' fontWeight={600} fontSize={11}>Job Title</Text>
                    <Text fontSize={14} color='#404041' fontWeight={800} alignSelf='flex-end' flex={1}>Business Team Staff</Text>
                  </Box>
                  <Box justifyContent='center' flex={1}>
                    <Text color='#292A2E' fontWeight={600} fontSize={11}>Salary Range</Text>
                    <Text fontSize={14} color='#404041' fontWeight={800} alignSelf='flex-end' flex={1}>Rp 6,000,000 - Rp 7,500,000</Text>
                  </Box>
                </Flex>
                <Gap height={2} />
                <Box borderWidth={1} borderColor='#EAEAEA' />
                <Gap height={2} />
                <Flex flex={1} >
                  <Box justifyContent='center' alignItems='center'>
                    <Text color='#AE445A' fontWeight={600} fontSize={14}>Diundang</Text>
                    <Text fontSize={14} color='#404041' fontWeight={800} alignSelf='flex-end' flex={1} marginBottom={6}>0</Text>
                  </Box>
                  <Gap width={12} />
                  <Box justifyContent='center'>
                    <Text color='#AE445A' fontWeight={600} fontSize={14}>Diproses</Text>
                    <Text fontSize={14} color='#404041' fontWeight={800} alignSelf='flex-end' flex={1} marginBottom={6}>0</Text>
                  </Box>
                  <Gap width={12} />
                  <Box justifyContent='center'>
                    <Text color='#AE445A' fontWeight={600} fontSize={14}>Terpilih</Text>
                    <Text fontSize={14} color='#404041' fontWeight={800} alignSelf='flex-end' flex={1} marginBottom={6}>0</Text>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Flex>
        </div>
      </Flex>
      <Gap height={6} />
      <Flex flex={1} style={{ borderWidth: 1, borderColor: '#EAEAEA', borderRadius: 16, padding: '24px 32px' }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Flex justify='space-between' alignItems='center'>
            <Text className={styles["inbox-filter-text"]} color='#AE445A' fontWeight={700} fontSize={16}>Talent List</Text>
            <Button className={styles["inbox-btn"]}>
              View All
            </Button>
          </Flex>
          <Gap height={4} />
          <Flex>
            <Flex flex={1} style={{ borderWidth: 2, borderColor: '#AE445A', borderRadius: 16, padding: 16 }} alignItems='center'>
              <Image
                style={{ width: 80, height: 80, borderRadius: 5 }}
                src="/images/company-dummy.jpeg"
                alt="image"
              />
              <Gap width={4} />
              <Box flex={1}>
                <Text color='#404041' fontWeight={700} fontSize={16}>Maudy Ayunda</Text>
                <Text color='#404041' fontWeight={400} fontSize={12}>Diploma/Sarjana S1</Text>
                <Text color='#404041' fontWeight={400} fontSize={12}>0 - 2 tahun</Text>
                <Text color='#404041' fontWeight={400} fontSize={12}>Skor: 85</Text>
              </Box>
              <Box>
                <Text color='#404041' fontWeight={400} fontSize={14}>2 Mei 2023 | 09:00 WIB</Text>
              </Box>
              <Gap width={4} />
              <Box>
                <EyeIcon />
              </Box>
            </Flex>
          </Flex>
        </div>
      </Flex>
    </Box>
  );
};

export default DashboardMitra;
