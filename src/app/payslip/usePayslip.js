import { useEffect, useState } from "react";
import { httpClient } from "../utils/network";
import { useToast } from "@chakra-ui/react";

const usePayslip = () => {
  const toast = useToast();
  const [data, setData] = useState([]);
  const [productDigitalData, setProductDigitalData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [form, setForm] = useState({
    product_digital_id: '',
    month: ''
  });


  const fetchData = async () => {
    try {
      const response = await httpClient({
        method: 'GET',
        url: '/admin/payslip/list',
      });

      const responseData = response?.data?.data || [];
      console.log(responseData);
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
      const transformedData = responseData?.map(({ id, product_digital_name }) => ({
        value: id,
        label: product_digital_name
      }));
      setProductDigitalData(transformedData);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  const toggleModal = () => {
    setModalOpen(prevData => !prevData);
  };

  const onChangeSelect = (slug, value) => {
    setForm(prevData => ({ ...prevData, [slug]: value }));
  };

  const submitData = async () => {
    setLoadingSubmit(true);
    try {
      await httpClient({
        method: 'POST',
        url: '/admin/payslip/send',
        params: { product_digital_id: form.product_digital_id },
        data: { month: form.month }
      });

      setLoadingSubmit(false);
      toast({
        title: "Success",
        description: `Berhasil Disubmit`,
        duration: 3000,
        status: "success",
        position: "top",
        isClosable: true,
      });
    } catch (error) {
      console.error('Failed to fetch data:', error);
      setLoadingSubmit(false);
      toast({
        title: "Error",
        description: `Something went wrong!`,
        duration: 3000,
        status: "error",
        position: "top",
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    fetchData();
    fetchDataPD();
  }, []);

  return { data, form, loading, loadingSubmit, modalOpen, productDigitalData, toggleModal, onChangeSelect, submitData }

};

export default usePayslip;

