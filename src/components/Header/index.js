import React from "react";
import images from "../../images/maveric-logo-updated.png";

const Header = () => {
  return (
    <div className="mt-3">
      <div className="ml-3">
        <ul className="nav">
          <li className="nav-item">
            <img src={images} className="img-thumbnail" />
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">
              <h4 style={{ color: "#224f8f" }}>Maveric Connect</h4>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;