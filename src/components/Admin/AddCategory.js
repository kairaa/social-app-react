import { useState } from "react";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";

const AddCategory = () => {
  const token = localStorage.getItem("jwtToken");
  const [adminInput, setAdminInput] = useState({
    name: "",
  });
  const handleChange = (e) => {
    setAdminInput({
      ...adminInput,
      [e.target.name]: e.target.value,
    });
  };

  async function sendRequest() {
    console.log(adminInput);
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: adminInput.name,
      }),
    };
    await fetch("https://localhost:7139/api/categories", requestOptions)
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
      <h2>Create a new Category!</h2>
      <TextField
        name="name"
        onChange={handleChange}
        sx={{
          width: 450,
        }}
        id="outlined-textarea"
        label="Category Name"
        multiline
      />
      <br></br>
      <Button variant="outlined" onClick={sendRequest}>
        Create Category!
      </Button>
    </Box>
  );
};

export default AddCategory;
