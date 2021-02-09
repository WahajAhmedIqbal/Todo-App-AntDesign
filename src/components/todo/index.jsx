import { Button, Col, Divider, List, Row, Typography } from "antd";
import React from "react";
import { HeaderComponent, FooterComponent } from "../../containers";

const Todo = () => {
  const data = [
    "item1",
    "item2",
    "item23",
    "item4",
    "item1",
    "item2",
    "item23",
    "item4",
    "item1",
    "item2",
    "item23",
    "item4",
    "item1",
    "item2",
    "item23",
    "item4",
    "item1",
    "item2",
    "item23",
    "item4",
    "item1",
    "item2",
    "item23",
    "item4",
    "item1",
    "item2",
    "item23",
    "item4",
    "item1",
    "item2",
    "item23",
    "item4",
    "item1",
    "item2",
    "item23",
    "item4",
    "item1",
    "item2",
    "item23",
    "item4",
    "item1",
    "item2",
    "item23",
    "item4",
    "item1",
    "item2",
    "item23",
    "item4",
  ];
  return (
    <div className="container" style={{ backgrounColor: "aliceblue" }}>
      <div className="listbox">
        <HeaderComponent />
        <List
          style={{ border: "none" }}
          size="small"
          bordered
          dataSource={data}
          renderItem={(item) => (
            <List.Item
              style={{
                backgroundColor: "white",
                margin: 15,
                marginTop: 20,
                marginBottom: 30,
                boxShadow: "0px 25px 10px -9px rgba(0,0,0,0.49)",
                borderRadius: "42%",
                padding: 25,
              }}
            >
              {item}
            </List.Item>
          )}
          // header={<HeaderComponent />}
          // footer={<FooterComponent />}
        />
        <FooterComponent />
      </div>
    </div>
  );
};

export default Todo;
