import React from "react";
import { AppstoreOutlined } from "@ant-design/icons";


const Header = () => {
  return (
    <div
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
     <span className='icon' style={{fontSize:16, color: 'cornflowerblue'}}>
      <AppstoreOutlined />
      </span>
      <span className='heading' style={{marginLeft:'-23px', marginTop: 8}}>
        <h1 style={{fontSize: 15}}>All Task</h1>
        </span>
        <span className="empty-box"></span>
    </div>
  );
};

export default Header;
