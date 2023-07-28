import { customAxios } from "../customAxios";

export const fetchDetailBoardApi = async (storeId) => {
  if (!storeId) {
    return undefined;
  }
  const { data } = await customAxios.get(`/store/storeInfo/${storeId}`);
  return data.data;
};
