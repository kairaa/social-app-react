import React from "react";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem("jwtToken");
  return token !== null ? (
    <Component></Component>
  ) : (
    <Navigate to="/login" replace></Navigate>
  );
};

export default PrivateRoute;
