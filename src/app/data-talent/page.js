'use client';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import styles from '../styles/inbox.module.css';
import 'moment/locale/id';
import { isEmpty } from 'lodash';
import { DataTalentCard, ListEmpty } from '../components/molecules';
import useDataTalent from './useDataTalent';
import { SelectField } from '../components/atoms';
import {
  documentTrackingOptions,
  employeeTypeOptions,
  selectionTypeOptions,
  statusDocumentOptions,
} from './Shared/General';
import { useRouter } from 'next/navigation';

const DataTalent = () => {
  const router = useRouter();
  const {
    data,
    filters,
    loading,
    productDigitalData,
    onHandlePress,
    onHandlePressDetail,
    onChangeSelect,
  } = useDataTalent();

  const RenderContent = () => {
    if (!isEmpty(data)) {
      return data.map((item) => {
        return <DataTalentCard data={item} onPress={onHandlePress} onPressDetail={onHandlePressDetail} />;
      });
    } else {
      return (
        <Flex align={'center'} justify={'center'}>
          <Text>Tidak ada data inbox</Text>
        </Flex>
      );
    }
  };

  return (
    <Box className={styles['inbox-container']}>
      <Flex align={'center'} justify={'space-between'}>
        <Text className={styles['inbox-title']}>Data Talent</Text>
        <Box>
          <Button
            onClick={() => router.push('/data-talent/history')}
            className={styles['inbox-btn']}
            marginRight={2}>
            History
          </Button>
          <Button className={styles['inbox-btn']}>
            Download All
          </Button>
        </Box>
      </Flex>
      <Flex marginBottom={4} marginTop={10}>
        <SelectField
          label="Digital Product"
          options={productDigitalData}
          value={filters.digital_product}
          slug="digital_product"
          onChange={onChangeSelect}
        />
        <SelectField
          label="Berkas"
          options={documentTrackingOptions}
          value={filters.document}
          slug="document_tracking"
          onChange={onChangeSelect}
        />
        <SelectField
          label="Status Berkas"
          options={statusDocumentOptions}
          value={filters.document_tracking}
          slug="document_tracking"
          onChange={onChangeSelect}
        />
        <SelectField
          label="Jalur"
          options={selectionTypeOptions}
          value={filters.selection_type}
          slug="selection_type"
          onChange={onChangeSelect}
        />
        <SelectField
          label="Tipe Karyawan"
          options={employeeTypeOptions}
          value={filters.employee_type}
          slug="employee_type"
          onChange={onChangeSelect}
        />
      </Flex>
      {loading ? <ListEmpty /> : <RenderContent />}
    </Box>
  );
};

export default DataTalent;
