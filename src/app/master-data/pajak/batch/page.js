"use client";
import SidebarLayout from "@/app/components/sidebarLayout";
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

const MasterDataBPJSKESBatch = () => {
  const router = useRouter();

  return (
    <>
      <SidebarLayout>
        <Box style={{
          background: 'linear-gradient(90deg, #f1f5fe 0%, #ffffff 98.82%)',
          boxShadow: '5px 0px 10px 0px #b3b9c5',
          borderRadius: '30px',
          width: '100%',
          height: 'max-content',
        }}>
          <Flex>
            <Box style={{
              borderTopLeftRadius: '30px',
              borderTopRightRadius: '30px',
              padding: '20px 50px',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }} onClick={() => router.push('/master-data/pajak')}>
              <Text fontWeight='900' fontSize={22} color='#AE445A' textAlign='center' alignSelf='center'>Master Data - PAJAK</Text>
            </Box>
            <Box style={{
              backgroundColor: '#AE445A',
              borderTopLeftRadius: '30px',
              borderTopRightRadius: '30px',
              padding: '20px 50px',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Text style={{
                fontSize: '22px',
                fontWeight: '900',
                color: '#FFFFFF',
              }}>Batch</Text>
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
      </SidebarLayout>
    </>
  );
};

export default MasterDataBPJSKESBatch;

