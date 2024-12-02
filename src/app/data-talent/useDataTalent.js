import { useEffect, useState } from "react";
import { httpClient } from "../utils/network";

const useDataTalent = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await httpClient({
        method: 'GET',
        url: '/admin/talent/list',
      });

      const responseData = response?.data?.data || [];
      console.log(responseData);
      setData(responseData);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data }

};

export default useDataTalent;

