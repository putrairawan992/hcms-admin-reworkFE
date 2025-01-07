import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Cookies from 'js-cookie';

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const useGetProductDigital = () => {
  return useQuery({
    queryKey: ['product-digital'],
    queryFn: async () => {
      const res = await axios({
        method: 'GET',
        url: baseURL + '/api/common/list/product_digital',
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

export const useGetListRoles = () => {
  return useQuery({
    queryKey: ['list-roles'],
    queryFn: async () => {
      const res = await axios({
        method: 'GET',
        url:
          baseURL + '/api/admin/inbox/room_message/list_roles/product_digital',
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

export const useGetListUsers = () => {
  return useQuery({
    queryKey: ['list-users'],
    queryFn: async () => {
      const res = await axios({
        method: 'GET',
        url: baseURL + '/api/admin/inbox/room_message/list_users',
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
