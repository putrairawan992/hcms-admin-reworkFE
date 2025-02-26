import { useCallback, useEffect, useState } from 'react';
import { httpClient } from './utils/network';
import { useRouter } from 'next/navigation';
import { useDisclosure } from '@chakra-ui/react';

const useDashboard = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [dataRecap, setDataRecap] = useState([]);
  const [loading, setLoading] = useState(true);
  const [productDigitalData, setProductDigitalData] = useState([]);
  const [filters, setFilters] = useState({
    year: '',
    month: '',
    provider: '',
  });
  const [filtersRecap, setFiltersRecap] = useState({
    year: '',
  });
  const { isOpen, onOpen, onClose } = useDisclosure();

  const fetchData = useCallback(
    async (params) => {
      try {
        const response = await httpClient({
          method: 'GET',
          url: '/admin/dashboard/list',
          params,
        });

        const responseData = response?.data?.data || [];
        setData(responseData);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    },
    [filters]
  );
  const fetchRecapData = useCallback(
    async (params) => {
      try {
        const response = await httpClient({
          method: 'GET',
          url: '/admin/dashboard/fluktuatif',
          params,
        });
        const responseDataRecap = response?.data?.data || [];
        setDataRecap(responseDataRecap);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    },
    [filtersRecap]
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

  const onChangeSelect = (slug, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [slug]: value }));
  };
  const onChangeSelectRecap = (slug, value) => {
    setFiltersRecap((prevFilters) => ({ ...prevFilters, [slug]: value }));
  };

  useEffect(() => {
    fetchDataPD();
  }, []);

  useEffect(() => {
    fetchData(filters);
  }, [filters]);

  useEffect(() => {
    fetchRecapData(filtersRecap);
  }, [filtersRecap]);

  return {
    data,
    dataRecap,
    loading,
    filters,
    filtersRecap,
    productDigitalData,
    onHandlePress,
    onChangeSelect,
    onChangeSelectRecap,
    onClose,
    isOpen,
    onOpen,
  };
};

export default useDashboard;
