import { useEffect, useState } from 'react';
import { httpClient } from '@/app/utils/network';

const useSetupAccount = () => {
  const [data, setData] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [loading, setLoading] = useState(true);

  const onChangeText = (e) => {
    setKeyword(e.target.value);
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await httpClient({
        method: 'GET',
        url: '/admin/account_setup',
        params: { sort: 'A-Z' }
      });

      const responseData = response?.data?.data || [];
      setData(responseData);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
    loading,
    keyword,
    onChangeText,
  };
};

export default useSetupAccount;
