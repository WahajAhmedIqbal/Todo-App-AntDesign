import React, { useEffect, useState } from "react";
import Delete from "../deleted";
import { EditOutlined } from "@ant-design/icons";

const List = ({ item, deleteHander, id, onEdit }) => {
  const [delfun, setDelfun] = useState(false);
  // console.log("🚀 ~ file: list.jsx ~ line 6 ~ List ~ id", id,delfun)

  const handleClass = () => {
    setDelfun(true);
    setTimeout(() => {
    setDelfun(false);
    deleteHander(id);
    }, 500);
  };

  useEffect(()=>{

  },[])


  let classes = !delfun
    ? "animate__animated animate__fadeInUp"
    : "animate__animated animate__fadeOutLeft";

  return (
    <div >
      {/* <button onClick={handleClass}>click change cls</button> */}
      <li
        className={classes}
        key={id}
        style={{
          backgroundColor: "white",
          margin: "2px 4px 16px ",
          boxShadow: "rgb(204 204 204 / 40%) 0px 19px 4px -11px",
          padding: "9px 31px 32px 29px",
          listStyle: "none",
          fontSize: 15,
          display: "flex",
          flex: 1,
          justifyContent: "space-between",
          height: 13,
          width: "97%",
          borderRadius: 27,
        }}
      >
        {item}
        <div className="inputelemet" style={{ display: "-webkit-inline-box" }}>
          <EditOutlined
            style={{ paddingRight: 10 }}
            onClick={() => onEdit(id)}
          />
          <Delete id={id} onselected={handleClass} />
        </div>
      </li>
    </div>
  );
};

export default List;
