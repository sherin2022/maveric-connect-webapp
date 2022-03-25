import React from "react";
import "./style.css";
import images from "../../images/maveric-logo-white.png";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="mt-2">
          <div className="ml-2">
          <ul class="nav justify-content-center">

         {/*} <li className="nav-item">
            <img src={images} className="img-thumbnail" />
          </li> */}

              <li className="nav-item">
              <a className="nav-link disabled" href="#">
              <h6 className="text-center" style={{ color: "white" }}>@Copyright, Maveric Systems Ltd 2022</h6>
                </a>
              </li>
              </ul>
            
          </div>
        </div>
     
    </footer>
  );
};

export default Footer;