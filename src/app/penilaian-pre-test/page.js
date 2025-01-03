"use client";
import { Box, Button, Flex, Input, InputGroup, Text } from "@chakra-ui/react";
import styles from "../styles/inbox.module.css";

import { PenilaianCard, PretestCard } from "../components/molecules";
import usePenilaianPretest from "./usePenilaianPretest";
import { Gap, SelectField } from "../components/atoms";
import { AlphabetIcon, BrainIcon, CodeIcon, NumberIcon, PhotoIcon, VideoIcon } from "../components/icons";
import { ChevronRightIcon } from "@chakra-ui/icons";

const PenilaiaanPretest = () => {
  const { data } = usePenilaianPretest();

  return (
    <Box className={styles["inbox-container"]}>
      <Flex align={"center"} justify={"space-between"}>
        <Box>
          <Text className={styles["inbox-title"]}>Penilaian Pre Test</Text>
        </Box>
        <Gap height={6} />
        <Flex>
          <Flex borderWidth={1} borderColor='#AE445A' borderRadius={6} paddingX={4} paddingY={1}>
            <Text marginRight={3} fontWeight='bold'>Perlu Ditinjau: </Text>
            <Text marginRight={3} color='#AE445A' fontWeight='bold'>1</Text>
            <Text fontWeight='bold'>Submit</Text>
          </Flex>
        </Flex>
      </Flex>
      <Gap height={4} />
      <Flex align={"flex-end"}>
        <Box>
          <SelectField placeholder="Pilih spesialisasi pekerjaan" label="Spesialisasi Pekerjaan" />
        </Box>
        <Button className={styles["inbox-btn"]} paddingX={8}>
          Generate
        </Button>
      </Flex>
      <Gap height={8} />
      <Box flex={1}>
        <PenilaianCard />
      </Box>
    </Box>
  );
};

export default PenilaiaanPretest;
