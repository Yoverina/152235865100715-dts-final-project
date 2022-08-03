import React from 'react';
import { Box, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useCountriesQuery } from "../services/rapidAPI";
import Loading from '../components/Loading';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const title = {
    fontWeight: "900",
    fontSize: "32px"
}

const ListAllCountry = () => {
    const [countries, setCountries] = useState([]);
    const { data, error, isLoading } = useCountriesQuery();
    useEffect(()=>{
        console.log("data: ", data);
        console.log("error: ", error);
        console.log("isLoading: ", isLoading);
        if(data){
            setCountries(data.response)
        }
    },
    [data, error, isLoading]);

    return(
        <>
        <NavBar></NavBar>
        <Box display= "flex" alignItems="center" flexDirection="column" mt={5}>
            <Typography style={title}>List of All Country</Typography>
            <Typography>Select one to see details</Typography>
            <Box display="flex" flexDirection="row" justifyContent="center" flexWrap="wrap" mt={5} px={15}>
                { isLoading ? <Paper sx={{ m: 1.5 }} elevation={5}><Loading/></Paper> : 
                (
                    countries.map((country)=>(
                        // <Button key={country} color='primary' width="150px" onClick={() => buttonDetailsCountryHandler(country)}>{country}</Button>                      
                        // <Typography component={Link} to="/country-details/"  style={{ textDecoration: 'none', color: 'secondary.main'}}>{country}</Typography>
                        <Link key={country} to={`/country-details/${country}`} style={{ textDecoration: 'none', color: 'secondary', fontSize:"18px"}}>
                            <Paper  sx={{ display:"flex", m: 1, width: "200px", height: "50px", p: 1.5, justifyContent:"center", alignItems:"center", fontSize:"18px"}} elevation={5}>
                                {country}
                            </Paper>
                        </Link>
                                
                                
                    )
                    )   
                )  
                }
            </Box>
        </Box>
        <Footer></Footer>
        </>

        
    )
};

export default ListAllCountry