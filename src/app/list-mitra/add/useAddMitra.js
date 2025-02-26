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
