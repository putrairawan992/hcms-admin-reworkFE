import { useCallback, useEffect, useState } from 'react';
import { httpClient } from '../utils/network';
import { useRouter } from 'next/navigation';

const useTalentMitra = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [productDigitalData, setProductDigitalData] = useState([]);
  const [filters, setFilters] = useState({
    limit: 10,
    paginate: 1,
    key_search: '',
    education_id: '',
    experience_id: '',
    job_specialist_id: '',
    competence_test_id: '',
  });
  const [summaryData, setSummaryData] = useState({
    total_active_talent: 0,
    total_registered_talent: 0,
    total_talent_in_hirring_process: 0,
    total_talent_hired: 0,
    total_talent_failed_process: 0,
  });
  const [masterData, setMasterData] = useState({
    job_specialist: [],
    education: [],
    experience: [],
    competence: [],
  });

  const fetchData = useCallback(async (params) => {
    try {
      setLoading(true);
      const response = await httpClient({
        method: 'GET',
        url: '/admin/mitra/talent',
        params,
      });

      const responseData = response?.data?.data?.data?.mitra_list || [];
      const summary = response?.data?.data?.data?.summary_data || {};
      const master = response?.data?.data?.data?.master_data || {};
      console.log({ response });
      setData(responseData);
      setSummaryData(summary);
      setMasterData(master);
      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch data:', error);
      setLoading(false);
    }
  }, []);

  const fetchDataPD = async () => {
    try {
      const response = await httpClient({
        method: 'GET',
        url: '/common/list/product_digital',
      });

      const responseData = response?.data?.data || [];
      const transformedData = responseData?.map(
        ({ id, product_digital_name }) => ({
          id,
          label: product_digital_name,
        })
      );
      setProductDigitalData(transformedData);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  const fetchDataPDS = async () => {
    try {
      const response = await httpClient({
        method: 'GET',
        url: '/admin/document/setting_document/list',
      });

      const responseData = response?.data?.data || [];
      console.log(responseData);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  const onHandlePress = (talentId) => {
    router.push(`/talent-mitra/${talentId}`);
  };

  const onChangeSelect = (slug, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [slug]: value }));
  };

  const onSearch = (query) => {
    setFilters((prevFilters) => ({ ...prevFilters, key_search: query }));
  };

  useEffect(() => {
    fetchDataPDS();
    fetchDataPD();
  }, []);

  useEffect(() => {
    fetchData(filters);
  }, [filters, fetchData]);

  return {
    data,
    loading,
    filters,
    summaryData,
    masterData,
    productDigitalData,
    onHandlePress,
    onChangeSelect,
    onSearch,
  };
};

export default useTalentMitra;
