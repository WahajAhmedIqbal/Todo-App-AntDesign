import React from "react";
import Delete from "../deleted";
import Update from "../update";
import Create from "./index";
import { EditOutlined } from "@ant-design/icons";

const List = ({ item, deleteHander, id, onEdit }) => {
  return (
    <div>
      <li
        key={id}
        style={{
          backgroundColor: "white",
          margin: 15,
          marginTop: 20,
          marginBottom: 30,
          boxShadow: "0px 25px 10px -9px rgba(0,0,0,0.49)",
          padding: "10px 15px 46px 20px",
          listStyle: "none",
          fontSize: 24,
          display: "flex",
          flex: 1,
          justifyContent: "space-between",
          height: 50,
          width: "90%",
          borderRadius: 27,
        }}
      >
        {item}
        <div className="inputelemet" style={{ display: "flex" }}>
          <EditOutlined
            style={{ paddingRight: 15, paddingTop: 10 }}
            onClick={() => onEdit(id)}
          />

          <Delete id={id} onselected={deleteHander} />
        </div>
      </li>
    </div>
  );
};

export default List;
