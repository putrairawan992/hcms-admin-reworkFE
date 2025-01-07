import { useEffect, useState } from 'react';
import { httpClient } from '../../utils/network';
import { useRouter } from 'next/navigation';
import { useToast } from '@chakra-ui/react';

const useDataTalent = () => {
  const router = useRouter();
  const toast = useToast();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [productDigitalData, setProductDigitalData] = useState([]);
  const [form, setForm] = useState({
    productDigital: '',
    documentType: '',
  });

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

  const fetchDataPD = async () => {
    try {
      const response = await httpClient({
        method: 'GET',
        url: '/common/list/product_digital',
      });

      const responseData = response?.data?.data || [];
      const transformedData = responseData?.map(
        ({ id, product_digital_name }) => ({
          id,
          label: product_digital_name,
          value: id,
        })
      );
      setProductDigitalData(transformedData);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  const onHandlePress = (value) => {
    setForm((prevData) => ({ ...prevData, documentType: value }));
  };

  const onHandleChange = (slug, value) => {
    setForm((prevData) => ({ ...prevData, productDigital: value }));
  };

  const validateForm = () => {
    let newErrors = '';
    if (!form.documentType.trim()) {
      newErrors = 'Document Type tidak boleh kosong';
    }
    return newErrors;
  };

  const onHandleSubmit = () => {
    const validationErrors = validateForm();
    if (validationErrors !== '') {
      toast({
        title: 'Error',
        description: validationErrors,
        duration: 3000,
        status: 'error',
        position: 'top',
        isClosable: true,
      });
    } else {
      router.push(
        `/setup/document/detail?productDigital=${form.productDigital}&documentType=${form.documentType}`
      );
    }
  };

  useEffect(() => {
    fetchData();
    fetchDataPD();
  }, []);

  return {
    data,
    form,
    loading,
    productDigitalData,
    onHandlePress,
    onHandleChange,
    onHandleSubmit,
  };
};

export default useDataTalent;
