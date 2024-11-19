'use client';
import SidebarLayout from '@/app/components/sidebarLayout';
import {
  Box,
  Button,
  Flex,
  Select,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import styles from '../../styles/approvalRemuneration.module.css';
import DummyImage from '../../../../public/images/dummy-image.png';
import Image from 'next/image';
import { ChatIcon } from '@/app/components/icons';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import moment from 'moment';
import 'moment/locale/id';
import dynamic from 'next/dynamic';
import { useGetApprovalRemuneration } from '@/app/api/approval';
import { useGetProductDigital } from '@/app/api/common';

moment.locale('id');

const ApprovalRemuneration = () => {
  const ConfirmationModalWithNoSSR = dynamic(
    () => import('../../components/cancelApprovalConfirmationModal'),
    { ssr: false }
  );
  const NoteModalWithNoSSR = dynamic(
    () => import('../../components/noteModal'),
    { ssr: false }
  );
  const [years, setYears] = useState('2024');
  const [month, setMonth] = useState('10');
  const [productDigital, setProductDigital] = useState('pt 1');
  const [status, setStatus] = useState('approved');
  const { data, isPending, refetch } = useGetApprovalRemuneration({
    status,
    product_digital_name: productDigital,
    month,
    years,
  });
  const { data: productDigitalData } = useGetProductDigital();
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
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenNote,
    onOpen: onOpenNote,
    onClose: onCloseNote,
  } = useDisclosure();
  const [text, setText] = useState('');

  const openNoteModalHandler = () => {
    onOpenNote();
  };

  useEffect(() => {
    refetch();
  }, [years, month, productDigital, status]);

  return (
    <>
      <ConfirmationModalWithNoSSR
        modalText={text}
        isOpen={isOpen}
        onClose={onClose}
      />
      <NoteModalWithNoSSR
        modalText={text}
        isOpen={isOpenNote}
        onClose={onCloseNote}
      />
      <SidebarLayout>
        <Box className={styles['approval-remuneration-container']}>
          <Flex className={styles['approval-remuneration-header']}>
            <Text className={styles['approval-remuneration-title']}>
              Approval Remuneration
            </Text>
            <Flex className={styles['approval-remuneration-header-wrapper']}>
              <Text className={styles['approval-remuneration-header-text']}>
                Perlu Ditinjau:
              </Text>
              <Text className={styles['approval-remuneration-header-text']}>
                17
              </Text>
              <Text className={styles['approval-remuneration-header-text']}>
                Submit
              </Text>
            </Flex>
          </Flex>
          <Flex className={styles['approval-remuneration-filter-container']}>
            <Box>
              <Text className={styles['approval-remuneration-filter-text']}>
                Tahun
              </Text>
              <Select
                value={years}
                onChange={(e) => setYears(e.target.value)}
                className={styles['approval-remuneration-filter-select']}
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
              <Text className={styles['approval-remuneration-filter-text']}>
                Bulan
              </Text>
              <Select
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                className={styles['approval-remuneration-filter-select']}
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
              <Text className={styles['approval-remuneration-filter-text']}>
                Digital Product
              </Text>
              <Select
                value={productDigital}
                onChange={(e) => setProductDigital(e.target.value)}
                className={styles['approval-remuneration-filter-select']}
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
              <Text className={styles['approval-remuneration-filter-text']}>
                Status
              </Text>
              <Select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className={styles['approval-remuneration-filter-select']}
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
          <Box className={styles['approval-remuneration-wrapper']}>
            {!isPending &&
              data?.length > 0 &&
              data?.map((item, index) => (
                <Flex
                  key={index}
                  className={styles['approval-remuneration-card']}
                >
                  <Flex className={styles['approval-remuneration-card-inner']}>
                    <Box
                      className={styles['approval-remuneration-image-wrapper']}
                    >
                      <Image
                        className={styles['approval-remuneration-image']}
                        src={DummyImage}
                        width={100}
                        height={100}
                      />
                    </Box>
                    <Box
                      className={
                        styles['approval-remuneration-content-wrapper']
                      }
                    >
                      <Text>{item.product_digital_name}</Text>
                    </Box>
                    <Box
                      className={
                        styles['approval-remuneration-content-wrapper']
                      }
                    >
                      <Text>
                        {moment(item.created_at)
                          .utcOffset('+07:00')
                          .format('MMM YYYY')}
                      </Text>
                    </Box>
                    <Box
                      className={styles['approval-remuneration-content-status']}
                    >
                      <Text>
                        {item.status.charAt(0).toUpperCase() +
                          item.status.slice(1) || 'Status'}
                      </Text>
                    </Box>
                    <Box
                      className={
                        styles['approval-remuneration-content-wrapper']
                      }
                    >
                      <ChatIcon
                        onClick={() => openNoteModalHandler()}
                        style={{
                          width: '28px',
                          height: '28px',
                          margin: '0 12px',
                          cursor: 'pointer',
                        }}
                      />
                    </Box>
                    <Box
                      className={
                        styles['approval-remuneration-content-wrapper']
                      }
                    >
                      <Button
                        onClick={() =>
                          router.push(`/approval/remuneration/${item.remuneration_id}`)
                        }
                        className={styles['approval-remuneration-content-btn']}
                      >
                        Detail
                      </Button>
                    </Box>
                    {/* {item.isCancelApprove && (
                      <Box
                        className={
                          styles['approval-remuneration-content-wrapper']
                        }
                      >
                        <Button
                          onClick={() =>
                            openConfirmationModalHandler(
                              'Anda akan membatalkan permintaan remunerasi Product Digital. Apakah anda yakin?'
                            )
                          }
                          className={
                            styles['approval-remuneration-content-btn']
                          }
                        >
                          Cancel Approve
                        </Button>
                      </Box>
                    )} */}
                  </Flex>
                </Flex>
              ))}
          </Box>
        </Box>
      </SidebarLayout>
    </>
  );
};

export default ApprovalRemuneration;
