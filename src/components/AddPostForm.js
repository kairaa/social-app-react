import { Button, Paper } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import CategoryService from "../services/categoryService";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";

const AddPostForm = () => {
  const token = localStorage.getItem("jwtToken");
  const [categories, setCategories] = useState([]);
  const [userCategory, setUserCategory] = useState("");
  const decode = token ? jwtDecode(token) : null;

  const [userInput, setUserInput] = useState({
    title: "",
    context: "",
  });

  useEffect(() => {
    let categoryService = new CategoryService();
    categoryService.getAllCategories().then((result) => {
      setCategories(result.data);
    });
  }, []);

  let categoryItems = [];
  categories.forEach((category) => {
    categoryItems.push(
      <MenuItem value={category.id}>{category.name}</MenuItem>
    );
  });

  const handleSelect = (e) => {
    setUserCategory(e.target.value);
  };

  const handleChange = (e) => {
    setUserInput({
      ...userInput,
      [e.target.name]: e.target.value,
    });
  };

  async function sendRequest() {
    console.log("password: " + userInput.title);
    console.log("username: " + userInput.context);
    console.log(decode.uid);
    console.log(new Date());
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        title: userInput.title,
        context: userInput.context,
        postDate: new Date(),
        apiUserId: decode.uid,
        categoryId: userCategory,
      }),
    };
    await fetch("https://localhost:7139/api/posts", requestOptions).then(
      (response) =>
        response
          .text()
          .then((data) => ({
            status: response.status,
          }))
          .then((res) => {
            console.log("status code: " + res.status);
            console.log(response.statusText);
          })
    );
    window.location.reload();
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
      <h2>Send a Post!</h2>
      <TextField
        name="title"
        onChange={handleChange}
        sx={{
          width: 450,
        }}
        id="outlined-textarea"
        label="Post Title"
        multiline
      />
      <TextField
        sx={{
          width: 975,
          margin: "10px auto",
        }}
        name="context"
        onChange={handleChange}
        id="outlined-multiline-static"
        label="Post Context"
        multiline
        rows={4}
      />
      <br></br>
      <InputLabel id="demo-simple-select-label">Category</InputLabel>
      <Select
        style={{
          width: "150px",
          margin: "10px auto",
        }}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={userCategory}
        label="Category"
        onChange={handleSelect}
      >
        {categoryItems}
      </Select>
      <br></br>
      <Button variant="outlined" onClick={sendRequest}>
        Send Post!
      </Button>
    </Box>
  );
};

export default AddPostForm;
