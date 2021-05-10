import React, { useContext, useState, useEffect } from "react";
import Signup from "./Signup";
import Login from "./Login";
import { UsersContext } from "./context/UseridContext";
import Intro from './Intro';
import { LoginUserContext } from "./context/LoginUserContext";
import Portfolio from "./Portfolio";

const Home = (props) => {
  const { userLoginId, setUserLoginId } = useContext(LoginUserContext);

  let reguser = props.location.state;
  let userData = props.userData;

  const [userID, setUserId] = useState(props.location.state);

  return (
    <React.Fragment>
      <main>
        
        <div className="banner container-full">
          <div className="banner-content">
           
            <div
              id="carouselExampleSlidesOnly"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active" data-interval="2000">
                  <div className="banner-text text1">
                    <h5> Best paper Quality !</h5>
                    <h2>Free Shipping! Hurry UP</h2>
                    <p>valid until 25th of May</p>
                  </div>
                </div>
                <div className="carousel-item" data-interval="2000">
                  <div className="banner-text text2">
                    <h5>ContactLess Delivery!</h5>
                    <h2>Only Organic Paper is Used</h2>
                    <p>Environment Friendly</p>
                  </div>
                </div>
                <div className="carousel-item" data-interval="2000">
                  <div className="banner-text text3">
                    <h5>Special Dhamaka</h5>
                    <h2>Hd version also available</h2>
                    <p>Strating from 25th of May</p>
                  </div>
                </div>
              </div>
            </div>
          </div> <Intro></Intro>
          <img src="./images/bannar1.jpg" alt="" />
        </div>
      <Portfolio></Portfolio>
        <div className="services main-container">
          <div className="services-items">
            <div className="service">
              <img src="./images/service1.png" alt="" />
              <h5>free shipping</h5>
            </div>
            <div className="service">
              <img src="./images/service2.png" alt="" />
              <h5>Contactless delivery</h5>
            </div>
            <div className="service">
              <img src="./images/service3.png" alt="" />
              <h5>secured payment</h5>
            </div>
            <div className="service">
              <img src="./images/service4.png" alt="" />
              <h5>24/7 support</h5>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Home;
