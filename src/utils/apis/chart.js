import { customAxios } from "../customAxios";


export const fetchChartApi = async (storeId) => { //storeID를 매개변수로 받는 것이다. 그렇다면 어떻게 분리해주는가?
    if (!storeId) {
      return undefined;
    }
    const { data } = await customAxios.get(`/density/week/${storeId}`);
    return data.data;
  };

export const fetchChart2Api = async (storeId,date) => { //storeID를 매개변수로 받는 것이다. 그렇다면 어떻게 분리해주는가?
    if (!storeId && !date) {
      return undefined;
    }
    const { data } = await customAxios.get(`/density/${storeId}?specificDate=${date}`);
    return data.data;
  };