import { useEffect, useState } from "react";
import { useHistoryQuery } from "../services/rapidAPI";
import LineChart from "./LineChart";
import Loading from "./Loading";
import { Box, Typography } from "@mui/material";

const dateCounter = (dateString) => {
  const dateToTime = (date) =>
    date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: false,
    });

  const userOffset = new Date().getTimezoneOffset() * 60 * 1000;
  const localDate = new Date(dateString);
  const utcDate = new Date(localDate.getTime() + userOffset);

  console.log(`${dateToTime(utcDate)} (${dateToTime(localDate)} Your Time)`);
  return dateToTime(utcDate);
};

const ourData = {
  labels: ["27-Jul", "28-Jul", "29-Jul", "30-Jul", "31-Jul"], //time
  datasets: [
    {
      id: 1,
      label: "Tested",
      data: [2000, 1000, 7500, 5600, 7000],
      borderColor: "rgb(44, 77, 141)",
      backgroundColor: "rgba(44, 77, 141, 1)",
    },
    {
      id: 2,
      label: "Recovered",
      data: [1100, 5300, 3200, 223, 100],
      borderColor: "rgb(59, 149, 84)",
      backgroundColor: "rgba(59, 149, 84, 1)",
    },
    {
      id: 3,
      label: "Death",
      data: [2000, 250, 60, 200, 100],
      borderColor: "rgb(93, 99, 94)",
      backgroundColor: "rgba(93, 99, 94, 1)",
    },
    {
      id: 4,
      label: "New",
      data: [2000, 1500, 100, 500, 700],
      borderColor: "rgb(232, 88, 89)",
      backgroundColor: "rgba(232, 88, 89, 1)",
    },
    {
      id: 5,
      label: "Active",
      data: [2000, 1200, 750, 600, 2000],
      borderColor: "rgb(214, 149, 74)",
      backgroundColor: "rgba(214, 149, 74, 1)",
    },
    {
      id: 6,
      label: "Critical",
      data: [2000, 100, 500, 5600, 700],
      borderColor: "rgb(169, 52, 52)",
      backgroundColor: "rgba(169, 52, 52, 1)",
    },
  ],
};

const CountryHistoryGraph = ({ country, date }) => {
  const today = new Date(new Date(date).toUTCString());
  const yesterday = new Date(new Date().setDate(today.getDate() - 1));
  const pastDate = yesterday.toISOString().split("T")[0];
  const [chartData, setChartData] = useState({});
  const [dataReady, setDataReady] = useState(false);
  const [chartDataReady, setChartDataReady] = useState(false);
  const [historyData, setHistoryData] = useState([]);
  const { data, isFetching, error } = useHistoryQuery({
    country: country,
    date: pastDate,
  });

  const testedHistoryChart = () => ({
    labels: historyData.map((value) => value.time.split("T")[1]),
    datasets: [
      {
        label: "Tested",
        data: historyData.map((value) => value.tests.total),
        borderColor: "rgb(44, 77, 141)",
        backgroundColor: "rgba(44, 77, 141, 1)",
      },
    ],
  });

  const recoveredHistoryChart = () => ({
    labels: historyData.map((value) => value.time.split("T")[1]),
    datasets: [
      {
        label: "Recovered",
        data: historyData.map((value) => value.cases.recovered),
        borderColor: "rgb(59, 149, 84)",
        backgroundColor: "rgba(59, 149, 84, 1)",
      },
    ],
  });

  const deathsHistoryChart = (x_axis) => ({
    labels: x_axis,
    datasets: [
      {
        label: "Death",
        data: historyData.map((value) => value.deaths.total),
        borderColor: "rgb(93, 99, 94)",
        backgroundColor: "rgba(93, 99, 94, 1)",
      },
    ],
  });
  const newCasesHistoryChart = (x_axis)=> ({
    labels: x_axis,
    datasets: [
      {
        label: "New",
        data: historyData.map((value) => value.cases.new.substring(1)),
        borderColor: "rgb(232, 88, 89)",
        backgroundColor: "rgba(232, 88, 89, 1)",
      },
    ],
  });
  const activeHistoryChart = (x_axis)=>({
    labels: x_axis,
    datasets: [
      {
        label: "Active",
        data: historyData.map((value) => value.cases.active),
        borderColor: "rgb(214, 149, 74)",
        backgroundColor: "rgba(214, 149, 74, 1)",
      },
    ],
  });
  const criticalHistoryChart = () =>( {
    labels: historyData.map((value) => value.time.split("T")[1]),
    datasets: [
      {
        label: "Critical",
        data: historyData.map((value) => value.cases.critical),
        borderColor: "rgb(169, 52, 52)",
        backgroundColor: "rgba(169, 52, 52, 1)",
      },
    ],
  });

  const createChartData = () => {
    return "hai"
  }

  useEffect(() => {
    if (data) {
      setHistoryData(data.response);
      console.log("historyData: ", historyData);
      setDataReady(true);
      const test = createChartData();
      console.log("ini test: ", test);
    }
    if (error) {
      console.log("isError: ", error);
    }
  }, [data, error, historyData]);
  return (
    <Box>
      {(!dataReady) ? (
        <Box display="flex" justifyContent="center">
          <Loading />
        </Box>
      ) : historyData.length < 5 ? (
        <Box display="flex" justifyContent="center">
          No history found
        </Box>
      ) : (
        <Box>
          <Box display="flex" flexDirection="row" justifyContent="space-evenly">
            <Box height="600px" width="45%">
              <Typography>Tested</Typography>
              {/* <LineChart propsData={chartData} /> */}
            </Box>
            {/* <Box height="600px" width="45%">
              <Typography>Recovered</Typography>
              <LineChart propsData={chartData.recovered} />
            </Box>
          </Box>
          <Box display="flex" flexDirection="row" justifyContent="space-evenly">
            <Box height="600px" width="45%">
              <Typography>Death</Typography>
              <LineChart propsData={chartData.deaths} />
            </Box>
            <Box height="600px" width="45%">
              <Typography>New</Typography>
              <LineChart propsData={chartData.newCases} />
            </Box>
          </Box>
          <Box display="flex" flexDirection="row" justifyContent="space-evenly">
            <Box height="600px" width="45%">
              <Typography>Active</Typography>
              <LineChart propsData={chartData.active} />
            </Box>
            <Box height="600px" width="45%">
              <Typography>Critical</Typography>
              <LineChart propsData={chartData.critical} />
            </Box> */}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default CountryHistoryGraph;
