import React, { useState, useContext } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

const NewSize = () => {
  const [size, setsize] = useState("");
  const [Price, setPrice] = useState("");
  const [message, setMessge] = useState("");

  const sizeChangeHandler = (e) => {
    let size = e.target.value;
    setsize(size);
  };
  const priceChangeHandler = (e) => {
    let Price = e.target.value;
    setPrice(Price);
  };

  //to add a new size pass data to the backend
  const addNewUser = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/addSize", {
      size: size,
      Price: Price,
    })
      .then(() => {
        setMessge("Successfully Added.");
        setsize("");
        setPrice("");
      })
      .catch(() => {
        setMessge("Error! Please try again");
      });
  };

  return (
    <div className="main-container mt-4">
      <div className="row mt-4">
        <div className="col-md-5 col-sm-10 offset-sm-2 offset-md-4 mt-4">
          <h1 className="users">Add a New Size</h1>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6 col-sm-4 offset-sm-2 offset-md-3">
          <form onSubmit={addNewUser}>
            <div className="form-group mt-4">
              <label htmlFor="exampleInputEmail1 mt-4">Size</label>
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
              <label htmlFor="exampleInputPassword1 mt-4">Password</label>
              <input
                type="number"
                onChange={priceChangeHandler}
                value={Price}
                required
                className="form-control"
                id="exampleInputEmail1"
                placeholder="8"
              />
            </div>
            <button type="submit" className="btn btn-warning mr-2">
              Add Size
            </button>
            <Link to="/sizes">
              <button className="btn btn-warning">Size V/s Price Chart</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewSize;
