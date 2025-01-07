import { useEffect, useState } from 'react';
import { httpClient } from '@/app/utils/network';
import { useRouter, useParams } from 'next/navigation';

const useDataTalentDetail = () => {
  const router = useRouter();
  const params = useParams();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await httpClient({
        method: 'GET',
        url: `/admin/talent/detail/${params?.id}`,
      });

      const responseData = response?.data?.data || [];
      setData(responseData);
      console.log(responseData);
      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  const onHandlePress = (employeeId) => {
    router.push(`/data-talent/${employeeId}`);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, onHandlePress };
};

export default useDataTalentDetail;
