"use client";
import { Box, Button, Flex, Select, Text, Image, Slide, SliderFilledTrack, Slider, SliderTrack, SliderThumb, Progress, ProgressLabel, CircularProgress } from "@chakra-ui/react";
import SidebarLayout from "./components/sidebarLayout";
import styles from "./styles/dashboard.module.css";
import { useGetDashboard } from "./api/dashboard";
import moment from "moment";
import "moment/locale/id";
import { useEffect, useState } from "react";
import { getUserData } from "./utils/localStorage";
import { Gap, SelectField } from "./components/atoms";
import { ProgressCard } from "./components/molecules";
import { yearOptions } from "@/shared/general";

moment.locale("id");

const Home = () => {
  const profile = getUserData();

  const isPending = false;
  // const { data, isPending } = useGetDashboard();
  const [currentTime, setCurrentTime] = useState(moment());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleNavigate = (screen) => {
    window.location.href = screen;
  };

  const data =
  {
    jobPost: [
      { title: "Approve", value: 42, color: '#3B78C2' },
      { title: "Reject", value: 28, color: '#3AB471' },
      { title: "In-Review", value: 30, color: '#F39F5A' }
    ],
    requirePosition: [
      { title: "Marketing Staff", value: 42, color: '#3B78C2' },
      { title: "Graphic Designer", value: 28, color: '#3AB471' },
      { title: "Front-End Engineer", value: 20, color: '#8364BA' }
    ],
    employeeType: [
      { title: "Approve", value: 42, color: '#3B78C2' },
      { title: "Reject", value: 28, color: '#3AB471' },
      { title: "In-Review", value: 30, color: '#F39F5A' }
    ],
    talentList: [
      { title: "Aktif", value: 42, color: '#3B78C2' },
      { title: "Perubahan Gaji", value: 28, color: '#3AB471' },
      { title: "Perubahan Status", value: 30, color: '#8364BA' },
      { title: "Resign", value: 30, color: '#F39F5A' }
    ],
  };

  return (
    <>
      {!isPending && (
        <>
          <Box className={styles["dashboard-container"]}>
            <SelectField label="Tahun" />
            <SelectField label="Bulan" />
            <SelectField label="Digital Product" />
          </Box>
          <Gap height={3} />
          <Flex align={"flex-start"} width={"100%"}>
            <Box className={styles["dashboard-content-container"]} flex={1} height={65}>
              <Text color="#404041" fontWeight='bold' >
                Jumlah PKWT Talent yang sudah diproses: <span style={{ color: '#3B78C2' }}>2.106 </span>Orang
              </Text>
            </Box>
            <Gap width={2} />
            <Box className={styles["dashboard-content-container"]} flex={1} height={65}>
              <Text color="#404041" fontWeight='bold'>
                Rata-Rata pemrosesan PKWT (Full Signed): <span style={{ color: '#3B78C2' }}>20 </span>Hari
              </Text>
            </Box>
          </Flex>
          <Gap height={3} />
          <Flex align={"flex-start"} width={"100%"}>
            <Flex className={styles["dashboard-content-container"]} flex={1} style={{ height: '65px' }}>
              <Text color="#404041" fontWeight='bold'>
                Turn Over Rate: <span style={{ color: '#3B78C2' }}>23</span>%
              </Text>
              <Gap width={4} />
              <Image src="/images/dashboard/bye.png" height={65} />
            </Flex>
            <Gap width={2} />
            <Flex className={styles["dashboard-content-container"]} flex={1} style={{ height: '65px' }}>
              <Text color="#404041" fontWeight='bold'>
                New Hiring Rate: <span style={{ color: '#3B78C2' }}>23</span>%
              </Text>
              <Gap width={8} />
              <Image src="/images/dashboard/rate.png" height={65} />
            </Flex>
          </Flex>
          <Gap height={3} />
          <Flex align={"flex-start"} width={"100%"}>
            <Box className={styles["dashboard-content-container2"]} flex={1}>
              <Text color="#AE445A" fontWeight='900' fontSize={24}>
                Approval Job Post
              </Text>
              <Gap height={6} />
              <ProgressCard data={data.jobPost} label="Lowongan" />
            </Box>
            <Gap width={2} />
            <Box className={styles["dashboard-content-container2"]} flex={1}>
              <Flex justify='space-between'>
                <Text color="#AE445A" fontWeight='900' fontSize={24}>
                  Posisi yang Dibutuhkan
                </Text>
                <Box>
                  <Text color="#AE445A" fontWeight='900' fontSize={12} textDecoration='underline' cursor='pointer'>
                    View All
                  </Text>
                </Box>
              </Flex>
              <Gap height={6} />
              <ProgressCard data={data.requirePosition} label="Orang" />
            </Box>
          </Flex>
          <Gap height={3} />
          <Flex align={"flex-start"} width={"100%"}>
            <Box className={styles["dashboard-content-container2"]} flex={1}>
              <Text color="#AE445A" fontWeight='900' fontSize={24}>
                Tipe Karyawan
              </Text>
              <Gap height={6} />
              <ProgressCard data={data.employeeType} label="Orang" />
            </Box>
            <Gap width={2} />
            <Box className={styles["dashboard-content-container2"]} flex={1}>
              <Text color="#AE445A" fontWeight='900' fontSize={24}>
                Jumlah Talent
              </Text>
              <Gap height={6} />
              <ProgressCard data={data.talentList} label="Orang" />
            </Box>
          </Flex>
          <Gap height={3} />
          <Box className={styles["dashboard-content-container2"]} flex={1}>
            <Flex align='center'>
              <Text color="#AE445A" fontWeight='900' fontSize={24}>
                Rekap Data
              </Text>
              <Gap width={4} />
              <Box flex={0.2}>
                <SelectField options={yearOptions} placeholder="Pilih Tahun" />
              </Box>
            </Flex>
            <Gap height={6} />
            <ProgressCard data={data.employeeType} label="Orang" />
          </Box>
        </>
      )}
    </>
  );
};

export default Home;
