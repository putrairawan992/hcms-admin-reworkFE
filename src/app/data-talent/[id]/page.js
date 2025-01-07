'use client';
import {
  Box,
  Button,
  Flex,
  Select,
  Text,
  Image,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import styles from '../../styles/inbox.module.css';
import { useState } from 'react';
import moment from 'moment';
import 'moment/locale/id';
import { isEmpty } from 'lodash';

import {
  DataTalentCard,
  HistoryTalentCard,
  BiodataField,
  AttachmentFileList,
} from '../../components/molecules';
import useDataTalentDetail from './useDataTalentDetail';
import { formatDate, moveScreen } from '@/app/utils/helpers';
import style from './styles';
import { DownloadIcon, FileIcon, ShareIcon } from '@/app/components/icons';
import { Gap } from '@/app/components/atoms';

const DataTalentDetail = () => {
  const { data } = useDataTalentDetail();

  return (
    <Box className={styles['inbox-container']}>
      <Flex align={'center'} justify={'space-between'}>
        <Text className={styles['inbox-title']}>Data Talent / Detail</Text>
      </Flex>
      <Flex marginBottom={4} marginTop={10}>
        <Box paddingX={2} paddingY={2}>
          <Image
            src="https://api-hcms.productscala.online/public/upload/1727253276975PasPhoto_MeililaSyavira.png"
            height={200}
            width={150}
          />
          <Button style={style.button} marginTop={2}>
            Send Message
          </Button>
          <Flex justifyContent="space-between">
            <Button style={style.button} marginTop={2}>
              <DownloadIcon color="#FFFFFF" />
            </Button>
            <Button style={style.button} marginTop={2}>
              <ShareIcon color="#FFFFFF" />
            </Button>
          </Flex>
        </Box>
        <Box marginRight={2} paddingX={2} paddingY={2} flex={1} marginLeft={12}>
          <BiodataField title="Nama Lengkap" value={data?.username} />
          <BiodataField
            title="Tempat Tanggal Lahir"
            value={data?.place_birth}
            additionalValue="28 December 1999"
          />
          <BiodataField title="Alamat E-Mail" value={data?.email} />
          <BiodataField title="Alamat URL LinkedIn" value={data?.linkedin} />
          <BiodataField title="Nomor Handphone" value={data?.handphone} />
          <BiodataField
            title="Emergency Contact"
            value={data?.emergency_name}
            additionalValue={data?.emergency_number}
            extraValue={data?.emergency_status}
          />
        </Box>
      </Flex>
      <Box marginRight={2} paddingX={2} paddingY={2} flex={1}>
        <BiodataField title="Jenis Kelamin" value={data?.gender} />
        <BiodataField title="Status Pernikahan" value={data?.marital_status} />
        <BiodataField
          title="Alamat Domisili"
          value={data?.residential_address}
        />
        <BiodataField
          title="Alamat Rumah (KTP)"
          value={data?.address_on_identity_card}
        />
        <BiodataField
          title="Nomor NIK"
          value={data?.company_registration_number}
        />
        <BiodataField title="Status PTKP" value={data?.ptkp_status} />
        <BiodataField title="Nomor NPWP" value={data?.npwp_number} />
        <BiodataField title="Nomor BPJSKES" value={data?.bpjskes} />
        <BiodataField title="Nomor BPJSTK" value={data?.bpjstik} />
        <BiodataField
          title="No. Rek Bank"
          value={data?.bank_account_name}
          additionalValue={data?.bank_account_number}
          extraValue={data?.bank_name}
        />
        <BiodataField title="NIK Perusahaan" value="12345" />
        <BiodataField title="Role" value="Frontend Developer" />
        <BiodataField title="Level" value="CEO" />
        <BiodataField title="Jenis Kontrak" value="Karyawan Tetap" />
        <BiodataField title="Take Home Pay" value={data?.salary} />
        <BiodataField title="Kontrak" value={data?.employee_type} />
        <BiodataField title="Bootcamp" value="Hacktiv" />
      </Box>
      <Box borderWidth={1} borderColor="#AE445A" marginY={6} />
      <Box marginRight={2} paddingX={2} paddingY={2} flex={1}>
        {data?.experience_job_seeker?.map((item) => (
          <Box marginBottom={6}>
            <BiodataField title="Pengalaman" value={item?.company_name} />
            <BiodataField
              title=""
              value={item?.department}
              additionalValue={item?.employment_contract}
            />
            <BiodataField
              title=""
              value={`${formatDate(item?.start_working)} - ${formatDate(item?.end_working)}`}
              additionalValue={item?.location}
            />
          </Box>
        ))}
      </Box>
      <Box borderWidth={1} borderColor="#AE445A" marginY={6} />
      <Box marginRight={2} paddingX={2} paddingY={2} flex={1}>
        {data?.education_job_seeker?.map((item) => (
          <Box marginBottom={6}>
            <BiodataField title="Pendidikan" value={item?.institute_name} />
            <BiodataField
              title=""
              value={item?.education_program}
              additionalValue={item?.degree}
            />
            <BiodataField
              title=""
              value={`${formatDate(item?.start_study)} - ${formatDate(item?.end_study)}`}
              additionalValue={item?.ipk}
            />
          </Box>
        ))}
      </Box>
      <Box borderWidth={1} borderColor="#AE445A" marginY={6} />
      <Box marginRight={2} paddingX={2} paddingY={2} flex={1}>
        {data?.certificate_job_seeker?.map((item) => (
          <Box marginBottom={6}>
            <BiodataField title="Sertifikat" value={item?.certificate_name} />
            <BiodataField title="" value={item?.organizer} />
            <BiodataField
              title=""
              value={item?.scores}
              additionalValue={item?.certificate_year}
            />
          </Box>
        ))}
      </Box>
      <Box borderWidth={1} borderColor="#AE445A" marginY={6} />
      <Box marginRight={2} paddingX={2} paddingY={2} flex={1}>
        <Text>Berkas Lampiran :</Text>
        <Gap height={6} />
        {data?.document_job_seeker?.map((item) => (
          <AttachmentFileList data={item} />
        ))}
      </Box>
    </Box>
  );
};

export default DataTalentDetail;
