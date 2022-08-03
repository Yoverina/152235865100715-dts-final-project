import { Box, Button, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../auth/firebase";

const title = {
  fontFamily: "orbitron",
  fontSize: "24px",
  fontWeight: "400",
  marginLeft: "10px",
};

const NavBar = () => {
  const navigate = useNavigate();
  const buttonLogoutOnClickHandler = async () => {
    await logout();
    navigate("/login");
  };
  const buttonListCountryOnClickHandler = () => {
    navigate("/list-all-country");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        bgcolor: "primary.main",
        px: 10,
        height: "80px",
      }}
    >
      <Box
        sx={{ display: "flex", alignItems: "center", flexDirection: "row" }}
      >
        <img src="/logo.png" alt="logo" width="40px" height="40px" />
        <Link to="/" style={{ textDecoration: "none" }}>
          <Typography color="secondary" style={title}>
            COVIDY
          </Typography>
        </Link>
      </Box>

      <Box className="navigation">
        <Button
          color="secondary"
          onClick={buttonListCountryOnClickHandler}
          sx={{
            px: 3,
            fontSize: "16px",
            "&:hover": {
              backgroundColor: "#FFFFFF",
              color: "#222121",
            },
            borderRadius: 0,
            height: "100%",
          }}
        >
          List All Country
        </Button>
        <Button
          color="secondary"
          onClick={buttonLogoutOnClickHandler}
          sx={{
            px: 3,
            fontSize: "16px",
            "&:hover": {
              backgroundColor: "#FFFFFF",
              color: "#222121",
            },
            borderRadius: 0,
            height: "100%",
          }}
        >
          Logout
        </Button>
      </Box>
    </Box>
  );
};

export default NavBar;
