import { useEffect, useState } from 'react';
import { httpClient } from '@/app/utils/network';
import { useToast } from '@chakra-ui/react';

const useSetupAccount = () => {
  const toast = useToast();
  const [data, setData] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [loading, setLoading] = useState(true);
  const [screenData, setScreenData] = useState({});

  const [modalOpen, setModalOpen] = useState(false);
  const [loadingModal, setLoadingModal] = useState(false);

  const [modalOpenDelete, setModalOpenDelete] = useState(false);
  const [loadingModalDelete, setLoadingModalDelete] = useState(false);

  const toggleModal = () => {
    setModalOpen(prevData => (!prevData));
  };

  const toggleModalDelete = () => {
    setModalOpenDelete(prevData => (!prevData));
  };

  const onChangeText = (e) => {
    setKeyword(e.target.value);
  };

  const onHandlePress = (type, data) => {
    setScreenData(data);

    if (type === 'EDIT') {
      toggleModal();
    } else {
      toggleModalDelete();
    }
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await httpClient({
        method: 'GET',
        url: '/admin/account_setup',
        params: { sort: 'A-Z' }
      });

      const responseData = response?.data?.data || [];
      setData(responseData);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const onSubmitEdit = async (paramsData) => {
    setLoadingModal(true);
    const payload = { ...paramsData, username: screenData?.username || '', email: screenData?.email || '' };

    try {
      await httpClient({
        method: 'PATCH',
        url: `/admin/account_setup/${screenData?.id}`,
        data: payload
      });

      setLoadingModal(false);
      toggleModal();
      fetchData();
      toast({
        title: 'success',
        description: 'Account has been updated.',
        duration: 3000,
        status: 'success',
        position: 'top',
        isClosable: true,
      });
    } catch (error) {
      setLoadingModal(false);
      toast({
        title: 'Error',
        description: error?.response?.message || 'Something went wrong',
        duration: 3000,
        status: 'error',
        position: 'top',
        isClosable: true,
      });
    }
  };


  const onSubmitDelete = async () => {
    setLoadingModalDelete(true);
    try {
      await httpClient({
        method: 'DELETE',
        url: `/admin/account_setup/${screenData?.id}`
      });

      setLoadingModalDelete(false);
      toggleModalDelete();
      fetchData();
      toast({
        title: 'success',
        description: 'Account has been updated.',
        duration: 3000,
        status: 'success',
        position: 'top',
        isClosable: true,
      });
    } catch (error) {
      setLoadingModalDelete(false);
      toast({
        title: 'Error',
        description: error?.response?.message || 'Something went wrong',
        duration: 3000,
        status: 'error',
        position: 'top',
        isClosable: true,
      });
    }
  };


  useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
    loading,
    loadingModal,
    loadingModalDelete,
    keyword,
    modalOpen,
    modalOpenDelete,
    screenData,
    onChangeText,
    toggleModal,
    toggleModalDelete,
    onChangeText,
    onHandlePress,
    onSubmitDelete,
    onSubmitEdit
  };
};

export default useSetupAccount;
