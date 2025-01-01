"use client";
import {
  Box,
  Flex,
  Select,
  Text,
} from "@chakra-ui/react";
import React from "react";
import styles from "./batch.styles";
import { useRouter } from "next/navigation";
import { MasterDataBatchCard } from "@/app/components/molecules";
import stylesheet from "../styles";

const MasterDataMergeAllTABatch = () => {
  const router = useRouter();

  return (
    <Box style={styles.container}>
      <Flex>
        <Box style={styles.header} onClick={() => router.push('/master-data/merge-product')}>
          <Text fontWeight='900' fontSize={22} color='#AE445A' textAlign='center' alignSelf='center'>Master Data - Merge Product</Text>
        </Box>
        <Box style={styles.header2} >
          <Text style={styles.headerTitle}>Batch</Text>
        </Box>
      </Flex>
      <Box paddingX={8}>
        <Flex marginBottom={4} marginTop={10}>
          <Box marginRight={2} flex={1}>
            <Text style={styles.filterText}>Tahun</Text>
            <Select
              value={2024}
              onChange={(e) => setYears(e.target.value)}
              style={styles.filterSelect}>
              <option value="all" selected>Semua</option>
              <option value="offering_letter_normal">Offering Letter Normal</option>
              <option value="pkwt">PKWT</option>
              <option value="offering_letter_khusus">Offering Letter Khusus</option>
              <option value="amandemen_pkwt">Amandemen PKWT</option>
              <option value="contract_freelance">Kontrak Freelance</option>
            </Select>
          </Box>
          <Box marginRight={2} flex={1}>
            <Text style={styles.filterText}>Bulan</Text>
            <Select
              value={2024}
              onChange={(e) => setYears(e.target.value)}
              style={styles.filterSelect}>
              <option value="all" selected>Semua</option>
              <option value="sent">Sent</option>
              <option value="employee_signed">Employee Signed</option>
              <option value="full_signed">Full Signed</option>
            </Select>
          </Box>
          <Box marginRight={2} flex={1}>
            <Text style={styles.filterText}>Admin</Text>
            <Select
              value={2024}
              onChange={(e) => setYears(e.target.value)}
              style={styles.filterSelect}>
              <option value="all" selected>Semua</option>
            </Select>
          </Box>
        </Flex>
        <Box paddingBottom={6}>
          <MasterDataBatchCard />
        </Box>
      </Box>
    </Box>
  );
};

export default MasterDataMergeAllTABatch;

