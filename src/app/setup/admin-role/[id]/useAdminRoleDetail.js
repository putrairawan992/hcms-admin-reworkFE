import { useEffect, useState } from 'react';
import { httpClient } from '@/app/utils/network';
import { useToast } from '@chakra-ui/react';
import { useRouter, useParams } from 'next/navigation';
import { formFieldsAdminOptions } from '@/shared/general';

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
    id: '',
    name: '',
    email: '',
    divisi: '',
    jabatan: '',
    new_password: '',
    phone_number: '',
    address: '',
    permissions: [],
  });

  const onChangeText = (slug, value) => {
    setForm((prevData) => ({ ...prevData, [slug]: value }));
  };

  // Maps the API response data to our form structure
  const mapPermissionsAccess = (formFieldsAdminOptions, userData) => {
    return formFieldsAdminOptions.map((option) => {
      // Create a copy of the option
      const newOption = { ...option };

      // Handle options with checkboxes (flat structure)
      if (newOption.checkbox) {
        newOption.checkbox = newOption.checkbox.map((checkboxItem) => {
          // Get the permission value from userData
          let value = false;

          if (
            userData[newOption.slug] &&
            userData[newOption.slug][checkboxItem.value_key] !== undefined
          ) {
            value = userData[newOption.slug][checkboxItem.value_key];
          }

          return {
            ...checkboxItem,
            value,
          };
        });
      }

      // Handle options with sections (nested structure)
      if (newOption.sections) {
        newOption.sections = newOption.sections.map((section) => {
          const newSection = { ...section };

          if (newSection.checkbox) {
            newSection.checkbox = newSection.checkbox.map((checkboxItem) => {
              // Get the permission value from userData
              let value = false;

              if (
                userData[newOption.slug] &&
                userData[newOption.slug][checkboxItem.value_key] !== undefined
              ) {
                value = userData[newOption.slug][checkboxItem.value_key];
              }

              return {
                ...checkboxItem,
                value,
              };
            });
          }

          return newSection;
        });
      }

      return newOption;
    });
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
        id: responseData?.id || '',
        name: responseData?.name || '',
        email: responseData?.email || '',
        divisi: responseData?.divisi || '',
        jabatan: responseData?.jabatan || '',
        new_password: responseData?.password || '',
        phone_number: responseData?.phone_number || '',
        address: responseData?.address || '',
        permissions: mapPermissionsAccess(formFieldsAdminOptions, responseData),
      });
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  // Prepare permissions data for submission to match API format
  const preparePermissionsForSubmit = (permissions) => {
    // Create an object to store flattened permissions
    const permissionsData = {};

    // Process each section of permissions
    permissions.forEach((section) => {
      // Initialize an empty object for this section
      const sectionData = {};

      // Process checkboxes for this section (flat structure)
      if (section.checkbox) {
        section.checkbox.forEach((item) => {
          sectionData[item.value_key] = item.value;
        });
      }

      // Process nested sections if they exist
      if (section.sections) {
        section.sections.forEach((subsection) => {
          if (subsection.checkbox) {
            subsection.checkbox.forEach((item) => {
              sectionData[item.value_key] = item.value;
            });
          }
        });
      }

      // Add this section's data to the overall permissions
      permissionsData[section.slug] = sectionData;
    });

    return permissionsData;
  };

  const submitData = async () => {
    try {
      // Prepare data for submission, converting permissions to API format
      const formattedPermissions = preparePermissionsForSubmit(
        form.permissions
      );

      const formDataToSubmit = {
        ...form,
        // Remove permissions array since we're adding each permission section directly
        permissions: undefined,
        // Spread the formatted permissions at the top level
        ...formattedPermissions,
      };

      await httpClient({
        method: 'PATCH',
        url: '/admin/edit_account',
        data: formDataToSubmit,
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
        description: error?.response?.data?.errors || 'Something went wrong!',
        duration: 3000,
        status: 'error',
        position: 'top',
        isClosable: true,
      });

      setLoading(false);
    }
  };

  // Update checkbox values in the state
  const onChangeCheckbox = (slug, valueKey, value, sectionLabel = null) => {
    setForm((prevData) => ({
      ...prevData,
      permissions: prevData.permissions.map((item) => {
        if (item.slug === slug) {
          // If this is a flat structure (no sections)
          if (!sectionLabel && item.checkbox) {
            return {
              ...item,
              checkbox: item.checkbox.map((checkboxItem) =>
                checkboxItem.value_key === valueKey
                  ? { ...checkboxItem, value }
                  : checkboxItem
              ),
            };
          }

          // If this is a nested structure (with sections)
          if (sectionLabel && item.sections) {
            return {
              ...item,
              sections: item.sections.map((section) =>
                section.label === sectionLabel
                  ? {
                      ...section,
                      checkbox: section.checkbox.map((checkboxItem) =>
                        checkboxItem.value_key === valueKey
                          ? { ...checkboxItem, value }
                          : checkboxItem
                      ),
                    }
                  : section
              ),
            };
          }
        }
        return item;
      }),
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
