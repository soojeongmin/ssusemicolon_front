import { customAxios } from "../customAxios";

export const fetchStoreListApi = async () => {
  const { data } = await customAxios.get(`/store/nearby?radius=${radius}&latitude=${latitude}&longitude=${longitude}`);
  return data.data;
};