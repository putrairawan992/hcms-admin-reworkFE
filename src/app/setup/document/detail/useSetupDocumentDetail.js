import { useEffect, useState } from 'react';
import { httpClient } from '@/app/utils/network';
import { useToast } from '@chakra-ui/react';
import { documentTypeOptions } from './Shared/General';
import { useRouter } from 'next/navigation';

const useSetupDocumentDetail = () => {
  const toast = useToast();
  const router = useRouter();

  const searchParams = new URLSearchParams(window.location.search);
  const documentType = searchParams.get('documentType');

  const [data, setData] = useState([]);
  const [typeOptions, setTypeOptions] = useState([]);
  const [productDigital, setProductDigitalData] = useState([]);

  // Separate loading states for different operations
  const [initialLoading, setInitialLoading] = useState(true);
  const [documentLoading, setDocumentLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);

  const [form, setForm] = useState({
    job_provider_id: '',
    type_document: '',
  });

  useEffect(() => {
    const documentTypeValue = documentTypeOptions.find(
      (item) => item.label === documentType
    );
    setForm((prev) => ({
      ...prev,
      type_document:
        documentTypeValue?.name || 'Amandemen PKWT Khusus & Normal',
    }));
  }, [documentType]);

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
        value: id,
      }));
      setProductDigitalData(transformedData);
    } catch (error) {
      console.error('Failed to fetch product digital data:', error);
      toast({
        title: 'Error',
        description: 'Failed to load product digital options',
        duration: 3000,
        status: 'error',
        position: 'top',
        isClosable: true,
      });
    }
  };

  const fetchDataType = async () => {
    try {
      const response = await httpClient({
        method: 'GET',
        url: '/admin/document/setup_document/type',
      });

      const responseData = response?.data?.data || [];
      const transformedData = responseData?.map((item, index) => ({
        id: index,
        label: item,
      }));
      setTypeOptions(transformedData);
    } catch (error) {
      console.error('Failed to fetch document types:', error);
      toast({
        title: 'Error',
        description: 'Failed to load document type options',
        duration: 3000,
        status: 'error',
        position: 'top',
        isClosable: true,
      });
    }
  };

  const onHandlePress = async (screenData) => {
    setSubmitLoading(true);
    const formData = { ...screenData, ...form };

    try {
      await httpClient({
        method: 'POST',
        url: '/admin/document/setup_document',
        data: formData,
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
        description: 'Something went wrong',
        duration: 3000,
        status: 'error',
        position: 'top',
        isClosable: true,
      });
      console.error('Failed to save data:', error);
    } finally {
      setSubmitLoading(false);
    }
  };

  const fetchDocumentDetail = async (filters) => {
    // Don't fetch if we don't have required filter values
    if (!filters?.job_provider_id || !filters?.type_document) {
      setData([]);
      return;
    }

    // Set document loading state to true and clear previous data
    setDocumentLoading(true);
    setData([]);

    try {
      const response = await httpClient({
        method: 'GET',
        url: '/admin/document/setup_document',
        params: {
          job_provider_id: filters?.job_provider_id,
          type_document: filters?.type_document,
        },
      });

      const responseData = response?.data?.data || [];
      if (responseData?.data?.length > 0) {
        setData(responseData?.data[0]);
      } else {
        // Explicitly set data to empty if no results returned
        setData([]);
      }
    } catch (error) {
      console.error('Failed to fetch document detail:', error);
      // Clear data on error
      setData([]);

      // Show error toast for document fetch failures
      toast({
        title: 'Error',
        description: `Failed to fetch document details for type: ${filters?.type_document}`,
        duration: 3000,
        status: 'error',
        position: 'top',
        isClosable: true,
      });
    } finally {
      setDocumentLoading(false);
    }
  };

  const onChangeSelect = (slug, value) => {
    // Update form state with new selection
    setForm((prevFilters) => ({ ...prevFilters, [slug]: value }));

    // Navigate with updated params
    if (slug === 'job_provider_id') {
      router.push(`/setup/document/detail?productDigital=${value}`);
    }
  };

  useEffect(() => {
    // Initialize by fetching dropdown data
    const initializeData = async () => {
      setInitialLoading(true);
      await Promise.all([fetchDataType(), fetchDataPD()]);
      setInitialLoading(false);
    };

    initializeData();
  }, []);

  useEffect(() => {
    // Only fetch when both required fields have values
    if (form.job_provider_id && form.type_document) {
      fetchDocumentDetail(form);
    } else {
      // Clear data if either field is empty
      setData([]);
    }
  }, [form]);

  // Create a derived loading state for consumer components
  const isLoading = initialLoading || documentLoading;

  return {
    data,
    form,
    typeOptions,
    productDigital,
    loading: isLoading,
    submitLoading,
    onHandlePress,
    onChangeSelect,
  };
};

export default useSetupDocumentDetail;
