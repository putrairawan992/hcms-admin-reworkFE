import { useEffect, useState } from "react";
import { httpClient } from "@/app/utils/network";
import { useRouter, useParams } from "next/navigation";
import { useToast } from "@chakra-ui/react";

const useSetupDocumentDetail = () => {
  const toast = useToast();
  const router = useRouter();
  const params = useParams();

  const [data, setData] = useState([]);
  const [typeOptions, setTypeOptions] = useState([]);
  const [productDigital, setProductDigitalData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    job_provider_id: '',
    type_document: ''
  });

  const fetchDataPD = async () => {
    try {
      const response = await httpClient({
        method: 'GET',
        url: '/common/list/product_digital',
      });

      const responseData = response?.data?.data || [];
      const transformedData = responseData?.map(({ id, product_digital_name }) => ({
        id,
        label: product_digital_name,
        value: id
      }));
      setProductDigitalData(transformedData);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  const fetchDataType = async () => {
    try {
      const response = await httpClient({
        method: 'GET',
        url: '/admin/document/setup_document',
      });

      const responseData = response?.data?.data || [];
      const transformedData = responseData?.map((item, index) => ({
        id: index,
        label: item
      }));
      setTypeOptions(transformedData);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  const onHandlePress = async (screenData) => {
    setLoading(true);
    const formData = { ...screenData, ...form };

    try {
      await httpClient({
        method: 'POST',
        url: '/admin/document/setup_document/list',
        data: formData
      });
      toast({
        title: "Success",
        description: "Data Berhasil Disimpan",
        duration: 3000,
        status: "success",
        position: "top",
        isClosable: true,
      });
      setLoading(false);
    } catch (error) {
      toast({
        title: "Success",
        description: "Something went wrong",
        duration: 3000,
        status: "error",
        position: "top",
        isClosable: true,
      });
      console.error('Failed to fetch data:', error);
      setLoading(false);
    }
  }

  const onChangeSelect = (slug, value) => {
    setForm(prevFilters => ({ ...prevFilters, [slug]: value }));
  };

  useEffect(() => {
    fetchDataType();
    fetchDataPD();
  }, []);

  return { loading, form, typeOptions, productDigital, loading, onHandlePress, onChangeSelect }

};

export default useSetupDocumentDetail;

