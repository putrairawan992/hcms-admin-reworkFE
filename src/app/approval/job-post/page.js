'use client';
import {
  Box,
  Flex,
  Select,
  Text,
  useDisclosure,
  Image,
} from '@chakra-ui/react';
import styles from '../../styles/approvalJobPost.module.css';
import { ApproveIcon, RejectIcon, ShareIcon } from '@/app/components/icons';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useGetApprovalJobPost } from '@/app/api/approval';
import moment from 'moment';
import 'moment/locale/id';
import dynamic from 'next/dynamic';
import { useGetProductDigital } from '@/app/api/common';

moment.locale('id');

const ApprovalJobPost = () => {
  const [text, setText] = useState('');
  const [years, setYears] = useState('2024');
  const [month, setMonth] = useState('10');
  const [productDigital, setProductDigital] = useState('pt 1');
  const [status, setStatus] = useState('approved');
  const [selectedId, setSelectedId] = useState();
  const [isApprove, setIsApprove] = useState();
  const yearOptions = [
    { value: '2024', label: '2024' },
    { value: '2023', label: '2023' },
    { value: '2022', label: '2022' },
    { value: '2021', label: '2021' },
    { value: '2020', label: '2020' },
    { value: '2019', label: '2019' },
    { value: '2018', label: '2018' },
    { value: '2017', label: '2017' },
    { value: '2016', label: '2016' },
    { value: '2015', label: '2015' },
  ];
  const monthOptions = [
    { value: '1', label: 'Januari' },
    { value: '2', label: 'Februari' },
    { value: '3', label: 'Maret' },
    { value: '4', label: 'April' },
    { value: '5', label: 'Mei' },
    { value: '6', label: 'Juni' },
    { value: '7', label: 'Juli' },
    { value: '8', label: 'Agustus' },
    { value: '9', label: 'September' },
    { value: '10', label: 'Oktober' },
    { value: '11', label: 'November' },
    { value: '12', label: 'Desember' },
  ];
  const statusOptions = [
    { value: 'approved', label: 'Approved' },
    { value: 'rejected', label: 'Rejected' },
  ];
  const ConfirmationModalWithNoSSR = dynamic(
    () => import('../../components/confirmationModal'),
    { ssr: false }
  );
  const { data: productDigitalData } = useGetProductDigital();
  const { data, isPending, refetch } = useGetApprovalJobPost({
    status,
    product_digital_name: productDigital,
    month,
    years,
  });
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    refetch();
  }, [years, month, productDigital, status]);

  const openConfirmationModalHandler = (str, decision, id) => {
    setSelectedId(id);
    setIsApprove(decision);
    setText(str);
    onOpen();
  };

  const openJobPostDetails = (id) => {
    router.push(`/approval/job-post/${id}`);
  };

  return (
    <>
      <ConfirmationModalWithNoSSR
        modalText={text}
        isOpen={isOpen}
        onClose={onClose}
        isApprove={isApprove}
        id={selectedId}
        refetch={refetch}
      />
      <Box className={styles['job-post-container']}>
        <Flex className={styles['job-post-header']}>
          <Text className={styles['job-post-title']}>Approval Job Post</Text>
          <Flex className={styles['job-post-header-wrapper']}>
            <Text className={styles['job-post-header-text']}>
              Perlu Ditinjau:
            </Text>
            <Text className={styles['job-post-header-text']}>
              {data?.length}
            </Text>
            <Text className={styles['job-post-header-text']}>Submit</Text>
          </Flex>
        </Flex>
        <Flex className={styles['job-post-filter-container']}>
          <Box>
            <Text className={styles['job-post-filter-text']}>Tahun</Text>
            <Select
              value={years}
              onChange={(e) => setYears(e.target.value)}
              className={styles['job-post-filter-select']}
            >
              <option value="" selected disabled hidden>
                Tahun
              </option>
              {yearOptions.map((item, index) => (
                <option key={index} value={item.value}>
                  {item.label}
                </option>
              ))}
            </Select>
          </Box>
          <Box>
            <Text className={styles['job-post-filter-text']}>Bulan</Text>
            <Select
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className={styles['job-post-filter-select']}
            >
              <option value="" selected disabled hidden>
                Pilih Bulan
              </option>
              {monthOptions.map((item, index) => (
                <option key={index} value={item.value}>
                  {item.label}
                </option>
              ))}
            </Select>
          </Box>
          <Box>
            <Text className={styles['job-post-filter-text']}>
              Digital Product
            </Text>
            <Select
              value={productDigital}
              onChange={(e) => setProductDigital(e.target.value)}
              className={styles['job-post-filter-select']}
            >
              <option value="" selected disabled hidden>
                Pilih Digital Product
              </option>
              {productDigitalData?.map((item, index) => (
                <option key={index} value={item.product_digital_name}>
                  {item.product_digital_name}
                </option>
              ))}
            </Select>
          </Box>
          <Box>
            <Text className={styles['job-post-filter-text']}>Status</Text>
            <Select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className={styles['job-post-filter-select']}
            >
              <option value="" selected disabled hidden>
                Pilih Status
              </option>
              {statusOptions.map((item, index) => (
                <option key={index} value={item.value}>
                  {item.label}
                </option>
              ))}
            </Select>
          </Box>
        </Flex>
        <Box className={styles['job-post-wrapper']}>
          {!isPending &&
            data?.map((item, index) => (
              <Flex
                key={index}
                onClick={() => openJobPostDetails(item.id)}
                className={styles['job-post-card']}
              >
                <Flex className={styles['job-post-card-inner']}>
                  <Box className={styles['job-post-image-wrapper']}>
                    <Image
                      className={styles['job-post-image']}
                      src={'/images/company-dummy.jpeg'}
                    />
                  </Box>
                  <Box className={styles['job-post-content-wrapper']}>
                    <Flex className={styles['job-post-time-status-wrapper']}>
                      <Text className={styles['job-post-time']}>
                        {moment(item?.start_date)
                          .utcOffset('+07:00')
                          .format('D MMMM YYYY | HH:mm') + ' WIB'}
                      </Text>
                      <Box className={styles['job-post-status']}>
                        {item?.status_approve}
                      </Box>
                    </Flex>
                    <Box>
                      <Text className={styles['job-post-role']}>
                        {item?.job_title}
                      </Text>
                      <Text className={styles['job-post-rest']}>
                        {item?.job_provider_name}
                      </Text>
                      <Text className={styles['job-post-rest']}>
                        IDR {item?.start_from_salary} - {item?.end_from_salary}
                      </Text>
                      <Text className={styles['job-post-rest']}>3 Orang</Text>
                    </Box>
                    <Flex className={styles['job-post-button']}>
                      <ShareIcon
                        style={{
                          width: '16px',
                          height: '16px',
                          cursor: 'pointer',
                        }}
                      />
                      {item.status_approve !== 'Approved' &&
                        item.status_approve !== 'Rejected' && (
                          <>
                            <RejectIcon
                              onClick={(e) => {
                                e.stopPropagation();
                                openConfirmationModalHandler(
                                  'Anda akan menolak pengajuan. Anda yakin ingin menolak?',
                                  false,
                                  item.id
                                );
                              }}
                              style={{
                                width: '16px',
                                height: '16px',
                                margin: '0 12px',
                                cursor: 'pointer',
                              }}
                            />
                            <ApproveIcon
                              onClick={(e) => {
                                e.stopPropagation();
                                openConfirmationModalHandler(
                                  'Anda akan menyetujui pengajuan. Anda yakin ingin menyetujui?',
                                  true,
                                  item.id
                                );
                              }}
                              style={{
                                width: '16px',
                                height: '16px',
                                cursor: 'pointer',
                              }}
                            />
                          </>
                        )}
                    </Flex>
                  </Box>
                </Flex>
              </Flex>
            ))}
        </Box>
      </Box>
    </>
  );
};

export default ApprovalJobPost;
