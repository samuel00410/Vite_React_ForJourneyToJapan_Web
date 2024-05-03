import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <section className="footer-logo">
        <img src="/images/網站Logo.svg" alt="" />
        <h3>2024日本旅遊推薦</h3>
      </section>
      <section className="links-icons">
        <a href="#">
          <img src="/Icons/facebook.svg" alt="fb" />
        </a>
        <a href="#">
          <img src="/Icons/instagram.svg" alt="ig" />
        </a>
        <a href="#">
          <img src="/Icons/twitter.svg" alt="twitter" />
        </a>
        <a href="#">
          <img src="/Icons/youtube.svg" alt="youtube" />
        </a>
      </section>
    </footer>
  );
};

export default Footer;
