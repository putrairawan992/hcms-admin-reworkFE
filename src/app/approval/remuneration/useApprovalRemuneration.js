import { useEffect, useState } from "react";
import { httpClient } from "@/app/utils/network";
import { useDisclosure } from "@chakra-ui/react";

const useApprovalRemuneration = () => {
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

  const fetchData = async (params) => {
    const isFiltersEmpty = Object.values(filters).every(value => value === '');

    try {
      const response = await httpClient({
        method: 'GET',
        url: '/admin/remuneration/list',
        ...(isFiltersEmpty ? {} : { params })
      });

      const responseData = response?.data?.data || [];
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

  const onPressDetail = () => {

  };

  const onPressIcon = () => {
    onOpenNote();
  };

  useEffect(() => {
    fetchDataPD();
  }, []);

  useEffect(() => {
    fetchData(filters);
  }, [filters]);

  return { data, loading, filters, productDigitalData, onChangeSelect, onPressDetail, onPressIcon, isOpen, onClose, onCloseNote, isOpenNote }

};

export default useApprovalRemuneration;

