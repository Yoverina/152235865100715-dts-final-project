import { Box, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useStatisticsArgQuery } from "../services/rapidAPI";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import population from "../static/population.png";
import active from "../static/active.png";
import death from "../static/death.png";
import critical from "../static/critical.png";
import recovered from "../static/recover.png";
import newCases from "../static/new.png";
import CountryHistoryGraph from "../components/CountryHistoryGraph";

const CountryDetails = () => {
  let params = useParams();

  const [countryDetails, setCountryDetails] = useState([]);
  const [dataReady, setDataReady] = useState(false);
  const { data, error, isLoading, isFetching } = useStatisticsArgQuery(params?.country);

  useEffect(() => {
    if(isFetching){
    }
    if (data) {
      setCountryDetails(data.response[0]);
      setDataReady(true);
    }
    if (error) {
    }
    if (isLoading){
      return;
    }
  }, [data, error, isLoading, isFetching]);
  const paper1 = {
    backgroundColor: "#2C4D8D",
    height: "80px",
    color: "white",
    display: "flex",
    alignItems: "center",
    padding: 2,
    justifyContent: "space-between",
    m: 1,
  };
  const paper2 = {
    backgroundColor: "#3B9554",
    width: "50%",
    height: "80px",
    color: "white",
    display: "flex",
    alignItems: "center",
    padding: 2,
    justifyContent: "space-between",
    m: 1,
  };
  const paper3 = {
    backgroundColor: "#5D635E",
    width: "50%",
    height: "80px",
    color: "white",
    display: "flex",
    alignItems: "center",
    padding: 2,
    justifyContent: "space-between",
    m: 1,
  };
  const paper4 = {
    backgroundColor: "#E85859",
    width: "30%",
    height: "80px",
    color: "white",
    display: "flex",
    alignItems: "center",
    padding: 2,
    justifyContent: "space-between",
    m: 1,
  };
  const paper5 = {
    backgroundColor: "#D6954A",
    width: "30%",
    height: "80px",
    color: "white",
    display: "flex",
    alignItems: "center",
    padding: 2,
    justifyContent: "space-between",
    m: 1,
  };
  const paper6 = {
    backgroundColor: "#A93434",
    width: "30%",
    height: "80px",
    color: "white",
    display: "flex",
    alignItems: "center",
    padding: 2,
    justifyContent: "space-between",
    m: 1,
  };
  const boxStyle = {
    display: "flex",
    flexDirection: "column",
  };
  const title = {
    fontWeight: "700",
    fontSize: "32px",
  };

  return (
    <>
      <NavBar></NavBar>
      {(isLoading || isFetching || !dataReady) ? (
        <Box display="flex" justifyContent="center"><Loading /></Box>
      ) : (
        <Box px={10} py={5}>
          <Typography mx={1} fontSize="32px" fontWeight={600}>{countryDetails.country}</Typography>
          <Typography mx={1}>Data fetched: {countryDetails.day ? countryDetails.day : "-"}</Typography>
          <Box width="55%">
            <Paper sx={paper1}>
              <Box style={boxStyle}>
                <Typography style={title}>{countryDetails.tests.total ? countryDetails.tests.total : 0 }</Typography>
                <Typography>Tested Population</Typography>
              </Box>
              <img src={population} alt="population.png" />
            </Paper>
            <Box style={{ display: "flex", flexDirection: "row" }}>
              <Paper sx={paper2}>
                <Box style={boxStyle}>
                  <Typography style={title}>{countryDetails.cases.recovered ? countryDetails.cases.recovered : 0}</Typography>
                  <Typography>Recovered</Typography>
                </Box>
                <img src={recovered} alt="recovered.png" />
              </Paper>
              <Paper sx={paper3}>
                <Box style={boxStyle}>
                  <Typography style={title}>{countryDetails.deaths.total ? countryDetails.deaths.total : 0}</Typography>
                  <Typography>Death</Typography>
                </Box>
                <img src={death} alt="death.png" />
              </Paper>
            </Box>
            <Box style={{ display: "flex", flexDirection: "row" }}>
              <Paper sx={paper4}>
                <Box style={boxStyle}>
                  <Typography style={title}>{countryDetails.cases.new ? countryDetails.cases.new : 0 }</Typography>
                  <Typography>New Cases</Typography>
                </Box>
                <img src={newCases} alt="newcases.png" />
              </Paper>
              <Paper sx={paper5}>
                <Box style={boxStyle}>
                  <Typography style={title}>{countryDetails.cases.active ? countryDetails.cases.active : 0 }</Typography>
                  <Typography>Active Cases</Typography>
                </Box>
                <img src={active} alt="active.png" />
              </Paper>
              <Paper sx={paper6}>
                <Box style={boxStyle}>
                  <Typography style={title}>{countryDetails.cases.critical ? countryDetails.cases.critical : 0}</Typography>
                  <Typography>Critical</Typography>
                </Box>
                <img src={critical} alt="critical.png" />
              </Paper>
            </Box>
          </Box>
          <Box my={3}>
            <Typography m={1} fontSize="20px" fontWeight={600}>History Data:</Typography>
            <CountryHistoryGraph country={countryDetails.country} date={countryDetails.day}/>
          </Box>
          
        </Box>
      )}
      
      <Footer></Footer>
    </>
  );
};

export default CountryDetails;
