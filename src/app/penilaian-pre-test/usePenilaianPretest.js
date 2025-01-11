import { useEffect, useState } from 'react';
import { httpClient } from '../utils/network';

const usePenilaianPretest = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await httpClient({
        method: 'GET',
        url: '/talent/pretest/question/570fb096-f581-4621-8c14-d6599d1f5ae7',
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

export default usePenilaianPretest;
