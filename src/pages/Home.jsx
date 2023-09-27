/* eslint-disable no-unused-vars */
//TODO: Create the homepage for authenticated users and
import React from "react";
import { useAuth } from "../contexts/AuthProvider";

function Home() {
  const { user } = useAuth();
  return <div>You are logged in and your email address is {user.email}</div>;
}

export default Home;
