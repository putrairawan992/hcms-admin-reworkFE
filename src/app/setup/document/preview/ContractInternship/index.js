"use client";
import { Gap } from "@/app/components/atoms";
import { Box, Text, Image, VStack, Flex } from "@chakra-ui/react";

const PreviewContractInternship = () => {
  return (
    <Box flex={1} height='100%' paddingX={8} paddingY={4}>
      <Image src="/images/scala-sidebar.png" width={100} />
      <VStack>
        <Text fontSize={12} fontWeight='bold' textDecoration='underline'>SURAT PENAWARAN KERJA</Text>
        <Text fontSize={12}>No. {`{No.Surat}`}</Text>
      </VStack>
      <Box>
        <Text fontSize={12}>Kepada Yth,</Text>
        <Text fontSize={12} fontWeight='bold'>{'{Nama Lengkap}'}</Text>
        <Text fontSize={12} fontWeight='bold'>{'{Alamat Domisili}'}</Text>
        <Gap height={4} />
        <Text fontSize={12}>
          Sehubungan dengan lamaran saudara, maka dengan ini kami memberikan kesempatan kerja bagi saudara di PT. Metra-Net dengan kondisi-kondisi / syarat-syarat pekerjaan yang ditawarkan sebagai berikut :
        </Text>
      </Box>
      <Gap height={4} />
      <Flex>
        <Text flex={0.2} fontSize={12}>Posisi</Text>
        <Flex flex={1}>
          <Text fontSize={12} marginRight={2}>: </Text>
          <Text fontSize={12}>{`{Role}`}</Text>
        </Flex>
      </Flex>
      <Flex>
        <Text flex={0.2} fontSize={12}>Level</Text>
        <Flex flex={1}>
          <Text fontSize={12} marginRight={2}>: </Text>
          <Text fontSize={12}>{`{Level}`}</Text>
        </Flex>
      </Flex>
      <Flex>
        <Text flex={0.2} fontSize={12}>Upah</Text>
        <Flex flex={1}>
          <Text fontSize={12} marginRight={2}>: </Text>
          <Text fontSize={12}>{`Rp {Take Home Pay}, - / bulan`}</Text>
        </Flex>
      </Flex>
      <Flex>
        <Text flex={0.2} fontSize={12}>Status</Text>
        <Flex flex={1}>
          <Text fontSize={12} marginRight={2}>: </Text>
          <Text fontSize={12}>{`Internship{Awal Kontrak} S.d {Akhir Kontrak}`}</Text>
        </Flex>
      </Flex>
      <Flex>
        <Text flex={0.2} fontSize={12}>Pekerjaan</Text>
        <Flex flex={1}>
          <Text fontSize={12} marginRight={2}>: </Text>
          <Text fontSize={12}>{`{Ruang Lingkup}`}</Text>
        </Flex>
      </Flex>
      <Gap height={4} />
      <Text fontSize={12}>
        Selain ketentuan tersebut diatas, saudara wajib dan tunduk pada ketentuan perusahaan yang berlaku serta beberapa ketentuan berikut :
      </Text>
      <Gap height={4} />
      <Flex>
        <Text flex={0.1} fontSize={12}>1.</Text>
        <Text fontSize={12} flex={1}>Pajak penghasilan ditanggung oleh Metra-Net</Text>
      </Flex>
      <Gap height={4} />
      <Text fontSize={12}>
        Demikian Penawaran Kerja ini kami sampaikan, atas perhatiannya diucapkan terima kasih.
      </Text>
      <Gap height={12} />
      <Flex justifyContent='center' alignItems='center'>
        <VStack flex={1}>
          <Text fontSize={12}>Jakarta, {`{Tanggal Hari ini}`}</Text>
        </VStack>
        <VStack flex={1}>
          <Text fontSize={12}>Menyetujui,</Text>
        </VStack>
      </Flex>
      <Gap height={20} />
      <Flex justifyContent='center' alignItems='center' paddingBottom={12}>
        <VStack flex={1}>
          <Text fontSize={12}>{`{Nama Penanggung Jawab}`}</Text>
          <Text fontSize={12}>{`{Role Penanggung JAwab} {Level Penanggung Jawab}`}</Text>
        </VStack>
        <VStack flex={1}>
          <Text fontSize={12}>{`{Nama Kandidat}`}</Text>
          <Text fontSize={12}>Kandidat</Text>
        </VStack>
      </Flex>
    </Box>
  );
};

export default PreviewContractInternship;