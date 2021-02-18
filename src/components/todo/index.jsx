import React, { useEffect, useState } from "react";
import { HeaderComponent, FooterComponent } from "../../containers";
import List from "./create";
import Update from "./update";
import "./todoStyle.css";

const Todo = () => {
  const [itemList, setItemList] = useState(["test", "test1", "test3"]);
  const [inputChange, setInputChange] = useState("");
  const [updatedList, setUpdatedList] = useState([]);
  const [updatedInput, setUpdatedInput] = useState("");
  const [updateState, setUpdateState] = useState(false);

  // class changing state
  const [classChange, setClassChange] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    inputChange !== "" && setItemList([...itemList, inputChange]);
    setInputChange("");
  };

  const deleteHandler = (id) => {
    setItemList(itemList.filter((_, index) => index !== id));
    setUpdateState(false);
  };

  const editHandler = (id) => {
    setUpdateState(true);
    const newList = itemList.find((_, index) => index === id);
    setUpdatedInput(newList);
    setUpdatedList(newList);
  };
  const updateFun = () => {
    const upList = itemList.indexOf(updatedList);
    itemList.filter((_, index) => {
      if (index === upList) {
        itemList[upList] = updatedInput;
      }
    });
    setUpdateState(false);
    setUpdatedInput("");
  };

  const cancelFun = () => {
    setUpdateState(false);
  };

  const _ListItemRender = () =>
    itemList.length <= 0 ? (
      <h1 className="list-item-Style">Please Insert Items</h1>
    ) : (
      itemList.map((item, index) => (
        <List
          classChange={classChange}
          key={`item-${index}`}
          item={item}
          id={index}
          deleteHandler={deleteHandler}
          onEdit={() => editHandler(index)}
        />
      ))
    );

  return (
    <div className="container">
      <HeaderComponent />
      <section className="section-style">{_ListItemRender()}</section>
      {updateState ? (
        <Update
          setUpdatedInput={setUpdatedInput}
          updatedInput={updatedInput}
          updateFun={updateFun}
          cancelFun={cancelFun}
        />
      ) : (
        <FooterComponent
          inputChange={inputChange}
          setInputChange={setInputChange}
          handleSubmit={(e) => handleSubmit(e)}
        />
      )}
    </div>
  );
};

export default Todo;
