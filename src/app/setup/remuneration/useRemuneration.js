import { useEffect, useState, useRef } from 'react';
import { httpClient } from '@/app/utils/network';

import { useDisclosure, useToast } from '@chakra-ui/react';

const useRemuneration = () => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalData, setTotalData] = useState(0);
  const [keyword, setKeyword] = useState('');

  const onChangeText = (e) => {
    setKeyword(e.target.value);
  };

  const fetchData = async () => {
    try {
      const response = await httpClient({
        method: 'GET',
        url: '/admin/remuneration/calculates',
      });

      const responseData = response?.data?.data || [];
      setData(responseData);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  const handleInputChange = (e) => {
    const value = Number(e.target.value);
    if (
      isNaN(value) ||
      value < 0 ||
      value > 100 ||
      /^0{2,}/.test(e.target.value)
    ) {
      e.target.value = e.target.value.slice(0, -1);
    } else {
      const slug = e.target.name;
      const keys = slug.split('.');
      setData({ ...data, [keys[0]]: { ...data[keys[0]], [keys[1]]: value } });
    }
  };

  const onSubmit = async () => {
    try {
      await httpClient({
        method: 'POST',
        url: '/admin/remuneration/calculates',
        data: data,
      });
      onOpen();
    } catch (error) {
      console.log(error?.response?.data);
      toast({
        title: 'Error',
        description: `Something went wrong!`,
        duration: 3000,
        status: 'error',
        position: 'top',
        isClosable: true,
      });
    }
    // mutate(
    //   { dataRemun: data },
    //   {
    //     onSuccess: async (res) => {
    //       onOpen();
    //     },
    //     onError: (err) => {
    //       console.error(err);
    //       toast({
    //         title: "Error",
    //         description: err?.response?.data?.errors || `Something went wrong!`,
    //         duration: 3000,
    //         status: "error",
    //         position: "top",
    //         isClosable: true,
    //       });
    //     },
    //   }
    // );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
    page,
    totalData,
    keyword,
    isOpen,
    onClose,
    cancelRef,
    onChangeText,
    handleInputChange,
    onSubmit,
  };
};

export default useRemuneration;
