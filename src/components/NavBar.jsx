import { Box, Button, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom"; 
import { logout } from "../auth/firebase";

const title = {
    fontFamily:"orbitron",
    fontSize:"24px",
    fontWeight:"400",
    marginLeft: "10px"
}

const NavBar = () => {
    const navigate = useNavigate();
    const buttonLogoutOnClickHandler = async() => {
        await logout();
        navigate("/login");
    };
    const buttonListCountryOnClickHandler = () => {
        navigate("/list-all-country")
    };

    return (
        <Box sx={{ mb: "50px", display: "flex", flexDirection: "row", justifyContent: "space-between", bgcolor: "primary.main", px: 10, py:2 }}>
            <Link to="/" style={{ textDecoration: 'none' }}>
            <Box sx={{ display: "flex" }}>
                <img src="/logo.png" alt="logo" width="40px" height="40px"/>
               <Typography color="secondary" style={title}>COVIDY</Typography>
            </Box>
            </Link>
            <Box className="navigation">
                <Button color="secondary" onClick={buttonListCountryOnClickHandler} sx={{fontSize:"16px"}}>List All Country</Button>
                <Button color="secondary" onClick={buttonLogoutOnClickHandler} sx={{fontSize:"16px"}}>Logout</Button>
            </Box>
        </Box>
    )
};

export default NavBar;