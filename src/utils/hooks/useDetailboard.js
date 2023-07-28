import { useQuery } from "@tanstack/react-query";
import { fetchDetailBoardApi } from "../apis/detailboard";

// option(alt) + shift + o

// 대시보드에 쓰이는 key들
export const detailBoardKeys = {
  all: ["store"],
  list: () => [...detailBoardKeys.all, "list"],
  search: (q) => [
    ...detailBoardKeys.all,
    ...detailBoardKeys.list(),
    "picture",
    { q },
  ],
  detail: (storeId) => [...detailBoardKeys.all, "detail", storeId],
};

// Get 홈화면 - 데이터 가져오기
export const useDetailBoard = (storeId) => {
  console.log("storeId: ", storeId);
  // 이런식으로 키와, api 호출에 전달
  return useQuery(detailBoardKeys.detail(storeId), () =>
    fetchDetailBoardApi(storeId),
  );
};
