import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

const Products = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  // get the product details
  useEffect(() => {
    Axios.get("http://localhost:3001/getProduct")
      .then((response) => {
        setAllProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // delete the selected product item
  const deleteProducts = (idproducts) => {
    Axios.delete(`http://localhost:3001/deleteProducts/${idproducts}`);
  };

  return (
    <div className="main-container mt-4">
      <h1 className="users">Gallery Information</h1>
      <Link to="/dashbord">
        <button className="mt-4 ml-4 btn btn-warning">Dashbord</button>
      </Link>
      <div className="searching mt-2">
        <input
          className="form-control mr-sm-2 searchBar"
          type="search"
          placeholder="Search By Product Name"
          aria-label="Search"
          onChange={(event) => {
            setSearchItem(event.target.value);
          }}
        />
      </div>
      <table class="table mt-4">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Image Id</th>
            <th scope="col">Price</th>
            <th scope="col">userid</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {allProducts
            .filter((val) => {
              if (searchItem === "") {
                return val;
              } else if (
                val.product_name
                  .toLowerCase()
                  .includes(searchItem.toLowerCase())
              ) {
                return val;
              }
            })
            .map((product) => {
              return (
                <tr key={product.idproducts}>
                  <td>{product.idproducts}</td>
                  <td> ₹ 60.00</td>
                  <td>{product.iduser}</td>
                  <td>
                    <button
                      className="btn btn-danger mr-2"
                      onClick={() => deleteProducts(product.idproducts)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
