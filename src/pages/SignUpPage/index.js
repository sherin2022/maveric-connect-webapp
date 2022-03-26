import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
import Endpoints from "../../api/Endpoints";

const SignupPage = () => {
  const [responseMessage, setResponseMessaage] = useState({
    message: "",
    cssClass: "",
  });

  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function onSubmitHandler(event) {
    event.preventDefault();
    axios
      .post(Endpoints.SIGNUP_URL, user)
      .then(
        (response) => {
          localStorage.setItem('token', response.data.token)
          localStorage.setItem('user',JSON.stringify(response.data.user))

          console.log(response.data);
          setResponseMessaage({
            message: 'Signup successfull', 
            cssClass: 'alert-success'
          });
        },
        (error) => {
          setResponseMessaage({
            message: error.response.data.message,
            cssClass: 'alert-danger'
          });
        }
      )
      .catch((error) => console.log(error));
  }

  function onChangeHandler(event) {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <div className="row">
      <div className="col-lg-4"></div>
      <div className="col-lg-4">
        <div className="wrapper">
          <h2>Signup Page</h2>
          <hr />

         {responseMessage.message && (
              <div class="alert alert-success" role="alert">
              { responseMessage.message }
            </div>
         )}

          <form onSubmit={onSubmitHandler}>
            <div className="form-group">
              <label htmlFor="">Username</label>
              <input
                type="text"
                name="userName"
                placeholder="Enter your Name"
                value={user.userName}
                onChange={onChangeHandler}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Email</label>
              <input
                type="text"
                name="email"
                placeholder="Enter your Email"
                value={user.email}
                onChange={onChangeHandler}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Password</label>
              <input
                type="text"
                name="password"
                placeholder="Enter your password"
                value={user.password}
                onChange={onChangeHandler}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Confirm Password</label>
              <input
                type="text"
                name="password"
                placeholder="Enter your password"
                value={user.password}
                onChange={onChangeHandler}
                className="form-control"
              />
            </div>
            <input
              type="submit"
              value="Signup"
              style={  { backgroundColor: '#214e8f', padding: '10px', borderRadius:'10px',color:"white" } }
            />
            <br />
            <p>
              <a href="#">Already a member? Login</a>
            </p>
          </form>
        </div>
      </div>
      <div className="col-lg-4"></div>
    </div>
  );
};
export default SignupPage;