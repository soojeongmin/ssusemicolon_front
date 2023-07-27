import { useQuery } from "@tanstack/react-query";
import { fetchdetailboardApi } from "../apis/detailboard";
import { useParams } from "react-router-dom";
// option(alt) + shift + o

// 대시보드에 쓰이는 key들
export const detailboardKeys = {
 
  all: ["store"],
  list: () => [...detailboardKeys.all, "list"],
  search: (q) => [...detailboardKeys.all, ...detailboardKeys.list(), "picture", { q }],
};

// Get 홈화면 - 데이터 가져오기
export const useDetailboardQuery = () => {
  // 'store', 'list', 'search', 스타벅스
  return useQuery(detailboardKeys.list(), () => fetchdetailboardApi());
};
