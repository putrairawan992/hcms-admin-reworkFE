'use client';
import React from 'react';
import { Box, Flex, Text, Image, Divider } from '@chakra-ui/react';
import styles from './styles/dashboard.module.css';
import moment from 'moment';
import 'moment/locale/id';
import { Gap, SelectField } from './components/atoms';
import { ProgressCard } from './components/molecules';
import {
  monthLabelOptions,
  monthOptions,
  yearOptions,
  monthLabelOptionsRecap,
} from '@/shared/general';
import useDashboard from './useDashboard';

moment.locale('id');

const Home = () => {
  const {
    data,
    dataRecap,
    filters,
    filtersRecap,
    productDigitalData,
    onChangeSelect,
    onChangeSelectRecap,
  } = useDashboard();

  return (
    <React.Fragment>
      <Box className={styles['dashboard-container']}>
        <SelectField
          label="Tahun"
          options={yearOptions}
          slug="year"
          value={filters.year}
          onChange={onChangeSelect}
        />
        <SelectField
          label="Bulan"
          options={monthOptions}
          slug="month"
          value={filters.month}
          onChange={onChangeSelect}
        />
        <SelectField
          label="Digital Product"
          options={productDigitalData}
          slug="provider"
          value={filters.provider}
          onChange={onChangeSelect}
        />
      </Box>
      <Gap height={3} />
      <Flex align={'flex-start'} width={'100%'}>
        <Box
          className={styles['dashboard-content-container']}
          flex={1}
          height={65}>
          <Text color="#404041" fontWeight="bold">
            Jumlah PKWT Talent yang sudah diproses:
            <span style={{ color: '#3B78C2' }}>{data?.jumlahPkwt || '0'} </span>
            Orang
          </Text>
        </Box>
        <Gap width={2} />
        <Box
          className={styles['dashboard-content-container']}
          flex={1}
          height={65}>
          <Text color="#404041" fontWeight="bold">
            Rata-Rata pemrosesan PKWT (Full Signed):
            <span style={{ color: '#3B78C2' }}>
              {data?.averageProcessingTime || '0'}
            </span>
            Hari
          </Text>
        </Box>
      </Flex>
      <Gap height={3} />
      <Flex align={'flex-start'} width={'100%'}>
        <Flex
          className={styles['dashboard-content-container']}
          flex={1}
          style={{ height: '65px' }}>
          <Text color="#404041" fontWeight="bold">
            Turn Over Rate:
            <span style={{ color: '#3B78C2' }}>{data?.turnover || '0'}</span>%
          </Text>
          <Gap width={4} />
          <Image src="/images/dashboard/bye.png" height={65} />
        </Flex>
        <Gap width={2} />
        <Flex
          className={styles['dashboard-content-container']}
          flex={1}
          style={{ height: '65px' }}>
          <Text color="#404041" fontWeight="bold">
            New Hiring Rate:
            <span style={{ color: '#3B78C2' }}>{data?.newhiring || '0'}</span>%
          </Text>
          <Gap width={8} />
          <Image src="/images/dashboard/rate.png" height={65} />
        </Flex>
      </Flex>
      <Gap height={3} />
      <Flex align={'flex-start'} width={'100%'}>
        <Box className={styles['dashboard-content-container2']} flex={1}>
          <Text color="#AE445A" fontWeight="900" fontSize={22}>
            Approval Job Post
          </Text>
          <Gap height={6} />
          <ProgressCard data={data?.approval_job_post || []} label="Lowongan" />
        </Box>
        <Gap width={2} />
        <Box className={styles['dashboard-content-container2']} flex={1}>
          <Flex justify="space-between">
            <Text color="#AE445A" fontWeight="900" fontSize={22}>
              Posisi yang Dibutuhkan
            </Text>
            <Box>
              <Text
                color="#AE445A"
                fontWeight="900"
                fontSize={12}
                textDecoration="underline"
                cursor="pointer">
                View All
              </Text>
            </Box>
          </Flex>
          <Gap height={6} />
          <ProgressCard data={data?.available_position || []} label="Orang" />
        </Box>
      </Flex>
      <Gap height={3} />
      <Flex align={'flex-start'} width={'100%'}>
        <Box className={styles['dashboard-content-container2']} flex={1}>
          <Text color="#AE445A" fontWeight="900" fontSize={22}>
            Tipe Karyawan
          </Text>
          <Gap height={6} />
          <ProgressCard data={data?.employee_type || []} label="Orang" />
        </Box>
        <Gap width={2} />
        <Box className={styles['dashboard-content-container2']} flex={1}>
          <Text color="#AE445A" fontWeight="900" fontSize={22}>
            Jumlah Talent
          </Text>
          <Gap height={6} />
          <ProgressCard data={data?.talent || []} label="Orang" />
        </Box>
      </Flex>
      <Gap height={3} />
      <Box className={styles['dashboard-content-container3']} flex={1}>
        <Flex align="center">
          <Text color="#AE445A" fontWeight="900" fontSize={22}>
            Rekap Data
          </Text>
          <Gap width={4} />
          <Box flex={0.2}>
            <SelectField
              label="Tahun"
              options={yearOptions}
              slug="year"
              value={filtersRecap.year}
              onChange={onChangeSelectRecap}
            />
          </Box>
        </Flex>
        <Gap height={6} />
        <Box>
          <Text color="#AE445A" fontSize={18} fontWeight="bold">
            Talent
          </Text>
          <Gap height={4} />
          <Flex flex={1}>
            <Text color="#404041" fontSize={12} fontWeight="bold" flex={1}>
              Status
            </Text>
            {monthLabelOptionsRecap.map((item) => (
              <Text flex={1} color="#404041" fontSize={12} fontWeight="bold">
                {item?.label}
              </Text>
            ))}
          </Flex>
          <Divider borderWidth={1} borderColor="#AE445A" marginY={3} />
          <Flex flex={1}>
            <Text color="#404041" fontSize={10} fontWeight="bold" flex={1}>
              New Joiner
            </Text>
            {monthLabelOptionsRecap.map((item) => (
              <Text flex={1} color="#404041" fontSize={10} fontWeight="bold">
                {dataRecap.newJoiner?.[item.key] || 0} Orang
              </Text>
            ))}
          </Flex>
          <Gap height={2} />
          <Flex flex={1}>
            <Text color="#404041" fontSize={10} fontWeight="bold" flex={1}>
              Resign
            </Text>
            {monthLabelOptionsRecap.map((item) => (
              <Text flex={1} color="#404041" fontSize={10} fontWeight="bold">
                {dataRecap.resign?.[item.key] || 0} Orang
              </Text>
            ))}
          </Flex>
          <Gap height={2} />
          <Flex flex={1}>
            <Text color="#404041" fontSize={10} fontWeight="bold" flex={1}>
              Renewal
            </Text>
            {monthLabelOptionsRecap.map((item) => (
              <Text flex={1} color="#404041" fontSize={10} fontWeight="bold">
                {dataRecap.renewal?.[item.key] || 0} Orang
              </Text>
            ))}
          </Flex>
          <Divider borderWidth={1} borderColor="#AE445A" marginY={3} />
          <Flex flex={1}>
            <Text color="#404041" fontSize={10} fontWeight="bold" flex={1}>
              Grand Total
            </Text>
            {monthLabelOptionsRecap.map((item) => (
              <Text flex={1} color="#404041" fontSize={10} fontWeight="bold">
                {dataRecap.grandTotal?.[item.key] || 0} Orang
              </Text>
            ))}
          </Flex>
        </Box>
        <Gap height={8} />
        <Box>
          <Flex gap={2}>
            <Text color="#AE445A" fontSize={18} fontWeight="bold">
              Talent Cost
            </Text>
            <Text color="#5a6a85" fontSize={18} fontWeight="normal">
              (dalam ribuan)
            </Text>
          </Flex>
          <Gap height={4} />
          <Flex flex={1}>
            <Text color="#404041" fontSize={12} fontWeight="bold" flex={1}>
              Status
            </Text>
            {monthLabelOptionsRecap.map((item) => (
              <Text flex={1} color="#404041" fontSize={12} fontWeight="bold">
                {item?.label}
              </Text>
            ))}
          </Flex>
          <Divider borderWidth={1} borderColor="#AE445A" marginY={3} />
          <Flex flex={1}>
            <Text color="#404041" fontSize={10} fontWeight="bold" flex={1}>
              THP
            </Text>
            {monthLabelOptionsRecap.map((item) => (
              <Text flex={1} color="#404041" fontSize={10} fontWeight="bold">
                {Math.round(
                  (dataRecap.talent_cost?.[item.value]?.gaji_pokok || 0) / 1000
                ).toLocaleString('en-EN')}
              </Text>
            ))}
          </Flex>
          <Gap height={2} />
          <Flex flex={1}>
            <Text color="#404041" fontSize={10} fontWeight="bold" flex={1}>
              KAK
            </Text>
            {monthLabelOptionsRecap.map((item) => (
              <Text flex={1} color="#404041" fontSize={10} fontWeight="bold">
                {Math.round(
                  (dataRecap.talent_cost?.[item.value]
                    ?.kompensasi_akhir_kontrak || 0) / 1000
                ).toLocaleString('en-EN')}
              </Text>
            ))}
          </Flex>
          <Gap height={2} />
          <Flex flex={1}>
            <Text color="#404041" fontSize={10} fontWeight="bold" flex={1}>
              Pajak
            </Text>
            {monthLabelOptionsRecap.map((item) => (
              <Text flex={1} color="#404041" fontSize={10} fontWeight="bold">
                {Math.round(
                  (dataRecap.talent_cost?.[item.value]?.pajak || 0) / 1000
                ).toLocaleString('en-EN')}
              </Text>
            ))}
          </Flex>
          <Gap height={2} />
          <Flex flex={1}>
            <Text color="#404041" fontSize={10} fontWeight="bold" flex={1}>
              Other
            </Text>
            {monthLabelOptionsRecap.map((item) => (
              <Text flex={1} color="#404041" fontSize={10} fontWeight="bold">
                {Math.round(
                  (dataRecap.talent_cost?.[item.value]?.other || 0) / 1000
                ).toLocaleString('en-EN')}
              </Text>
            ))}
          </Flex>
          <Divider borderWidth={1} borderColor="#AE445A" marginY={3} />
          <Flex flex={1}>
            <Text color="#404041" fontSize={10} fontWeight="bold" flex={1}>
              Total Biaya
            </Text>
            {monthLabelOptionsRecap.map((item) => (
              <Text flex={1} color="#404041" fontSize={10} fontWeight="bold">
                {Math.round(
                  (dataRecap.talent_cost?.[item.value]?.grand_total || 0) / 1000
                ).toLocaleString('en-EN')}
              </Text>
            ))}
          </Flex>
        </Box>
        <Gap height={8} />
        <Box>
          <Text color="#AE445A" fontSize={18} fontWeight="bold">
            User Per Akun
          </Text>
          <Gap height={4} />
          <Flex flex={1}>
            <Text color="#404041" fontSize={12} fontWeight="bold" flex={1}>
              Status
            </Text>
            {monthLabelOptionsRecap.map((item) => (
              <Text flex={1} color="#404041" fontSize={12} fontWeight="bold">
                {item?.label}
              </Text>
            ))}
          </Flex>
          <Divider borderWidth={1} borderColor="#AE445A" marginY={3} />
          <Flex flex={1}>
            <Text color="#404041" fontSize={10} fontWeight="bold" flex={1}>
              Client
            </Text>
            {monthLabelOptionsRecap.map((item) => (
              <Text flex={1} color="#404041" fontSize={10} fontWeight="bold">
                {dataRecap.newJoiner?.[item.key] || 0}
              </Text>
            ))}
          </Flex>
          <Gap height={2} />
          <Flex flex={1}>
            <Text color="#404041" fontSize={10} fontWeight="bold" flex={1}>
              Product Digital
            </Text>
            {monthLabelOptionsRecap.map((item) => (
              <Text flex={1} color="#404041" fontSize={10} fontWeight="bold">
                {dataRecap.resign?.[item.key] || 0}
              </Text>
            ))}
          </Flex>
          <Gap height={2} />
          <Flex flex={1}>
            <Text color="#404041" fontSize={10} fontWeight="bold" flex={1}>
              Talent
            </Text>
            {monthLabelOptionsRecap.map((item) => (
              <Text flex={1} color="#404041" fontSize={10} fontWeight="bold">
                {dataRecap.renewal?.[item.key] || 0}
              </Text>
            ))}
          </Flex>
        </Box>
        <Gap height={8} />
        <Box>
          <Text color="#AE445A" fontSize={18} fontWeight="bold">
            User Per Data Payroll
          </Text>
          <Gap height={4} />
          <Flex flex={1}>
            <Text color="#404041" fontSize={10} fontWeight="bold" flex={1}>
              Status
            </Text>
            {monthLabelOptionsRecap.map((item) => (
              <Text flex={1} color="#404041" fontSize={10} fontWeight="bold">
                {item?.label}
              </Text>
            ))}
          </Flex>
          <Divider borderWidth={1} borderColor="#AE445A" marginY={3} />
          <Flex flex={1}>
            <Text color="#404041" fontSize={10} fontWeight="bold" flex={1}>
              Client
            </Text>
            {monthLabelOptionsRecap.map((item) => (
              <Text flex={1} color="#404041" fontSize={10} fontWeight="bold">
                {dataRecap.newJoiner?.[item.key] || 0}
              </Text>
            ))}
          </Flex>
          <Gap height={2} />
          <Flex flex={1}>
            <Text color="#404041" fontSize={10} fontWeight="bold" flex={1}>
              Product Digital
            </Text>
            {monthLabelOptionsRecap.map((item) => (
              <Text flex={1} color="#404041" fontSize={10} fontWeight="bold">
                {dataRecap.resign?.[item.key] || 0}
              </Text>
            ))}
          </Flex>
          <Gap height={2} />
          <Flex flex={1}>
            <Text color="#404041" fontSize={10} fontWeight="bold" flex={1}>
              Talent Aktif
            </Text>
            {monthLabelOptionsRecap.map((item) => (
              <Text flex={1} color="#404041" fontSize={10} fontWeight="bold">
                {dataRecap.renewal?.[item.key] || 0}
              </Text>
            ))}
          </Flex>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Home;
