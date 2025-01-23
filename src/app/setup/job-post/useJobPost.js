import { useEffect, useState } from 'react';
import { httpClient } from '@/app/utils/network';
import { useDisclosure, useToast } from '@chakra-ui/react';
import { jobPostOptions } from '@/shared/general';

const useJobPost = () => {
  const toast = useToast();

  const [keyword, setKeyword] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalOpen, setModalOpen] = useState(false);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalValue, setModalValue] = useState({
    id: '',
    name: ''
  });
  const [selectedOption, setSelectedOption] = useState('');

  const toggleModal = () => {
    setModalOpen(prevData => !prevData);
  };


  const fetchData = async (option) => {
    try {
      setLoading(true);
      const response = await httpClient({
        method: 'GET',
        url: `/admin/job_post/${option}`,
      });

      if (option !== '') {
        const responseData = response?.data?.data || [];
        setData(responseData);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error('Failed to fetch data:', error);
    }
  };

  const onChangeText = (value) => {
    setKeyword(value);
  };

  const submitData = async (option, id, data) => {
    try {
      await httpClient({
        method: 'PUT',
        url: `/admin/job_post/${option}/${id}`,
        data
      });

      toast({
        title: 'success',
        description: 'Job post has been updated.',
        duration: 3000,
        status: 'success',
        position: 'top',
        isClosable: true,
      });
    } catch (error) {
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

  const onChangeOptions = (value) => {
    setSelectedOption(value);
  };

  const onChangeStatus = async (id, status) => {
    const isActive = status ? 'Active' : 'Deactive';

    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, status: isActive } : item
      )
    );
    const statusData = { status: isActive };
    await submitData(selectedOption, id, statusData);
  };

  const onPressEdit = (id, name) => {
    setModalValue(prevData => ({ ...prevData, id, name }));
    toggleModal();
  };

  const onChangeTextModal = (value) => {
    setModalValue(prevData => ({ ...prevData, name: value }));
  };

  const onSubmitEdit = async () => {
    const prefixData = jobPostOptions.find((item) => item.value === selectedOption);
    const data = { [prefixData.prefix]: modalValue?.name };
    await submitData(selectedOption, modalValue?.id, data);
    toggleModal();
    fetchData(selectedOption);
  };

  useEffect(() => {
    fetchData(selectedOption);
  }, [selectedOption]);

  return {
    modalValue, modalOpen, loading, data, selectedOption, keyword, isOpen, onClose, onChangeOptions, onChangeStatus, onChangeText, onOpen, toggleModal, onChangeTextModal, onPressEdit, onSubmitEdit
  };
};

export default useJobPost;
