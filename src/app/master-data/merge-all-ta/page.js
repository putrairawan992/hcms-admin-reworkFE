"use client";
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import styles from "../../styles/accountSetup.module.css";
import stylesheet from "./styles";
import { useRouter } from "next/navigation";
import useMergeAllTA from "./useMergeAllTA";
import columns from "./columns";
import { DataTables, ListEmpty } from "@/app/components/molecules";

const MasterDataMergeAllTA = () => {
  const router = useRouter();
  const { data, loading, page, totalData, keyword, onChangeText } = useMergeAllTA();

  return (
    <Box style={stylesheet.container}>
      <Flex>
        <Box style={stylesheet.header}>
          <Text style={stylesheet.headerTitle}>Master Data - Merge All TA</Text>
        </Box>
        <Box style={stylesheet.header2} onClick={() => router.push('/master-data/merge-all-ta/batch')}>
          <Text fontWeight='900' fontSize={22} color='#AE445A' textAlign='center' alignSelf='center'>Batch</Text>
        </Box>
      </Flex>
      <Box paddingX={4}>
        <Flex align={"end"} margin={"2rem 0"}>
          <Button
            onClick={() => router.push("/setup/new-account")}
            className={styles["account-role-search-btn"]} marginLeft={0}>
            Sinkron
          </Button>
          <Button
            onClick={() => router.push("/setup/new-account")}
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
        {loading ? <ListEmpty /> : <DataTables data={data} columns={columns(totalData, page)} totalData={totalData} page={page} keyword={keyword} />}
      </Box>
    </Box>
  );
};

export default MasterDataMergeAllTA;
