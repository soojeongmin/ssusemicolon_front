import { useQuery } from "@tanstack/react-query";
import { fetchDateChartApi, fetchWeeklyChartApi } from "../apis/chart";

export const chartKeys = {
  all: ["store"],
  weeklyChart: (storeId) => [...chartKeys.all, "chart", "weekly", storeId],
  dateChart: (storeId, date) => [
    ...chartKeys.all,
    "chart",
    "weekly",
    storeId,
    date,
  ],
};

export const useWeeklyChart = (storeId) => {
  return useQuery(chartKeys.weeklyChart(storeId), () =>
    fetchWeeklyChartApi(storeId),
  );
};

export const useDateChart = (storeId, date) => {
  // 이런식으로 키와, api 호출에 전달
  return useQuery(chartKeys.dateChart(storeId, date), () =>
    fetchDateChartApi(storeId, date),
  );
};
