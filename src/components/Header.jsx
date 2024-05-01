import React from "react";
import { Link } from "react-router-dom";
import logo from "/images/網站Logo.svg";
import "./Header.scss";

const Header = () => {
  return (
    <>
      <header>
        <div className="left-part">
          <div className="img">
            <img src={logo} alt="logo" />
          </div>

          <div className="title">
            <h1>2024日本旅遊推薦</h1>
          </div>
        </div>
        <div className="right-part">
          <nav>
            <ul>
              <li>
                <Link to="#">
                  <i className="fa-solid fa-plane"></i> 日本旅遊
                </Link>
              </li>
              <li>
                <Link to="/login">
                  <i className="fa-solid fa-right-to-bracket"></i> 會員登入
                </Link>
              </li>
              <li>
                <Link to="/booking">
                  <i className="fa-solid fa-book"></i> 預約行程
                </Link>
              </li>
              <li>
                <Link to="/contactus">
                  <i className="fa-regular fa-address-book"></i> 聯絡我們
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
