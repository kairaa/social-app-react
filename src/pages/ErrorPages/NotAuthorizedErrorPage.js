import { Box, Button } from "@mui/material";
import { Link, Navigate, useNavigate } from "react-router-dom";

const NotAuthorizedErrorPage = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <p>You're not authorized to perform this operation</p>
      <Button
        style={{
          width: "20rem",
          height: "4rem",
        }}
        variant="contained"
        size="large"
        color="error"
        onClick={() => {
          navigate("/");
        }}
      >
        Home Page
      </Button>
    </Box>
  );
};

export default NotAuthorizedErrorPage;
