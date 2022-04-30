import React from "react";
import { Outlet } from "react-router-dom";
import useAuth from "../../../components/Hooks/useAuth";
import LoginPage from "../../LoginPage/LoginPage";

const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <LoginPage />;
};

export default ProtectedRoutes;
