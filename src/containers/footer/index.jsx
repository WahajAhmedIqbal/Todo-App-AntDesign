import React, { useEffect, useState } from "react";
import Create from "../../components/todo/create";
import { PlusCircleTwoTone } from "@ant-design/icons";
import image from '../../assests/add.png'

const Footer = ({ handlesubmit, input, setInputChagne, inputChagne }) => {
  const [inputtype, setinputtype] = useState(false);

  const handleInput = () => {
    setinputtype(!inputtype)
  }

 
  let classes = !inputtype ? "none" : null;

  return (
    <div
      style={{
        position: "sticky",
        bottom: '-10px',
        textAlign: "center",
        height: 149,
        backgroundImage:
          " linear-gradient(to bottom, rgba(500,73,49,0), azure)",
      }}
    >
      <form onSubmit={handlesubmit} style={{ display: "grid" }}>
        <input
          className={classes}
          style={{
            display: classes,
            height: 40,
            width: "97%",
            justifySelf: "center",
            border: "2px solid",
            marginBottom: 50,
            borderRadius: 20,
            outline: 'none',
            textAlign: 'center'
          }}
          type="text"
          placeholder="add Item"
          value={inputChagne}
          
          onChange={(e) => setInputChagne(e.target.value)}
        />
        <button
          style={{
            background: "none",
            border: "none",
            width: "fit-content",
            justifySelf: "center",
          }}
        >
          <spna
          style={{
            position:'fixed',
            bottom: 11,
            left: '42%'
          }}
          className='img'>
          <img
          style={{
            width:60
          }}
          src={image}
          onClick={handleInput}
          /> 
          </spna>
          {/* <PlusCircleTwoTone
          onClick={handleInput}
             onClick={handlesubmit}
            style={{ fontSize: 65, cursor: "pointer" }}
          /> */}
        </button>
      </form>
    </div>
  );
};

export default Footer;
