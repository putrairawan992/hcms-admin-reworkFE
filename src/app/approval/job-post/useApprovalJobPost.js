import { useEffect, useState } from 'react';
import { useDisclosure, useToast } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { httpClient } from '@/app/utils/network';

const useApprovalJobPost = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [productDigitalData, setProductDigitalData] = useState([]);
  const [text, setText] = useState('');
  const [selectedId, setSelectedId] = useState();
  const [isApprove, setIsApprove] = useState();
  const [filters, setFilters] = useState({
    years: '',
    month: '',
    product_digital_name: '',
    status: ''
  });

  const { isOpen, onOpen, onClose } = useDisclosure();

  const toggleModal = (decision, id) => {
    const str = `Anda akan ${decision ? 'menyetujui' : 'menolak'} pengajuan. Anda yakin ingin ${decision ? 'menyetujui' : 'menolak'}?`;
    setSelectedId(id);
    setIsApprove(decision);
    setText(str);
    onOpen();
  };

  const fetchData = async (params) => {
    setLoading(true);
    try {
      const response = await httpClient({
        method: 'GET',
        url: '/admin/job_post',
        params
      });

      const responseData = response?.data?.data || [];
      setData(responseData);
      setLoading(false);

    } catch (error) {
      setLoading(false);
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
      const transformedData = responseData?.map(
        ({ id, name }) => ({
          id,
          label: name,
        })
      );
      setProductDigitalData(transformedData);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  const onPressDetails = (id) => {
    router.push(`/approval/job-post/${id}`);
  };

  const onChangeSelect = (slug, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [slug]: value }));
  };

  useEffect(() => {
    fetchData(filters)
  }, [filters]);

  useEffect(() => {
    fetchDataPD();
  }, []);

  return { data, filters, loading, productDigitalData, text, isOpen, isApprove, selectedId, onClose, toggleModal, onChangeSelect, onPressDetails };
};

export default useApprovalJobPost;
