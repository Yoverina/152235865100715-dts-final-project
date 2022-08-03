import { Box, Paper, Typography } from "@mui/material";
import BarChart from "../components/BarChart";
import LineChart from "../components/LineChart";
import TopThreeNewCases from "../components/TopThreeNewCases";



// const dateCounter = () =>{
//     const dateToTime = date => date.toLocaleString('en-US', {
//         hour: 'numeric',
//         minute: 'numeric'
//       });

//       const dateString = "2020-03-22T22:45:05+00:00";
//       const userOffset = new Date().getTimezoneOffset()*60*1000;
//       const localDate = new Date(dateString);
//       const utcDate = new Date(localDate.getTime() + userOffset);

//       console.log(`${dateToTime(utcDate)} (${dateToTime(localDate)} Your Time)`);
// }

const subtitle = {
  fontWeight: "700",
  fontSize: "32px",
  marginBottom: "10px"
};


const Homepage = () => {
  return (
    <Box sx={{ px: 10, py: 5, display: "flex", flexDirection: "column" }}>
      <Typography style={subtitle}>Top 3 New Cases Today</Typography>
      <Box width="65%">
        <TopThreeNewCases/>
      </Box>
      {/* <LineChart/> */}
      {/* <BarChart/> */}
    </Box>
  );
};

export default Homepage;
