import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const useSetupRemuneration = () => {
  return useMutation({
    mutationFn: async ({ dataRemun }) => {
      const res = await axios({
        method: "POST",
        url: baseURL + "/api/admin/remuneration/calculates",
        data: dataRemun,
        headers: {
          Authorization: `Bearer ${Cookies.get("userToken")}`,
        },
      });

      return res.data;
    },
  });
};

export const useGetSetupJobPost = ({ option }) => {
  return useQuery({
    queryKey: ["option"],
    queryFn: async () => {
      if (!option) {
        return null;
      }

      const res = await axios({
        method: "GET",
        url: baseURL + `/api/admin/job_post/${option}`,
        headers: {
          Authorization: `Bearer ${Cookies.get("userToken")}`,
        },
      });

      return res.data.data;
    },
    staleTime: 0,
    gcTime: 0,
    enabled: !!option,
  });
};

export const useSubmitJobPostSetup = () => {
  return useMutation({
    mutationFn: async ({ data, option }) => {
      const res = await axios({
        method: "POST",
        url: baseURL + `/api/admin/job_post/${option}`,
        headers: {
          Authorization: `Bearer ${Cookies.get("userToken")}`,
        },
        data,
      });

      return res.data;
    },
  });
};
