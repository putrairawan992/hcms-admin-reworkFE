import { useState, useRef } from 'react';
import { addMitra } from '@/app/api/mitra';

const useAddMitra = () => {
  const [imageProfile, setImageProfile] = useState('');
  const [profileImagePreview, setProfileImagePreview] = useState(
    '/images/company-dummy.jpeg'
  );
  const profileFileInputRef = useRef(null);
  const [form, setForm] = useState({
    name: '',
    username: '',
    email: '',
  });

  // Menggunakan addMitra secara dinamis
  const { mutate, isLoading } = addMitra();

  const onChangeText = (slug, value) => {
    setForm((prevData) => ({ ...prevData, [slug]: value }));
  };

  const onClickProfile = () => {
    profileFileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImageProfile(file);
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
    // Membuat payload sesuai struktur yang diinginkan
    const payload = {
      mitra_data: [
        {
          mitra_name: form.name, // Nama mitra diambil dari form
          member: [
            {
              name: form.username, // Username diambil dari form
              email: form.email, // Email diambil dari form
            },
          ],
        },
      ],
    };

    // Kirim payload ke API
    mutate(payload);
  };

  return {
    profileImagePreview,
    profileFileInputRef,
    loading: isLoading,
    form,
    onChangeText,
    onClickProfile,
    handleFileChange,
    onHandleSubmit,
  };
};

export default useAddMitra;
