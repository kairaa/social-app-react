import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState("");
  const [userInput, setUserInput] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserInput({
      ...userInput,
      [e.target.name]: e.target.value,
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
            localStorage.setItem("jwtToken", res.data.token);
          } else {
            setToken("");
            setUserId("");
          }
        })
    );
    //console.log("local storage jwt: " + localStorage.getItem("jwtToken"));

    //bunun yerine localStorage.getItem("jwtToken") > 0 koyulabilir
    if (token.length > 0) {
      alert("Succesfull");
      let path = `/`;
      navigate(path);
      window.location.reload();
    } else {
      alert("Check your inputs again");
    }
  }

  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your username"
            name="username"
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
      <Link to={"/register"}>Don't you have an account?</Link>
    </div>
  );
};

export default Login;
