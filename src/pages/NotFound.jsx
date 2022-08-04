import { Box, Typography } from "@mui/material";

import error404 from "../static/404.png";


const NotFound = () => {
  
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <img src={error404} alt="404.png" height="400px" />
        <Typography fontSize="30px" fontWeight="500">
          Oopss.. Sorry, page not found
        </Typography>
      </Box>
    </>
  );
};

export default NotFound;
