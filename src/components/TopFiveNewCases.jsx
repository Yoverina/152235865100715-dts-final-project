import { Box, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useStatisticsQuery } from "../services/rapidAPI";
import num1 from "../static/1.png";
import num2 from "../static/2.png";
import num3 from "../static/3.png";
import num4 from "../static/4.png";
import num5 from "../static/5.png";
import small_ppl from "../static/small-people.png";
import Loading from "./Loading";

const paper = {
  width: "20%",
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
  alignItems: "center",
};

const title = {
  fontWeight: "900",
  fontSize: "18px",
};

const TopFiveNewCases = () => {
  const { data, isFetching } = useStatisticsQuery();
  const [dataReady, setDataReady] = useState(false);
  const [topFive, setTopFive] = useState([]);

  useEffect(() => {
    if (data) {
      let responseTopFive = data.response
        .filter((data) => data.cases.new > 1000)
        .sort((a, b) => b.cases.new - a.cases.new)
        .slice(1, 6);
      setTopFive(responseTopFive);
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
                {dataReady ? topFive[0].cases.new : 0}
              </Typography>
              <Typography>{dataReady ? topFive[0].country : "-"}</Typography>
            </Box>
            <img src={small_ppl} alt="small_people.png" />
          </Paper>
          <Paper sx={paper} elevation={5}>
            <img src={num2} alt="2.png" />
            <Box style={boxStyle}>
              <Typography style={title} color="ternary.main">
                {dataReady ? topFive[1].cases.new : <Loading />}
              </Typography>
              <Typography>{dataReady ? topFive[1].country : "-"}</Typography>
            </Box>
            <img src={small_ppl} alt="small_people.png" />
          </Paper>
          <Paper sx={paper} elevation={5}>
            <img src={num3} alt="3.png" />
            <Box style={boxStyle}>
              <Typography style={title} color="ternary.main">
                {dataReady ? topFive[2].cases.new : <Loading />}
              </Typography>
              <Typography>{dataReady ? topFive[2].country : "-"}</Typography>
            </Box>
            <img src={small_ppl} alt="small_people.png" />
          </Paper>
          <Paper sx={paper} elevation={5}>
            <img src={num4} alt="4.png" />
            <Box style={boxStyle}>
              <Typography style={title} color="ternary.main">
                {dataReady ? topFive[3].cases.new : <Loading />}
              </Typography>
              <Typography>{dataReady ? topFive[3].country : "-"}</Typography>
            </Box>
            <img src={small_ppl} alt="small_people.png" />
          </Paper>
          <Paper sx={paper} elevation={5}>
            <img src={num5} alt="5.png" />
            <Box style={boxStyle}>
              <Typography style={title} color="ternary.main">
                {dataReady ? topFive[4].cases.new : <Loading />}
              </Typography>
              <Typography>{dataReady ? topFive[4].country : "-"}</Typography>
            </Box>
            <img src={small_ppl} alt="small_people.png" />
          </Paper>
        </Box>
      )}
    </>
  );
};

export default TopFiveNewCases;
