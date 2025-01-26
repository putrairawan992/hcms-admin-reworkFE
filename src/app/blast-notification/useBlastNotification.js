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
  const [documentDetails, setDocumentDetails] = useState({});
  const [productDigital, setProductDigital] = useState([]);
  const [productDigitalData, setProductDigitalData] = useState('');
  const [settingDocument, setSettingDocument] = useState([]);
  const [documentTypeValue, setDocumentTypeValue] = useState('');
  const [filters, setFilters] = useState({
    date: '',
    years: '',
    month: ''
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

  const submitData = async (data) => {
    try {
      await httpClient({
        method: 'POST',
        url: '/admin/notif/create',
        data
      });

      toast({
        title: 'Success',
        description: 'Data Berhasil Disimpan',
        duration: 3000,
        status: 'success',
        position: 'top',
        isClosable: true,
      });
      setLoadingSubmit(prevData => (!prevData));
      fetchData(filters);
    } catch (error) {
      setLoadingSubmit(prevData => (!prevData));
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

  const toggleModalOpen = (data) => {
    setModalOpen(prevData => (!prevData));
    const docTypes = settingDocument.find(item => item.label === data?.type_setting_document);
    setDocumentDetails(data);
    setDocumentTypeValue(docTypes);
  };

  const onSubmitSettingDocument = () => {
    setLoadingSubmit(prevData => (!prevData));
    const payload = {
      setting_document_id: documentTypeValue?.value || '',
      remuneration_id: documentDetails?.remuneration_id,
      employee_list: documentDetails?.employee_list?.map(item => item.user_id)
    }
    submitSettingDocument(payload);
  };

  const onPressIcon = (type) => {
    console.log(type);
  };

  const onPressDetails = (id) => {
    router.push(`/blast-notification/${id}`);
  };

  const onSubmit = () => {
    const payload = {
      product_digital: [productDigitalData || ''],
      ...form
    };

    submitData(payload);
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

  return { form, data, loading, loadingSubmit, modalOpen, productDigital, filters, settingDocument, documentTypeValue, onChangeSelect, toggleModal, onSubmitSettingDocument, toggleModalOpen, onPressIcon, onPressDetails, productDigitalData, onChangeText, onSubmit, isContentValid, onChangeTextFilter };
};

export default useBlastNotification;
