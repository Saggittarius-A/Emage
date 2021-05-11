import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Signup from "./components/Signup";
import { LoginUserContext } from "./components/context/LoginUserContext";
import {EmailContext} from "./components/context/EmailContext";
import Dashbord from "./components/adminComponents/Dashbord";
import Home from "./components/Home";
import Login from "./components/Login";
import Item from "./components/Item";
import Cart from "./components/Cart";
import NewPerson from "./components/adminComponents/NewPerson";
import Users from "./components/adminComponents/Users";
import Products from "./components/adminComponents/Products";
import NewProduct from "./components/adminComponents/NewProduct";
import UpdateProduct from "./components/adminComponents/UpdateProduct";
import UpdateUser from "./components/adminComponents/UpdateUser";
import Cash from "./components/payments/Cash";
import Visa from "./components/payments/Visa";
import Track from "./components/Track";
import prices from "./components/Prices";
import Sizes from "./components/adminComponents/Sizes"
import UpdatePrices from "./components/adminComponents/UpdatePrices";
import NewSize from "./components/adminComponents/NewSize";
import Orders from "./components/adminComponents/Orders";
import UpdateOrder from "./components/adminComponents/UpdateOrder";
import BilledItems from "./components/adminComponents/BilledItems";
import { Switch, Route } from "react-router-dom";
import Gallery from "./components/Gallery";

const App = (props) => {
  const [userLoginId, setUserLoginId] = useState(0);
  // const[email, setemail] = useState(0);

  // to get the logged user's user id and store that in the state
  useEffect(() => {
    let getItemfromsotrage = localStorage.getItem("userID");
    // let getItem = localStorage.getItem("email");
    if (getItemfromsotrage) {
      setUserLoginId(getItemfromsotrage);
    }
    // if(getItem){
    //   setemail(getItem);
    // }
  }, []);

  return (
    <React.Fragment>
    <div className="appjs-content">
      <LoginUserContext.Provider value={{ userLoginId, setUserLoginId }}>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/signup" component={Signup}></Route>
          <Route exact path="/dashbord" component={Dashbord}></Route>
          <Route exact path="/users" component={Users}></Route>
          <Route exact path="/prices" component={prices}></Route>
          <Route exact path="/newsize" component={NewSize}></Route>
          <Route exact path="/sizes" component={Sizes}></Route>
          <Route exact path="/updateprices" component={UpdatePrices}></Route>
          <Route exact path="/products" component={Products}></Route>
          <Route exact path="/visa/:id" component={Visa}></Route>
          <Route exact path="/cash/:id" component={Cash}></Route>
          <Route exact path="/newproduct" component={NewProduct}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/item/:id" component={Item}></Route>
          <Route exact path="/updatestatus/:id" component={UpdateOrder}></Route>
          <Route exact path="/billedItems" component={BilledItems}></Route>
          <Route exact path="/gallery" component={Gallery}></Route>
          <Route
            exact
            path="/updateProduct/:id"
            component={UpdateProduct}
          ></Route>
          <Route exact path="/updateUser/:id" component={UpdateUser}></Route>
          <Route exact path="/cart" component={Cart}></Route>
          <Route exact path="/newPerson" component={NewPerson}></Route>
          <Route exact path="/track" component={Track}></Route>
          <Route exact path="/order" component={Orders}></Route>
        </Switch>
      </LoginUserContext.Provider>
    </div>
    <footer className="footer" >
            Group 16 || copyright ©2021 || Beta versio 1.0
            <h6>DBMS Project by Anjali Gautam</h6>
        </footer>
    </React.Fragment>
  );
};

export default App;
