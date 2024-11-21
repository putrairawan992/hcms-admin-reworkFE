import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const useGetApprovalJobPost = ({
  status,
  product_digital_name,
  month,
  years,
}) => {
  return useQuery({
    queryKey: ["status", "product_digital_name", "month", "years"],
    queryFn: async () => {
      const res = await axios({
        method: "GET",
        url: baseURL + "/api/admin/job_post",
        headers: {
          Authorization: `Bearer ${Cookies.get("userToken")}`,
        },
        params: {
          // status,
          // product_digital_name,
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

export const useJobPostMutation = () => {
  return useMutation({
    mutationFn: async ({ id, data, isApprove }) => {
      const res = await axios({
        method: "POST",
        url: `${baseURL}/api/admin/job_post/${
          isApprove ? "approve" : "rejected"
        }/${id}`,
        headers: {
          Authorization: `Bearer ${Cookies.get("userToken")}`,
        },
        data,
      });

      return res.data;
    },
  });
};

export const useGetJobPostDetail = ({ id }) => {
  return useQuery({
    queryKey: ["id"],
    queryFn: async () => {
      const res = await axios({
        method: "GET",
        url: baseURL + `/api/admin/job_post/${id}`,
        headers: {
          Authorization: `Bearer ${Cookies.get("userToken")}`,
        },
      });

      return res.data.data;
    },
    staleTime: 0,
    gcTime: 0,
  });
};

export const useGetApprovalRemuneration = ({
  status,
  product_digital_name,
  month,
  years,
}) => {
  return useQuery({
    queryKey: ["status", "product_digital_name", "month", "years"],
    queryFn: async () => {
      const res = await axios({
        method: "GET",
        url: baseURL + "/api/admin/remuneration/list",
        headers: {
          Authorization: `Bearer ${Cookies.get("userToken")}`,
        },
        params: {
          status,
          product_digital_name,
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

export const useGetApprovalRemunerationDetail = ({ id }) => {
  return useQuery({
    queryKey: ["id"],
    queryFn: async () => {
      const res = await axios({
        method: "GET",
        url: baseURL + `/api/admin/remuneration/detail/${id}`,
        headers: {
          Authorization: `Bearer ${Cookies.get("userToken")}`,
        },
      });

      return res.data.data;
    },
    staleTime: 0,
    gcTime: 0,
  });
};

export const useApproveRemuneration = () => {
  return useMutation({
    mutationFn: async ({ id, data, isApprove }) => {
      const res = await axios({
        method: "POST",
        url:
          baseURL +
          `/api/admin/remuneration/update/employee/${id}/${
            isApprove ? "approved" : "rejected"
          }`,
        headers: {
          Authorization: `Bearer ${Cookies.get("userToken")}`,
        },
        data,
      });

      return res.data;
    },
  });
};
