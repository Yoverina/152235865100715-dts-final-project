import "@fontsource/orbitron/600.css"
import { Box, IconButton, Typography } from "@mui/material"

const title = {
    fontFamily:"orbitron",
    fontSize:"32px",
    fontWeight:"400",
    color:"#FFFFFF",
    marginLeft: "10px"
}

const container = {
    backgroundColor:"#222121",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "25px 50px 25px 50px"
}
const img = {
    width:"30px",
    height:"30px"
}

const Footer = () => {
    return (
        <Box style={container}>
            <img src="/logo.png" alt="logo" width="60px" height="60px"/>
            <Typography style={title}>COVIDY</Typography>
            <Typography margin="auto" color="primary" fontSize="12px">©2022 - Yoverina Nurdin - Made With ❤️</Typography>
            <Box>
                <IconButton aria-label="instagram" href="https://www.instagram.com/yoverina/" target="_blank">
                    <img src="/instagram.png" alt="instagram" style={img}/>
                </IconButton>
                <IconButton aria-label="linkedin" href="https://www.linkedin.com/in/yoverina" target="_blank">
                    <img src="/linkedin.png" alt="linkedin" style={img}/>
                </IconButton>
                <IconButton aria-label="facebook" href="https://www.facebook.com/yoverina.nurdin/" target="_blank">
                    <img src="/facebook.png" alt="facebook" style={img}/>
                </IconButton>
            </Box>
        </Box>
    )
}

export default Footer;