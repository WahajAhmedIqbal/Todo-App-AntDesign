import React, { useState } from "react";
import Delete from "../deleted";
import { EditOutlined } from "@ant-design/icons";

const List = ({ item, deleteHander, id, onEdit }) => {

  const [delfun, setDelfun] = useState(false)
  console.log(delfun)

  const deletefunction = (e) => {
    e.preventDefault()
    setDelfun(!delfun)
    console.log(delfun)
  }
  let classes = !delfun ? 'animate__animated animate__fadeInUp' : 'animate__animated animate__fadeOutLeft'
  console.log(classes)

  return (
    <div>
      <li
        className={classes}
        key={id}
        style={{
          backgroundColor: "white",
          margin: '2px 4px 16px ',
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
        <div className="inputelemet" style={{ display: '-webkit-inline-box' }}>
          <EditOutlined  style={{paddingRight:10}}onClick={() => onEdit(id)}/>
          {/* <span onSubmit={(e) => deletefunction(e)}> */}
           <Delete id={id} onselected={deleteHander} />
          {/* </span> */}
        </div>
      </li>
    </div>
  );
};

export default List;
