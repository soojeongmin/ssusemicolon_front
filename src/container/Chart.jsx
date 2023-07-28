import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useWeeklyChart } from "../utils/hooks/useChart";

export const WeeklyChart = ({ storeId }) => {
  const { data: weeklyChartData, isLoading } = useWeeklyChart(storeId);

  if (isLoading) {
    return <>Loading...</>;
  }

  const WeekDensity = weeklyChartData?.densityPerDayList || [];
  const data = [
    {
      name: "금",
      밀집도: WeekDensity[0],
    },
    {
      name: "토",
      밀집도: WeekDensity[1],
    },
    {
      name: "일",
      밀집도: WeekDensity[2],
    },
    {
      name: "월",
      밀집도: WeekDensity[3],
    },
    {
      name: "화",
      밀집도: WeekDensity[4],
    },
    {
      name: "수",
      밀집도: WeekDensity[5],
    },
    {
      name: "목",
      밀집도: WeekDensity[6],
    },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={600}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="밀집도"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
