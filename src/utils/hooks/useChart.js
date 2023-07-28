import { useQuery } from "@tanstack/react-query";
import { fetchChartApi,fetchChart2Api } from "../apis/chart";

export const chartKeys = {
    all: ["store"],
    list: () => [...chartKeys.all, "list"],
    search: (q) => [
      ...chartKeys.all,
      ...chartKeys.list(),
      "picture",
      { q },
    ],
    detail: (storeId) => [...chartKeys.all, "chart", storeId],
  };
  
  // Get 홈화면 - 데이터 가져오기
  export const useChart = (storeId) => {
    console.log("storeId: ", storeId);
    // 이런식으로 키와, api 호출에 전달
    return useQuery(chartKeys.detail(storeId), () => //하하.
      fetchChartApi(storeId),
    );
  };
 
 
  export const chart2Keys = {
    all: ["store"],
    list: () => [...chart2Keys.all, "list"],
    search: (q) => [
      ...chart2Keys.all,
      ...chart2Keys.list(),
      "picture",
      { q },
    ],
    detail: (storeId) => [...chart2Keys.all, "chart2", storeId],
  };
  
  // Get 홈화면 - 데이터 가져오기
  export const useChart2 = (storeId,date) => {
    console.log("storeId: ", storeId);
    // 이런식으로 키와, api 호출에 전달
    return useQuery(chart2Keys.detail(storeId), () => //하하. 한개만 있어도 됨?
      fetchChart2Api(storeId),
    );
  };