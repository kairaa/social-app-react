import { Box, Button } from "@mui/material";
import { Link, Navigate, useNavigate } from "react-router-dom";

const NotFoundErrorPage = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <p>The page that you're looking for is not found</p>
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

export default NotFoundErrorPage;
