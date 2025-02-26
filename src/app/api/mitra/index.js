import { useMutation } from '@tanstack/react-query';
import axiosInstance from '../axiosConfig';
import { useToast } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const addMitra = () => {
  const router = useRouter();
  const toast = useToast();

  return useMutation({
    mutationFn: async (formData) => {
      const res = await axiosInstance.post(
        `${baseURL}/api/admin/mitra`,
        formData
      );
      return res.data;
    },
    onSuccess: () => {
      toast({
        title: 'Success',
        description: 'Mitra account has been created successfully',
        duration: 3000,
        status: 'success',
        position: 'top',
        isClosable: true,
      });
      router.push('/list-mitra');
    },
    onError: (error) => {
      toast({
        title: 'Error',
        description: error.response?.data?.errors || 'Something went wrong!',
        duration: 3000,
        status: 'error',
        position: 'top',
        isClosable: true,
      });
    },
  });
};
export const useGetListMitra = ({ page, limit, key_search }) => {
  return useQuery({
    queryKey: ['page', 'limit', 'key_search'],
    queryFn: async () => {
      const res = await axiosInstance.get(`${baseURL}/api/admin/mitra`, {
        params: {
          page,
          limit,
          key_search,
        },
      });

      return res.data.data;
    },
    staleTime: 0,
    gcTime: 0,
  });
};
