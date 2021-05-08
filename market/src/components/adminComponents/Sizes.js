import React, { useContext, useState, useEffect } from "react";
//import { UsersContext } from "../context/UsersContext";
import Axios from "axios";
import { Link } from "react-router-dom";

const Sizes = () => {
  const [allSizes, setAllSizes] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/getPricechart")
      .then((response) => {
        console.log(response.data);
        setAllSizes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deleteSizes = (idsize) => {
    Axios.delete(`http://localhost:3001/deletesize/${idsize}`);
  };

  return (
    <div className="main-container mt-4">
      <h1 className="users">Update Price Chart</h1>
      <Link to="/newSize">
        <button className="mt-4 btn btn-warning">Add New Size</button>
      </Link>
      <Link to="/dashbord">
        <button className="mt-4 ml-4 btn btn-warning">Dashbord</button>
      </Link>
      <table class="table mt-4">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Size Id</th>
            <th scope="col">Size</th>
            <th scope="col">Price</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {allSizes
            .map((size) => {
              return (
                <tr key={size.idsize}>
                  <td>{size.idsize}</td>
                  <td>{size.size}</td>
                  <td>₹ {size.Price}</td>
                  <td>
                  <Link to={"/UpdatePrices/" + size.idsize}>
                  <button className="btn btn-success mr-2">Update</button>
                  </Link>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger mr-2"
                      onClick={() => deleteSizes(size.idsize)}
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

export default Sizes;
