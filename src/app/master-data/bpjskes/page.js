"use client";
import SidebarLayout from "@/app/components/sidebarLayout";
import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { DeleteIcon, Search2Icon } from "@chakra-ui/icons";
import styles from "../../styles/accountSetup.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useGetAccountSetup } from "@/app/api/setup";
import { isEmpty } from "lodash";
import useBpjskes from "./useBpjskes";
import columns from "./columns";
import { DataTables } from "@/app/components/molecules";

const MasterDataBPJSKES = () => {
  const [username, setUsername] = useState();
  const router = useRouter();
  // const { data, refetch } = useGetAccountSetup({ username });
  const { data, page, totalData, keyword, onChangeText } = useBpjskes();

  const searchUsernameHandler = () => {
    refetch();
  };

  const handleNavigate = (screen) => {
    window.location.href = screen;
  };

  return (
    <Box style={{
      background: 'linear-gradient(90deg, #f1f5fe 0%, #ffffff 98.82%)',
      boxShadow: '5px 0px 10px 0px #b3b9c5',
      borderRadius: '30px',
      width: '100%',
      // maxWidth: '68rem',
      height: 'max-content',
    }}>
      <Flex>
        <Box style={{
          backgroundColor: '#AE445A',
          borderTopLeftRadius: '30px',
          borderTopRightRadius: '30px',
          padding: '20px',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Text style={{
            fontSize: '22px',
            fontWeight: '900',
            color: '#FFFFFF',
          }}>Master Data - BPJSKES</Text>
        </Box>
        <Box style={{
          borderTopLeftRadius: '30px',
          borderTopRightRadius: '30px',
          padding: '20px 50px',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer'
        }} onClick={() => router.push('/master-data/bpjskes/batch')}>
          <Text fontWeight='900' fontSize={22} color='#AE445A' textAlign='center' alignSelf='center'>Batch</Text>
        </Box>
      </Flex>
      <Box paddingX={4}>
        <Flex align={"end"} margin={"2rem 0"}>
          <Button
            onClick={() => router.push("/setup/new-account")}
            className={styles["account-role-search-btn"]} marginLeft={0}>
            Upload File...
          </Button>
          <Button
            onClick={() => router.push("/setup/new-account")}
            className={styles["account-role-search-btn"]} marginLeft={2}>
            Donwload Template
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
                  onClick={searchUsernameHandler}
                  color='#AE445A'
                />
              </InputRightElement>
            </InputGroup>
          </Box>
        </Flex>
      </Box>
      <Box paddingX={4}>
        <DataTables data={data} columns={columns(totalData, page)} totalData={totalData} page={page} keyword={keyword} />
      </Box>
    </Box>
  );
};

export default MasterDataBPJSKES;
