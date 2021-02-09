import React from "react";

const Header = () => {
  return (
    <div
      className="main-box"
      style={{
        position: "sticky",
        top: "10px",
        textAlign: "center",
        zIndex: 2,
        padding: 16,
        backgroundImage: "linear-gradient(to top, rgba(500,73,49,0), azure)",
      }}
    >
      <div className="header">
        <h1>All Task</h1>
      </div>
    </div>
  );
};

export default Header;
