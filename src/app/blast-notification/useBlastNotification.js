import { useEffect, useState } from 'react';
import { httpClient } from '../utils/network';
import { useToast } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

const useBlastNotification = () => {
  const toast = useToast();
  const router = useRouter();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [loadingModal, setLoadingModal] = useState(false);
  const [productDigital, setProductDigital] = useState([]);
  const [productDigitalData, setProductDigitalData] = useState('');
  const [notificationId, setNotificationId] = useState('');
  const [filters, setFilters] = useState({
    date: '',
    title: '',
  });

  const [form, setForm] = useState({
    title: '',
    content: ''
  });

  const fetchData = async (params) => {
    setLoading(true);
    try {
      const response = await httpClient({
        method: 'GET',
        url: '/admin/notif/list',
        params
      });

      const responseData = response?.data?.data || [];
      setData(responseData);
      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch data:', error);
      setLoading(false);
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
        ({ id, name }) => ({
          value: id,
          label: name,
        })
      );
      setProductDigital(transformedData);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  const submitData = async (method = '', data, setLoading) => {
    const url = method === 'DELETE' ? `/admin/notif/delete/${data}` : '/admin/notif/create';

    try {
      await httpClient({ method, url, data });

      toast({
        title: 'Success',
        description: 'Data Berhasil Disimpan',
        duration: 3000,
        status: 'success',
        position: 'top',
        isClosable: true,
      });
      setLoading(false);
      fetchData(filters);
    } catch (error) {
      setLoading(false);
      toast({
        title: 'Error',
        description: error?.response?.data?.errors || `Something went wrong!`,
        duration: 3000,
        status: 'error',
        position: 'top',
        isClosable: true,
      });
    }
  };

  const onChangeSelect = (slug, value) => {
    setProductDigitalData(value);
  };

  const onChangeTextFilter = (slug, value) => {
    setFilters((prevData) => ({ ...prevData, [slug]: value }));
  }

  const onChangeText = (slug, value) => {
    setForm((prevData) => ({ ...prevData, [slug]: value }));
  };

  const toggleModal = () => {
    setModalOpen(prevData => (!prevData));
  };

  const onPressIcon = (id) => {
    toggleModal();
    setNotificationId(id);
  };

  const onPressDetails = (id) => {
    router.push(`/blast-notification/${id}`);
  };

  const onSubmit = async () => {
    setLoadingSubmit(true);
    const payload = {
      product_digital: [productDigitalData || ''],
      ...form
    };

    await submitData('POST', payload, setLoadingSubmit);
  };

  const onSubmitDelete = async () => {
    setLoadingModal(true);
    const payload = notificationId;
    await submitData('DELETE', payload, setLoadingModal);
  };

  const isContentValid = (content) => {
    const cleanedContent = content.replace(/<(.|\n)*?>/g, '').trim();
    return cleanedContent.length > 0;
  };

  useEffect(() => {
    fetchData(filters);
  }, [filters]);

  useEffect(() => {
    fetchDataPD();
  }, []);

  return { form, data, loading, loadingSubmit, modalOpen, productDigital, filters, onChangeSelect, toggleModal, onPressIcon, onPressDetails, productDigitalData, onChangeText, onSubmit, isContentValid, onChangeTextFilter, notificationId, onSubmitDelete, loadingModal };
};

export default useBlastNotification;
