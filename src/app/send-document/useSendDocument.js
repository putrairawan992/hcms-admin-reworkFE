import { useEffect, useState } from 'react';
import { httpClient } from '../utils/network';

const useSendDocument = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [productDigital, setProductDigitalData] = useState([]);
  const [filters, setFilters] = useState({
    years: '',
    month: '',
    product_digital_name: ''
  });

  const fetchData = async (filters) => {
    setLoading(true);
    try {
      const response = await httpClient({
        method: 'GET',
        url: '/admin/document/send_document/list',
        params: filters
      });

      const responseData = response?.data?.data || [];
      setData(responseData);
      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch data:', error);
      setLoading(false);
    }
  };

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

  const onChangeSelect = (slug, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [slug]: value }));
  };

  useEffect(() => {
    fetchData(filters);
  }, [filters]);

  useEffect(() => {
    fetchDataPD();
  }, []);

  return { data, loading, productDigital, filters, onChangeSelect };
};

export default useSendDocument;
