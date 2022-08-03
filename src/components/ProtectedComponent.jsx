import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../auth/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "./Loading";
import { Box } from "@mui/material";

const ProtectedComponent = ({ children }) => {
  const navigate = useNavigate();
  const [user, isLoading] = useAuthState(auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }
    if (isLoading) {
      return;
    }
  }, [user, navigate, isLoading]);

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center">
        <Loading />
      </Box>
    );
  } else {
    return children;
  }
};

export default ProtectedComponent;
