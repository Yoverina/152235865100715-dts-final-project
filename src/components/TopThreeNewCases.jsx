import { Box, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useStatisticsQuery } from "../services/rapidAPI";
import num1 from "../static/1.png";
import num2 from "../static/2.png";
import num3 from "../static/3.png";
import small_ppl from "../static/small-people.png";
import Loading from "./Loading";

const paper = {
  width: "30%",
  height: "80px",
  display: "flex",
  alignItems: "center",
  padding: 2,
  justifyContent: "space-between",
  m: 1,
};

const boxStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};

const title = {
  fontWeight: "900",
  fontSize: "32px",
};

const TopThreeNewCases = () => {
  const { data, error, isFetching } = useStatisticsQuery();
  const [dataReady, setDataReady] = useState(false);
  const [topThree, setTopThree] = useState([]);

  useEffect(() => {
    if (data) {
      let responseTopThree = data.response
        .filter((data) => data.cases.new > 1000)
        .sort((a, b) => b.cases.new - a.cases.new)
        .slice(1, 4);
      setTopThree(responseTopThree);
        console.log(responseTopThree[0])
      setDataReady(true);
    }
  }, [data]);
  return (
    <>
      {isFetching || !dataReady ? (
        <Box display="flex" justifyContent="center">
          <Loading />
        </Box>
      ) : (
        <Box display="flex" flexDirection="row">
          <Paper sx={paper} elevation={5}>
            <img src={num1} alt="1.png" />
            <Box style={boxStyle}>
              <Typography style={title} color="ternary.main">
                {dataReady ? topThree[0].cases.new : 0}
              </Typography>
              <Typography>{dataReady ? topThree[0].country : "-"}</Typography>
            </Box>
            <img src={small_ppl} alt="small_people.png" />
          </Paper>
          <Paper sx={paper} elevation={5}>
            <img src={num2} alt="2.png" />
            <Box style={boxStyle}>
              <Typography style={title} color="ternary.main">
                {dataReady ? topThree[1].cases.new : <Loading />}
              </Typography>
              <Typography>{dataReady ? topThree[1].country : "-"}</Typography>
            </Box>
            <img src={small_ppl} alt="small_people.png" />
          </Paper>
          <Paper sx={paper} elevation={5}>
            <img src={num3} alt="3.png" />
            <Box style={boxStyle}>
              <Typography style={title} color="ternary.main">
                {dataReady ? topThree[2].cases.new : <Loading />}
              </Typography>
              <Typography>{dataReady ? topThree[2].country : "-"}</Typography>
            </Box>
            <img src={small_ppl} alt="small_people.png" />
          </Paper>
        </Box>
      )}
    </>
  );
};

export default TopThreeNewCases;
