import Header from '../../components/Header'
import Footer from '../../components/Footer'
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
import Endpoints from "../../api/Endpoints";
import 'bootstrap/dist/css/bootstrap.min.css';
import SignupPage from '../SignUpPage';

const LoginPage = () =>{
    const [responseMessage, setResponseMessaage] = useState({
        message: "",
        cssClass: "",
      });
    
      const [user, setUser] = useState({
        email: "",
        password: "",
      });

      const [isLogged, setIsLoggedIn] = useState(false);
    
      function onSubmitHandler(event) {
        event.preventDefault();
        setIsLoggedIn({
            isLogged:true    
           })
           console.log(isLogged);   
    //     axios
    //       .post(Endpoints.LOGIN_URL, user)
    //       .then(
    //         (response) => {
    //           localStorage.setItem('token', response.data.token)
    //           localStorage.setItem('user',JSON.stringify(response.data.user))
    
    //           console.log(response.data);
    //           setResponseMessaage({
    //             message: 'login successfull',
    //             cssClass: 'alert-success'
    //           });
    //         },
    //         (error) => {
    //           setResponseMessaage({
    //             message: error.response.data.message,
    //             cssClass: 'alert-danger'
    //           });
    //         }
    //       )
    //       .catch((error) => console.log(error));
       }
    
      function onChangeHandler(event) {
        setUser({
          ...user,
          [event.target.name]: event.target.value,
        });
      
      }
    
      return (
       
        <div>
        <div className="row">
            
          <div className="col-lg-4"></div>
          <div className="col-lg-4">
            <div className="wrapper">
              <h2>Login</h2>
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
                    name="email"
                    placeholder="Enter with your email"
                    value={user.email}
                    onChange={onChangeHandler}
                    className="form-control"
                  />
                </div>
              
                <div className="form-group">
                  <label htmlFor="">Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    value={user.password}
                    onChange={onChangeHandler}
                    className="form-control"
                  />
                </div>
                
                <input
                  type="submit"
                  value="Login"
                  style={  { backgroundColor: '#214e8f', padding: '10px', borderRadius:'10px',color:"white" } }
                  
                />
              
                <br />
                <p>
                  <a href="#">New To Maveric Book? Signup</a>
                </p>
                <p>
                <a href="#">Forgot Password?</a>
                </p>
              </form>
            </div>
          </div>
          <div className="col-lg-4"></div>
        </div>
        </div>
      );
}

export default LoginPage;