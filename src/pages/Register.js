import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Login.css";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const Register = () => {
  const [res, setRes] = useState([]);

  // let user = {
  //   userName: "kayra5",
  //   password: "Aa7waw37x.",
  //   firstName: "Kayra",
  //   lastName: "Çakıroğlu",
  //   email: "user@example.com",
  // };

  // const sendRequest = useCallback(async () => {
  //   if (isSending) return;
  //   setIsSending(true);
  //   await axios
  //     .post("https://localhost:7139/api/account/register", user)
  //     .then((result) => {
  //       setRes(result.data);
  //     });
  //   setIsSending(false);
  //   console.log(res);
  //   console.log(typeof res);
  //   console.log(res.data);
  //   console.log(res.status);
  // });

  async function sendRequest() {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        userName: "kayra9",
        password: "Aa7waw37x.",
        firstName: "Kayra",
        lastName: "Çakıroğlu",
        email: "user@example.com",
      }),
    };
    const response = await fetch(
      "https://localhost:7139/api/account/register",
      requestOptions
    );
    if (response.status == 400) {
      console.log(
        "bişeyler eksik!! kendine çeki düzen ver öyle kaydını yapalım, piç"
      );
    }
    console.log(response);
  }

  //DuplicateUserName
  // const clickHandler = () => {
  //   useEffect(() => {
  //     axios
  //       .post("https://localhost:7139/api/account/register", user)
  //       .then((result) => {
  //         setRes(result.data);
  //       });
  //   }, []);
  // };

  return (
    <div className="container mt-5 mx-auto">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your username"
            name="username"
          />
          <Form.Label>Firstname</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your firstname"
            name="firstname"
          />
          <Form.Label>Lastname</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your lastname"
            name="lastname"
          />
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
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

export default Register;
