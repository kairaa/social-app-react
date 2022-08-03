import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Login = () => {
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState("");
  let navigate = useNavigate();
  async function sendRequest() {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        userName: "kaira",
        password: "Aa7waw37x.",
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
          } else {
            setToken("");
            setUserId("");
          }
        })
    );
    console.log("token: " + token);
    console.log("user id: " + userId);

    // if (token) {
    //   alert("Succesfull");
    //   // let path = `/login`;
    //   // navigate(path);
    // } else {
    //   alert("Check your inputs again");
    // }
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
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
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
    </div>
  );
};

export default Login;
