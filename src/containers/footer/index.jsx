import React, { useState } from "react";
import Create from "../../components/todo/create";
import { PlusCircleTwoTone } from "@ant-design/icons";

const Footer = ({ handlesubmit, input }) => {
  const [inputtype, setinputtype] = useState("");

  return (
    <div
      style={{
        position: "sticky",
        bottom: "0px",
        textAlign: "center",
        height: 180,
        backgroundImage:
          " linear-gradient(to bottom, rgba(500,73,49,0), silver)",
      }}
    >
      <form onSubmit={handlesubmit}>
        {input}
        <PlusCircleTwoTone
          onClick={handlesubmit}
          style={{ fontSize: 65, cursor: "pointer" }}
        />
      </form>
      {/* <Create /> */}
    </div>
  );
};

export default Footer;
