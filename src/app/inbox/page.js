"use client";
import {
  Accordion,
  AccordionButton,
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

moment.locale("id");

const Inbox = () => {
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
  const [productDigital, setProductDigital] = useState("pt 1");
  const [role, setRole] = useState("");
  const [idInbox, setIdInbox] = useState();
  const [currentData, setCurrentData] = useState();
  const { data: productDigitalData } = useGetProductDigital();
  const { data: dataRoles } = useGetListRoles();
  const { data: dataInbox, refetch } = useGetInbox({
    role,
    product_digital_name: productDigital,
    month,
    years,
  });
  const { data: dataInboxDetail, refetch: refetchDetailInbox } =
    useGetDetailInbox({ id: idInbox });

  useEffect(() => {
    refetch();
  }, [years, month, productDigital, role]);

  useEffect(() => {
    refetchDetailInbox();
  }, [idInbox]);

  const replyMessageHandler = () => {
    setCurrentData(dataInboxDetail[0]);
    onOpen();
  };

  return (
    <>
      <SendMessageModal
        isOpen={isOpen}
        onClose={onClose}
        currentData={currentData}
        refetch={refetch}
      />
      <Box className={styles["inbox-container"]}>
        <Flex align={"center"} justify={"space-between"}>
          <Text className={styles["inbox-title"]}>Inbox</Text>
          <Button onClick={onOpen} className={styles["inbox-btn"]}>
            Write New Message
          </Button>
        </Flex>
        <Flex className={styles["inbox-filter-container"]}>
          <Box>
            <Text className={styles["inbox-filter-text"]}>Tahun</Text>
            <Select
              value={years}
              onChange={(e) => setYears(e.target.value)}
              className={styles["inbox-filter-select"]}
            >
              <option value="" selected disabled hidden>
                Tahun
              </option>
              {yearOptions.map((item, index) => (
                <option key={index} value={item.value}>
                  {item.label}
                </option>
              ))}
            </Select>
          </Box>
          <Box>
            <Text className={styles["inbox-filter-text"]}>Bulan</Text>
            <Select
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className={styles["inbox-filter-select"]}
            >
              <option value="" selected disabled hidden>
                Pilih Bulan
              </option>
              {monthOptions.map((item, index) => (
                <option key={index} value={item.value}>
                  {item.label}
                </option>
              ))}
            </Select>
          </Box>
          <Box>
            <Text className={styles["inbox-filter-text"]}>
              Digital Product
            </Text>
            <Select
              value={productDigital}
              onChange={(e) => setProductDigital(e.target.value)}
              className={styles["inbox-filter-select"]}
            >
              <option value="" selected disabled hidden>
                Pilih Digital Product
              </option>
              {productDigitalData?.map((item, index) => (
                <option key={index} value={item.product_digital_name}>
                  {item.product_digital_name}
                </option>
              ))}
            </Select>
          </Box>
          <Box>
            <Text className={styles["inbox-filter-text"]}>Akun User</Text>
            <Select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className={styles["inbox-filter-select"]}
            >
              <option value="" selected disabled hidden>
                Pilih Role
              </option>
              {dataRoles?.map((item, index) => (
                <option key={index} value={item.product_digital_name}>
                  {item.product_digital_name}
                </option>
              ))}
            </Select>
          </Box>
        </Flex>
        {!isEmpty(dataInbox) ? (
          <Accordion allowToggle>
            {dataInbox?.map((item, index) => (
              <AccordionItem key={index} border="none">
                <h2>
                  <AccordionButton
                    background={item.is_read ? "#718199" : "#8364BA"}
                    className={styles["inbox-wrapper"]}
                    onClick={() => {
                      setIdInbox(item.room_message_id);
                    }}
                  >
                    <Box className={styles["inbox-img-wrapper"]}>
                      <Image
                        className={styles["inbox-img"]}
                        src="/images/company-dummy.jpeg"
                        alt="image"
                      />
                    </Box>
                    <Text className={styles["inbox-name"]}>
                      {item.sender_name}
                    </Text>
                    <Text className={styles["inbox-text"]}>{item.title}</Text>
                    <DownloadIcon w={"20px"} h={"20px"} color={"#ffffff"} />
                    <Flex align={"center"}>
                      <Text className={styles["inbox-text"]}>
                        {moment(item.schedule).format("DD MMMM YYYY")}
                      </Text>
                      <Text
                        className={styles["inbox-text"]}
                        margin={"0 1rem"}
                      >
                        {moment(item.schedule).format("HH:mm")}
                      </Text>
                      <Text className={styles["inbox-text"]}>
                        {moment(item.schedule).locale("en").format("A")}
                      </Text>
                    </Flex>
                  </AccordionButton>
                </h2>
                {!isEmpty(dataInboxDetail) && (
                  <AccordionPanel
                    pb={4}
                    className={styles["inbox-reply-container"]}
                  >
                    <Text
                      dangerouslySetInnerHTML={{
                        __html: dataInboxDetail[0]?.main_text,
                      }}
                    />
                    {item.is_read && (
                      <Flex justify={"end"}>
                        <Button
                          onClick={replyMessageHandler}
                          className={styles["inbox-btn"]}
                          alignSelf={"end"}
                          mt={"1.5rem"}
                        >
                          Reply
                        </Button>
                      </Flex>
                    )}
                  </AccordionPanel>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        ) : (
          <Flex align={"center"} justify={"center"}>
            <Text>Tidak ada data inbox</Text>
          </Flex>
        )}
      </Box>
    </>
  );
};

export default Inbox;
