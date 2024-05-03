import React from "react";
import { useSelector, useDispatch } from "react-redux"; //讀取Redux的全局狀態和改變狀態的方法
import { toggleTheme } from "../store/themeSlice";
import { Link } from "react-router-dom";
import logo from "/images/網站Logo.svg";
import "./Header.scss";

const Header = () => {
  // 取得Redux中的themeSlice的狀態
  const isDarkTheme = useSelector((state) => state.themeSlice.isDarkTheme);
  // 取得Redux中的themeSlice的方法
  const dispatch = useDispatch();

  // 改變主題狀態的方法
  const handleChangeTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <>
      <header className={isDarkTheme ? "header-dark" : "header-light"}>
        <div className="left-part">
          <div className="logo-img">
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
                <Link
                  className={isDarkTheme ? "link-dark" : "link-light"}
                  to="#"
                >
                  <i className="fa-solid fa-plane"></i> 日本旅遊
                </Link>
              </li>
              <li>
                <Link
                  className={isDarkTheme ? "link-dark" : "link-light"}
                  to="/login"
                >
                  <i className="fa-solid fa-right-to-bracket"></i> 會員登入
                </Link>
              </li>
              <li>
                <Link
                  className={isDarkTheme ? "link-dark" : "link-light"}
                  to="/booking"
                >
                  <i className="fa-solid fa-book"></i> 預約行程
                </Link>
              </li>
              <li>
                <Link
                  className={isDarkTheme ? "link-dark" : "link-light"}
                  to="/contactus"
                >
                  <i className="fa-regular fa-address-book"></i> 聯絡我們
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="changeTheme">
          <button onClick={handleChangeTheme}>點我換主題顏色</button>
        </div>
      </header>
    </>
  );
};

export default Header;
