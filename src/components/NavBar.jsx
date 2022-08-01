import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom"; 
import { logout } from "../auth/firebase";

const NavBar = () => {
    const navigate = useNavigate();
    const buttonLogoutOnClickHandler = async() => {
        await logout();
        navigate("/login");
    };
    return (
        <Box sx={{backgroundColor: 'black'}}>
            <Button color="primary" onClick={buttonLogoutOnClickHandler}>Logout</Button>
        </Box>
    )
};

export default NavBar;