"use client";
import { Gap } from "@/app/components/atoms";
import { Box, Text, Image, VStack, Flex } from "@chakra-ui/react";

const PreviewPkwt = () => {
  return (
    <Box flex={1} height='100%' paddingX={8} paddingY={4}>
      <Image src="/images/scala-sidebar.png" width={100} />
      <VStack>
        <Text fontSize={12} lineHeight={1} fontWeight='bold' textDecoration='underline'>PERJANJIAN KERJA WAKTU TERTENTU ANTARA</Text>
        <Text lineHeight={1} fontSize={12} fontWeight='bold' textDecoration='underline'>PT METRA-NET</Text>
        <Text fontSize={12} lineHeight={1} fontWeight='bold' textDecoration='underline'>DAN</Text>
        <Text fontSize={12} lineHeight={1} fontWeight='bold' textDecoration='underline'>{`{NAMA}`}</Text>
        <Box borderWidth={2} borderColor='black' width='100%' marginY={3} />
        <Text fontSize={12} fontWeight='bold'>Nomor: </Text>
      </VStack>
      <Gap height={4} />
      <Box>
        <Text fontSize={12}>
          {`Amandemen Pertama terhadap Perjanjian Kerja Waktu Tertentu (selanjutnya disebut “Amandemen”), dibuat dan ditandatangani pada hari ini {HARI} tanggal {TANGGAL} bulan {BULAN} tahun {TAHUN} ({TANGGAL} SEKARANG), oleh dan antara:`}
        </Text>
      </Box>
      <Gap height={4} />
      <Flex>
        <Text flex={0.1} fontSize={12}>I.</Text>
        <Text fontSize={12} flex={1}>
          {`PT METRA-NET, sebuah Perseroan Terbatas yang bergerak di bidang Digital Service, yang berkedudukan di Mulia Business Park Gedung J, Jl. MT. Haryono Kav. 58-60, Pancoran, Jakarta Selatan, dalam perbuatan hukum ini diwakili secara sah oleh {Nama Penanggung Jawab} selaku Kuasa Direktur Utama berdasarkan Surat Kuasa Nomor : {Nomor Surat Kuasa PJ} tanggal {Tanggal Surat Kuasa PJ}, selanjutnya dalam Perjanjian ini disebut sebagai “METRA-NET”.`}</Text>
      </Flex>
      <Gap height={4} />
      <Flex>
        <Text flex={0.1} fontSize={12}>II.</Text>
        <Text fontSize={12} flex={1}>
          {`{Nama Lengkap}, Nomor Kartu Tanda Penduduk {No. KTP}, Nomor Pokok Wajib Pajak {NPWP}, Usia {Usia} tahun, Lahir di {Tempat Tanggal Lahir (Tempat)} tanggal {Tempat Tanggal Lahir (Tanggal)}, berdomisili di {Alamat Domisili}, Jenis Kelamin {Jenis Kelamin} dalam hal ini bertindak untuk dan atas nama diri sendiri, selanjutnya dalam Perjanjian ini disebut sebagai “TENAGA KERJA”.`}</Text>
      </Flex>
      <Gap height={4} />
      <Text fontSize={12}>
        METRA-NET dan TENAGA KERJA selanjutnya secara sendiri-sendiri disebut sebagai “PIHAK” dan secara bersama-sama disebut sebagai “Para Pihak”
      </Text>
      <Gap height={4} />
      <Text fontSize={12}>
        Dengan terlebih dahulu mempertimbangkan hal-hal sebagai berikut:
      </Text>
      <Gap height={4} />
      <Flex>
        <Text flex={0.1} fontSize={12}>a.</Text>
        <Text fontSize={12} flex={1}>
          {`bahwa Para Pihak telah menandatangani Perjanjian Kerja Waktu Tertentu Nomor : {NOMOR PKWT} tanggal TANGGAL PKWT (selanjutnya disebut “Perjanjian Induk”);`}</Text>
      </Flex>
      <Flex>
        <Text flex={0.1} fontSize={12}>b.</Text>
        <Text fontSize={12} flex={1}>
          {`bahwa Para Pihak bermaksud untuk melakukan perubahan terhadap Perjanjian Induk.`}</Text>
      </Flex>
      <Gap height={4} />
      <Text fontSize={12}>
        Berdasarkan pertimbangan tersebut di atas, dengan ini Para Pihak sepakat untuk mengikatkan diri satu kepada yang lain dalam Amandemen ini dengan ketentuan-ketentuan dan syarat-syarat sebagai berikut:
      </Text>
      <Gap height={4} />
      <Box>
        <VStack>
          <Text fontSize={12} fontWeight='bold' lineHeight={1}>PASAL 1</Text>
          <Text fontSize={12} fontWeight='bold' lineHeight={1}>MASA KERJA</Text>
        </VStack>
        <Text fontSize={12}>
          {`{isi pasal 1}`}
        </Text>
      </Box>
      <Gap height={4} />
      <Box>
        <VStack>
          <Text fontSize={12} fontWeight='bold' lineHeight={1}>PASAL 2</Text>
          <Text fontSize={12} fontWeight='bold' lineHeight={1}>LAIN LAIN</Text>
        </VStack>
        <Text fontSize={12}>
          {`{isi pasal 2}`}
        </Text>
      </Box>
      <Gap height={4} />
      <Text fontSize={12}>
        Demikian Amandemen ini dibuat dengan itikad baik untuk ditaati dan dilaksanakan dengan penuh tanggung jawab oleh Para Pihak.
      </Text>
      <Gap height={12} />
      <Flex justifyContent='center' alignItems='center'>
        <VStack flex={1}>
          <Text fontSize={12}>METRA-NET</Text>
        </VStack>
        <VStack flex={1}>
          <Text fontSize={12}>TENAGA KERJA</Text>
        </VStack>
      </Flex>
      <Gap height={20} />
      <Flex justifyContent='center' alignItems='center' paddingBottom={12}>
        <VStack flex={1}>
          <Text fontSize={12}>RIKKI PUDYO ANANTO</Text>
          <Text fontSize={12}>Kuasa Direktur Utama</Text>
        </VStack>
        <VStack flex={1}>
          <Text fontSize={12}>{`{Nama}`}</Text>
          <Text fontSize={12}>{`{Posisi}`}</Text>
        </VStack>
      </Flex>
    </Box>
  );
};

export default PreviewPkwt;