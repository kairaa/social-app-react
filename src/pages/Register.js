import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Login.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  async function sendRequest() {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        userName: "kayra11",
        password: "Aa7waw37x.",
        firstName: "Kayra",
        lastName: "Çakıroğlu",
        email: "user@example.com",
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
            alert("Basarili bir sekilde kayit oldun!");
            <Link to={"/login"}></Link>;
          } else {
            alert("Biseler yanlis!");
          }
        })
    );
  }

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
