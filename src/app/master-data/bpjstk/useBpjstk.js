import { useEffect, useState } from "react";
import { httpClient } from "@/app/utils/network";

const useBpjstk = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalData, setTotalData] = useState(0);
  const [keyword, setKeyword] = useState('');

  const onChangeText = (e) => {
    setKeyword(e.target.value);
  };

  const fetchData = async () => {
    try {
      const response = await httpClient({
        method: 'GET',
        url: '/list/sheet1',
        params: { page: 1, size: 10 }
      });

      const responseData = response?.data?.data?.data || [];
      setData(responseData);
      setTotalData(response?.data?.total_items);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, page, totalData, keyword, onChangeText }

};

export default useBpjstk;

