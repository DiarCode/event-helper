import React from "react";
import "./adminPage.css";
import Navbar from "../../components/Navbar/Navbar";
import CreateAdviceFields from "../../components/CreateAdviceFields/CreateAdviceFields";

const AdminPage = () => {
  return (
    <div className="adminPage">
      <Navbar />
      <div className="adminPage-content">
        <div className="adminPage-title">Admin panel</div>
        <CreateAdviceFields />
      </div>
    </div>
  );
};

export default AdminPage;
