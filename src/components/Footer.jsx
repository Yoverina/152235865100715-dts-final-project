import "@fontsource/orbitron/600.css"
import { Box, IconButton, Typography } from "@mui/material"

const title = {
    fontFamily:"orbitron",
    fontSize:"32px",
    fontWeight:"400",
    color:"#FFFFFF",
}

const container = {
    backgroundColor:"#222121",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "25px 50px 25px 50px",
    justifyContent: "space-between"
}
const icon = {
    width:"30px",
    height:"30px"
}
const subtitle = {
    fontFamily: "inter",
    fontSize: "12px",
    fontWeight: 100,
    fontStyle: "italic",
    color: "#FFFFFF"
}

const Footer = () => {
    return (
        <Box style={container}>
            <Box display="flex" flexDirection="row" alignItems="center">
            <img src="/logo.png" alt="logo" width="60px" height="60px"/>
                <Box display="flex" flexDirection="column" marginLeft="10px">
                    <Typography style={title}>COVIDY</Typography>
                    <Typography style={subtitle}>Providing Covid-19 Information</Typography>
                    <Typography style={subtitle}>All Around The World</Typography>
                </Box>
            </Box>
            <Typography color="primary" fontSize="16px">©2022 - Yoverina Nurdin - Made With ❤️</Typography>
            <Box>
                <IconButton aria-label="instagram" href="https://www.instagram.com/yoverina/" target="_blank">
                    <img src="/instagram.png" alt="instagram" style={icon}/>
                </IconButton>
                <IconButton aria-label="linkedin" href="https://www.linkedin.com/in/yoverina" target="_blank">
                    <img src="/linkedin.png" alt="linkedin" style={icon}/>
                </IconButton>
                <IconButton aria-label="facebook" href="https://www.facebook.com/yoverina.nurdin/" target="_blank">
                    <img src="/facebook.png" alt="facebook" style={icon}/>
                </IconButton>
            </Box>
        </Box>
    )
}

export default Footer;