/* eslint-disable no-unused-vars */
import React from "react";
import { useAuth } from "../contexts/AuthProvider";
import { Navigate, Outlet, useLocation } from "react-router-dom";

function AuthRoute() {
  //TODO: Fetch the user data from useAuth hook
  const { user } = useAuth();
  const location = useLocation();

  return user ? (
    <>
      {/* //TODO: Direct the user to protected component */}
      <Outlet />
    </>
  ) : (
    // TODO: If the user is not exist redirect to /login page
    <Navigate to={"/login"} replace state={{ path: location.pathname }} />
  );
}

export default AuthRoute;
