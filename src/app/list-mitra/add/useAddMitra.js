import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useToast } from '@chakra-ui/react';

const useAddMitra = () => {
  const router = useRouter();
  const toast = useToast();

  const [imageProfile, setImageProfile] = useState('');
  const [loading, setLoading] = useState(false);
  const [profileImagePreview, setProfileImagePreview] = useState(
    '/images/company-dummy.jpeg'
  );
  const profileFileInputRef = useRef(null);
  const [form, setForm] = useState({
    name: '',
    username: '',
    email: '',
  });

  const onChangeText = (slug, value) => {
    setForm((prevData) => ({ ...prevData, [slug]: value }));
  };

  const onClickProfile = () => {
    profileFileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImageProfile('photo', file);
      setProfileImagePreview(URL.createObjectURL(file));
    }
  };
  const dataMitra = localStorage.getItem('mitra');
  const existingData = dataMitra ? JSON.parse(dataMitra) : [];
  const submitData = async () => {
    existingData.push(form);
    localStorage.setItem('mitra', JSON.stringify(existingData));
    toast({
      title: 'success',
      description: 'Admin has been updated',
      duration: 3000,
      status: 'success',
      position: 'top',
      isClosable: true,
    });
    router.push('/list-mitra');
    try {
      // const result = await httpClient({
      //   method: 'POST',
      //   url: 'registermitra',
      //   data: form,
      // });
      setLoading(false);
      console.log(result);
    } catch (error) {
      console.log(error);

      // toast({
      //   title: 'Error',
      //   description: error?.response?.data?.errors || 'Something went wrong!',
      //   duration: 3000,
      //   status: 'error',
      //   position: 'top',
      //   isClosable: true,
      // });

      setLoading(false);
    }
  };

  const onHandleSubmit = () => {
    setLoading(true);
    submitData();
  };

  return {
    profileImagePreview,
    profileFileInputRef,
    loading,
    form,
    onChangeText,
    onClickProfile,
    handleFileChange,
    onHandleSubmit,
  };
};

export default useAddMitra;
