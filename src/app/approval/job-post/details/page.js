"use client";
import { CalenderIcon } from "@/app/components/icons";
import SidebarLayout from "@/app/components/sidebarLayout";
import { Box, Button, Flex, Text, Image } from "@chakra-ui/react";
import DummyImg from "../../../../../public/images/dummy-image.png";
import styles from "../../../styles/jobPostDetails.module.css";
import { useRouter } from "next/navigation";

const JobPostDetails = () => {
  const router = useRouter();

  const openJobPost = () => {
    router.push("/approval/job-post");
  };

  return (
    <SidebarLayout>
      <Box className={styles["job-details-container"]}>
        <Text className={styles["job-details-title"]}>Job Vacancy</Text>
        <Box>
          <Text className={styles["job-details-header"]}>
            Periode Lowongan Kerja
          </Text>
          <Flex className={styles["job-details-period-wrapper"]}>
            <Flex className={styles["job-details-date-wrapper"]}>
              <Text className={styles["job-details-text"]}>2 Mei 2023</Text>
              <Text margin={"0 8px"} className={styles["job-details-text"]}>
                09:00:00
              </Text>
              <Text marginRight={"8px"} className={styles["job-details-text"]}>
                AM
              </Text>
              <CalenderIcon />
            </Flex>
            <Text margin={"0 10px"}>-</Text>
            <Flex className={styles["job-details-date-wrapper"]}>
              <Text className={styles["job-details-text"]}>2 Mei 2023</Text>
              <Text margin={"0 8px"} className={styles["job-details-text"]}>
                09:00:00
              </Text>
              <Text marginRight={"8px"} className={styles["job-details-text"]}>
                AM
              </Text>
              <CalenderIcon />
            </Flex>
          </Flex>
        </Box>
        <Box>
          <Text className={styles["job-details-header"]}>Tanggal Posting</Text>
          <Flex
            margin={"0.8rem 0 1rem"}
            className={styles["job-details-date-wrapper"]}
          >
            <Text className={styles["job-details-text"]}>2 Mei 2023</Text>
            <Text margin={"0 8px"} className={styles["job-details-text"]}>
              09:00:00
            </Text>
            <Text marginRight={"8px"} className={styles["job-details-text"]}>
              AM
            </Text>
            <CalenderIcon />
          </Flex>
        </Box>
        <Box className={styles["job-details-wrapper"]}>
          <Flex align={"start"} justify={"space-between"}>
            <Flex align={"center"}>
              <Box className={styles["job-details-img-wrapper"]}>
                <Image className={styles["job-details-img"]} src={DummyImg} />
              </Box>
              <Box marginLeft={"1.5rem"}>
                <Text className={styles["job-details-company-header"]}>
                  Marketing Staff
                </Text>
                <Text className={styles["job-details-company-text"]}>
                  PT. Maju Mundur
                </Text>
                <Text className={styles["job-details-company-text"]}>
                  IDR 5.000.000 - 6.500.000
                </Text>
              </Box>
            </Flex>
            <Box display={"flex"} flexDir={"column"}>
              <Text className={styles["job-details-company-header"]}>
                Jakarta Selatan (WFO)
              </Text>
              <Box className={styles["job-details-status"]}>Live</Box>
            </Box>
          </Flex>
          <Box margin={"2rem 0"}>
            <Text className={styles["job-details-header"]}>
              Jenis Pekerjaan
            </Text>
            <Text>Kontrak</Text>
          </Box>
          <Box margin={"2rem 0"}>
            <Text className={styles["job-details-header"]}>
              Periode Pekerjaan
            </Text>
            <Text className={styles["job-details-text"]}>
              10 Juni 2023 - 10 Juni 2025
            </Text>
            <Text className={styles["job-details-text"]}>
              24 Bulan (2 Tahun)
            </Text>
          </Box>
          <Box margin={"2rem 0"}>
            <Text className={styles["job-details-header"]}>
              Tingkat Pekerjaan
            </Text>
            <Text className={styles["job-details-text"]}>
              Staf (Non Manajemen & Non Supervisor)
            </Text>
          </Box>
          <Box margin={"2rem 0"}>
            <Text className={styles["job-details-header"]}>
              Jumlah Kandidat yang Dibutuhkan
            </Text>
            <Text className={styles["job-details-text"]}>2</Text>
          </Box>
          <Box margin={"2rem 0"}>
            <Text className={styles["job-details-header"]}>Pengalaman</Text>
            <Text className={styles["job-details-text"]}>
              Min. 0 tahun sampai 2 tahun
            </Text>
          </Box>
          <Box margin={"2rem 0"}>
            <Text className={styles["job-details-header"]}>
              Spesialisasi Pekerjaan
            </Text>
            <Text className={styles["job-details-text"]}>
              Digital Marketing
            </Text>
          </Box>
          <Box margin={"2rem 0"}>
            <Text className={styles["job-details-header"]}>Pendidikan</Text>
            <Text className={styles["job-details-text"]}>
              SMA/SMK, Sarjana S1, Sertifikat Profesional
            </Text>
          </Box>
          <Box margin={"2rem 0"}>
            <Text className={styles["job-details-header"]}>
              Keuntungan dari Perusahaan
            </Text>
            <Text className={styles["job-details-text"]}>
              BPJS Kesehatan, BPJS Ketenagakerjaan, THR
            </Text>
          </Box>
          <Box margin={"2rem 0"}>
            <Text className={styles["job-details-header"]}>
              Deskripsi Pekerjaan
            </Text>
            <Text className={styles["job-details-text"]}>
              BPJS Kesehatan, BPJS Ketenagakerjaan, THR
            </Text>
          </Box>
        </Box>
        <Flex w={"100%"} justify={"end"}>
          <Button onClick={openJobPost} className={styles["job-details-btn"]}>
            Close
          </Button>
        </Flex>
      </Box>
    </SidebarLayout>
  );
};

export default JobPostDetails;
