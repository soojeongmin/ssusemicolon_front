import { useQuery } from "@tanstack/react-query";
import { fetchSearchResultApi } from "../apis/search";

// option(alt) + shift + o

// 대시보드에 쓰이는 key들
export const searchKeys = {
  all: ["store"],
  list: () => [...searchKeys.all, "list"],
  search: (q) => [...searchKeys.all, ...searchKeys.list(), "search", { q }],
};

// Get 홈화면 - 데이터 가져오기
export const useSearchQuery = (query) => {
  // 'store', 'list', 'search', 스타벅스
  return useQuery(searchKeys.search(query), () => fetchSearchResultApi(query));
};
