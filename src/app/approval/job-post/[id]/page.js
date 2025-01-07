'use client';
import { CalenderIcon } from '@/app/components/icons';
import { Box, Button, Flex, Text, Image } from '@chakra-ui/react';
import styles from '../../../styles/jobPostDetails.module.css';
import { useParams, useRouter } from 'next/navigation';
import { useGetJobPostDetail } from '@/app/api/approval';
import { isEmpty } from 'lodash';
import moment from 'moment';
import 'moment/locale/id';
import { useEffect, useState } from 'react';

moment.locale('id');

const JobPostDetails = () => {
  const router = useRouter();
  const params = useParams();
  const id = params.id;
  const { data } = useGetJobPostDetail({
    id,
  });
  const [duration, setDuration] = useState();

  const openJobPost = () => {
    router.push('/approval/job-post');
  };

  useEffect(() => {
    if (!isEmpty(data)) {
      const duration = moment.duration(
        moment(data.end_date).diff(moment(data.start_date))
      );
      const totalMonths = duration.asMonths().toFixed(0);
      const years = Math.floor(totalMonths / 12);
      const remainingMonths = totalMonths % 12;

      let durationString = `${totalMonths} Bulan`;
      if (years > 0) {
        durationString += ` (${years} Tahun`;
        if (remainingMonths > 0) {
          durationString += ` ${remainingMonths} Bulan`;
        }
        durationString += `)`;
      }

      setDuration(durationString);
    }
  }, [data]);

  return (
    <>
      {!isEmpty(data) && (
        <Box className={styles['job-details-container']}>
          <Text className={styles['job-details-title']}>Job Vacancy</Text>
          <Box>
            <Text className={styles['job-details-header']}>
              Periode Lowongan Kerja
            </Text>
            <Flex className={styles['job-details-period-wrapper']}>
              <Flex className={styles['job-details-date-wrapper']}>
                <Text className={styles['job-details-text']}>
                  {moment(data.start_date).format('D MMMM YYYY')}
                </Text>
                <Text margin={'0 8px'} className={styles['job-details-text']}>
                  {moment(data.start_date).format('hh:mm:ss')}
                </Text>
                <Text
                  marginRight={'8px'}
                  className={styles['job-details-text']}
                >
                  {moment(data.start_date).locale('en').format('A')}
                </Text>
                <CalenderIcon />
              </Flex>
              <Text margin={'0 10px'}>-</Text>
              <Flex className={styles['job-details-date-wrapper']}>
                <Text className={styles['job-details-text']}>
                  {moment(data.end_date).format('D MMMM YYYY')}
                </Text>
                <Text margin={'0 8px'} className={styles['job-details-text']}>
                  {moment(data.end_date).format('hh:mm:ss')}
                </Text>
                <Text
                  marginRight={'8px'}
                  className={styles['job-details-text']}
                >
                  {moment(data.end_date).locale('en').format('A')}
                </Text>
                <CalenderIcon />
              </Flex>
            </Flex>
          </Box>
          <Box>
            <Text className={styles['job-details-header']}>
              Tanggal Posting
            </Text>
            <Flex
              margin={'0.8rem 0 1rem'}
              className={styles['job-details-date-wrapper']}
            >
              <Text className={styles['job-details-text']}>
                {moment(data.start_post).format('D MMMM YYYY')}
              </Text>
              <Text margin={'0 8px'} className={styles['job-details-text']}>
                {moment(data.start_post).format('hh:mm:ss')}
              </Text>
              <Text marginRight={'8px'} className={styles['job-details-text']}>
                {moment(data.start_post).locale('en').format('A')}
              </Text>
              <CalenderIcon />
            </Flex>
          </Box>
          <Box className={styles['job-details-wrapper']}>
            <Flex align={'start'} justify={'space-between'}>
              <Flex align={'center'}>
                <Box className={styles['job-details-img-wrapper']}>
                  <Image
                    className={styles['job-details-img']}
                    src={'/images/company-dummy.jpeg'}
                  />
                </Box>
                <Box marginLeft={'1.5rem'}>
                  <Text className={styles['job-details-company-header']}>
                    {data.job_title}
                  </Text>
                  <Text className={styles['job-details-company-text']}>
                    {data.job_provider_name}
                  </Text>
                  <Text className={styles['job-details-company-text']}>
                    IDR {data.start_from_salary} - {data.end_from_salary}
                  </Text>
                </Box>
              </Flex>
              <Box display={'flex'} flexDir={'column'}>
                <Text className={styles['job-details-company-header']}>
                  {data.workplace_type}
                </Text>
                <Box className={styles['job-details-status']}>
                  {data.status_active === 'Active' ? 'Live' : 'Inactive'}
                </Box>
              </Box>
            </Flex>
            <Box margin={'2rem 0'}>
              <Text className={styles['job-details-header']}>
                Jenis Pekerjaan
              </Text>
              <Text>{data.job_type}</Text>
            </Box>
            <Box margin={'2rem 0'}>
              <Text className={styles['job-details-header']}>
                Periode Pekerjaan
              </Text>
              <Text className={styles['job-details-text']}>
                {moment(data.start_date).format('D MMMM YYYY')} -{' '}
                {moment(data.end_date).format('D MMMM YYYY')}
              </Text>
              <Text className={styles['job-details-text']}>{duration}</Text>
            </Box>
            <Box margin={'2rem 0'}>
              <Text className={styles['job-details-header']}>
                Tingkat Pekerjaan
              </Text>
              <Text className={styles['job-details-text']}>
                {data.masterJobLevels.job_level_name}
              </Text>
            </Box>
            <Box margin={'2rem 0'}>
              <Text className={styles['job-details-header']}>
                Jumlah Kandidat yang Dibutuhkan
              </Text>
              <Text className={styles['job-details-text']}>
                {data.number_of_candidates}
              </Text>
            </Box>
            <Box margin={'2rem 0'}>
              <Text className={styles['job-details-header']}>Pengalaman</Text>
              <Text className={styles['job-details-text']}>
                {data.masterExperience.experience_name}
              </Text>
            </Box>
            <Box margin={'2rem 0'}>
              <Text className={styles['job-details-header']}>
                Spesialisasi Pekerjaan
              </Text>
              <Text className={styles['job-details-text']}>
                {data.masterJobSpecialist.job_specialist_name}
              </Text>
            </Box>
            <Box margin={'2rem 0'}>
              <Text className={styles['job-details-header']}>Pendidikan</Text>
              <Text className={styles['job-details-text']}>
                {data.jobPostEducation
                  .map((item) => item.education_name)
                  .join(', ')}
              </Text>
            </Box>
            <Box margin={'2rem 0'}>
              <Text className={styles['job-details-header']}>
                Keuntungan dari Perusahaan
              </Text>
              <Text className={styles['job-details-text']}>
                {data.jobPostBenefit
                  .map((item) => item.benefit_name)
                  .join(', ')}
              </Text>
            </Box>
            <Box margin={'2rem 0'}>
              <Text className={styles['job-details-header']}>
                Deskripsi Pekerjaan
              </Text>
              <Text
                className={styles['job-details-text']}
                dangerouslySetInnerHTML={{ __html: data.description }}
              />
            </Box>
          </Box>
          <Flex w={'100%'} justify={'end'}>
            <Button onClick={openJobPost} className={styles['job-details-btn']}>
              Close
            </Button>
          </Flex>
        </Box>
      )}
    </>
  );
};

export default JobPostDetails;
