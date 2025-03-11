'use client';
import { Box, Button, Flex, Text, Image } from '@chakra-ui/react';
import styles from '../../styles/inbox.module.css';
import moment from 'moment';
import 'moment/locale/id';

import { BiodataField } from '../../components/molecules';
import { formatDate } from '@/app/utils/helpers';
import style from './styles';
import { DownloadIcon, ShareIcon } from '@/app/components/icons';
import useDataTalentDetail from './useDataTalentDetail';

moment.locale('id');

const DataTalentDetail = () => {
  const { data } = useDataTalentDetail();

  // Format date for display
  const formatBirthDate = (dateString) => {
    if (!dateString) return '';
    return moment(dateString).format('DD MMMM YYYY');
  };

  if (!data) {
    return <Box>Loading...</Box>;
  }

  console.log(data);
  return (
    <Box className={styles['inbox-container']}>
      <Flex align={'center'} justify={'space-between'}>
        <Text className={styles['inbox-title']}>Data Talent / Detail</Text>
      </Flex>
      <Flex marginBottom={4} marginTop={10}>
        <Box paddingX={2} paddingY={2}>
          <Image
            src={data.photo}
            height={200}
            width={150}
            fallbackSrc="https://via.placeholder.com/150"
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
          <BiodataField title="Nama Lengkap" value={data.name} />
          <BiodataField
            title="Tempat Tanggal Lahir"
            value={data.job_seeker?.place_birth}
            additionalValue={formatBirthDate(data.job_seeker?.date_birth)}
          />
          <BiodataField title="Alamat E-Mail" value={data.email} />
          <BiodataField
            title="Alamat URL LinkedIn"
            value={data.job_seeker?.linkedin}
          />
          <BiodataField
            title="Nomor Handphone"
            value={data.job_seeker?.handphone}
          />
          <BiodataField
            title="Emergency Contact"
            value=""
            additionalValue=""
            extraValue=""
          />
        </Box>
      </Flex>
      <Box marginRight={2} paddingX={2} paddingY={2} flex={1}>
        <BiodataField title="Jenis Kelamin" value="" />
        <BiodataField
          title="Status Pernikahan"
          value={data.job_seeker?.marital_status}
        />
        <BiodataField
          title="Alamat Domisili"
          value={data.job_seeker?.residential_address}
        />
        <BiodataField
          title="Alamat Rumah (KTP)"
          value={data.job_seeker?.address_on_identity_card}
        />
        <BiodataField
          title="Nomor NIK"
          value={data.job_seeker?.identity_number}
        />
        <BiodataField title="Status PTKP" value="" />
        <BiodataField title="Nomor NPWP" value={data.job_seeker?.npwp_number} />
        <BiodataField title="Nomor BPJSKES" value={data.job_seeker?.bpjskes} />
        <BiodataField title="Nomor BPJSTK" value={data.job_seeker?.bpjstik} />
        <BiodataField
          title="No. Rek Bank"
          value=""
          additionalValue={data.job_seeker?.bank_account_number}
          extraValue=""
        />
        <BiodataField title="NIK Perusahaan" value="" />
        <BiodataField title="Role" value={data.job_seeker?.work_position} />
        <BiodataField title="Level" value="" />
        <BiodataField title="Jenis Kontrak" value="" />
        <BiodataField
          title="Take Home Pay"
          value={data.job_seeker?.salary_exspectation}
        />
        <BiodataField title="Kontrak" value="" />
        <BiodataField title="Bootcamp" value={data.job_seeker?.bootcamp} />
      </Box>
      <Box borderWidth={1} borderColor="#AE445A" marginY={6} />
      <Box marginRight={2} paddingX={2} paddingY={2} flex={1}>
        {data.experience_data &&
          data.experience_data.map((item, index) => (
            <Box marginBottom={6} key={index}>
              <BiodataField title="Pengalaman" value={item?.company_name} />
              <BiodataField
                title=""
                value={item?.department}
                additionalValue={item?.employment_contract}
              />
              <BiodataField
                title=""
                value={`${formatDate(item?.start_working)} - ${item.end_working ? formatDate(item?.end_working) : 'Sekarang'}`}
                additionalValue={item?.location}
              />
            </Box>
          ))}
      </Box>
      <Box borderWidth={1} borderColor="#AE445A" marginY={6} />
      <Box marginRight={2} paddingX={2} paddingY={2} flex={1}>
        {data.education_data &&
          data.education_data.map((item, index) => (
            <Box marginBottom={6} key={index}>
              <BiodataField title="Pendidikan" value={item?.institute_name} />
              <BiodataField
                title=""
                value={item?.education_program}
                additionalValue={item?.degree}
              />
              <BiodataField
                title=""
                value={`${formatDate(item?.start_study)} - ${item.end_study ? formatDate(item?.end_study) : 'Sekarang'}`}
                additionalValue={item?.ipk}
              />
            </Box>
          ))}
      </Box>
      <Box borderWidth={1} borderColor="#AE445A" marginY={6} />
      <Box marginRight={2} paddingX={2} paddingY={2} flex={1}>
        {data.certificate_data && data.certificate_data.length > 0 ? (
          data.certificate_data.map((item, index) => (
            <Box marginBottom={6} key={index}>
              <BiodataField title="Sertifikat" value={item?.certificate_name} />
              <BiodataField title="" value={item?.organizer} />
              <BiodataField
                title=""
                value={item?.scores}
                additionalValue={item?.certificate_year}
              />
            </Box>
          ))
        ) : (
          <Box marginBottom={6}>
            <BiodataField
              title="Sertifikat"
              value="Tidak ada data sertifikat"
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default DataTalentDetail;
