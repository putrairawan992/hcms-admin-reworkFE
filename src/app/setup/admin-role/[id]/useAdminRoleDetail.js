import { useEffect, useState } from 'react';
import { httpClient } from '@/app/utils/network';
import { useToast } from '@chakra-ui/react';
import { useRouter, useParams } from 'next/navigation';
import { mapPlatformAccess } from '@/app/utils/helpers';

const useAdminRoleDetail = () => {
  const router = useRouter();
  const { id } = useParams();
  const toast = useToast();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalData, setTotalData] = useState(0);
  const [keyword, setKeyword] = useState('');
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    admin_id: '',
    username: '',
    email: '',
    divisi: '',
    jabatan: '',
    new_password: '',
    phone_number: '',
    address: '',
    platformAccess: []
  });

  const onChangeText = (slug, value) => {
    setForm((prevData) => ({ ...prevData, [slug]: value }));
  };

  const fetchData = async () => {
    try {
      const response = await httpClient({
        method: 'GET',
        url: '/admin/detail/account',
        params: { id },
      });

      const responseData = response?.data?.data || {};

      setForm({
        admin_id: responseData?.id || '',
        username: responseData?.username || '',
        email: responseData?.email || '',
        divisi: responseData?.divisi || '',
        jabatan: responseData?.jabatan || '',
        new_password: responseData?.password || '',
        phone_number: responseData?.phone_number || '',
        address: responseData?.address || '',
        platformAccess: mapPlatformAccess(responseData),
      });
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  const submitData = async () => {
    try {
      await httpClient({
        method: 'PATCH',
        url: '/admin/edit_account',
        data: form,
      });
      setLoading(false);

      toast({
        title: 'success',
        description: 'Admin has been updated',
        duration: 3000,
        status: 'success',
        position: 'top',
        isClosable: true,
      });
      router.push('/setup/admin-role');
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong!',
        duration: 3000,
        status: 'error',
        position: 'top',
        isClosable: true,
      });
      setLoading(false);
    }
  };

  const updateCheckbox = (item, slug, label, value, slugParent) => {
    console.log('slug', slug);
    console.log('label', label);
    console.log('value', value);
    console.log('slugParent', slugParent);

    if (item.slug === slugParent || item.slug === slug) {
      const updatedCheckbox = item.checkbox?.map((checkboxItem) =>
        checkboxItem.label.toLowerCase() === label.toLowerCase()
          ? { ...checkboxItem, value }
          : checkboxItem
      );

      const updatedChildren = item.children?.map((child) =>
        updateCheckbox(child, slug, label, value, slugParent)
      );

      return {
        ...item,
        checkbox: updatedCheckbox,
        children: updatedChildren || item.children,
      };
    }
    return item;
  };

  const onChangeCheckbox = (slug, label, value, slugParent) => {
    setForm((prevData) => ({
      ...prevData,
      platformAccess: prevData.platformAccess.map((item) =>
        updateCheckbox(item, slug, label, value, slugParent)
      ),
    }));
  };

  const onHandleSubmit = () => {
    setLoading(true);
    submitData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    form,
    data,
    loading,
    page,
    totalData,
    keyword,
    onChangeText,
    onHandleSubmit,
    onChangeCheckbox,
  };
};

export default useAdminRoleDetail;
