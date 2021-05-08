import React, { useContext, useState, useEffect } from "react";
//import { UsersContext } from "../context/UsersContext";
import Axios from "axios";
import { Link } from "react-router-dom";

const Prices = () => {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/getPricechart")
      .then((response) => {
        console.log(response.data);
        setAllUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  return (
    <div className="main-container mt-4">
      <h1 className="users">Size Chart</h1>
      <table class="table mt-4">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Size</th>
            <th scope="col">price</th>
          </tr>
        </thead>
        <tbody>
          {allUsers.map((user) => {
              return (
                <tr>
                  <td>{user.size}</td>
                  <td>{user.Price}</td>
                  <td>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Prices;
