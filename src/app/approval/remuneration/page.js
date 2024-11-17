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
import {
  ApproveIcon,
  RejectIcon,
  ShareIcon,
  ChatIcon,
} from '@/app/components/icons';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import moment from 'moment';
import 'moment/locale/id';
import dynamic from 'next/dynamic';

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
  const data = [
    {
      id: 1,
      name: 'Burung Emas Group',
      status: 'Approved',
      date: 'Jun 2023',
    },
    {
      id: 2,
      name: 'Burung Emas Group',
      status: 'Rejected',
      date: 'Jun 2023 ',
    },
    {
      id: 3,
      name: 'Burung Emas Group',
      status: '',
      date: 'Jun 2023 ',
      isCancelApprove: true,
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

  const openConfirmationModalHandler = (str) => {
    setText(str);
    onOpen();
  };

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
              <Select className={styles['approval-remuneration-filter-select']}>
                <option value="" selected disabled hidden>
                  Tahun
                </option>
                <option>Value 1</option>
              </Select>
            </Box>
            <Box>
              <Text className={styles['approval-remuneration-filter-text']}>
                Bulan
              </Text>
              <Select className={styles['approval-remuneration-filter-select']}>
                <option value="" selected disabled hidden>
                  Pilih Bulan
                </option>
                <option>Value 1</option>
              </Select>
            </Box>
            <Box>
              <Text className={styles['approval-remuneration-filter-text']}>
                Digital Product
              </Text>
              <Select className={styles['approval-remuneration-filter-select']}>
                <option value="" selected disabled hidden>
                  Pilih Digital Product
                </option>
                <option>Value 1</option>
              </Select>
            </Box>
            <Box>
              <Text className={styles['approval-remuneration-filter-text']}>
                Status
              </Text>
              <Select className={styles['approval-remuneration-filter-select']}>
                <option value="" selected disabled hidden>
                  Pilih Status
                </option>
                <option>Value 1</option>
              </Select>
            </Box>
          </Flex>
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
                    className={styles['approval-remuneration-content-wrapper']}
                  >
                    <Text>{item.date}</Text>
                  </Box>
                  <Box
                    className={styles['approval-remuneration-content-status']}
                  >
                    <Text>{item.status || 'Status'}</Text>
                  </Box>
                  <Box
                    className={styles['approval-remuneration-content-wrapper']}
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
                    className={styles['approval-remuneration-content-wrapper']}
                  >
                    <Button
                      onClick={() => router.push('/approval/remuneration/details')}
                      className={styles['approval-remuneration-content-btn']}
                    >
                      Detail
                    </Button>
                  </Box>
                  {item.isCancelApprove && (
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
                        className={styles['approval-remuneration-content-btn']}
                      >
                        Cancel Approve
                      </Button>
                    </Box>
                  )}
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
