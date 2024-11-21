"use client";
import SidebarLayout from "@/app/components/sidebarLayout";
import {
  Box,
  Button,
  Flex,
  FormControl,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Switch,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import styles from "../../styles/setupJobPost.module.css";
import { useEffect, useState } from "react";
import { useGetSetupJobPost } from "@/app/api/setup";
import { isEmpty } from "lodash";
import { EditIcon, DeleteIcon, AddIcon, Search2Icon } from "@chakra-ui/icons";
import AddJobPostSetup from "@/app/components/addJobPostSetup";

const SetupJobPost = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedOption, setSelectedOption] = useState("");
  const jobPostOptions = [
    { label: "Lokasi Kerja", value: "work_location" },
    { label: "Keuntungan dari Perusahaan", value: "benefit_company" },
    { label: "Pendidikan", value: "education" },
    { label: "Pengalaman", value: "experience" },
    { label: "Spesialisasi Pekerjaan", value: "job_specialization" },
    { label: "Tingkat Pekerjaan", value: "work_level" },
  ];
  const { data, refetch } = useGetSetupJobPost({
    option: selectedOption,
  });

  useEffect(() => {
    refetch();
  }, [selectedOption]);

  return (
    <>
      <AddJobPostSetup
        isOpen={isOpen}
        onClose={onClose}
        title={
          jobPostOptions.find((item) => item.value === selectedOption)?.label
        }
        option={selectedOption}
        refetch={refetch}
      />
      <SidebarLayout>
        <Box className={styles["job-post-container"]}>
          <Text className={styles["job-post-title"]}>Setup - Job Post</Text>
          <Flex align={"center"} margin={"2rem 0"}>
            <Text className={styles["job-post-subtitle"]}>
              Pilih Pengaturan Untuk:
            </Text>
            <Select
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
              className={styles["job-post-filter-select"]}
            >
              <option value={""} selected disabled hidden>
                Pilih Pengaturan
              </option>
              {jobPostOptions.map((item, index) => (
                <option key={index} value={item.value}>
                  {item.label}
                </option>
              ))}
            </Select>
          </Flex>
          {selectedOption && (
            <Flex align={"center"}>
              <Button
                onClick={onOpen}
                className={styles["job-post-search-btn"]}
              >
                <AddIcon mr={"5px"} /> Add
              </Button>
              <InputGroup className={styles["job-post-input-container"]}>
                <Input
                  className={styles["job-post-input"]}
                  type="text"
                  placeholder="Cari"
                />
                <InputRightElement>
                  <Search2Icon />
                </InputRightElement>
              </InputGroup>
            </Flex>
          )}
          {isEmpty(data) ? (
            <Box className={styles["job-post-wrapper"]}>
              <Image
                src="/images/Select.png"
                className={styles["job-post-empty-img"]}
              />
              <Text className={styles["job-post-empty-text"]}>
                Pilih Pengaturan terlebih dahulu
              </Text>
            </Box>
          ) : (
            <Table mt={"3rem"}>
              <Thead>
                <Tr className={styles["job-post-table-header-container"]}>
                  <Th className={styles["job-post-table-header"]}>No</Th>
                  <Th className={styles["job-post-table-header"]}>
                    {
                      jobPostOptions.find(
                        (item) => item.value === selectedOption
                      )?.label
                    }
                  </Th>
                  <Th className={styles["job-post-table-header"]}>Status</Th>
                  <Th className={styles["job-post-table-header"]}>Action</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data?.map((item, index) => (
                  <Tr key={index}>
                    <Td className={styles["job-post-table-data"]}>
                      {index + 1}
                    </Td>
                    <Td className={styles["job-post-table-data"]}>
                      {item.experience_name ||
                        item.education_name ||
                        item.job_specialist_name ||
                        item.job_level_name}
                    </Td>
                    <Td className={styles["job-post-table-data"]}>
                      <FormControl
                        display="flex"
                        alignItems="center"
                        justifyContent={"center"}
                      >
                        <Text mr={"15px"}>
                          {item.status === "Active" ? "Aktif" : "Non - Aktif"}
                        </Text>
                        <Switch
                          id="action"
                          isChecked={item.status === "Active" ? true : false}
                        />
                      </FormControl>
                    </Td>
                    <Td className={styles["job-post-table-data"]}>
                      <EditIcon w={"24px"} h={"24px"} mr={"1.5rem"} />
                      <DeleteIcon w={"24px"} h={"24px"} />
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          )}
        </Box>
      </SidebarLayout>
    </>
  );
};

export default SetupJobPost;
