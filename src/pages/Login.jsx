/* eslint-disable no-unused-vars */
//TODO: Import the important deps such as state hooks in react, UI component from bootstrap, Link and useNavigate hooks from router and useAuth from AuthProvider
import { useRef, useState } from "react";
import { Card, Alert, Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";
import { REALTIME_POSTGRES_CHANGES_LISTEN_EVENT } from "@supabase/supabase-js";
//TODO: Create the reference for temporary storage for email and password
const Login = () => {
  const email = useRef(null);
  const password = useRef(null);
  //TODO: Create the state hook for message, errorMessage, loading
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  //TODO: Create and initialise the navigate and login
  const navigate = useNavigate();
  //TODO: Access the login fucntion in AuthProvider
  const { login } = useAuth();
  //TODO: Create the handleSubmit function
  const handleSubmit = async (event) => {
    //TODO: Check all the field is field or not
    event.preventDefault();
    //TODO: After all the field is check completed field, passsed the password and email current value to the login function from useAuth and track the data and error using destructuring method
    try {
      setErrorMessage("");
      setLoading(true);
      if (!email.current?.value || !password.current?.value) {
        setErrorMessage("Please fill all the field");
        return;
      }
      //FIXME : Probem with destrucuting
      const { data, error } = await login(
        email.current.value,
        password.current.value
      );
      const { user, session } = data;
      //TODO: Check if error then setMessage to error.message
      if (error) {
        setErrorMessage(error.message);
      }
      //TODO: If the user and session is valid navigate to the the home page
      if (user && session) {
        navigate("/");
      }
    } catch (error) {
      //TODO: If the email or password incorrect detected then at catch block error setMessage
      setErrorMessage("Email or password incorrectr");
    }

    //TODO: is not loading yet
    setLoading(false);
  };

  return (
    // TODO: Setup the UI
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Login</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                ref={email}
                placeholder="Enter your email here"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                ref={password}
                placeholder="Enter your password"
                required
              />
            </Form.Group>
            {errorMessage && (
              <Alert
                variant="danger"
                onClose={() => {
                  setErrorMessage("");
                }}
                dismissible
              ></Alert>
            )}
            <div className="text-center mt-2">
              <Button disabled={loading} type="submit" className="w-50">
                Login
              </Button>
            </div>
          </Form>
        </Card.Body>
        <div className="w-100 text-center mt-2">
          New User? <Link to={"/register"}>Register</Link>
        </div>
      </Card>
    </>
  );
};

export default Login;
