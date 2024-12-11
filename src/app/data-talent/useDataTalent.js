import { useEffect, useState } from "react";
import { httpClient } from "../utils/network";
import { useRouter } from "next/navigation";

const useDataTalent = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [productDigitalData, setProductDigitalData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await httpClient({
        method: 'GET',
        url: '/admin/talent/list',
      });

      const responseData = response?.data?.data || [];
      setData(responseData);
      setLoading(false);
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

  const onHandlePress = (employeeId) => {
    router.push(`/data-talent/${employeeId}`);
  }

  useEffect(() => {
    fetchData();
    fetchDataImage();
    fetchDataPD();
  }, []);

  return { data, loading, productDigitalData, onHandlePress }

};

export default useDataTalent;

