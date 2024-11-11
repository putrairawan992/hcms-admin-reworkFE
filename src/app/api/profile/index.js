import { useProfileStore } from "@/stores/profileStore";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const useGetProfile = () => {
  const setProfile = useProfileStore((state) => state.setProfile);

  return useQuery({
    queryKey: ["my-profile"],
    queryFn: async () => {
      const res = await axios({
        method: "GET",
        url: baseURL + "/api/admin/detail/account",
        headers: {
          Authorization: `Bearer ${Cookies.get("userToken")}`,
        },
      });

      setProfile(res.data.data);
      return res.data.data;
    },
    staleTime: 0,
    gcTime: 0,
    enabled: !!Cookies.get("userToken"),
  });
};

export const useEditProfile = () => {
  return useMutation({
    mutationFn: async ({ dataProfile }) => {
      const res = await axios({
        method: "PATCH",
        url: baseURL + "/api/admin/edit_account",
        headers: {
          Authorization: `Bearer ${Cookies.get("userToken")}`,
        },
        data: dataProfile,
      });

      return res.data;
    },
  });
};
