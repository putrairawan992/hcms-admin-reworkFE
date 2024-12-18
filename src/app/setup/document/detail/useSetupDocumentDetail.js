import { useEffect, useState } from "react";
import { httpClient } from "@/app/utils/network";
import { useRouter, useParams } from "next/navigation";
import { useToast } from "@chakra-ui/react";
import { documentTypeOptions } from "./Shared/General";

const useSetupDocumentDetail = () => {
  const toast = useToast();
  const router = useRouter();
  const params = useParams();

  const searchParams = new URLSearchParams(window.location.search);
  const id = searchParams.get("productDigital");
  const documentType = searchParams.get("documentType");


  const [data, setData] = useState([]);
  const [typeOptions, setTypeOptions] = useState([]);
  const [productDigital, setProductDigitalData] = useState([]);
  const [loading, setLoading] = useState(false);

  const documentTypeValue = documentTypeOptions.find((item) => item.label === documentType);

  const [form, setForm] = useState({
    job_provider_id: id || '',
    type_document: documentTypeValue?.name || ''
  });

  useEffect(() => {
    if (!id && !documentType) {
      console.log('Error');
    }
  }, [router]);

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
        url: '/admin/document/setup_document/type',
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
        url: '/admin/document/setup_document',
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
        title: "Error",
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

  const cleanData = (data) => {
    return Object.entries(data).reduce((acc, [key, value]) => {
      if (value !== null) {
        acc[key] = value;
      }
      return acc;
    }, {});
  };

  const fetchDocumentDetail = async (filters) => {
    try {
      const response = await httpClient({
        method: 'GET',
        url: '/admin/document/setup_document',
        params: { job_provider_id: filters?.job_provider_id, type_document: filters?.type_document }
      });

      const responseData = response?.data?.data || [];
      if (responseData?.length > 0) {
        setData(responseData[0]);
      }
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  const onChangeSelect = (slug, value) => {
    setForm(prevFilters => ({ ...prevFilters, [slug]: value }));
  };

  useEffect(() => {
    fetchDataType();
    fetchDataPD();
  }, []);

  useEffect(() => {
    fetchDocumentDetail(form);
  }, [form]);

  return { data, loading, form, typeOptions, productDigital, loading, onHandlePress, onChangeSelect }

};

export default useSetupDocumentDetail;

