'use client';
import { Box, Flex, Text } from '@chakra-ui/react';
import styles from '../../styles/approvalRemuneration.module.css';
import { useState } from 'react';
import moment from 'moment';
import 'moment/locale/id';
import dynamic from 'next/dynamic';
import useApprovalRemuneration from './useApprovalRemuneration';
import { ApprvRemunCard } from '@/app/components/molecules';
import { SelectField } from '@/app/components/atoms';
import {
  yearOptions,
  monthOptions,
  statusRemunOptions,
} from '@/shared/general';

moment.locale('id');

const ApprovalRemuneration = () => {
  const {
    data,
    filters,
    productDigitalData,
    loading,
    onChangeSelect,
    onPressDetail,
    onPressIcon,
    isOpen,
    onClose,
    onCloseNote,
    isOpenNote,
  } = useApprovalRemuneration();
  const ConfirmationModalWithNoSSR = dynamic(
    () => import('../../components/cancelApprovalConfirmationModal'),
    { ssr: false }
  );
  const NoteModalWithNoSSR = dynamic(
    () => import('../../components/noteModal'),
    { ssr: false }
  );

  const [text, setText] = useState('');

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
        <Flex marginBottom={4} marginTop={10}>
          <SelectField
            label="Tahun"
            options={yearOptions}
            value={filters.years}
            slug="years"
            onChange={onChangeSelect}
          />
          <SelectField
            label="Bulan"
            options={monthOptions}
            value={filters.month}
            slug="month"
            onChange={onChangeSelect}
          />
          <SelectField
            label="Digital Product"
            options={productDigitalData}
            value={filters.product_digital_name}
            slug="product_digital_name"
            onChange={onChangeSelect}
          />
          <SelectField
            label="Status"
            options={statusRemunOptions}
            value={filters.status}
            slug="status"
            onChange={onChangeSelect}
          />
        </Flex>
        <Box className={styles['approval-remuneration-wrapper']}>
          {data.length > 0 &&
            data.map((item, index) => (
              <ApprvRemunCard
                data={item}
                onClickIcon={onPressIcon}
                onClickDetail={onPressDetail}
              />
            ))}
        </Box>
      </Box>
    </>
  );
};

export default ApprovalRemuneration;
