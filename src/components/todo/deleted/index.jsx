import React from "react";
import { CloseCircleOutlined } from "@ant-design/icons";

const Delete = ({ id, onSelected }) => {
  return (
    <CloseCircleOutlined
      onClick={() => {
        onSelected(id);
      }}
    />
  );
};

export default Delete;
