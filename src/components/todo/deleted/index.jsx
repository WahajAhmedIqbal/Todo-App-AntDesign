import React from "react";
import { CloseCircleOutlined } from "@ant-design/icons";

const Delete = ({ id, onselected }) => {
  return (
    <div>
      <span
        className="cross"
        style={{
          fontSize: "x-large",
          marginTop: -8,
        }}
      >
        <CloseCircleOutlined
          onClick={() => {
            onselected(id);
          }}
        />
      </span>
    </div>
  );
};

export default Delete;
