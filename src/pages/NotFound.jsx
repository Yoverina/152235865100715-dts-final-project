import { Box, Typography } from "@mui/material";
import NavBar from "../components/NavBar";
import error404 from "../static/404.png";
import { auth } from "../auth/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const NotFound = () => {
  const [user] = useAuthState(auth);
  return (
    <>
      {user ? <NavBar /> : <></>}
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
