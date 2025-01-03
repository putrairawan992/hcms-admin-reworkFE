"use client";

import { useMemo } from "react";
import { Box, Button, Divider, Flex, Input, Text } from "@chakra-ui/react";
import styles from "../../styles/inbox.module.css";
import { ChooseLogo, QuestionSection } from "../../components/molecules";
import useDetailPenilaianPretest from "./useDetailPenilaianPretest";
import { Gap, SelectField } from "../../components/atoms";

const PretestMitra = () => {
  const { data, questionData, addRowQuestion } = useDetailPenilaianPretest();

  const RenderContentQuestion = useMemo(() => {
    return questionData.map((item, index) => {
      return <QuestionSection questionNumber={index} key={index} />;
    })
  }, [questionData]);

  return (
    <Box className={styles["inbox-container"]}>
      <Flex align={"center"} justify={"space-between"}>
        <Box>
          <Text className={styles["inbox-title"]}>Modul Pilihan Ganda</Text>
          <Text fontSize={12} fontWeight={300} color='#404041' fontStyle='italic'>Silahkan atur soal yang akan dijadikan Pre-Test bagi calon Karyawan</Text>
        </Box>
        <Button className={styles["inbox-btn"]} paddingX={8}>
          Save
        </Button>
      </Flex>
      <Gap height={8} />
      <Box flex={1}>
        <Box flex={1} alignItems='center'>
          <Text color='#404041' fontWeight={700} fontSize={16}>Judul tes</Text>
          <Gap height={1} />
          <Input
            className={styles["input-container"]}
            type="text"
            placeholder="Masukan judul tes"
          />
        </Box>
        <Gap height={4} />
        <Flex>
          <SelectField placeholder="Kategori" label="Kategori" />
          <SelectField placeholder="Durasi Waktu" label="Durasi Waktu" />
        </Flex>
        <Gap height={4} />
        <Box flex={1} alignItems='center'>
          <Text color='#404041' fontWeight={700} fontSize={16}>Pilih logo</Text>
          <Gap height={1} />
          <ChooseLogo />
        </Box>
        <Gap height={4} />
        <Divider borderWidth={1} borderColor='#B6B6B6' />
        <Gap height={4} />
        {RenderContentQuestion}
        <Gap height={2} />
        <Flex flex={1} justify='center'>
          <Button className={styles["inbox-btn"]} onClick={addRowQuestion}>Tambah Pertanyaan</Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default PretestMitra;
