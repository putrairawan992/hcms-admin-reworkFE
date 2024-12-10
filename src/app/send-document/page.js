"use client";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Image,
  Select,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import SidebarLayout from "../components/sidebarLayout";
import styles from "../styles/inbox.module.css";
import { useEffect, useState } from "react";
import { useGetListRoles, useGetProductDigital } from "../api/common";
import { useGetDetailInbox, useGetInbox } from "../api/inbox";
import { DownloadIcon } from "@chakra-ui/icons";
import moment from "moment";
import "moment/locale/id";
import { isEmpty } from "lodash";
import SendMessageModal from "../components/sendMessageModal";

import { DataTalentCard, SendDocumentCard } from "../components/molecules";
import useDataTalent from "./useDataTalent";
import { moveScreen } from "../utils/helpers";
import Cookies from "js-cookie";

moment.locale("id");

const SendDocument = () => {
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
    return data.map((item) => {
      return <DataTalentCard data={item} />
    });
  };

  return (
    <>
      <SidebarLayout>
        <Box className={styles["inbox-container"]}>
          <Flex align={"center"} justify={"space-between"}>
            <Text className={styles["inbox-title"]}>Send Document</Text>
            <Box>
              <Button onClick={() => moveScreen('/data-talent/history')} className={styles["inbox-btn"]} marginRight={2}>
                History
              </Button>
              <Button onClick={onOpen} className={styles["inbox-btn"]} ma>
                Download All
              </Button>
            </Box>
          </Flex>
          <Flex marginBottom={4} marginTop={10}>
            <Box marginRight={2} flex={1}>
              <Text className={styles["inbox-filter-text"]}>Tahun</Text>
              <Select
                value={years}
                onChange={(e) => setYears(e.target.value)}
                className={styles["inbox-filter-select"]}>
                <option value="all" selected>Semua</option>
                {/* {productDigitalData?.map((item, index) => (
                  <option key={index} value={item.product_digital_name}>
                    {item.product_digital_name}
                  </option>
                ))} */}
              </Select>
            </Box>
            <Box marginRight={2} flex={1}>
              <Text className={styles["inbox-filter-text"]}>Bulan</Text>
              <Select
                value={years}
                onChange={(e) => setYears(e.target.value)}
                className={styles["inbox-filter-select"]}>
                <option value="all" selected>Semua</option>
                <option value="offering_letter_normal">Offering Letter Normal</option>
                <option value="pkwt">PKWT</option>
                <option value="offering_letter_khusus">Offering Letter Khusus</option>
                <option value="amandemen_pkwt">Amandemen PKWT</option>
                <option value="contract_freelance">Kontrak Freelance</option>
              </Select>
            </Box>
            <Box marginRight={2} flex={1}>
              <Text className={styles["inbox-filter-text"]}>Digital Product</Text>
              <Select
                value={years}
                onChange={(e) => setYears(e.target.value)}
                className={styles["inbox-filter-select"]}>
                <option value="all" selected>Semua</option>
                <option value="sent">Sent</option>
                <option value="employee_signed">Employee Signed</option>
                <option value="full_signed">Full Signed</option>
              </Select>
            </Box>
            <Box marginRight={2} flex={1}>
              <Text className={styles["inbox-filter-text"]}>Berkas</Text>
              <Select
                value={years}
                onChange={(e) => setYears(e.target.value)}
                className={styles["inbox-filter-select"]}>
                <option value="all" selected>Semua</option>
                <option value="non_selection">Non Selection</option>
                <option value="selection">Selection</option>
              </Select>
            </Box>
            <Box marginRight={2} flex={1}>
              <Text className={styles["inbox-filter-text"]}>Status Karyawan</Text>
              <Select
                value={years}
                flex={1}
                onChange={(e) => setYears(e.target.value)}
                className={styles["inbox-filter-select"]}>
                <option value="all" selected>Semua</option>
                <option value="contract">Kontrak</option>
                <option value="freelance">Freelance</option>
              </Select>
            </Box>
          </Flex>
          <SendDocumentCard />
          {!isEmpty(data) ? renderData()
            : (
              <Flex align={"center"} justify={"center"}>
                <Text>Tidak ada data inbox</Text>
              </Flex>
            )}
        </Box>
      </SidebarLayout>
    </>
  );
};

export default SendDocument;
