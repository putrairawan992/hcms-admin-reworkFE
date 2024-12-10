"use client";
import SidebarLayout from "@/app/components/sidebarLayout";
import {
  Box,
  Button,
  Flex,
  Text,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import styles from "../../styles/approvalRemuneration.module.css";
import DummyImage from "../../../../public/images/dummy-image.png";
import { ChatIcon } from "@/app/components/icons";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import moment from "moment";
import "moment/locale/id";
import dynamic from "next/dynamic";
import { useGetApprovalRemuneration } from "@/app/api/approval";
import { useGetProductDigital } from "@/app/api/common";
import useApprovalRemuneration from "./useApprovalRemuneration";
import { ApprvRemunCard } from "@/app/components/molecules";
import { SelectField } from "@/app/components/atoms";
import { yearOptions, monthOptions, statusRemunOptions } from "@/shared/general";

moment.locale("id");

const ApprovalRemuneration = () => {
  const { data, filters, productDigitalData, loading, onChangeSelect, onPressDetail, onPressIcon, isOpen, onClose, onCloseNote, isOpenNote } = useApprovalRemuneration();
  const ConfirmationModalWithNoSSR = dynamic(
    () => import("../../components/cancelApprovalConfirmationModal"),
    { ssr: false }
  );
  const NoteModalWithNoSSR = dynamic(
    () => import("../../components/noteModal"),
    { ssr: false }
  );
  const [years, setYears] = useState("2024");
  const [month, setMonth] = useState("10");
  const [productDigital, setProductDigital] = useState("pt 1");
  const [status, setStatus] = useState("approved");
  // const { data, isPending, refetch } = useGetApprovalRemuneration({
  //   status,
  //   product_digital_name: productDigital,
  //   month,
  //   years,
  // });
  // const { data: productDigitalData } = useGetProductDigital();

  const router = useRouter();
  // const { isOpen, onOpen, onClose } = useDisclosure();
  // const {
  //   isOpen: isOpenNote,
  //   onOpen: onOpenNote,
  //   onClose: onCloseNote,
  // } = useDisclosure();
  const [text, setText] = useState("");

  const openNoteModalHandler = () => {
    onOpenNote();
  };

  // useEffect(() => {
  //   refetch();
  // }, [years, month, productDigital, status]);

  return (
    <>
      <ConfirmationModalWithNoSSR
        modalText={text}
        isOpen={isOpen}
        onClose={onClose}
      />
      <NoteModalWithNoSSR
        modalText={text}
        isOpen={isOpenNote}
        onClose={onCloseNote}
      />
      <SidebarLayout>
        <Box className={styles["approval-remuneration-container"]}>
          <Flex className={styles["approval-remuneration-header"]}>
            <Text className={styles["approval-remuneration-title"]}>
              Approval Remuneration
            </Text>
            <Flex className={styles["approval-remuneration-header-wrapper"]}>
              <Text className={styles["approval-remuneration-header-text"]}>
                Perlu Ditinjau:
              </Text>
              <Text className={styles["approval-remuneration-header-text"]}>
                17
              </Text>
              <Text className={styles["approval-remuneration-header-text"]}>
                Submit
              </Text>
            </Flex>
          </Flex>
          <Flex marginBottom={4} marginTop={10}>
            <SelectField label="Tahun" options={yearOptions} value={filters.years} slug='years' onChange={onChangeSelect} />
            <SelectField label="Bulan" options={monthOptions} value={filters.month} slug='month' onChange={onChangeSelect} />
            <SelectField label="Digital Product" options={productDigitalData} value={filters.product_digital_name} slug='product_digital_name' onChange={onChangeSelect} />
            <SelectField label="Status" options={statusRemunOptions} value={filters.status} slug='status' onChange={onChangeSelect} />
          </Flex>
          <Box className={styles["approval-remuneration-wrapper"]}>
            {data.length > 0 &&
              data.map((item, index) => (
                <ApprvRemunCard data={item} onClickIcon={onPressIcon} />
                // <Flex
                //   key={index}
                //   className={styles["approval-remuneration-card"]}
                //   justifyContent='space-between'
                // >
                //   <Flex className={styles["approval-remuneration-card-inner"]}>
                //     <Box
                //       className={styles["approval-remuneration-image-wrapper"]}
                //     >
                //       <Image
                //         className={styles["approval-remuneration-image"]}
                //         src='/images/company-dummy.jpeg'
                //       />
                //     </Box>
                //     <Box
                //       className={
                //         styles["approval-remuneration-content-wrapper"]
                //       }
                //     >
                //       <Text>{item.product_digital_name}</Text>
                //     </Box>
                //     <Box
                //       className={
                //         styles["approval-remuneration-content-wrapper"]
                //       }
                //     >
                //       <Text>
                //         {moment(item.created_at)
                //           .utcOffset("+07:00")
                //           .format("MMM YYYY")}
                //       </Text>
                //     </Box>
                //     <Box
                //       className={styles["approval-remuneration-content-status"]}
                //     >
                //       <Text>
                //         {item.status.charAt(0).toUpperCase() +
                //           item.status.slice(1) || "Status"}
                //       </Text>
                //     </Box>
                //     <Box
                //       className={
                //         styles["approval-remuneration-content-wrapper"]
                //       }
                //     >
                //       <ChatIcon
                //         onClick={() => openNoteModalHandler()}
                //         style={{
                //           width: "28px",
                //           height: "28px",
                //           margin: "0 12px",
                //           cursor: "pointer",
                //         }}
                //       />
                //     </Box>
                //     <Box
                //       className={
                //         styles["approval-remuneration-content-wrapper"]
                //       }
                //     >
                //       <Button
                //         onClick={() =>
                //           router.push(
                //             `/approval/remuneration/${item.remuneration_id}`
                //           )
                //         }
                //         className={styles["approval-remuneration-content-btn"]}
                //       >
                //         Detail
                //       </Button>
                //     </Box>
                //   </Flex>
                // </Flex>
              ))
            }
          </Box>
        </Box>
      </SidebarLayout>
    </>
  );
};

export default ApprovalRemuneration;
