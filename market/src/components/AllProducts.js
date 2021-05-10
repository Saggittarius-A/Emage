import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { LoginUserContext } from "./context/LoginUserContext";
import Axios from "axios";

const AllProducts = (props) => {
  const [allProducts, setAllProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState("");
  const [userID, setUserId] = useState(props.userID);
  const { userLoginId, setUserLoginId } = useContext(LoginUserContext);
  let reguser = props.reguser;

  useEffect(() => {
    Axios.get(`http://localhost:3001/getProducts/${userLoginId}`)
      .then((response) => {
        setAllProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userLoginId]);

  const deleteProducts = (id) => {
    Axios.delete(`http://localhost:3001/deleteProducts/${id}`);
  };
  return (
    <div>
      <div className="form-group mt-4"> 
      </div>
      <div className="item-category mt-4">
        {allProducts
          .filter((val) => {
            if (filterProducts === "") {
              return val;
            } else if (val.idcategory.includes(filterProducts)) {
              return val;
            }
          })
          .map((product) => {
            return (
              <div
                className="item-card mt-4"
                key={product.idproducts}
                reguser={reguser}
              >
                <img
                  className="item-image"
                  src={"./uploads/" + product.prImage}
                  alt={product.product_name}
                />
                 <button
                    className="btn btn-danger mr-2"
                    onClick={() => deleteProducts(product.idproducts)}>
                    X
                  </button>
                <Link to={"/item/" + product.idproducts}>
                  <button className="btn btn-warning btn-sm">
                    Add to cart
                  </button>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default AllProducts;
