import React, { useState } from "react";
import axios from "axios";
import "./styles.css";
import Endpoints from "../../api/Endpoints";

const SignupPage = () => {
  const [errorMessage, setErrorMessage] = useState({
    usernameError: "",
    emailError: "",
    passwordError: "",
    confirmPasswordError: "",
  });

  const [responseMessage, setResponseMessage] = useState({
    message: "",
    cssClass: "",
  });
  const [error, setError] = useState({
    message: "",
    cssClass: "",
  });

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function validate() {
    if (user.username == "") {
      setErrorMessage({
        usernameError: "Name is Empty",
      });
      return true;
    }
    if (user.email == "") {
      setErrorMessage({
        emailError: "email is Empty",
      });
      return true;
    }
    if (user.password == "") {
      setErrorMessage({
        mobileError: "mobile number is Empty",
      });
      return true;
    }
    if (user.confirmPassword == "") {
      setErrorMessage({
        passwordError: "Password is Empty",
      });
      return true;
    } else {
      setErrorMessage({});
      return false;
    }
  }

  function onSubmitHandler(e) {
    e.preventDefault();
    if (!validate()) {
      axios
        .post(Endpoints.SIGNUP_URL, user)
        .then(
          (response) => {
            console.log(response.data);
            setError({});
            setResponseMessage({
              message: response.data.message,
              cssClass: "alert-success",
            });
          },
          (error) => {
            setResponseMessage({});
            setError({
              message: error.response.data.message,
              cssClass: "alert-danger",
            });
          }
        )
        .catch((error) => {
          console.log(error);
        });
    }
  }

  function onChangeHandler(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="row">
      <div className="col-lg-3"></div>
      <div className="col-lg-6">
        <div className="wrapper text-center">
          <h3>Signup</h3>
          <br />
          {responseMessage.message && (
            <div className="alert alert-success" role="alert">
              {responseMessage.message}
            </div>
          )}
          {error.message && (
            <div className="alert alert-danger" role="alert">
              {error.message}
            </div>
          )}
          {errorMessage.usernameError && (
            <div className="alert alert-danger" role="alert">
              {errorMessage.usernameError}
            </div>
          )}

          {errorMessage.emailError && (
            <div className="alert alert-danger" role="alert">
              {errorMessage.emailError}
            </div>
          )}

          {errorMessage.mobileError && (
            <div className="alert alert-danger" role="alert">
              {errorMessage.passwordError}
            </div>
          )}

          {errorMessage.passwordError && (
            <div className="alert alert-danger" role="alert">
              {errorMessage.confirmPasswordError}
            </div>
          )}
          <form onSubmit={onSubmitHandler}>
            <div className="form-group">
              <input  placeholder="Username"
                type="text"
                name="username"
                onChange={onChangeHandler}
                className="form-control"
                value={user.username}
              />
            </div>
            <div className="form-group">
              <input placeholder="Email"
                type="text"
                name="email"
                onChange={onChangeHandler}
                className="form-control"
                value={user.email}
              />
            </div>

            <div className="form-group">
              <input placeholder="Password"
                type="text"
                name="password"
                onChange={onChangeHandler}
                className="form-control"
                value={user.password}
              />
            </div>

            <div className="form-group">
              <input placeholder="Confirm Password"
                type="text"
                name="confirmPassword"
                onChange={onChangeHandler}
                className="form-control"
                value={user.confirmPassword}
              />
            </div>


            <input
              type="submit"
              value="Sugnup"
              style={  { backgroundColor: '#214e8f', padding: '10px', borderRadius:'10px',color:"white" } }
              
            />
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