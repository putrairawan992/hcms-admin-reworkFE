"use client";
import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import styles from "../styles";
import { useRouter } from "next/navigation";
import { ListEmpty, MasterDataBatchCard } from "@/app/components/molecules";
import useSaltabBatch from "./useSaltabBatch";
import { SelectField } from "@/app/components/atoms";
import { monthLabelOptions, yearOptions } from "@/shared/general";
import { isEmpty } from "lodash";

const MasterDataBPJSKESBatch = () => {
  const router = useRouter();
  const { data, loading, filters, onChangeSelect, onPressDetail } = useSaltabBatch();

  const RenderContent = () => {
    if (!isEmpty(data)) {
      return data?.map((item) => {
        return <MasterDataBatchCard data={item} onClick={onPressDetail} />;
      });
    } else {
      return (
        <Flex align={"center"} justify={"center"}>
          <Text>Tidak ada data inbox</Text>
        </Flex>
      )
    }
  };

  return (
    <Box style={styles.container}>
      <Flex>
        <Box style={styles.header2} paddingX={12} paddingY={6} onClick={() => router.push('/master-data/saltab')}>
          <Text fontWeight='900' fontSize={22} color='#AE445A' textAlign='center' alignSelf='center'>Master Data - SALTAB</Text>
        </Box>
        <Box style={styles.header} paddingX={12} paddingY={6}>
          <Text fontWeight={900} fontSize={22} color='#FFFFFF'>Batch</Text>
        </Box>
      </Flex>
      <Box paddingX={8}>
        <Flex marginBottom={4} marginTop={10}>
          <SelectField label="Tahun" placeholder="Pilih Tahun" slug="tahun" options={yearOptions} value={filters.tahun} onChange={onChangeSelect} />
          <SelectField label="Bulan" placeholder="Pilih Bulan" slug="bulan" options={monthLabelOptions} value={filters.bulan} onChange={onChangeSelect} />
        </Flex>
        <Box paddingBottom={6}>
          {loading ? <ListEmpty /> : <RenderContent />}
        </Box>
      </Box>
    </Box>
  );
};

export default MasterDataBPJSKESBatch;

