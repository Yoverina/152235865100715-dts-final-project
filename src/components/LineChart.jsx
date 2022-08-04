import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Legend,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Box, Paper, Typography } from "@mui/material";
import { useHistoryQuery, useStatisticsQuery } from "../services/rapidAPI";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Legend,
  Tooltip
);

export const options = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: false,
      text: "ChartJS Line",
    },
  },
};
export const data1 = {
  labels: ["27-Jul", "28-Jul", "29-Jul", "30-Jul", "31-Jul"],
  datasets: [
    {
      label: "Dataset 1",
      data: [24, 26, 27, 28, 19],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

const LineChart = ({ propsData }) => {
  return (
    <Paper sx={{ p: 2, height: "90%" }} elevation={3}>
      <Line
        data={{
          labels: propsData.labels,
          datasets: propsData.datasets,
        }}
        options={options}
      />
    </Paper>
  );
};
export default LineChart;
