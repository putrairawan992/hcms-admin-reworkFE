import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { httpClient } from '@/app/utils/network';

const useBpjskesBatch = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    bulan: '',
    tahun: '',
  });

  const fetchData = async (filters) => {
    setLoading(true);
    try {
      const response = await httpClient({
        method: 'GET',
        url: '/sheet/bpjskes/batch',
        params: filters,
      });

      const responseData = response?.data?.data || [];
      setData(responseData);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error('Failed to fetch data:', error);
    }
  };

  const onPressDetail = (month, years) => {
    router.push(
      `/master-data/bpjskes/batch/detail?month=${month}&years=${years}`
    );
  };

  const onChangeSelect = (slug, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [slug]: value }));
  };

  useEffect(() => {
    fetchData(filters);
  }, [filters]);

  return { data, loading, filters, onChangeSelect, onPressDetail };
};

export default useBpjskesBatch;
