import React from "react";
import { AppstoreOutlined } from "@ant-design/icons";
import "./headerStyle.css";

const Header = () => {
  return (
    <div className="header-main-box">
      <span className="icon">
        <AppstoreOutlined />
      </span>
      <span className="heading">
        <h1 className="heading1">All Task</h1>
      </span>
      <span className="empty-box"></span>
    </div>
  );
};

export default Header;
