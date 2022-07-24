import { Box, Button, Typography, Container, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useAuthState } from "react-firebase-hooks/auth"

import { auth, registerWithEmailAndPass, loginWithEmailAndPassword } from "../auth/firebase"

const LoginOrRegisterForm = ({ action }) => {
  const navigate = useNavigate();
  const [user, isLoading, error] = useAuthState(auth);
  const [credential, setCredential] = useState({
    email: "",
    password: ""
  });

  const emailOnChangeHandler = (event) => {
    setCredential({
      ...credential,
      email: event.target.value
    });
  };

  const passOnChangeHandler = (event) => {
    setCredential({
      ...credential,
      password: event.target.value
    });
  };

  const registerHandler = () =>{
    registerWithEmailAndPass(credential.email, credential.password);
  };
  const loginHandler = () => {
    loginWithEmailAndPassword(credential.email, credential.password);   
  };
  const buttonLoginOrRegisterOnClickHandler = () => {
    if(action === "login"){
      loginHandler();
    } else{
      registerHandler();
    }
  }

  useEffect(() =>{
    console.log("current user: ", user);
    if(isLoading){
      //bisa return loading page disini
      return ;
    }
    if(user){
      navigate("/");
    }
  },
  [user, isLoading, navigate]);
  return (
    <Container component="main" maxWidth="xs">
      <Typography component="h1" variant="h5">
        {action === "login" ? "Login" : "Register Account"}
      </Typography>
      <Box component="form" noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          label="Email Address"
          autoFocus
          value={credential.email}
          onChange={emailOnChangeHandler}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          label="Password"
          type="password"
          autoComplete="current-password"
          value={credential.password}
          onChange={passOnChangeHandler}
        />
        <Button
          fullWidth
          variant="contained" onClick={buttonLoginOrRegisterOnClickHandler}
          sx={{ mt: 3, mb: 2 }}
        >
          {action === "login" ? "Login" : "Register Account"}
        </Button>
      </Box>
      {action === "login" ? 
        (<Typography>
          Don't have an account?
          <Link style={{marginLeft: 5}} to="/register" variant="body2">Sign Up</Link>
        </Typography>
        ) : <Typography>
        Have an account?
        <Link style={{marginLeft: 5}} to="/login" variant="body2">Login</Link>
      </Typography>
      }
    </Container>
  );
};

export default LoginOrRegisterForm;
