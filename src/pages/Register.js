import Form from "react-bootstrap/Form";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Button } from "@mui/material";

const Register = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  let isSuccesfull = false;
  const [userInput, setUserInput] = useState({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserInput({
      ...userInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleClickShowPassword = () => {
    setUserInput({
      ...userInput,
      showPassword: !userInput.showPassword,
    });
  };

  let navigate = useNavigate();
  async function sendRequest() {
    console.log("username: " + userInput.username);
    console.log("password: " + userInput.password);
    console.log("username: " + userInput.firstname);
    console.log("password: " + userInput.lastname);
    console.log("username: " + userInput.email);
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        userName: userInput.username,
        firstName: userInput.lastname,
        lastName: userInput.email,
        email: userInput.email,
        password: userInput.password,
      }),
    };
    await fetch(
      "https://localhost:7139/api/account/register",
      requestOptions
    ).then((response) =>
      response
        .text()
        .then((data) => ({
          status: response.status,
        }))
        .then((res) => {
          console.log("status code: " + res.status);
          if (res.status === 200) {
            setIsRegistered(true);
            isSuccesfull = true;
            console.log(isRegistered);
          } else {
            console.log(response.statusText);
            setIsRegistered(false);
            console.log(isRegistered);
          }
        })
    );

    if (isSuccesfull) {
      alert("Succesfull");
      let path = `/login`;
      navigate(path);
    } else {
      alert("Check your inputs again");
    }
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "450px",
        margin: "40px auto",
        gap: "20px",
      }}
    >
      <h2>Register!</h2>
      <TextField
        name="username"
        label="username"
        onChange={handleChange}
      ></TextField>
      <TextField
        name="firstname"
        label="firstname"
        onChange={handleChange}
      ></TextField>
      <TextField
        name="lastname"
        label="lastname"
        onChange={handleChange}
      ></TextField>
      <TextField name="email" label="email" onChange={handleChange}></TextField>
      <OutlinedInput
        type={userInput.showPassword ? "text" : "password"}
        value={userInput.password}
        name="password"
        label="Password"
        onChange={handleChange}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
            >
              {userInput.showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
      <Button variant="outlined" onClick={sendRequest}>
        Register!
      </Button>
      <Link to={"/register"}>Do you have an account?</Link>
    </Box>
  );
};

export default Register;

/*
(
    <div className="container mt-5 mx-auto">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your username"
            name="username"
            onChange={handleChange}
          />
          <Form.Label>Firstname</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your firstname"
            name="firstname"
            onChange={handleChange}
          />
          <Form.Label>Lastname</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your lastname"
            name="lastname"
            onChange={handleChange}
          />
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
        </Form.Group>
        <Button
          variant="primary"
          // type="submit"
          onClick={sendRequest}
        >
          Submit
        </Button>
      </Form>
      <Link to={"/login"}>Do you have an account?</Link>
    </div>
  );
*/
