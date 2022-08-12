import { useState, useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import PostService from "../../../services/postService";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import { Button, Paper } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import jwtDecode from "jwt-decode";

const UpdatePostForm = () => {
  const token = localStorage.getItem("jwtToken");
  const decode = token ? jwtDecode(token) : null;
  const userId = token ? decode.uid : null;
  const params = useParams();
  const [post, setPost] = useState([]);
  const [userInput, setUserInput] = useState([]);
  useEffect(() => {
    let postService = new PostService();
    postService.getPostById(params.id).then((result) => {
      setPost(result.data);
    });
  }, []);
  if (post.length === 0) {
    return (
      <div>
        <p>404! No post found for this id</p>
      </div>
    );
  }
  if (post.apiUserId !== decode.uid) {
    return <Navigate to="/"></Navigate>;
  }

  const handleChange = (e) => {
    setUserInput({
      ...userInput,
      [e.target.name]: e.target.value,
    });
  };

  async function sendRequest() {
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        title: userInput.title ? userInput.title : post.title,
        context: userInput.context ? userInput.context : post.context,
        postDate: new Date(),
        apiUserId: post.apiUserId,
        categoryId: post.categoryId,
        id: params.id,
      }),
    };
    await fetch(
      `https://localhost:7139/api/posts/${params.id}`,
      requestOptions
    ).then((response) =>
      response
        .text()
        .then((data) => ({
          status: response.status,
        }))
        .then((res) => {
          console.log("status code: " + res.status);
        })
    );
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
      <h2>Update Post!</h2>
      <TextField
        name="title"
        label="Post Title"
        defaultValue={post.title}
        onChange={handleChange}
        sx={{
          width: 450,
        }}
        id="outlined-textarea"
      />
      <TextField
        sx={{
          width: 975,
          margin: "10px auto",
        }}
        label="Post Context"
        defaultValue={post.context}
        name="context"
        onChange={handleChange}
        id="outlined-multiline-static"
        multiline
        rows={4}
      />
      <br></br>
      <br></br>
      <Button variant="outlined" onClick={sendRequest}>
        Update Post!
      </Button>
    </Box>
  );
};

export default UpdatePostForm;
