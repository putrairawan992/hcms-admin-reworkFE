import { useCallback, useEffect, useState } from 'react';
import { httpClient } from '../utils/network';
import { useRouter } from 'next/navigation';

const useDataTalent = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [productDigitalData, setProductDigitalData] = useState([]);
  const [filters, setFilters] = useState({
    size: 10,
    page: 1,
    digital_product: '',
    document: '',
    document_tracking: '',
    selection_type: '',
    employee_type: '',
  });

  const fetchData = useCallback(
    async (params) => {
      try {
        const response = await httpClient({
          method: 'GET',
          url: '/admin/talent/list',
          params,
        });

        const responseData = response?.data?.data || [];
        setData(responseData);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error('Failed to fetch data:', error);
      }
    },
    [filters]
  );

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

  const onHandlePress = (employeeId) => {
    router.push(`/data-talent/${employeeId}`);
  };

  const onHandlePressDetail = (data) => {
    localStorage.setItem('document_tracking', JSON.stringify(data));
    router.push(`/data-talent/tracking-document`);
  };

  const onChangeSelect = (slug, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [slug]: value }));
  };

  useEffect(() => {
    fetchDataPD();
  }, []);

  useEffect(() => {
    fetchData(filters);
  }, [filters]);

  return {
    data,
    loading,
    filters,
    productDigitalData,
    onHandlePress,
    onChangeSelect,
    onHandlePressDetail
  };
};

export default useDataTalent;
