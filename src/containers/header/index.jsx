import React from "react";
import { AppstoreOutlined } from "@ant-design/icons";


const Header = () => {
  return (
    <div
      className="main-box"
      style={{
        position: "sticky",
        top: "5px",
        textAlign: "center",
        zIndex: 2,
        padding: 16,
        display: 'flex',
    placeContent: 'space-between',
        backgroundImage: "linear-gradient(to top, rgba(500,73,49,0), azure)",
        
      }}
    >
      {/* <div className="header"> */}
        <spna className='icon' style={{fontSize:16, color: 'cornflowerblue'}}>
      <AppstoreOutlined />
      </spna>
      <spna className='heading' style={{marginLeft:'-23px', marginTop: 8}}>
        <h1 style={{fontSize: 15}}>All Task</h1>
        </spna>
        <span className="empty-box"></span>
      {/* </div> */}
    </div>
  );
};

export default Header;
