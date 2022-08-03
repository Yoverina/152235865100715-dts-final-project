import { useEffect, useState } from "react";
import { useStatisticsQuery } from "../services/rapidAPI";
import BarChart from "./BarChart";
import Loading from "./Loading";
import { Box } from "@mui/material";

const TopFiveTotalCases = () => {
  const [chartData, setChartData] = useState({});
  const [dataReady, setDataReady] = useState(false);
  const { data, error, isFetching } = useStatisticsQuery();

  useEffect(() => {
    if (data) {
      let responseTopFive = data.response
        .filter((data) => data.cases.total > 100000)
        .sort((a, b) => b.cases.total - a.cases.total)
        .slice(1, 11);

      const dataForChart = {
        labels: responseTopFive.map((countryData) => countryData.country),
        datasets: [
          {
            label: "Active (thousand)",
            data: responseTopFive.map((countryData) =>
              Math.round(countryData.cases.active / 1000)
            ),
            backgroundColor: "rgba(100, 150, 4, 1)",
          },
          {
            label: "Critical",
            data: responseTopFive.map(
              (countryData) => countryData.cases.critical
            ),
            backgroundColor: "rgba(53, 162, 235, 1)",
          },
          {
            label: "Deaths (thousand)",
            data: responseTopFive.map((countryData) =>
              Math.round(countryData.deaths.total / 1000)
            ),
            backgroundColor: "rgba(255, 99, 132, 1)",
          },
        ],
      };
      setChartData(dataForChart);
      setDataReady(true);
    }
  }, [data, error]);
  return (
    <Box height="500px">
      {isFetching || !dataReady ? (
        <Box display="flex" justifyContent="center">
          <Loading />
        </Box>
      ) : (
        <BarChart propsData={chartData} />
      )}
    </Box>
  );
};

export default TopFiveTotalCases;
