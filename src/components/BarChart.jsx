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
import { Paper } from "@mui/material";

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

const BarChart = ({ propsData }) => {
  return (
    <Paper sx={{ p: 2, height: "90%" }} elevation={3}>
      <Bar
        data={{
          labels: propsData.labels,
          datasets: propsData.datasets,
        }}
        options={options}
      />
    </Paper>
  );
};
export default BarChart;
