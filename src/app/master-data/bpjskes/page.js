"use client";
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import styles from "../../styles/accountSetup.module.css";
import stylesheet from "./styles";
import { useRouter } from "next/navigation";
import useBpjskes from "./useBpjskes";
import columns from "./columns";
import { DataTables, ListEmpty } from "@/app/components/molecules";

const MasterDataBPJSKES = () => {
  const router = useRouter();
  const { data, loading, page, totalData, keyword, modalOpen, onChangeText, onHandleSync, onChangePagination, toggleModal } = useBpjskes();

  return (
    <Box style={stylesheet.container}>
      <Flex>
        <Box style={stylesheet.header} paddingX={12} paddingY={6}>
          <Text style={stylesheet.headerTitle}>Master Data - BPJSKES</Text>
        </Box>
        <Box style={stylesheet.header2} paddingX={12} paddingY={6} onClick={() => router.push('/master-data/bpjskes/batch')}>
          <Text fontWeight='900' fontSize={22} color='#AE445A' textAlign='center' alignSelf='center'>Batch</Text>
        </Box>
      </Flex>
      <Box paddingX={4}>
        <Flex align={"end"} margin={"2rem 0"}>
          <Button onClick={onHandleSync}
            className={styles["account-role-search-btn"]} marginLeft={0}>
            Sinkron
          </Button>
          <Button onClick={() => window.open("https://docs.google.com/spreadsheets/d/184tpa1aindgaNbjdGA_GwfMNt9M6DVr6ImTmC0Zf6ZI/edit?gid=590502080#gid=590502080", "_blank")}
            className={styles["account-role-search-btn"]} marginLeft={2}>
            Ke Spreadsheet
          </Button>
          <Box marginLeft={4}>
            <InputGroup className={styles["account-role-input-container"]}>
              <Input
                className={styles["account-role-input"]}
                type="text"
                onchan
                placeholder="Cari"
                onChange={onChangeText}
              />
              <InputRightElement>
                <Search2Icon
                  cursor={"pointer"}
                  color='#AE445A'
                />
              </InputRightElement>
            </InputGroup>
          </Box>
        </Flex>
      </Box>
      <Box paddingX={4}>
        {loading ? <ListEmpty /> : <DataTables data={data} columns={columns(totalData, page)} totalData={totalData} page={page} keyword={keyword} onChangePagination={onChangePagination} />}
      </Box>
      <Modal isOpen={modalOpen} onClose={toggleModal} size={"md"} isCentered closeOnOverlayClick={!modalOpen}>
        <ModalOverlay />
        <ModalContent paddingY={"1.5rem"} borderRadius={20}>
          <ModalBody>
            <Flex align={"center"} justify={"center"}>
              <Spinner color="#AE445A" size="md" marginRight={4} />
              <Text fontSize={14} fontWeight='700' color='#AE445A'>Please wait...</Text>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default MasterDataBPJSKES;
