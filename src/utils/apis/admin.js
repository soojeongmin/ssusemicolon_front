import { customAxios } from "../customAxios";

export const fetchStoreApi = async (storeId) => {
  const { data } = await customAxios.get(`/store/storeInfo/${storeId}`);
  return data.data;
};

export const registerStoreApi = async (body) => {
  const { data } = await customAxios.post(`/store/register`, body);
  return data.data;
};

export const editStoreApi = async (storeId, body) => {
  const { data } = await customAxios.put(`/store/storeInfo/${storeId}`, body);
  return data.data;
};

export const deleteStoreApi = async ({ password, storeId }) => {
  const { data } = await customAxios.put(`/store/delete/${storeId}`, {
    password,
  });
  return data.data;
};
