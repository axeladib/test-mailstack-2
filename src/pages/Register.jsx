/* eslint-disable no-unused-vars */
//TODO: Import the important deps
import { useRef, useState } from "react";
import { Alert, Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { supabase } from "../helpers/supabase";

const Register = () => {
  //TODO: Create state for err message, message, loading
  const [errorMessage, setErrorMessage] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  //TODO: Create initial value reference for email, password and comfirmPassword
  const email = useRef(null);
  const password = useRef(null);
  const comfirmPassword = useRef(null);
  //TODO: Create the function for register using the supabase auth.signup
  const register = (email, password) => {
    supabase.auth.signUp({ email, password });
  };
  //TODO: Create the function for handleSubmit when the user click submit button
  const handleSubmit = async (event) => {
    event.preventDefault();
    //TODO: handleSubmit> check if all the form element is been filled by the user using if statement and chaining to check the value of all element
    if (
      !password.current?.value ||
      !email.current?.value ||
      !comfirmPassword.current?.value
    ) {
      //TODO: If the error detected, return the error inside the errorMessage variable
      setErrorMessage("Please filled all the fields");
      return;
    }
    //TODO: Check also if the password is not match
    if (password.current?.value !== comfirmPassword.current?.value) {
      setErrorMessage("Password does not match");
      return;
    }
    try {
      setErrorMessage("");
      setLoading(true);
      const { data, error } = await register(
        email.current.value,
        password.current.value
      );
      if (!error && data) {
        setMessage(
          "Regsitration successfull. Check your email to comfirm the account"
        );
      }
    } catch (error) {
      setErrorMessage("Error in creating account");
    }
    //TODO: After all the 2 condition is checked, then use the registed function to pass the email and password to the supabase signup function
    //TODO: Check if there is error or not , if error return error message if not return successful statement
  };

  //TODO: Creating the UI
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Register</h2>
        </Card.Body>
      </Card>
    </>
  );
};
