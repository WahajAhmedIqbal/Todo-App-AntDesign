import React from "react";
import { CloseCircleOutlined } from "@ant-design/icons";

const Delete = ({ id, onselected  }) => {

  return (
    <div>
      <span
        className="cross ">
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
