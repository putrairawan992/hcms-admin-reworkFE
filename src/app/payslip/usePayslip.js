import { useEffect, useState } from "react";
import { httpClient } from "../utils/network";

const usePayslip = () => {
  const [data, setData] = useState([]);
  const [productDigitalData, setProductDigitalData] = useState([]);

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

  const fetchDataImage = async () => {
    try {
      const response = await httpClient({
        method: 'GET',
        baseURL: 'https://api-admin-rework.scalastaging.online:8080',
        url: '/download/profile_photo_admin/UUID-GENERATED-HERE',
      });

      // const responseData = response?.data?.data || [];
      console.log(response);
      // setData(responseData);
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
    fetchDataImage();
    fetchDataPD();
  }, []);

  return { data, productDigitalData }

};

export default usePayslip;

