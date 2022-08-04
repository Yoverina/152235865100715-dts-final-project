import { useNavigate } from "react-router-dom";
import { auth } from "../auth/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "./Loading";
import { Box } from "@mui/material";

const ProtectedComponent = ({ children, loginOnly = true }) => {
  const navigate = useNavigate();
  const [user, isLoading] = useAuthState(auth);

  if (!user && loginOnly) {
    navigate("/login");
    return;
  }
  if (user && !loginOnly) {
    navigate("/");
    return;
  }

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center">
        <Loading />
      </Box>
    );
  }
  return children;
};

export default ProtectedComponent;
