import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Cookies from 'js-cookie';

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const useGetHelpCenter = () => {
  return useQuery({
    queryKey: ['help-center'],
    queryFn: async () => {
      const res = await axios({
        method: 'GET',
        url: baseURL + '/api/admin/help_center/',
        headers: {
          Authorization: `Bearer ${Cookies.get('userToken')}`,
        },
      });

      return res.data.data;
    },
    staleTime: 0,
    gcTime: 0,
  });
};

export const useEditHelpCenter = () => {
  return useMutation({
    mutationFn: async ({ dataContent, id }) => {
      const res = await axios({
        method: 'PATCH',
        url: baseURL + `/api/admin/help_center/${id}`,
        headers: {
          Authorization: `Bearer ${Cookies.get('userToken')}`,
        },
        data: dataContent,
      });

      return res.data;
    },
  });
};
