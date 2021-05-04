import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Axios from "axios";

const AllProducts = (props) => {
  const [allProducts, setAllProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState("");

  const [userID, setUserId] = useState(props.userID);
  let reguser = props.reguser;

  useEffect(() => {
    Axios.get("http://localhost:3001/getProducts")
      .then((response) => {
        setAllProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const filterProduct = (e) => {
    const value = e.target.value;
    setFilterProducts(value);
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
                <p
                  className="item-name"
                  style={{ textTransform: "capitalize" }}
                >
                  {product.product_name}
                </p>
                <p className="item-quantity">{product.product_qty}</p>
                <p className="item-price">${product.price}</p>
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
