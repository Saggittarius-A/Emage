import React, { useContext, useState, useEffect } from "react";
import Axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { LoginUserContext } from "./context/LoginUserContext";

const Item = (props) => {
  const [allItems, setAllItems] = useState([]);
  const [qty, setQty] = useState();
  const { userLoginId, setUserLoginId } = useContext(LoginUserContext);
  const [msg, setMsg] = useState("");
  const[size, setsize] = useState("");
  let history = useHistory();
  useEffect(() => {
    Axios.get("http://localhost:3001/getProduct")
      .then((response) => {
        setAllItems(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const getsize = (e) => {
    let size = e.target.value;
    setsize(size);
  };

  const getQuantity = (e) => {
    let qty = e.target.value;
    setQty(qty);
  };
  const getDetails = (prPrice, prQty, prid, size) => {
    if (userLoginId > 0) {
      if(size === "4'X6'")
      prPrice=20;
      if(size === "6'X4'")
      prPrice=30;
      if(size === "8'X6'")
      prPrice=40;
      if(size === "6'X8'")
      prPrice=40;
      console.log(size);
      const total = parseInt(prQty) * parseInt(prPrice);

      Axios.post("http://localhost:3001/addToCart", {
        PrPrice: prPrice,
        PrQty: prQty,
        userid: userLoginId,
        total: total,
        prId: prid,
        size: size
      })
        .then(() => {
          history.push("/cart");
        })
        .catch(() => {
          alert("Error Occured. Please try again!");
          setMsg("Error Occured. Please try again!");
        });
    } else {
      setMsg("Please Login to Shopping!");
    }
  };

  return (
    <div className="mt-4">
      {allItems.map((each) => {
        if (each.idproducts === parseInt(props.match.params.id)) {
          return (
            <div className="container mt-4">
              <div className="row mt-4">
                <div className="col-md-5 col-sm-6 offset-sm-4 offset-md-4 mt-4">
                  <h2>{userLoginId}</h2>
                  <h3>{msg}</h3>
                  <h3 className="mt-4">
                   We mainatains photo Quality
                  </h3>
                </div>
              </div>
              <div className="item-section">
                <div className="item-image-section">
                  <img
                    className="item-image"
                    src={"/uploads/" + each.prImage}
                    alt={each.product_name}
                  />
                </div>
                <div className="item-desc mt-4">
                <p>Please choose Size and Quantity</p>
                  <p style={{ fontWeight: "800" }}>Size:
                  <select
                        onChange={getsize}
                        className="ml-4"
                        style={{ padding: "5px" }}
                        required
                      >
                        <option value="4'X6'">4'X6'</option>
                        <option value="6'X4'">6'X4'</option>
                        <option value="8'X6'">8'X6'</option>
                        <option value="6'X8'">6'X8'</option>
                      </select>
                  
                  </p>
                  <div className="cart-item-increment">
                    <div className="dropdown">
                    <p className="mt-4" style={{ fontWeight: "800" }}>
                    Quantity: 
                      <select
                        onChange={getQuantity}
                        className="ml-4"
                        style={{ padding: "5px" }}
                        required
                      >
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                      </select>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-2 col-sm-2 mt-2">
                      <div className="cart-button">
                        <Link to="/prices">
                          <button type="submit" className="btn btn-success">
                            Price Chart
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-3 mt-2">
                      <div className="cart-button">
                        <button
                          onClick={() =>
                            getDetails(
                              each.price,
                              qty,
                              each.idproducts,
                              size,
                            )
                          }
                          type="submit"
                          className="btn btn-warning"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};
export default Item;
