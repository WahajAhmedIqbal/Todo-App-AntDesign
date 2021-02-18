import React, { useState } from "react";
import Delete from "../deleted";
import { EditOutlined } from "@ant-design/icons";
import "./style.css";

const List = ({ item, deleteHandler, id, onEdit }) => {
  const [changeAnimation, setChangeAnimation] = useState(false);

  const handleClass = () => {
    setChangeAnimation(true);
    setTimeout(() => {
      setChangeAnimation(false);
      deleteHandler(id);
    }, 500);
  };

  let classes = !changeAnimation
    ? "animate__animated animate__fadeInUp"
    : "animate__animated animate__fadeOutLeft";

  return (
    <div>
      <li className={`${classes} liStyling`} key={id}>
        {item}
        <div className="buttonStyle">
          <EditOutlined className="editStyling" onClick={() => onEdit(id)} />
          <Delete id={id} onSelected={handleClass} />
        </div>
      </li>
    </div>
  );
};

export default List;
