import { useEffect, useState } from "react";
import { httpClient } from "@/app/utils/network";
import { useToast } from "@chakra-ui/react";

const useBpjskes = () => {
  const toast = useToast();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalData, setTotalData] = useState(0);
  const [keyword, setKeyword] = useState('');
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  const onChangeText = (e) => {
    setKeyword(e.target.value);
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  }

  const fetchData = async (page) => {
    setLoading(true);
    try {
      const response = await httpClient({
        method: 'GET',
        url: '/sheet/bpjskes',
        params: { page, size: 10 }
      });

      const responseData = response?.data?.data?.data || [];
      setData(responseData);
      setTotalData(response?.data?.data?.total_items);
      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  const onHandleSync = async () => {
    const controller = new AbortController();
    const signal = controller.signal;
    setModalOpen(true);

    try {
      const response = await httpClient({
        method: 'GET',
        url: '/sheet/bpjskes/sync',
        signal: signal,
      });

      if (response.status >= 500) {
        controller.abort();
        setModalOpen(false);
        throw new Error('Server error 500');
      }

      if (response?.status !== 200) {
        toast({
          title: "Error",
          description: `Something went wrong!`,
          duration: 3000,
          status: "error",
          position: "top",
          isClosable: true,
        });
      } else {
        toast({
          title: "Success",
          description: `Data synced successfully!`,
          duration: 3000,
          status: "success",
          position: "top",
          isClosable: true,
        });
      }
    } catch (error) {
      console.error('Failed to sync data:', error);
      setModalOpen(false);
      toast({
        title: "Error",
        description: `Failed to sync: ${error.message}`,
        duration: 3000,
        status: "error",
        position: "top",
        isClosable: true,
      });
    }
  };


  const onChangePagination = (page) => {
    setPage(page);
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);

  return { data, page, loading, totalData, keyword, modalOpen, onChangeText, onHandleSync, onChangePagination, toggleModal }

};

export default useBpjskes;

