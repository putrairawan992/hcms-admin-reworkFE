import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const useLogin = () => {
  return useMutation({
    mutationFn: async ({ username, password }) => {
      const res = await axios({
        method: 'POST',
        url: baseURL + '/api/admin/login',
        data: {
          username,
          password,
        },
      });

      return res.data;
    },
  });
};
