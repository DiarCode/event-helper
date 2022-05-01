import React from "react";
import "./profileModal.css";
import useUserData from "../Hooks/useUserData";
import { useCookies } from "react-cookie";

const ProfileModal = ({ isActive, setIsActive }) => {
  // eslint-disable-next-line
  const [cookies, setCookies, removeCookie] = useCookies();
  const userFetchedData = useUserData();

  function logoutAccount() {
    removeCookie("userAuthData");
    window.location.reload(false);
  }

  function handleUserName() {
    if (userFetchedData) {
      const name = userFetchedData.userName;
      return name;
    }
    return "Loading";
  }

  return (
    <div className={isActive ? "profileModalActive" : "profileModal"}>
      <div className="profileModal-content">
        <div className="profileModal-name">{handleUserName()}</div>
        <div className="profileModal-logout">
          <button onClick={logoutAccount}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
