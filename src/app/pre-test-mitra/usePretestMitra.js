import { useEffect, useState } from 'react';
import { httpClient } from '../utils/network';

const useDashboardMitra = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await httpClient({
        method: 'GET',
        url: '/admin/document/send_document/list',
      });

      const responseData = response?.data?.data || [];
      setData(responseData);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data };
};

export default useDashboardMitra;
