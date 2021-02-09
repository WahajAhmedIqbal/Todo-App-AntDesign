import React, { useState } from "react";
import Create from "../../components/todo/create";

const Footer = () => {
  const [item, setitem] = useState([]);

  return (
    <div
    // style={{
    //   position: "sticky",
    //   bottom: "0px",
    //   textAlign: "center",
    //   height: 180,
    //   backgroundImage:
    //     " linear-gradient(to bottom, rgba(500,73,49,0), silver)",
    // }}
    >
      {/* <Create /> */}
    </div>
  );
};

export default Footer;
