import React, { useState } from "react";
import Create from "../../components/todo/create";
import { PlusCircleTwoTone } from "@ant-design/icons";

const Footer = ({ handlesubmit, input, setInputChagne, inputChagne }) => {
  const [inputtype, setinputtype] = useState(true);

  let classes = !inputtype ? "none" : null;

  return (
    <div
      style={{
        position: "sticky",
        bottom: "0px",
        textAlign: "center",
        height: 150,
        backgroundImage:
          " linear-gradient(to bottom, rgba(500,73,49,0), silver)",
      }}
    >
      <form onSubmit={handlesubmit} style={{ display: "grid" }}>
        <input
          className={classes}
          style={{
            display: classes,
            height: 60,
            width: "77%",
            justifySelf: "center",
            border: "2px solid",
            marginBottom: 10,
            borderRadius: 20,
            outline: 'none'
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
          <PlusCircleTwoTone
            onClick={handlesubmit}
            style={{ fontSize: 65, cursor: "pointer" }}
          />
        </button>
      </form>
    </div>
  );
};

export default Footer;
