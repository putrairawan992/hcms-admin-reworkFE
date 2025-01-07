import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Cookies from 'js-cookie';

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const useGetInbox = ({ role, product_digital_name, month, years }) => {
  return useQuery({
    queryKey: ['role', 'product_digital_name', 'month', 'years'],
    queryFn: async () => {
      const res = await axios({
        method: 'GET',
        url: baseURL + '/api/admin/inbox/room_message',
        headers: {
          Authorization: `Bearer ${Cookies.get('userToken')}`,
        },
        params: {
          role,
          //   product_digital_name,
          month,
          years,
        },
      });

      return res.data.data;
    },
    staleTime: 0,
    gcTime: 0,
  });
};

export const useGetDetailInbox = ({ id }) => {
  return useQuery({
    queryKey: ['id'],
    queryFn: async () => {
      const res = await axios({
        method: 'GET',
        url: baseURL + `/api/admin/inbox/room_message/detail_room/${id}`,
        headers: {
          Authorization: `Bearer ${Cookies.get('userToken')}`,
        },
      });

      return res.data.data;
    },
    staleTime: 0,
    gcTime: 0,
    enabled: !!id,
  });
};

export const useReplyInbox = () => {
  return useMutation({
    mutationFn: async ({ data, id }) => {
      const res = await axios({
        method: 'PATCH',
        url: baseURL + `api/admin/inbox/room_message/create/${id}`,
        headers: {
          Authorization: `Bearer ${Cookies.get('userToken')}`,
        },
        data,
      });

      return res.data;
    },
  });
};
