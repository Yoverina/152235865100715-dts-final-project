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
import { Paper, Typography } from "@mui/material";
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
      display: true,
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

const LineChart = () => {
  const { data, error, isLoading } = useStatisticsQuery();
  const topTenTotalCasesCountry = isLoading ? <>Loading...</> : data.response.filter(data => data.cases.total > 1000000).sort((a,b) => b.cases.total-a.cases.total).slice(1,11).map(data => data.country)

  // console.log(topTenTotalCasesCountry)

  const currentDate = new Date().toISOString().split('T')[0]
  const {data1, error1, isLoading1 } = useHistoryQuery({country: topTenTotalCasesCountry[0], date: currentDate})
  const history = isLoading1 ? <>Loading...</> : console.log("ini data1: ", data1)
  return (
    <div>
      <Typography>Total Positive Cases</Typography>
      <Paper sx={{ p: 2, m: 5, width: 800, height: 450 }} elevation={3}>
        <Line
          data={{
            labels: ["27-Jul", "28-Jul", "29-Jul", "30-Jul", "31-Jul"],
            datasets: [
              {
                id: 1,
                label: "USA",
                data: [2000, 1000, 7500, 5600, 7000],
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
              },
              {
                id: 2,
                label: "Indonesia",
                data: [1000, 5000, 3000, 2223, 1134],
                borderColor: "rgb(53, 162, 235)",
                backgroundColor: "rgba(53, 162, 235, 0.5)",
              },
            ],
          }}
          options={options}
        />
      </Paper>
    </div>
  );
};
export default LineChart;
