import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Login = () => {
  const clickHandler = () => {
    console.log("clicked!!");
  };

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
          onClick={clickHandler}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
