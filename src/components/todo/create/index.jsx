import React, { useState } from "react";
import { PlusCircleTwoTone } from "@ant-design/icons";

const Create = ({ onclick, listitem }) => {
  const [input, setInput] = useState(listitem);
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
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Add Item"
        style={{ display: null }}
      />
      <PlusCircleTwoTone
        onClick={onclick}
        style={{ fontSize: 65, cursor: "pointer" }}
      />
    </div>
  );
};

export default Create;
