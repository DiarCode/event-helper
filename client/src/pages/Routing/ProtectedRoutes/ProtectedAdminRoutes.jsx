import React from "react";
import { Outlet } from "react-router-dom";
import { useAdmin } from "../../../components/Hooks/useAdmin";
import AboutPage from "../../AboutPage/AboutPage";

const ProtectedAdminRoutes = () => {
  const isAdmin = useAdmin();
  return isAdmin ? <Outlet /> : <AboutPage />;
};

export default ProtectedAdminRoutes;
