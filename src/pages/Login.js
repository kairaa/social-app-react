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

const Login = () => {
  const MySwal = withReactContent(Swal);
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState("");
  let isSuccesfull = false;
  const [userInput, setUserInput] = useState({
    username: "",
    password: "",
    showPassword: false,
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
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        userName: userInput.username,
        password: userInput.password,
      }),
    };
    await fetch(
      "https://localhost:7139/api/account/login",
      requestOptions
    ).then((response) =>
      response
        .json()
        .then((data) => ({
          status: response.status,
          data: data,
        }))
        .then((res) => {
          console.log("status code: " + res.status);
          if (res.status === 200) {
            setToken(res.data.token);
            setUserId(res.data.userID);
            isSuccesfull = true;
            localStorage.setItem("jwtToken", res.data.token);
          } else {
            setToken("");
            setUserId("");
            isSuccesfull = false;
          }
        })
    );
    //console.log("local storage jwt: " + localStorage.getItem("jwtToken"));

    //bunun yerine localStorage.getItem("jwtToken") > 0 koyulabilir
    if (isSuccesfull) {
      MySwal.fire({
        title: <p>Succesfully Logged In!</p>,
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
    console.log(userInput);
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
      <h2>Login!</h2>
      <TextField
        name="username"
        label="username"
        onChange={handleChange}
      ></TextField>
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
        Log In!
      </Button>
      <Link to={"/register"}>Don't you have an account?</Link>
    </Box>
  );
};

export default Login;
