import { useEffect, useState } from "react";
import { useHistoryQuery } from "../services/rapidAPI";
import LineChart from "./LineChart";
import Loading from "./Loading";
import { Box, Paper, Typography } from "@mui/material";

const title = {
  fontSize: "18px",
  marginBottom: "10px",
};

const CountryHistoryGraph = ({ country, date }) => {
  const today = new Date(new Date(date).toUTCString());
  const yesterday = new Date(new Date().setDate(today.getDate() - 1));
  const pastDate = yesterday.toISOString().split("T")[0];
  const [chartData, setChartData] = useState([]);
  const [dataReady, setDataReady] = useState(false);
  const [chartDataReady, setChartDataReady] = useState(false);
  const [historyData, setHistoryData] = useState([]);
  const { data, isFetching, error } = useHistoryQuery({
    country: country,
    date: pastDate,
  });

  useEffect(() => {
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
    const deathsHistoryChart = () => ({
      labels: historyData.map((value) => value.time.split("T")[1]),
      datasets: [
        {
          label: "Death",
          data: historyData.map((value) => value.deaths.total),
          borderColor: "rgb(93, 99, 94)",
          backgroundColor: "rgba(93, 99, 94, 1)",
        },
      ],
    });
    const newCasesHistoryChart = () => ({
      labels: historyData.map((value) => value.time.split("T")[1]),
      datasets: [
        {
          label: "New",
          data: historyData.map((value) => {
            let newCasesData = value.cases.new ? parseInt(value.cases.new.substring(1)) : 0
            return newCasesData;
          }),
          borderColor: "rgb(232, 88, 89)",
          backgroundColor: "rgba(232, 88, 89, 1)",
        },
      ],
    });
    const activeHistoryChart = () => ({
      labels: historyData.map((value) => value.time.split("T")[1]),
      datasets: [
        {
          label: "Active",
          data: historyData.map((value) => value.cases.active),
          borderColor: "rgb(214, 149, 74)",
          backgroundColor: "rgba(214, 149, 74, 1)",
        },
      ],
    });
    const criticalHistoryChart = () => ({
      labels: historyData.map((value) => value.time.split("T")[1]),
      datasets: [
        {
          label: "Critical",
          data: historyData.map((value) => {
            return value.cases.critical;
          }),
          borderColor: "rgb(169, 52, 52)",
          backgroundColor: "rgba(169, 52, 52, 1)",
        },
      ],
    });
  
    const createChartData = () => {
      const chart = [];
      chart.push(testedHistoryChart());
      chart.push(recoveredHistoryChart());
      chart.push(deathsHistoryChart());
      chart.push(newCasesHistoryChart());
      chart.push(activeHistoryChart());
      chart.push(criticalHistoryChart());
      return chart;
    };
    if (data) {
      setHistoryData(data.response);
      setDataReady(true);
      setChartData(createChartData());
      setChartDataReady(true);
    }
    if (error) {
      console.log("isError: ", error);
    }
  }, [data, error, historyData]);
  return (
    <Box>
      {(!dataReady || isFetching ) ? (
        <Box display="flex" justifyContent="center">
          <Loading />
        </Box>
      ) : historyData.length < 5 ? (
        <Box m={1}>
          <Paper sx={{ p: 4 }} elevation={3}>No history found</Paper>
        </Box>
      ) : !chartDataReady ? (
        <Box display="flex" justifyContent="center">
          <Loading />
        </Box>
      ) : (
        <Box>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-evenly"
            mt={3}
          >
            <Box width="45%">
              <Typography style={title}>Tested</Typography>
              <Box height="600px">
                <LineChart propsData={chartData[0]} />
              </Box>
            </Box>
            <Box width="45%">
              <Typography style={title}>Recovered</Typography>
              <Box height="600px">
                <LineChart propsData={chartData[1]} />
              </Box>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-evenly"
            mt={3}
          >
            <Box width="45%">
              <Typography style={title}>Death</Typography>
              <Box height="600px">
                <LineChart propsData={chartData[2]} />
              </Box>
            </Box>
            <Box width="45%">
              <Typography style={title}>New</Typography>
              <Box height="600px"><LineChart propsData={chartData[3]} /></Box>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-evenly"
            mt={3}
          >
            <Box width="45%">
              <Typography style={title}>Active</Typography>
              <Box height="600px">
                <LineChart propsData={chartData[4]} />
              </Box>
            </Box>
            <Box width="45%">
              <Typography style={title}>Critical</Typography>
              <Box height="600px">
                <LineChart propsData={chartData[5]} />
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default CountryHistoryGraph;
