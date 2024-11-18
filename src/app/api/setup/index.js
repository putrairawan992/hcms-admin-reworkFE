import { useMutation } from "@tanstack/react-query";
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
