import { useState } from "react";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import AdminService from "../../services/adminService";

const DeleteCategory = () => {
  let adminService = new AdminService();
  const token = localStorage.getItem("jwtToken");
  const [adminInput, setAdminInput] = useState({
    categoryId: null,
  });
  const handleChange = (e) => {
    setAdminInput({
      ...adminInput,
      [e.target.name]: e.target.value,
    });
  };

  async function sendRequest() {
    console.log(adminInput);
    adminService.deleteCategory(adminInput.categoryId, token);
  }

  return (
    <Box
      sx={{
        display: "block",
        margin: "0 auto",
        paddingBottom: "2rem",
        width: 1140,
      }}
    >
      <h2>Delete Category!</h2>
      <TextField
        name="categoryId"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        onChange={handleChange}
        sx={{
          width: 450,
          marginBottom: "10px",
          marginTop: "10px",
        }}
        id="outlined-textarea"
        label="Category Id"
        multiline
      />
      <br></br>
      <Button variant="outlined" onClick={sendRequest}>
        Delete Category!
      </Button>
    </Box>
  );
};

export default DeleteCategory;
