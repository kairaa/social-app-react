import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Button } from "@mui/material";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Register = () => {
  const MySwal = withReactContent(Swal);
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

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
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
      MySwal.fire({
        title: <p>Succesfully Registered!</p>,
        icon: "success",
      }).then(() => {
        let path = "/";
        navigate(path);
        window.location.reload();
      });
    } else {
      MySwal.fire({
        title: <p>Check your Inputs Again!</p>,
        icon: "error",
      });
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
      <TextField
        type="email"
        name="email"
        label="email"
        onChange={handleChange}
      ></TextField>
      <OutlinedInput
        type={userInput.showPassword ? "text" : "password"}
        value={userInput.password}
        name="password"
        onChange={handleChange}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {userInput.showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label="password"
      />
      <Button variant="outlined" onClick={sendRequest}>
        Register!
      </Button>
      <Link to={"/login"}>Do you have an account?</Link>
    </Box>
  );
};

export default Register;
