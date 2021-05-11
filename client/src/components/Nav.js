import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { LoginUserContext } from "./context/LoginUserContext";
import NavButton from "./NavButton";
import NavDashbord from "./NavDashbord";
import NavLogged from "./NavLoggedButton";

const Nav = (props) => {
  let history = useHistory();
  const { userLoginId, setUserLoginId } = useContext(LoginUserContext);

  return (
    <div className="fixed-top nav-container-main">
      <nav className="navbar navbar-dark bg-dark subNavBar">

            <b><h2 className="nav-h2">E<span>MAGE</span></h2></b>

        <div className="heading-part">
          <div className="user">
            {userLoginId > 0 ? (
              userLoginId === 2 ? (
                <NavDashbord />
              ) : (
                <NavLogged />
              )
            ) : (
              <NavButton />
            )}
          </div>
          <div className="cart-display">
            <Link to="/cart">
              <i className="fas fa-shopping-cart fa-2x item1" />
            </Link>
            <Link to="/">
              <i className="fas fa-home fa-2x" />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Nav;
