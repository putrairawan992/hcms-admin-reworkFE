"use client";
import { Box, Button, Flex, Select, Text, Image } from "@chakra-ui/react";
import SidebarLayout from "./components/sidebarLayout";
import styles from "./styles/dashboard.module.css";
import { useGetDashboard } from "./api/dashboard";
import moment from "moment";
import "moment/locale/id";
import { useEffect, useState } from "react";
import { getUserData } from "./utils/localStorage";

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

  return (
    <>
      {!isPending && (
        <>
          <Box className={styles["dashboard-container"]}>
            <Box className={styles["dashboard-welcome-container"]}>
              <Text className={styles["dashboard-welcome-title"]}>
                Halo, {profile?.name}!
              </Text>
              <Box>
                <Text className={styles["dashboard-welcome-day"]}>
                  {currentTime.format("dddd, D MMMM YYYY")}
                </Text>
                <Text className={styles["dashboard-welcome-time"]}>
                  {currentTime.format("HH : mm : ss")}
                </Text>
              </Box>
            </Box>
            <Image
              className={styles["dashboard-img-front"]}
              src={"/images/Dashboard/Rectangle 4164.png"}
            />
            <Image
              className={styles["dashboard-img-back"]}
              src={"/images/Dashboard/bg absen 1.png"}
            />
            <Flex>
              <Box className={styles["dashboard-info-left-container"]}>
                <Box mb={"1rem"}>
                  <Text className={styles["dashboard-info-title"]}>
                    Contract End This Month :
                  </Text>
                  <Text className={styles["dashboard-info-text"]}>
                    6 People
                  </Text>
                </Box>
                <Box>
                  <Text className={styles["dashboard-info-title"]}>
                    Employee Request :
                  </Text>
                  <Text className={styles["dashboard-info-text"]}>
                    5 Submit
                  </Text>
                </Box>
              </Box>
              <Box>
                <Box mb={"1rem"}>
                  <Text className={styles["dashboard-info-title"]}>
                    Contract End Next Month :
                  </Text>
                  <Text className={styles["dashboard-info-text"]}>
                    6 People
                  </Text>
                </Box>
                <Box>
                  <Text className={styles["dashboard-info-title"]}>
                    Employee QC :
                  </Text>
                  <Text className={styles["dashboard-info-text"]}>
                    5 Submit
                  </Text>
                </Box>
              </Box>
            </Flex>
          </Box>
          <Flex align={"flex-start"} width={"100%"}>
            <Box className={styles["dashboard-left-container"]}>
              <Flex className={styles["dashboard-content-container"]}>
                <Box className={styles["dashboard-left-content-wrapper"]}>
                  <Text className={styles["dashboard-welcome-title"]}>
                    Admin Role
                  </Text>
                  <Box>
                    <Text className={styles["dashboard-left-subtitle"]}>
                      Jumlah Admin
                    </Text>
                    <Text className={styles["dashboard-left-info"]}>
                      78 orang
                    </Text>
                  </Box>
                  <Text className={styles["dashboard-left-link"]} onClick={() => handleNavigate('/setup/admin-role')} cursor='pointer'>
                    View All
                  </Text>
                </Box>
                <Image
                  className={styles["dashboard-admin-img"]}
                  src={"/images/Dashboard/Frame.png"}
                />
              </Flex>
              <Flex className={styles["dashboard-content-container"]}>
                <Box className={styles["dashboard-left-content-wrapper"]}>
                  <Text className={styles["dashboard-welcome-title"]}>
                    Account Setup
                  </Text>
                  <Box>
                    <Text className={styles["dashboard-left-subtitle"]}>
                      Jumlah Akun
                    </Text>
                    <Text className={styles["dashboard-left-info"]}>
                      78 orang
                    </Text>
                  </Box>
                  <Text className={styles["dashboard-left-link"]} onClick={() => handleNavigate('/setup/account')} cursor='pointer'>
                    View All
                  </Text>
                </Box>
                <Box>
                  <Image
                    className={styles["dashboard-account-img-1"]}
                    src={"/images/Dashboard/Group (2).png"}
                  />
                  <Image
                    className={styles["dashboard-account-img-2"]}
                    src={"/images/Dashboard/Group (3).png"}
                  />
                  <Image
                    className={styles["dashboard-account-img-3"]}
                    src={"/images/Dashboard/Group (4).png"}
                  />
                </Box>
              </Flex>
              <Flex className={styles["dashboard-content-container"]}>
                <Box className={styles["dashboard-left-content-wrapper"]}>
                  <Text className={styles["dashboard-welcome-title"]}>
                    Data Talent
                  </Text>
                  <Box>
                    <Text className={styles["dashboard-left-subtitle"]}>
                      Digital Product
                    </Text>
                    <Select className={styles["dashboard-select"]}>
                      <option value="" selected disabled hidden>
                        Pilih Digital Product
                      </option>
                      <option>Value 1</option>
                    </Select>
                  </Box>
                  <Text className={styles["dashboard-left-link"]} onClick={() => handleNavigate('/data-talent')} cursor='pointer'>
                    View All
                  </Text>
                </Box>
                <Image
                  className={styles["dashboard-account-img"]}
                  src={"/images/Dashboard/Group.png"}
                />
              </Flex>
            </Box>
            <Box className={styles["dashboard-right-container"]}>
              <Box className={styles["dashboard-notif-container"]}>
                <Flex align={"center"} justify={"space-between"} width={"100%"}>
                  <Text className={styles["dashboard-welcome-title"]}>
                    Blast Notification
                  </Text>
                  <Text className={styles["dashboard-left-link"]}>
                    View All
                  </Text>
                </Flex>
                <Button className={styles["dashboard-notif-btn"]}>
                  + Buat Baru
                </Button>
                <Flex className={styles["dashboard-notif-content"]}>
                  <Text className={styles["dashboard-notif-content-title"]}>
                    Judul Pesan
                  </Text>
                  <Text className={styles["dashboard-notif-content-text"]}>
                    Start Up
                  </Text>
                  <Text className={styles["dashboard-notif-content-text"]}>
                    Nama Start Up
                  </Text>
                  <Text className={styles["dashboard-notif-content-text"]}>
                    10 Jun 2023
                  </Text>
                </Flex>
                <Flex className={styles["dashboard-notif-content"]}>
                  <Text className={styles["dashboard-notif-content-title"]}>
                    Judul Pesan
                  </Text>
                  <Text className={styles["dashboard-notif-content-text"]}>
                    Start Up
                  </Text>
                  <Text className={styles["dashboard-notif-content-text"]}>
                    Nama Start Up
                  </Text>
                  <Text className={styles["dashboard-notif-content-text"]}>
                    10 Jun 2023
                  </Text>
                </Flex>
                <Flex className={styles["dashboard-notif-content"]}>
                  <Text className={styles["dashboard-notif-content-title"]}>
                    Judul Pesan
                  </Text>
                  <Text className={styles["dashboard-notif-content-text"]}>
                    Start Up
                  </Text>
                  <Text className={styles["dashboard-notif-content-text"]}>
                    Nama Start Up
                  </Text>
                  <Text className={styles["dashboard-notif-content-text"]}>
                    10 Jun 2023
                  </Text>
                </Flex>
              </Box>
              <Box className={styles["dashboard-payslip-container"]}>
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  flexDir={"column"}
                  width={"60%"}
                  height={"100%"}
                >
                  <Text className={styles["dashboard-welcome-title"]}>
                    Payslip
                  </Text>
                  <Box marginTop={"5px"}>
                    <Text className={styles["dashboard-left-subtitle"]}>
                      Digital Product
                    </Text>
                    <Select className={styles["dashboard-select"]}>
                      <option value="" selected disabled hidden>
                        Pilih Bulan
                      </option>
                      <option>Value 1</option>
                    </Select>
                  </Box>
                  <Flex
                    align={"center"}
                    width={"100%"}
                    justify={"space-between"}
                  >
                    <Box>
                      <Text className={styles["dashboard-left-subtitle"]}>
                        Bulan
                      </Text>
                      <Select className={styles["dashboard-select"]}>
                        <option value="" selected disabled hidden>
                          Pilih Bulan
                        </option>
                        <option>Value 1</option>
                      </Select>
                    </Box>
                    <Box>
                      <Text className={styles["dashboard-left-subtitle"]}>
                        Tahun
                      </Text>
                      <Select className={styles["dashboard-select"]}>
                        <option value="" selected disabled hidden>
                          Pilih Tahun
                        </option>
                        <option>Value 1</option>
                      </Select>
                    </Box>
                  </Flex>
                  <Button
                    margin={"1rem 0"}
                    className={styles["dashboard-notif-btn"]}
                  >
                    Open
                  </Button>
                </Box>
                <Box width={"40%"} position={"relative"}>
                  <Image
                    className={styles["dashboard-payslip-img-1"]}
                    src={"/images/Dashboard/image 6.png"}
                  />
                  <Image
                    className={styles["dashboard-payslip-img-2"]}
                    src={"/images/Dashboard/image 5.png"}
                  />
                  <Image
                    className={styles["dashboard-payslip-img-3"]}
                    src={"/images/Dashboard/image 4.png"}
                  />
                </Box>
              </Box>
            </Box>
          </Flex>
        </>
      )}
    </>
  );
};

export default Home;
