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
  const [settingDocument, setSettingDocument] = useState([]);
  const [documentTypeValue, setDocumentTypeValue] = useState('');
  const [dummy, setDummy] = useState([
    {
      "id": "some-notif-id",
      "recipent_id": "recipient-id",
      "title": "Notification Title",
      "content": "This is the content of the notification",
      "date": "2024-10-15T10:00:00.000Z",
      "created_at": "2024-10-23T14:34:13.000Z",
      "updated_at": "2024-10-23T14:34:13.000Z",
      "type_user": "user-type",
      "sender_id": "sender-id",
      "is_read": false
    },
    {
      "id": "611fa651-dd99-4513-bd64-34eb345b8807",
      "recipent_id": "some-prod-1",
      "title": "ini judul notif",
      "content": "ini adalah content",
      "date": "2024-10-23T08:19:55.000Z",
      "created_at": "2024-10-23T08:19:56.000Z",
      "updated_at": "2024-10-23T08:19:56.000Z",
      "type_user": "user",
      "sender_id": "2f1f6977-0dc5-4c1c-9766-11a6fbd503b2",
      "is_read": false
    },
    {
      "id": "00160668-56ec-43a0-803b-3bb1190511f0",
      "recipent_id": "some-prod-2",
      "title": "ini judul notif",
      "content": "ini adalah content",
      "date": "2024-10-23T08:19:55.000Z",
      "created_at": "2024-10-23T08:19:56.000Z",
      "updated_at": "2024-10-23T08:19:56.000Z",
      "type_user": "user",
      "sender_id": "2f1f6977-0dc5-4c1c-9766-11a6fbd503b2",
      "is_read": false
    },
    {
      "id": "0bc0cb24-68be-4e95-ba44-2fe90d653ede",
      "recipent_id": "some-prod-3",
      "title": "ini judul notif",
      "content": "ini adalah content",
      "date": "2024-10-23T08:19:55.000Z",
      "created_at": "2024-10-23T08:19:56.000Z",
      "updated_at": "2024-10-23T08:19:56.000Z",
      "type_user": "user",
      "sender_id": "2f1f6977-0dc5-4c1c-9766-11a6fbd503b2",
      "is_read": false
    }
  ]);
  const [filters, setFilters] = useState({
    years: '',
    month: ''
  });

  const [form, setForm] = useState({
    title: '',
    message: ''
  });

  const [productDigitalData, setProductDigitalData] = useState([]);

  const fetchData = async (params) => {
    setLoading(true);
    try {
      const response = await httpClient({
        method: 'GET',
        url: '/api/admin/notif/list',
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
          id,
          label: name,
        })
      );
      setProductDigital(transformedData);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  const submitSettingDocument = async (data) => {
    try {
      await httpClient({
        method: 'POST',
        url: '/admin/document/setting_document/update',
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

  useEffect(() => {
    fetchData(filters);
  }, [filters]);

  useEffect(() => {
    fetchDataPD();
  }, []);

  return { form, data, dummy, loading, loadingSubmit, modalOpen, productDigital, filters, settingDocument, documentTypeValue, onChangeSelect, toggleModal, onSubmitSettingDocument, toggleModalOpen, onPressIcon, onPressDetails, productDigitalData, onChangeText };
};

export default useBlastNotification;
