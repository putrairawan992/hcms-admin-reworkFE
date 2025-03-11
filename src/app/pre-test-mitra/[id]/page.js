'use client';
import { Box, Button, Flex, Input, InputGroup, Text } from '@chakra-ui/react';
import styles from '../../styles/inbox.module.css';
import { useState, useEffect } from 'react';
import { PretestCard } from '../../components/molecules';
import { Gap, SelectField } from '../../components/atoms';
import usePretestMitra from '../usePretestMitra';
import { useParams, useRouter } from 'next/navigation';
import axiosInstance from '@/app/api/axiosConfig';
import usePretestStore from '@/stores/pretestStore';
const TestSeries = () => {
  const router = useRouter();
  const { getPretest, getIconByLabel } = usePretestMitra();
  const {
    modulData,
    setModulData,
    masterOptions,
    setMasterOptions,
    setJobSpesialistId,
  } = usePretestStore();
  const { id } = useParams();

  const [loadingSwitch, setLoadingSwitch] = useState(false);
  const [switchState, setSwitchState] = useState({});
  const [module, setModule] = useState('');

  // Fetch Data dari API
  const fetchData = async () => {
    try {
      const response = await getPretest({ job_specialist_id: id });
      setModulData(response.data.modul_data);
      setMasterOptions(response.data.master_type);

      // Set state awal berdasarkan API
      const initialSwitchState = {};
      response.data.modul_data.forEach((category) => {
        category.module.forEach((modul) => {
          initialSwitchState[`${category.id}-${modul.id}`] =
            modul.active === 'Active';
        });
      });
      setSwitchState(initialSwitchState);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    setJobSpesialistId(id);
    fetchData();
  }, []);

  const handleSwitchChange = async (category_id, pretest_modul_detail_id) => {
    setLoadingSwitch(true);

    try {
      // Hit API untuk mengaktifkan modul yang dipilih
      await axiosInstance.post(
        `/api/admin/pretest_pick?job_specialist_id=${id}`,
        {
          category_id,
          pretest_modul_detail_id,
        }
      );
      fetchData();
    } catch (error) {
      console.error('Error activating module:', error);
    } finally {
      setLoadingSwitch(false);
    }
  };

  const handleDelete = async ({ category_id, pretest_modul_detail_id }) => {
    try {
      // Hit API untuk menghapus modul yang dipilih
      await axiosInstance.delete(`/api/admin/pretest?job_specialist_id=${id}`, {
        data: {
          category_id,
          pretest_modul_detail_id,
        },
      });
      fetchData(); // Refresh data setelah menghapus
    } catch (error) {
      console.error('Error deleting module:', error);
    }
  };

  const renderModulData = () =>
    modulData.map((category) => (
      <Box key={category.id} flex={1} flexDirection="column">
        <Text color="#404041" fontWeight={700} fontSize={16}>
          Kategori: {category.category_name}
        </Text>
        <Gap height={4} />
        <Box overflowX="auto" width="100%">
          <Flex gap={10} minWidth="max-content" whiteSpace="nowrap">
            {category.module.length > 0 ? (
              category.module.map((modul) => (
                <PretestCard
                  key={modul.id}
                  id={modul.id}
                  title={modul.title_test}
                  icon={getIconByLabel(modul.logo, true)}
                  category_id={modul.category_id}
                  bgGradient="linear-gradient(90deg, #F39F5A 0%, #AE445A 100%)"
                  switchState={switchState}
                  handleSwitchChange={handleSwitchChange}
                  loadingSwitch={loadingSwitch}
                  handleDelete={handleDelete}
                />
              ))
            ) : (
              <Text fontSize={12} fontStyle="italic" color="gray.500">
                Tidak ada modul tersedia.
              </Text>
            )}
          </Flex>
        </Box>
        <Gap height={6} />
      </Box>
    ));

  return (
    <Box className={styles['inbox-container']}>
      <Flex align={'center'} justify={'space-between'}>
        <Box>
          <Text className={styles['inbox-title']}>Modul Rangkaian Tes</Text>
          <Text
            fontSize={12}
            fontWeight={300}
            color="#404041"
            fontStyle="italic">
            Silahkan atur soal yang akan dijadikan Pre-Test bagi calon Karyawan
          </Text>
        </Box>
        <Button className={styles['inbox-btn']}>Save</Button>
      </Flex>
      <Gap height={4} />
      <Flex justifyContent="center" alignItems="center">
        <Box flex={1} alignItems="center">
          <InputGroup className={styles['input-container']}>
            <Input
              className={styles['admin-role-input']}
              type="text"
              placeholder="Ketikkan Nama Modul Rangkaian Tes"
            />
          </InputGroup>
        </Box>
        <Gap width={2} />
        <Box>
          <SelectField
            placeholder="Buat Module Baru"
            options={masterOptions}
            value={module}
            slug="module"
            onChange={(_, module) => setModule(module)}
          />
        </Box>
        <Button
          className={styles['inbox-btn']}
          disabled={!module}
          onClick={() => router.push(`/pre-test-mitra/add?module=${module}`)}>
          Create
        </Button>
      </Flex>
      <Gap height={8} />
      <Box flex={1}>{renderModulData()}</Box>
    </Box>
  );
};

export default TestSeries;
