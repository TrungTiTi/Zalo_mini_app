import React, { useEffect } from "react";
import { Icon } from "zmp-ui";
import "./Footer.scss";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  useEffect(() => {
    if (location?.pathname === "/") {
      console.log("123", location);
    }
  }, []);
  return (
    <div className="footer">
      <div className="ft-item footer-home">
        <Icon icon="zi-home"></Icon>
        <b>Trang chủ</b>
      </div>
      <div className="ft-item footer-account">
        <Icon icon="zi-user"></Icon>
        <b>Tài khoản</b>
      </div>
    </div>
  );
};

export default Footer;
