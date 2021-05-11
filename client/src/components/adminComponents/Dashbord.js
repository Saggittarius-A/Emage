import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { LoginUserContext } from "../context/LoginUserContext";

const Dashbord = () => {
  const { userLoginId, setUserLoginId } = useContext(LoginUserContext);

  return (
    <React.Fragment>
    <div className="dash-main" >
      <h2 className="he">Dashboard</h2>
      <div className="basf">
      <div className="dash-card">
      <h2>see users Details</h2>
      <Link to="/users">
        <button className="btn btn-warning">Users</button>
      </Link></div>
      <div className="dash-card">
      <h2>All Images uploaded</h2>
      <Link to="/products">
        <button className="btn btn-success">Photos</button>
      </Link></div>
      <div className="dash-card">
      <h2>Price v/s Size Chart</h2>
      <Link to="/sizes">
        <button className="btn btn-success">Size chart</button>
      </Link></div>
      <div className="dash-card">
      <h2>Current orders </h2><Link to="/order">
        <button className="btn btn-warning">Orders</button>
      </Link></div>
      <div className="dash-card">
      <h2>Total shipping detail</h2><Link to="/billedItems">
        <button className="btn btn-success">Report</button></Link>
        </div>
    </div>
    </div>
    </React.Fragment>
  );
};

export default Dashbord;
