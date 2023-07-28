import { customAxios } from "../customAxios";

export const fetchWeeklyChartApi = async (storeId) => {
  if (!storeId) {
    return undefined;
  }
  const { data } = await customAxios.get(`/density/week/${storeId}`);
  return data.data;
};

export const fetchDateChartApi = async (storeId, date) => {
  if (!storeId && !date) {
    return undefined;
  }
  const { data } = await customAxios.get(
    `/density/${storeId}?specificDate=${date}`,
  );
  return data.data;
};
