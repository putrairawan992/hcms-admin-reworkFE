import { useEffect, useState } from "react";
import { httpClient } from "@/app/utils/network";

const useBpjskesBatch = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalData, setTotalData] = useState(0);
  const [keyword, setKeyword] = useState('');
  const [loading, setLoading] = useState(true);

  const onChangeText = (e) => {
    setKeyword(e.target.value);
  };

  const fetchData = async (page) => {
    setLoading(true);
    try {
      const response = await httpClient({
        method: 'GET',
        url: '/sheet/bpjskes/June/2024'
      });

      const responseData = response?.data?.data?.data || [];
      setData(responseData);
      setTotalData(response?.data?.data?.total_items);
      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  const onHandleSync = async () => {
    try {
      const response = await httpClient({
        method: 'GET',
        url: '/sheet1',
        params: { page: 1, size: 10 }
      });

      console.log(response);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  const onChangePagination = (page) => {
    setPage(page);
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);

  return { data, page, loading, totalData, keyword, onChangeText, onHandleSync, onChangePagination }

};

export default useBpjskesBatch;

