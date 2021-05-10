import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { LoginUserContext } from "./context/LoginUserContext";
import Axios from "axios";
import AllProducts from "./AllProducts";

const Gallery = (props) => {
  let history = useHistory();
  let reguser = props.location.state;


  return (
    <div className="main-container mt-4">
    <h1 className="users">Your Gallery</h1>
    <h2 className="mt-4">All Uploads</h2>
    <AllProducts reguser={reguser} />
  </div>
  );
};


export default Gallery;
