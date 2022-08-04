import { Box, Typography } from "@mui/material";
import TopFiveTotalCases from "../components/TopFiveTotalCases";
import TopThreeNewCases from "../components/TopThreeNewCases";

const subtitle = {
  fontWeight: "700",
  fontSize: "32px",
  marginBottom: 5
};

const Homepage = () => {
  return (
    <Box sx={{ px: 10, py: 5, display: "flex", flexDirection: "column" }}>
      <Box mb={5}>
        <Typography style={subtitle}>Top 5 New Cases Today</Typography>
        <Typography mb={2}>Data fetched: {new Date().toISOString().slice(0, 10)}</Typography>
        <TopThreeNewCases />
        {/* <CountryHistoryGraph/> */}
      </Box>
      <Box mb={5}>
        <Typography style={subtitle}>Top 10 High Risk Country</Typography>
        <Typography mb={2}>Data fetched: {new Date().toISOString().slice(0, 10)}</Typography>
        <TopFiveTotalCases />
      </Box>
    </Box>
  );
};

export default Homepage;
