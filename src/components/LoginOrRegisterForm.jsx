import {
  Box,
  Button,
  Typography,
  TextField,
  Alert,
  AlertTitle,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "../auth/firebase";
import Loading from "./Loading";

const LoginOrRegisterForm = ({ action }) => {
  const navigate = useNavigate();
  const [user, isLoading, isFetching] = useAuthState(auth);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const registerHandler = async (email, pass) => {
    try {
      await createUserWithEmailAndPassword(auth, email, pass);
    } catch (error) {
      setErrorMsg(error.message);
    }
  };
  const loginHandler = async (email, pass) => {
    try {
      await signInWithEmailAndPassword(auth, email, pass);
    } catch (error) {
      setErrorMsg(error.message);
    }
  };
  const buttonLoginOrRegisterOnClickHandler = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const pass = data.get("password");
    if (action === "login") {
      loginHandler(email, pass);
    } else {
      registerHandler(email, pass);
    }
  };

  const title = {
    fontFamily: "orbitron",
    fontSize: "24px",
    fontWeight: "400",
    marginBottom: "20px",
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      flexDirection="column"
    >
      <img src="/logo.png" alt="logo" width="7%" />
      <Typography color="primary.main" style={title}>
        COVIDY
      </Typography>
      {!user && (isLoading || isFetching) ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100vh"
        >
          <Loading />
        </Box>
      ) : (
        <Box
          width="30%"
          padding={5}
          display="flex"
          flexDirection="column"
          borderColor="primary.main"
          border={1.5}
          borderRadius={2}
        >
          <Typography component="h1" variant="h5">
            {action === "login" ? "Login" : "Register Account"}
          </Typography>
          <Box
            component="form"
            onSubmit={buttonLoginOrRegisterOnClickHandler}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              label="Email Address"
              name="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              name="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ backgroundColor: "#eb5e55", mt: 3, mb: 2 }}
            >
              {action === "login" ? "Login" : "Register Account"}
            </Button>
          </Box>
          {errorMsg ? (
            <Alert severity="error" style={{ marginBottom: 20 }}>
              <AlertTitle>
                <strong>ERROR</strong>
              </AlertTitle>
              {errorMsg}
            </Alert>
          ) : (
            ""
          )}
          {user ? (
            <Alert severity="success" style={{ marginBottom: 20 }}>
              <AlertTitle>
                <strong>Success</strong>
              </AlertTitle>
              Loading...
            </Alert>
          ) : (
            ""
          )}
          {action === "login" ? (
            <Typography>
              Don't have an account?
              <Link
                style={{ textDecoration: "none", marginLeft: 5 }}
                to="/register"
                variant="body2"
              >
                Sign Up
              </Link>
            </Typography>
          ) : (
            <Typography>
              Have an account?
              <Link
                style={{ textDecoration: "none", marginLeft: 5 }}
                to="/login"
                variant="body2"
              >
                Login
              </Link>
            </Typography>
          )}
        </Box>
      )}
    </Box>
  );
};

export default LoginOrRegisterForm;
