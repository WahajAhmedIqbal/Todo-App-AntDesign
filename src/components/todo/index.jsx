// import { Button, Col, Divider, List, Row, Typography } from "antd";
import React, { useState } from "react";
import { HeaderComponent, FooterComponent } from "../../containers";
import List from "./create/list";
import Create from "./create";
import Delete from "./deleted";

const Todo = () => {
  const [itemList, setItemList] = useState([]);
  const [inputChagne, setInputChagne] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    setItemList([inputChagne, ...itemList]);
    setInputChagne("");
  };

  const deleteHander = (id) => {
    const newlist = itemList.filter(
      (arrElem, index) => console.log("--->index", index) !== id
    );
    console.log("--->id", id);
    setItemList([...itemList, newlist]);
  };

  return (
    <div className="container" style={{ backgrounColor: "aliceblue" }}>
      <div className="listbox">
        <HeaderComponent />

        {itemList.map((item, index) => {
          if (item.length === 0) {
            return null;
          } else
            return (
              <li
                key={index}
                style={{
                  backgroundColor: "white",
                  margin: 15,
                  marginTop: 20,
                  marginBottom: 30,
                  boxShadow: "0px 25px 10px -9px rgba(0,0,0,0.49)",
                  borderRadius: "42%",
                  padding: 25,
                  listStyle: "none",
                  fontSize: "x-large",
                  display: "flex",
                  flex: 1,
                  justifyContent: "space-between",
                }}
              >
                {item}
                <Delete id={index} onselected={deleteHander} />
              </li>
            );
        })}

        {/* <List
          size="small"
          dataSource={itemList}
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
        /> */}
        {/* <input
          type="text"
          placeholder="add Item"
          value={inputChagne}
          onChange={(e) => setInputChagne(e.target.value)}
        /> */}
        <FooterComponent
          input={
            <input
              type="text"
              placeholder="add Item"
              value={inputChagne}
              onChange={(e) => setInputChagne(e.target.value)}
            />
          }
          handlesubmit={(e) => handlesubmit(e)}
        />
        {/* header={<HeaderComponent />} */}
        {/* footer={<FooterComponent />} */}
        {/* <Create /> */}
      </div>
    </div>
  );
};

export default Todo;
