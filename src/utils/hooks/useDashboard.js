import { useQuery } from "@tanstack/react-query";
import { fetchStoreListApi } from "../apis/dashboard";

// 대시보드에 쓰이는 key들
export const dashboardKeys = {
  all: ["dashboard"],
  list: () => [...dashboardKeys.all, "list"],
  search: (q) => [...dashboardKeys.all, "search", { q }],
};

// Get 홈화면 - 데이터 가져오기
export const useNearStores = () => {
  // key: ["dashboard", "list"]
  return useQuery(dashboardKeys.list(), () => fetchStoreListApi());
};
