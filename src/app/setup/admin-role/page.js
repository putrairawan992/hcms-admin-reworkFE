"use client";
import SidebarLayout from "@/app/components/sidebarLayout";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
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
import { AddIcon, EditIcon, Search2Icon } from "@chakra-ui/icons";
import styles from "../../styles/adminRole.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const AdminRole = () => {
  const ConfirmationModalWithNoSSR = dynamic(
    () => import("../../components/confirmationModal"),
    { ssr: false }
  );
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [text, setText] = useState("");

  const changeAdminStatusHandler = (status) => {
    if (status === "active") {
      setText("Anda akan menonaktifkan akun ini. Apakah anda yakin?");
    } else {
      setText("Anda akan mengaktifkan akun ini. Apakah anda yakin?");
    }
    onOpen();
  };

  return (
    <>
      <ConfirmationModalWithNoSSR
        modalText={text}
        isOpen={isOpen}
        onClose={onClose}
      />
      <Box className={styles["admin-role-container"]}>
        <Text className={styles["admin-role-title"]}>Setup - Admin</Text>
        <Flex align={"end"} margin={"2rem 0"}>
          <Box>
            <Text className={styles["admin-role-search-text"]}>Cari</Text>
            <InputGroup className={styles["admin-role-input-container"]}>
              <Input
                className={styles["admin-role-input"]}
                type="text"
                placeholder="Ketikkan Nama"
              />
              <InputRightElement>
                <Search2Icon />
              </InputRightElement>
            </InputGroup>
          </Box>
          <Button
            onClick={() => router.push("/setup/new-admin")}
            className={styles["admin-role-search-btn"]}
          >
            <AddIcon w={"10px"} height={"10px"} mr={"5px"} />
            New Admin
          </Button>
        </Flex>
        <Table>
          <Thead>
            <Tr className={styles["admin-role-table-header-container"]}>
              <Th className={styles["admin-role-table-header"]}>No</Th>
              <Th className={styles["admin-role-table-header"]}>Admin ID</Th>
              <Th className={styles["admin-role-table-header"]}>Nama</Th>
              <Th className={styles["admin-role-table-header"]}>Email</Th>
              <Th className={styles["admin-role-table-header"]}>Divisi</Th>
              <Th className={styles["admin-role-table-header"]}>Jabatan</Th>
              <Th className={styles["admin-role-table-header"]}>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td className={styles["admin-role-table-data"]}>1</Td>
              <Td className={styles["admin-role-table-data"]}>0000506701</Td>
              <Td className={styles["admin-role-table-data"]}>
                Ananta Damar Kusuma
              </Td>
              <Td className={styles["admin-role-table-data"]}>
                ananta@gmail.com
              </Td>
              <Td className={styles["admin-role-table-data"]}>
                Human Capital
              </Td>
              <Td className={styles["admin-role-table-data"]}>
                Human Capital
              </Td>
              <Td>
                <FormControl
                  display="flex"
                  alignItems="center"
                  justifyContent={"space-between"}
                >
                  <EditIcon />
                  <Switch
                    onChange={() => changeAdminStatusHandler("nonactive")}
                    id="action"
                  />
                  <FormLabel
                    className={styles["admin-role-table-data"]}
                    htmlFor="action"
                    mb="0"
                  >
                    Off
                  </FormLabel>
                </FormControl>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </>
  );
};

export default AdminRole;
