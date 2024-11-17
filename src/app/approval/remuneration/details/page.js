'use client';
import SidebarLayout from '@/app/components/sidebarLayout';
import {
  Box,
  Button,
  Flex,
  Grid,
  Select,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import styles from '../../../styles/approvalRemuneration.module.css';
import DummyImage from '../../../../../public/images/dummy-image.png';
import Image from 'next/image';
import { ChatIcon } from '@/app/components/icons';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import moment from 'moment';
import 'moment/locale/id';
import dynamic from 'next/dynamic';
import OfficeLogo from '../../../../../public/images/Office-Logos.png';

moment.locale('id');

const ApprovalRemunerationDetails = () => {
  const ConfirmationModalWithNoSSR = dynamic(
    () => import('../../../components/cancelApprovalConfirmationModal'),
    { ssr: false }
  );
  const NoteModalWithNoSSR = dynamic(
    () => import('../../../components/noteModal'),
    { ssr: false }
  );
  const data = [
    {
      id: 1,
      name: 'Santika Aldenia',
      status: 'Approved',
      tipe_karyawan: 'Contract',
      take_home_pay: 'Rp 5.000.000',
      tanggal_masuk: '10 Juni 2023',
      tanggal_akhir: '10 Juni 2023',
      jenis_request: 'Request',
    },
    {
      id: 2,
      name: 'Ruhayah K Mina',
      status: 'Approved',
      tipe_karyawan: 'Contract',
      take_home_pay: 'Rp 5.000.000',
      tanggal_masuk: '10 Juni 2023',
      tanggal_akhir: '10 Juni 2023',
      jenis_request: 'Request',
    },
    {
      id: 3,
      name: 'Didi Rahayu Arsy',
      status: 'Approved',
      tipe_karyawan: 'Contract',
      take_home_pay: 'Rp 5.000.000',
      tanggal_masuk: '10 Juni 2023',
      tanggal_akhir: '10 Juni 2023',
      jenis_request: 'Request',
    },
    {
      id: 4,
      name: 'Didi Rahayu Arsy',
      status: 'Approved',
      tipe_karyawan: 'Contract',
      take_home_pay: 'Rp 5.000.000',
      tanggal_masuk: '10 Juni 2023',
      tanggal_akhir: '10 Juni 2023',
      jenis_request: 'Request',
    },
    {
      id: 5,
      name: 'Didi Rahayu Arsy',
      status: 'Approved',
      tipe_karyawan: 'Contract',
      take_home_pay: 'Rp 5.000.000',
      tanggal_masuk: '10 Juni 2023',
      tanggal_akhir: '10 Juni 2023',
      jenis_request: 'Request',
    },
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
          <Flex className={styles['approval-remuneration-details-header']}>
            <Text className={styles['approval-remuneration-title']}>
              Approval Remuneration - Detail
            </Text>
            <Flex
              className={
                styles['approval-remuneration-details-subtitle-wrapper']
              }
            >
              <Button
                onClick={openNoteModalHandler}
                className={styles['approval-remuneration-content-btn']}
              >
                Reject
              </Button>
              <Button
                onClick={openNoteModalHandler}
                className={styles['approval-remuneration-content-btn']}
              >
                Accept
              </Button>
            </Flex>
          </Flex>
          <Grid
            className={styles['approval-remuneration-detail-header-container']}
          >
            <Box>
              <Text className={styles['approval-remuneration-filter-text']}>
                Tahun
              </Text>
              <Box
                className={
                  styles['approval-remuneration-details-header-wrapper']
                }
              >
                <Text
                  className={styles['approval-remuneration-detail-header-text']}
                >
                  2023
                </Text>
              </Box>
            </Box>
            <Box>
              <Text className={styles['approval-remuneration-filter-text']}>
                Bulan
              </Text>
              <Box
                className={
                  styles['approval-remuneration-details-header-wrapper']
                }
              >
                <Text
                  className={styles['approval-remuneration-detail-header-text']}
                >
                  Agustus
                </Text>
              </Box>
            </Box>
            <Box>
              <Box
                className={
                  styles['approval-remuneration-details-header-wrapper']
                }
              >
                <Text
                  className={styles['approval-remuneration-detail-header-text']}
                >
                  Total Karyawan: 50 Orang
                </Text>
              </Box>
            </Box>
            <Box>
              <Flex
                className={
                  styles['approval-remuneration-details-subtitle-wrapper']
                }
              >
                <Button
                  className={styles['approval-remuneration-details-header-btn']}
                >
                  Attached
                </Button>
              </Flex>
            </Box>
          </Grid>
          <Box className={styles['approval-remuneration-wrapper']}>
            {data?.map((item, index) => (
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
                    className={styles['approval-remuneration-content-wrapper']}
                  >
                    <Text>{item.name}</Text>
                  </Box>
                  <Box
                    className={
                      styles['approval-remuneration-content-details-wrapper']
                    }
                  >
                    <Box
                      className={
                        styles[
                          'approval-remuneration-content-details-wrapper-header'
                        ]
                      }
                    >
                      <Flex
                        className={
                          styles[
                            'approval-remuneration-content-details-header-inner'
                          ]
                        }
                      >
                        <Text>Tipe Karyawan</Text>
                      </Flex>
                      <Flex
                        className={
                          styles[
                            'approval-remuneration-content-details-header-inner'
                          ]
                        }
                      >
                        <Text>Take Home Pay</Text>
                      </Flex>
                      <Flex
                        className={
                          styles[
                            'approval-remuneration-content-details-header-inner'
                          ]
                        }
                      >
                        <Text>Tanggal Masuk</Text>
                      </Flex>
                      <Flex
                        className={
                          styles[
                            'approval-remuneration-content-details-header-inner'
                          ]
                        }
                      >
                        <Text>Tanggal Akhir</Text>
                      </Flex>
                      <Flex
                        className={
                          styles[
                            'approval-remuneration-content-details-header-inner'
                          ]
                        }
                      >
                        <Text>Jenis Request</Text>
                      </Flex>
                    </Box>
                    <Box
                      className={
                        styles[
                          'approval-remuneration-content-details-wrapper-inner'
                        ]
                      }
                    >
                      <Flex
                        className={
                          styles['approval-remuneration-content-details-inner']
                        }
                      >
                        <Text>Contract</Text>
                      </Flex>
                      <Flex
                        className={
                          styles['approval-remuneration-content-details-inner']
                        }
                      >
                        <Text>Contract</Text>
                      </Flex>
                      <Flex
                        className={
                          styles['approval-remuneration-content-details-inner']
                        }
                      >
                        <Text>Contract</Text>
                      </Flex>
                      <Flex
                        className={
                          styles['approval-remuneration-content-details-inner']
                        }
                      >
                        <Text>Contract</Text>
                      </Flex>
                      <Flex
                        className={
                          styles['approval-remuneration-content-details-inner']
                        }
                      >
                        <Text>Contract</Text>
                      </Flex>
                    </Box>
                  </Box>
                </Flex>
              </Flex>
            ))}
          </Box>
          <Box className={styles['approval-remuneration-details-footer']}>
            <Box>
              <Text
                className={styles['approval-remuneration-details-footer-text']}
              >
                Total Pengeluaran Budget:{' '}
              </Text>
              <Flex gap={'5px'}>
                <Flex className={styles['approval-remuneration-card']}>
                  <Flex className={styles['approval-remuneration-card-inner']}>
                    <Text
                      className={
                        styles[
                          'approval-remuneration-details-footer-inner-text'
                        ]
                      }
                    >
                      Bulan Ini: Rp. 346,000,000
                    </Text>
                  </Flex>
                </Flex>
                <Flex className={styles['approval-remuneration-card']}>
                  <Flex className={styles['approval-remuneration-card-inner']}>
                    <Text
                      className={
                        styles[
                          'approval-remuneration-details-footer-inner-text'
                        ]
                      }
                    >
                      Sisa Kontrak: Rp. 1,509,000,000
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </Box>
            <Box>
              <Text
                className={styles['approval-remuneration-details-footer-text']}
              >
                Total Pengeluaran Budget:
              </Text>
              <Flex gap={'5px'}>
                <Flex className={styles['approval-remuneration-card']}>
                  <Flex className={styles['approval-remuneration-card-inner']}>
                    <Image src={OfficeLogo} />
                    <Text
                      className={
                        styles['approval-remuneration-details-footer-text']
                      }
                      marginBottom={'0px'}
                    >
                      Juni 2023
                    </Text>
                    <Text fontSize={'12px'}>11 Juni 2023</Text>
                    <Button
                      className={styles['approval-remuneration-content-btn']}
                    >
                      Download
                    </Button>
                  </Flex>
                </Flex>
              </Flex>
            </Box>
          </Box>
        </Box>
      </SidebarLayout>
    </>
  );
};

export default ApprovalRemunerationDetails;
