import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { LoginUserContext } from "./context/LoginUserContext";
import Axios from "axios";

export default function NavLoggedButton() {
  const { userLoginId, setUserLoginId } = useContext(LoginUserContext);
  let history = useHistory();

  const UserLogout = () => {
    setUserLoginId(0);
    localStorage.clear();
    history.push({
      pathname: "/",
      state: 0,
    });
  };

  return (
    <div>
       <Link to="/newProduct">
       <button className="btn btn-outline-warning mr-2">Upload</button>
        </Link>
      
      <Link to="/Gallery">
      <button className="btn btn-outline-warning mr-2" >Your Gallery</button>
        </Link>
      <Link to="/track">
        <button className="btn btn-outline-warning mr-2">Track order</button>
      </Link>
      <button className="btn btn-outline-warning mr-2" onClick={UserLogout}>
        LogOut
      </button>
    </div>
  );
}
