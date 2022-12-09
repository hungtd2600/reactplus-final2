import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const avatar = localStorage.getItem("avatar");
  return avatar ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
