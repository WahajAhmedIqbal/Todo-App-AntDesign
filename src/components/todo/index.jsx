import { Button, Col, Divider, List, Row, Typography } from "antd";
import React from "react";
import { PlusCircleTwoTone } from "@ant-design/icons";

const Todo = () => {
  const data = ["item1", "item2", "item23", "item4"];
  return (
    <div className="main-div">
      <div className="card-name">
        <List
          size="small"
          header={<h1>Todo List</h1>}
          footer={
            <Button>
              <PlusCircleTwoTone />
              {/* <AppstoreAddOutlined /> */}
            </Button>
          }
          bordered
          dataSource={data}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
      </div>
    </div>
  );
};

export default Todo;
