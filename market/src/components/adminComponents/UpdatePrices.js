import React, { useState, useContext } from "react";

import Axios from "axios";
import { Link } from "react-router-dom";

const UpdatePrices = (props) => {
  let id = parseInt(props.match.params.idsize);
  const[idsize, setidsize] = useState(id);
  const [size, setsize] = useState("");
  const [Price, setPrice] = useState("");
  const [message, setMessge] = useState("");

  const sizeChangeHandler = (e) => {
    let size = e.target.value;
    setsize(size);
  };

  const PriceChangeHandler = (e) => {
    let Price = e.target.value;
    setPrice(Price);
  };

  const UpdatePrices = (e) => {
    e.preventDefault();
    Axios.put("http://localhost:3001/updateSize", {
      idsize: idsize,
      size: size,
      Price: Price,
    })
      .then(() => {
        setMessge("Successfully Updated");
        setsize("");
        setPrice("");
      })
      .catch(() => {
          alert("Something wrong");
        setMessge("Error! Please try again");
      });
  };

  return (
    <div className="main-container mt-4">
      <div className="row mt-4">
        <div className="col-md-5 col-sm-10 offset-sm-2 offset-md-4 mt-4">
          <h1 className="users">Update Size or Price</h1>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6 col-sm-4 offset-sm-2 offset-md-3">
          <p>{message}</p>
          <h4>Size ID : {idsize}</h4>
          <form onSubmit={UpdatePrices}>
            <div className="form-group mt-4">
              <label for="exampleInputEmail1 mt-4">Size</label>
              <input
                type="text"
                onChange={sizeChangeHandler}
                value={size}
                required
                className="form-control"
                placeholder="4'X6'"
              />
            </div>
            <div className="form-group mt-4">
              <label for="exampleInputEmail1 mt-4">Price</label>
              <input
                type="number"
                onChange={PriceChangeHandler}
                value={Price}
                required
                className="form-control"
                id="exampleInputEmail1"
                placeholder="80"
              />
            </div>
            <button type="submit" className="btn btn-warning mr-2">
              Add User
            </button>
            <Link to="/users">
              <button className="btn btn-warning">Home</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdatePrices;
