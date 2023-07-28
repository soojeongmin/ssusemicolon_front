import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  deleteStoreApi,
  editStoreApi,
  fetchStoreApi,
  registerStoreApi,
} from "../apis/admin";

// 대시보드에 쓰이는 key들
export const adminKeys = {
  all: ["admin"],
  detail: (storeId) => [adminKeys.all(), "detail", storeId],
};

export const useStoreDetail = (storeId) => {
  return useQuery(adminKeys.detail(storeId), () => fetchStoreApi);
};

// 가게등록
export const useStoreRegisterMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(registerStoreApi, {
    onSuccess: (data) => {
      queryClient.invalidateQueries(adminKeys.all);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

// 가게수정
export const useStoreModifyMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(editStoreApi, {
    onSuccess: (data) => {
      queryClient.invalidateQueries(adminKeys.all);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

// 가게삭제
export const useStoreRemoveMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteStoreApi, {
    onSuccess: (data) => {
      queryClient.invalidateQueries(adminKeys.all);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
