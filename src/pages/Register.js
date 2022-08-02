import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Login.css";

const Register = () => {
  const clickHandler = () => {
    console.log("clickd!!");
  };

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
          onClick={clickHandler}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Register;
