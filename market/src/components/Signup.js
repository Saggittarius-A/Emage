import React, { useState, useContext } from "react";
import Axios from "axios";
import { Link, useHistory } from "react-router-dom";

const Signup = () => {
  const history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessge] = useState("");

  const nameChangeHandler = (e) => {
    let name = e.target.value;
    setName(name);
  };
  const emailChangeHandler = (e) => {
    let email = e.target.value;
    setEmail(email);
  };
  const passwordChangeHandler = (e) => {
    let password = e.target.value;
    setPassword(password);
  };

  const addNewUser = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/addUser", {
      name: name,
      email: email,
      password: password,
    })
      .then(() => {
        alert("Successfully Registered");
        setMessge("Successfully Registered. Login to continue");
        setName("");
        setEmail("");
        setPassword("");
        history.push("/login");
      })
      .catch(() => {
        alert("Duplicate Email");
        setMessge("Error! Please try again");
      });
  };

  return (
    <div className='hero-container'>
		  <section className="sectiona">
	      <div class="containera">
		      <div class="user signinBx">
		        <div class="imgBx"><img src="https://images.unsplash.com/photo-1554080353-a576cf803bda?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGhvdG98ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt="" /></div>
		          <div class="formBx">
              <form action="" onSubmit={addNewUser}>
			  <h2>Create an account</h2>
			  <input type="text" 
			  required
			  onChange={nameChangeHandler}
                value={name}
			  name="" placeholder="Name" />
			  <input type="email" 
				 required
				 onChange={emailChangeHandler}
                value={email}
				 name="" placeholder="Email Address" />
			  <input type="password" 
				 required
				 onChange={passwordChangeHandler}
                value={password}
			  placeholder="Create Password" />
			  <input type="submit" 
                  name="" value="Register" />
			  <p class="signup">
				Already have an account ?
				<Link to="/login">Sign in.</Link>
			  </p>
			</form>
		          </div>
		        </div>
        </div>
      </section>
	  </div>
  );
};

export default Signup;
