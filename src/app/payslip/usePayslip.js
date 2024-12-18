import { useEffect, useState } from "react";
import { httpClient } from "../utils/network";

const usePayslip = () => {
  const [data, setData] = useState([]);
  const [productDigitalData, setProductDigitalData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await httpClient({
        method: 'GET',
        url: '/admin/payslip/list',
      });

      const responseData = response?.data?.data || [];
      console.log(responseData);
      setData(responseData);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  const fetchDataPD = async () => {
    try {
      const response = await httpClient({
        method: 'GET',
        url: '/common/list/product_digital',
      });

      const responseData = response?.data?.data || [];
      setProductDigitalData(responseData);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  useEffect(() => {
    fetchData();
    fetchDataPD();
  }, []);

  return { data, productDigitalData }

};

export default usePayslip;

