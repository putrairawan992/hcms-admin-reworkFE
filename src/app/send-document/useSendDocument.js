import { useEffect, useState } from 'react';
import { httpClient } from '../utils/network';
import { useToast } from '@chakra-ui/react';

const useSendDocument = () => {
  const toast = useToast();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [documentDetails, setDocumentDetails] = useState({});
  const [productDigital, setProductDigitalData] = useState([]);
  const [settingDocument, setSettingDocument] = useState([]);
  const [documentTypeValue, setDocumentTypeValue] = useState('');
  const [modalOpenDoc, setModalOpenDoc] = useState(false);
  const [modalDocType, setModalDocType] = useState('');
  const [modalType, setModalType] = useState('');
  const [selectedDocumentTalent, setSelectedDocumentTalent] = useState('');
  const [employeeDetail, setEmployeeDetail] = useState({});
  const [previewData, setPreviewData] = useState({});
  const [filters, setFilters] = useState({
    years: '',
    month: '',
    product_digital_name: '',
  });
  const [dataSetup, setDataSetup] = useState({});

  const fetchData = async (filters) => {
    setLoading(true);
    try {
      const response = await httpClient({
        method: 'GET',
        url: '/admin/document/send_document/list',
        params: filters,
      });

      const responseData = response?.data?.data || [];
      setData(responseData);
      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch data:', error);
      setLoading(false);
    }
  };

  const fetchSetupDocumentDetail = async (
    jobProviderId,
    documentType,
    employee_id
  ) => {
    try {
      const response = await httpClient({
        method: 'GET',
        url: '/admin/document/setting_document/list_contract_templete',
        params: {
          job_provider_id: jobProviderId,
          type_document: documentType,
          employee_id: employee_id,
        },
      });

      setDataSetup(response.data.data[0]);
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
      const transformedData = responseData?.map(({ id, name }) => ({
        id,
        label: name,
      }));
      setProductDigitalData(transformedData);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  const fetchDataDocument = async () => {
    try {
      const response = await httpClient({
        method: 'GET',
        url: '/admin/document/setting_document/list',
      });

      const responseData = response?.data?.data || [];
      const transformedData = responseData?.map(({ id, type }) => ({
        value: id,
        label: type,
      }));
      setSettingDocument(transformedData);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  const fetchDocumentPreview = async (document_id, type, docTalent, data) => {
    try {
      const response = await httpClient({
        method: 'GET',
        url: `/admin/document/preview/send_document/detail`,
        params: { document_id },
      });

      const responseData = response?.data?.data || [];
      setPreviewData(responseData);
      setModalType(type);
      setSelectedDocumentTalent(docTalent);
      setEmployeeDetail(data);
      setModalDocType(data?.type_setting_document);
      toggleModalOpenDoc();
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  const submitSettingDocument = async (data) => {
    try {
      await httpClient({
        method: 'POST',
        url: '/admin/document/setting_document/update',
        data,
      });

      toast({
        title: 'Success',
        description: 'Data Berhasil Disimpan',
        duration: 3000,
        status: 'success',
        position: 'top',
        isClosable: true,
      });
      setLoadingSubmit((prevData) => !prevData);
      toggleModal();
      fetchData(filters);
    } catch (error) {
      setLoadingSubmit((prevData) => !prevData);
      toggleModal();
      toast({
        title: 'Error',
        description: error?.response?.data?.errors || `Something went wrong!`,
        duration: 3000,
        status: 'error',
        position: 'top',
        isClosable: true,
      });
    }
  };

  const submitDeleteEmployee = async (remuneration_id) => {
    try {
      await httpClient({
        method: 'DELETE',
        url: '/admin/remuneration/detail',
        data: { remuneration_id },
      });

      toast({
        title: 'Success',
        description: 'Data Berhasil Dihapus',
        duration: 3000,
        status: 'success',
        position: 'top',
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: error?.response?.data?.errors || `Something went wrong!`,
        duration: 3000,
        status: 'error',
        position: 'top',
        isClosable: true,
      });
    }
  };

  const onChangeSelect = (slug, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [slug]: value }));
  };

  const onChangeSelectDocumentType = (slug, value) => {
    const docTypes = settingDocument.find((item) => item.value === value);
    setDocumentTypeValue(docTypes);
  };

  const toggleModal = () => {
    setModalOpen((prevData) => !prevData);
  };

  const toggleModalOpen = (data) => {
    setModalOpen((prevData) => !prevData);
    const docTypes = settingDocument.find(
      (item) => item.label === data?.type_setting_document
    );
    setDocumentDetails(data);
    setDocumentTypeValue(docTypes);
  };

  const onSubmitSettingDocument = () => {
    setLoadingSubmit((prevData) => !prevData);
    const payload = {
      setting_document_id: documentTypeValue?.value || '',
      remuneration_id: documentDetails?.remuneration_id,
      employee_list: documentDetails?.employee_list?.map(
        (item) => item.user_id
      ),
    };
    submitSettingDocument(payload);
  };

  const onPressIcon = (data, type, docTalent) => {
    if (data?.type_setting_document === 'contract_template') {
      const docTypes = data?.document_type?.find(
        (item) => item.type_document === docTalent
      );
      fetchDocumentPreview(docTypes?.id, type, docTalent, data);
    } else {
      setModalType(type);
      setSelectedDocumentTalent(docTalent);
      setEmployeeDetail(data);
      setModalDocType(data?.type_setting_document);
      toggleModalOpenDoc();
    }
  };

  const toggleModalOpenDoc = () => {
    setModalOpenDoc((prevData) => !prevData);
  };

  const onChangeSelectType = (data) => {
    setSelectedDocumentTalent(data);
  };

  const onClickSendAll = async (batch_remuneration_id) => {
    try {
      await httpClient({
        method: 'POST',
        url: '/admin/document/send_document/sendall',
        data: { batch_remuneration_id },
      });

      toast({
        title: 'Success',
        description: 'Data Berhasil Disimpan',
        duration: 3000,
        status: 'success',
        position: 'top',
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: error?.response?.data?.errors || `Something went wrong!`,
        duration: 3000,
        status: 'error',
        position: 'top',
        isClosable: true,
      });
    }
  };

  const onSubmit = (type, data) => {
    if (type === 'all') {
      setModalDocType(data);
    } else {
      toggleModalOpenDoc();
      fetchData(filters);
    }
  };

  const onDelete = () => {
    submitDeleteEmployee(employeeDetail?.remuneration_id);
    toggleModalOpenDoc();
    fetchData(filters);
  };

  useEffect(() => {
    fetchData(filters);
  }, [filters]);

  useEffect(() => {
    fetchDataPD();
    fetchDataDocument();
  }, []);

  useEffect(() => {
    if (employeeDetail && selectedDocumentTalent) {
      fetchSetupDocumentDetail(
        employeeDetail?.product_digital_id,
        selectedDocumentTalent,
        employeeDetail?.employee.user_id
      );
    }
  }, [employeeDetail, documentTypeValue]);

  return {
    data,
    dataSetup,
    documentDetails,
    documentTypeValue,

    employeeDetail,
    filters,
    loading,
    loadingSubmit,
    modalDocType,
    modalOpen,
    modalOpenDoc,
    modalType,
    fetchSetupDocumentDetail,
    onChangeSelect,
    onChangeSelectDocumentType,
    onChangeSelectType,
    onClickSendAll,
    onDelete,
    onPressIcon,
    onSubmit,
    onSubmitSettingDocument,
    previewData,
    productDigital,
    selectedDocumentTalent,
    settingDocument,
    toggleModal,
    toggleModalOpen,
    toggleModalOpenDoc,
  };
};

export default useSendDocument;
