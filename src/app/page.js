import { Box, Button, Flex, Select, Text } from "@chakra-ui/react";
import SidebarLayout from "./components/sidebarLayout";
import Image from "next/image";
import DashboardFront from "../../public/images/Dashboard/Rectangle 4164.png";
import DashboardBack from "../../public/images/Dashboard/bg absen 1.png";
import DashboardAdmin from "../../public/images/Dashboard/Frame.png";
import DashboardAccount1 from "../../public/images/Dashboard/Group (2).png";
import DashboardAccount2 from "../../public/images/Dashboard/Group (3).png";
import DashboardAccount3 from "../../public/images/Dashboard/Group (4).png";
import DashboardTalent from "../../public/images/Dashboard/Group.png";
import DashboardPayslip1 from "../../public/images/Dashboard/image 6.png";
import DashboardPayslip2 from "../../public/images/Dashboard/image 5.png";
import DashboardPayslip3 from "../../public/images/Dashboard/image 4.png";
import styles from "./styles/dashboard.module.css";

const Home = () => {
  return (
    <SidebarLayout>
      <Box className={styles["dashboard-container"]}>
        <Box className={styles["dashboard-welcome-container"]}>
          <Text className={styles["dashboard-welcome-title"]}>
            Halo, Hanafia Al Zahra!
          </Text>
          <Box>
            <Text className={styles["dashboard-welcome-day"]}>
              Kamis, 20 Juni 2023
            </Text>
            <Text className={styles["dashboard-welcome-time"]}>
              09 : 15 : 23
            </Text>
          </Box>
        </Box>
        <Image
          className={styles["dashboard-img-front"]}
          src={DashboardFront}
          width={100}
          height={100}
        />
        <Image
          className={styles["dashboard-img-back"]}
          src={DashboardBack}
          width={100}
          height={100}
        />
        <Flex>
          <Box className={styles["dashboard-info-left-container"]}>
            <Box mb={"1rem"}>
              <Text className={styles["dashboard-info-title"]}>
                Contract End This Month :
              </Text>
              <Text className={styles["dashboard-info-text"]}>6 People</Text>
            </Box>
            <Box>
              <Text className={styles["dashboard-info-title"]}>
                Employee Request :
              </Text>
              <Text className={styles["dashboard-info-text"]}>5 Submit</Text>
            </Box>
          </Box>
          <Box>
            <Box mb={"1rem"}>
              <Text className={styles["dashboard-info-title"]}>
                Contract End Next Month :
              </Text>
              <Text className={styles["dashboard-info-text"]}>6 People</Text>
            </Box>
            <Box>
              <Text className={styles["dashboard-info-title"]}>
                Employee QC :
              </Text>
              <Text className={styles["dashboard-info-text"]}>5 Submit</Text>
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
                <Text className={styles["dashboard-left-info"]}>78 orang</Text>
              </Box>
              <Text className={styles["dashboard-left-link"]}>View All</Text>
            </Box>
            <Image
              className={styles["dashboard-admin-img"]}
              src={DashboardAdmin}
              width={100}
              height={100}
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
                <Text className={styles["dashboard-left-info"]}>78 orang</Text>
              </Box>
              <Text className={styles["dashboard-left-link"]}>View All</Text>
            </Box>
            <Box>
              <Image
                className={styles["dashboard-account-img-1"]}
                src={DashboardAccount1}
                width={100}
                height={100}
              />
              <Image
                className={styles["dashboard-account-img-2"]}
                src={DashboardAccount2}
                width={100}
                height={100}
              />
              <Image
                className={styles["dashboard-account-img-3"]}
                src={DashboardAccount3}
                width={100}
                height={100}
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
              <Text className={styles["dashboard-left-link"]}>View All</Text>
            </Box>
            <Image
              className={styles["dashboard-account-img"]}
              src={DashboardTalent}
              width={100}
              height={100}
            />
          </Flex>
        </Box>
        <Box className={styles["dashboard-right-container"]}>
          <Box className={styles["dashboard-notif-container"]}>
            <Flex align={"center"} justify={"space-between"} width={"100%"}>
              <Text className={styles["dashboard-welcome-title"]}>
                Blast Notification
              </Text>
              <Text className={styles["dashboard-left-link"]}>View All</Text>
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
              <Text className={styles["dashboard-welcome-title"]}>Payslip</Text>
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
              <Flex align={"center"} width={"100%"} justify={"space-between"}>
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
                src={DashboardPayslip1}
                width={100}
                height={100}
              />
              <Image
                className={styles["dashboard-payslip-img-2"]}
                src={DashboardPayslip2}
                width={100}
                height={100}
              />
              <Image
                className={styles["dashboard-payslip-img-3"]}
                src={DashboardPayslip3}
                width={100}
                height={100}
              />
            </Box>
          </Box>
        </Box>
      </Flex>
    </SidebarLayout>
  );
};

export default Home;
