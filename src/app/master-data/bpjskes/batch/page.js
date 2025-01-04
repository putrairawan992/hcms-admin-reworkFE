"use client";
import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import styles from "../styles";
import { useRouter } from "next/navigation";
import { MasterDataBatchCard } from "@/app/components/molecules";
import useBpjskesBatch from "./useBpjskesBatch";
import { SelectField } from "@/app/components/atoms";
import { monthLabelOptions, yearOptions } from "@/shared/general";

const MasterDataBPJSKESBatch = () => {
  const router = useRouter();
  const { data, loading, page, totalData, keyword, onChangeText, onHandleSync, onChangePagination } = useBpjskesBatch();

  return (
    <Box style={styles.container}>
      <Flex>
        <Box style={styles.header2} paddingX={12} paddingY={6} onClick={() => router.push('/master-data/bpjskes')}>
          <Text fontWeight='900' fontSize={22} color='#AE445A' textAlign='center' alignSelf='center'>Master Data - BPJSKES</Text>
        </Box>
        <Box style={styles.header} paddingX={12} paddingY={6}>
          <Text fontWeight={900} fontSize={22} color='#FFFFFF'>Batch</Text>
        </Box>
      </Flex>
      <Box paddingX={8}>
        <Flex marginBottom={4} marginTop={10}>
          <SelectField label="Tahun" placeholder="Pilih Tahun" options={yearOptions} />
          <SelectField label="Bulan" placeholder="Pilih Bulan" options={monthLabelOptions} />
        </Flex>
        <Box paddingBottom={6}>
          <MasterDataBatchCard />
        </Box>
      </Box>
    </Box>
  );
};

export default MasterDataBPJSKESBatch;

