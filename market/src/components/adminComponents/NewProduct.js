import React, { useState, useContext } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import { LoginUserContext } from "../context/LoginUserContext";

const NewProduct = () => {
  const [productPrice, setProductPrice] = useState(0);
  const { userLoginId, setUserLoginId } = useContext(LoginUserContext);
  const [file, setfFile] = useState("");
  const [namefile, setnamefile] = useState("");

  const productPriceChangeHandler = (e) => {
    let price = parseInt(e.target.value);
    setProductPrice(price);
    console.log(productPrice);
  };
  const productImageChangeHandler = (e) => {
    let image = e.target.files[0];
    setfFile(image);
    setnamefile(image.name);
  };
 
  const addNewProduct = (e) => {
    e.preventDefault();

    let formdata = new FormData();

    formdata.append("picture", file);

    Axios.post("http://localhost:3001/picture", formdata)
      .then(() => {
        Axios.post("http://localhost:3001/addProducts", {
          prPrice: productPrice,
          prImage: namefile,
          iduser: userLoginId,
        })
          .then(() => {
            console.log("success");
            setProductPrice(0);
            setnamefile("");
          })
          .catch(() => {
            console.log("Error! Please try again");
          });
      })
      .catch(() => {
        console.log("Error! Please try again");
      });

  };

  return (
    <div className="main-container mt-4">
      <div className="row mt-4">
        <div className="col-md-5 col-sm-10 offset-sm-2 offset-md-4 mt-4">
          <h3 className="users">Add images</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-sm-4 offset-sm-2 offset-md-3">
          <form onSubmit={addNewProduct}>
            <div className="form-group mt-4">
            </div>
            <div className="form-group mt-4">
              <label htmlFor="exampleInputEmail1 mt-4">Number Of Uploads</label>
              <input
                type="number"
                onChange={productPriceChangeHandler}
                value={productPrice}
                required
                className="form-control"
                id="exampleInputEmail1"
                placeholder="150"
              />
            </div>
            <div className="form-group mt-4">
              <label for="exampleFormControlFile1">Example file input</label>
              <input
                type="file"
                multiple
                onChange={productImageChangeHandler}
                className="form-control-file"
                id="exampleFormControlFile1"
                name="picture"
                accept=""
              />
            </div>
            <button type="submit" className="btn btn-warning mr-2">
              Add
            </button>
            <Link to="/">
              <button className="btn btn-warning">Home</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;