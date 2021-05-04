import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { LoginUserContext } from "./context/LoginUserContext";
import Axios from "axios";
import AllProducts from "./AllProducts";
import CheoutButtons from "./CheckoutButtons";

const Gallery = (props) => {
  let history = useHistory();
  let reguser = props.location.state;
  
  const [userid, setuserid] = useState(reguser);
  const { userLoginId, setUserLoginId } = useContext(LoginUserContext);
  const [cartItems, setCartItems] = useState([]);

  let finalPayment = 0;

  useEffect(() => {
    Axios.get(`http://localhost:3001/getgallery/${userLoginId}`)
      .then((response) => {
        setCartItems(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userLoginId]);

  const deleteProducts = (id) => {
    Axios.delete(`http://localhost:3001/deleteProducts/${id}`);
  };

  return (
      <React.Fragment>
    <div className="main-container mt-4">
    <h1 className="users">Your Gallery</h1>
    <h2 className="mt-4">All Uploads</h2>
    <AllProducts reguser={reguser} />
  </div>
    {/* <div className="main-container mt-4">
     
      <table className="table mt-4">
        <thead className="thead-dark mt-4">
          <tr>
            <th scope="col">Product</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => {
            return (
              <tr key={item.idcart_items}>
                <td>{item.item_name}</td>
                <td>$ {item.price}.00</td>
                <td>{item.qty}</td>
                <td>$ {item.total}.00</td>
                <td>
                  <button
                    className="btn btn-danger mr-2"
                    onClick={() => deleteProducts(item.idcart_items)}
                  >
                    X
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div> */}
    </React.Fragment>
  );
};

export default Gallery;
