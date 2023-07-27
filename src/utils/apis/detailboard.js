import { useParams } from "react-router-dom";
import { customAxios } from "../customAxios";

export const fetchdetailboardApi = async () => {
    const currentAddress = window.location.href;
    const storeId2 = currentAddress.split('/').pop();
  const { data } = await customAxios.get(`/store/storeInfo/${storeId2}`);
  return data.data;
};