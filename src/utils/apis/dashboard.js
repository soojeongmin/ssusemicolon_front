import { customAxios } from "../customAxios";

export const fetchStoreListApi = async () => {
  const { data } = await customAxios.get("/store/storeInfo/all");
  return data.data;
};
