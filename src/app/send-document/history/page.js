"use client";
import {
  Box,
  Button,
  Flex,
  Select,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import SidebarLayout from "../../components/sidebarLayout";
import styles from "../../styles/inbox.module.css";
import { useState } from "react";
import moment from "moment";
import "moment/locale/id";
import { isEmpty } from "lodash";

import { DataTalentCard, HistoryTalentCard } from "../../components/molecules";
import useDataTalent from "../useSendDocument";
import { moveScreen } from "@/app/utils/helpers";

moment.locale("id");

const DataTalentHistory = () => {
  const yearOptions = [
    { value: "2024", label: "2024" },
    { value: "2023", label: "2023" },
    { value: "2022", label: "2022" },
    { value: "2021", label: "2021" },
    { value: "2020", label: "2020" },
    { value: "2019", label: "2019" },
    { value: "2018", label: "2018" },
    { value: "2017", label: "2017" },
    { value: "2016", label: "2016" },
    { value: "2015", label: "2015" },
  ];
  const monthOptions = [
    { value: "1", label: "Januari" },
    { value: "2", label: "Februari" },
    { value: "3", label: "Maret" },
    { value: "4", label: "April" },
    { value: "5", label: "Mei" },
    { value: "6", label: "Juni" },
    { value: "7", label: "Juli" },
    { value: "8", label: "Agustus" },
    { value: "9", label: "September" },
    { value: "10", label: "Oktober" },
    { value: "11", label: "November" },
    { value: "12", label: "Desember" },
  ];
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [years, setYears] = useState("2024");
  const [month, setMonth] = useState("10");
  const [currentData, setCurrentData] = useState();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const { data } = useDataTalent();

  const renderData = () => {
    <Flex>
      {
        data.map((item) => {
          return <HistoryTalentCard data={item} />
        })
      }
    </Flex>
  };

  return (
    <Box className={styles["inbox-container"]}>
      <Flex align={"center"} justify={"space-between"}>
        <Text className={styles["inbox-title"]}>Data Talent / History</Text>
      </Flex>
      <Flex marginBottom={4} marginTop={10}>
        <Box marginRight={2} paddingX={2} paddingY={2} borderWidth={1} borderColor='#AE445A' borderRadius={6}>
          <Flex justifyContent='space-between' flex={1} alignItems='flex-end'>
            <Text className={styles["inbox-filter-text"]} marginRight={6}>Total Digital Product : </Text>
            <Text className={styles["inbox-filter-text"]} color='#AE445A'>150</Text>
          </Flex>
        </Box>
        <Box marginRight={2} paddingX={2} paddingY={2} borderWidth={1} borderColor='#AE445A' borderRadius={6}>
          <Flex justifyContent='space-between' flex={1} alignItems='flex-end'>
            <Text className={styles["inbox-filter-text"]} marginRight={6}>Total Karyawan : </Text>
            <Text className={styles["inbox-filter-text"]} color='#AE445A'>150 Orang</Text>
          </Flex>
        </Box>
      </Flex>
      <Flex>
        <HistoryTalentCard data={data[0]} />
        <HistoryTalentCard data={data[0]} />
        <HistoryTalentCard data={data[0]} />
      </Flex>
      {/* {!isEmpty(data) ? renderData()
            : (
              <Flex align={"center"} justify={"center"}>
                <Text>Tidak ada data inbox</Text>
              </Flex>
            )} */}
    </Box>
  );
};

export default DataTalentHistory;
