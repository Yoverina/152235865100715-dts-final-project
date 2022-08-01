import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Legend,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Paper, Typography } from "@mui/material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Legend,
  Tooltip
);

const options = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "",
    },
  },
};

const data1 = {
  labels: ["05:00", "05:15", "05:30", "05:45", "06:00"],
  datasets: [
    {
      label: "Active Cases",
      data: [24, 26, 27, 28, 19],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
        label: "New Cases",
        data: [200, 300, 400, 500, 100],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
  ],
};

const BarChart = () => {
  return (
    <div>
      <Typography>Total Positive Cases</Typography>
      <Paper sx={{ p: 2, m: 5, width: 800, height: 450 }} elevation={3}>
        <Bar
          data={data1}
          options={options}
        />
      </Paper>
    </div>
  );
};
export default BarChart;
