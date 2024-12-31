import { useEffect, useState } from "react";
import { httpClient } from "@/app/utils/network";
import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

const useAdminRoleDetail = () => {
  const router = useRouter();
  const toast = useToast();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalData, setTotalData] = useState(0);
  const [keyword, setKeyword] = useState('');
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    admin_id: '',
    nama: '',
    email: '',
    divisi: '',
    jabatan: '',
    password: '',
    dashboard: {
      view: false,
      create: false,
    },
    help_center: {
      view: false,
      edit: false,
      delete: false,
      upload: false,
      download: false,
    },
    setup: {
      admin: {
        view: false,
        create: false,
      },
      account: {
        view: false,
        create: false,
      },
      job_post: {
        view: false,
        create: false,
      },
    },
    blash_notif: {
      view: false,
      create: false,
    },
    master_data: {
      bpjskes: {
        view: false,
        create: false,
      },
      bpjstk: {
        view: false,
        create: false,
      },
      saltab: {
        view: false,
        create: false,
      },
      pajak: {
        view: false,
        create: false,
      },
      merge: {
        view: false,
        create: false,
      },
    },
    high_level: {
      view: false,
      create: false,
    },
    middle_level: {
      company: {
        view: false,
        upload: false,
        download: false,
      },
      talent: {
        view: false,
        upload: false,
        download: false,
      },
      renewal: {
        view: false,
      },
    },
    approval_job_post: {
      view: false,
      share: false,
      approve: false,
      reject: false,
    },
    approval_remun: {
      view: false,
      save: false,
      comment: false,
    },
    send_document: {
      view: false,
      create: false,
      edit: false,
      delete: false,
      send: false,
      download: false,
      message: false,
    },
    talent: {
      view: false,
      download: false,
    },
    payslip: {
      view: false,
    },
  });

  const onChangeText = (slug, value) => {
    setForm(prevData => ({ ...prevData, [slug]: value }));
  };

  const fetchData = async () => {
    try {
      const response = await httpClient({
        method: 'GET',
        url: '/list/sheet1',
        params: { page: 1, size: 10 }
      });

      const responseData = response?.data?.data?.data || [];
      setData(responseData);
      setTotalData(response?.data?.total_items);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  const submitData = async () => {
    try {
      await httpClient({
        method: 'POST',
        url: '/admin/account',
        data: form
      });
      setLoading(false);

      toast({
        title: "success",
        description: 'Admin has been created',
        duration: 3000,
        status: "success",
        position: "top",
        isClosable: true,
      });
      router.push('/setup/admin-role');
    } catch (error) {
      toast({
        title: "Error",
        description: 'Something went wrong!',
        duration: 3000,
        status: "error",
        position: "top",
        isClosable: true,
      });
      setLoading(false);
    }
  };

  const onChangeCheckbox = (slug, label, value, slugParent) => {
    if (slugParent === '') {
      setForm((prevData) => ({ ...prevData, [slug]: { ...prevData[slug], [label]: value } }));
    } else {
      setForm((prevData) => ({ ...prevData, [slugParent]: { ...prevData[slugParent], [slug]: { ...prevData[slugParent][slug], [label]: value, }, }, }));
    }
  };

  const onHandleSubmit = () => {
    setLoading(true);
    submitData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { form, data, loading, page, totalData, keyword, onChangeText, onHandleSubmit, onChangeCheckbox }
};

export default useAdminRoleDetail;

