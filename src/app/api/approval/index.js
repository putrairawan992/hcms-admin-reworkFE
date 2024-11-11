import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const useGetApprovalJobPost = () => {
  return useQuery({
    queryKey: ["approval-job-post"],
    queryFn: async () => {
      const res = await axios({
        method: "GET",
        url: baseURL + "/api/admin/job_post?years=2024&month=10",
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
