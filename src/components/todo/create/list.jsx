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
          margin: '2px 4px 16px ',
          // margin: 0,
          // marginTop: 10,
          // marginBottom: 30,
          boxShadow: "rgb(204 204 204 / 40%) 0px 19px 4px -11px",
          padding: "9px 26px 32px 24px",
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
        {/* <div className="inputelemet" style={{ display: "flex" }}> */}
          {/* <EditOutlined
            style={{ paddingRight: 15, paddingTop: 10 }}
            onClick={() => onEdit(id)}
          /> */}

          <Delete id={id} onselected={deleteHander} />
        {/* </div> */}
      </li>
    </div>
  );
};

export default List;
