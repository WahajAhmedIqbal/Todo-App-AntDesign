import { Button, Col, Divider, List, Row, Typography } from "antd";
import React from "react";
import { PlusCircleTwoTone } from "@ant-design/icons";
import { HeaderComponent, FooterComponent } from "../../containers";

const Todo = () => {
  const data = ["item1", "item2", "item23", "item4"];
  return (
    <div className="container">
      <div class="row">
        <div className="col align-self-center">
          <List
            size="small"
            header={<HeaderComponent />}
            footer={<FooterComponent />}
            bordered
            dataSource={data}
            renderItem={(item) => <List.Item>{item}</List.Item>}
          />
        </div>
      </div>
    </div>
  );
};

export default Todo;
