import React from "react";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem("jwtToken");
  return token === null ? (
    <Navigate to="/login" replace></Navigate>
  ) : (
    <Component></Component>
  );
};

export default PrivateRoute;
