import { useState } from 'react';
import { httpClient } from '@/app/utils/network';
import { useToast } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { isEmpty } from 'lodash';
import { formFieldsAdminOptions } from '@/shared/general';

const useNewAdmin = () => {
  const router = useRouter();
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  // Initialize form with basic user information
  const [form, setForm] = useState({
    admin_id: '',
    nama: '',
    email: '',
    divisi: '',
    jabatan: '',
    password: '',
    phone_number: '',
    address: '',
    permissions: generateInitialPermissions(formFieldsAdminOptions),
  });

  // Generate initial permissions structure based on formFieldsAdminOptions
  function generateInitialPermissions(options) {
    return options.map((option) => {
      const newOption = { ...option };

      // Handle direct checkboxes
      if (newOption.checkbox) {
        newOption.checkbox = newOption.checkbox.map((item) => ({
          ...item,
          value: false,
        }));
      }

      // Handle sections with nested checkboxes
      if (newOption.sections) {
        newOption.sections = newOption.sections.map((section) => {
          const newSection = { ...section };

          if (newSection.checkbox) {
            newSection.checkbox = newSection.checkbox.map((item) => ({
              ...item,
              value: false,
            }));
          }

          return newSection;
        });
      }

      return newOption;
    });
  }

  const onChangeText = (slug, value) => {
    setForm((prevData) => ({ ...prevData, [slug]: value }));
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
      // Prepare data for submission
      const formattedPermissions = preparePermissionsForSubmit(
        form.permissions
      );

      // Create submission object
      const formDataToSubmit = {
        admin_id: form.admin_id,
        nama: form.nama,
        email: form.email,
        divisi: form.divisi,
        jabatan: form.jabatan,
        password: form.password,
        phone_number: form.phone_number,
        address: form.address,
        ...formattedPermissions, // Add all permissions at the top level
      };

      await httpClient({
        method: 'POST',
        url: '/admin/account',
        data: formDataToSubmit,
      });

      setLoading(false);

      toast({
        title: 'success',
        description: 'Admin has been created',
        duration: 3000,
        status: 'success',
        position: 'top',
        isClosable: true,
      });

      router.push('/setup/admin-role');
    } catch (error) {
      toast({
        title: 'Error',
        description: error?.response?.data?.errors || 'Something went wrong',
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
    // console.log('Checkbox changed:', slug, valueKey, value, sectionLabel);

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

  return {
    form,
    loading,
    onChangeText,
    onHandleSubmit,
    onChangeCheckbox,
  };
};

export default useNewAdmin;
