import { useEffect, useState } from "react";
import { httpClient } from "@/app/utils/network";
import { useDisclosure } from "@chakra-ui/react";
import { useRouter, useParams } from "next/navigation";

const useRemunerationDetail = () => {
  const router = useRouter();
  const params = useParams();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenNote,
    onOpen: onOpenNote,
    onClose: onCloseNote,
  } = useDisclosure();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [productDigitalData, setProductDigitalData] = useState([]);
  const [filters, setFilters] = useState({
    years: '',
    month: '',
    product_digital_name: '',
    status: ''
  });

  const fetchData = async () => {
    try {
      const response = await httpClient({
        method: 'GET',
        url: `/admin/remuneration/detail/${params?.id}`,
      });

      const responseData = response?.data?.data || [];
      console.log(responseData?.list_remuneration);
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
        id,
        label: product_digital_name
      }));
      setProductDigitalData(transformedData);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  const onChangeSelect = (slug, value) => {
    setFilters(prevFilters => ({ ...prevFilters, [slug]: value }));
  };

  const onPressDetail = (id) => {
    router.push(`/approval/remuneration/${id}`);
  };

  const onPressIcon = () => {
    onOpenNote();
  };

  useEffect(() => {
    fetchData();
    fetchDataPD();
  }, []);

  return { data, loading, filters, productDigitalData, onChangeSelect, onPressDetail, onPressIcon, isOpen, onClose, onCloseNote, isOpenNote }

};

export default useRemunerationDetail;

