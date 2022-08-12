import { useState } from "react";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";

const UpdateCategory = () => {
  const token = localStorage.getItem("jwtToken");
  const [adminInput, setAdminInput] = useState({
    categoryId: null,
    name: "",
  });

  const handleChange = (e) => {
    setAdminInput({
      ...adminInput,
      [e.target.name]: e.target.value,
    });
  };

  async function sendRequest() {
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: adminInput.name,
        id: adminInput.categoryId,
      }),
    };
    await fetch(
      `https://localhost:7139/api/categories/${adminInput.categoryId}`,
      requestOptions
    )
      .then((response) =>
        response.text().then((data) => ({
          status: response.status,
        }))
      )
      .then((res) => {
        console.log("add cat status code: " + res.status);
      });
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
      <h2>Update Category!</h2>
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
      <TextField
        name="name"
        onChange={handleChange}
        sx={{
          width: 450,
          marginBottom: "10px",
        }}
        id="outlined-textarea"
        label=" New Category Name"
        multiline
      />
      <br></br>
      <Button variant="outlined" onClick={sendRequest}>
        Update Category!
      </Button>
    </Box>
  );
};

export default UpdateCategory;
