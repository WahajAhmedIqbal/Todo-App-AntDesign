import React, { useState } from "react";
import { HeaderComponent, FooterComponent } from "../../containers";
import List from "./create/list";
import Update from "./update";

const Todo = () => {
  const [itemList, setItemList] = useState(["item1", "item2"]);
  const [inputChagne, setInputChagne] = useState("");
  const [updatedInput, setUpdatedInput] = useState("");
  const [updateState, setupdateState] = useState(false);

  const handlesubmit = (e) => {
    e.preventDefault();
    setItemList([inputChagne, ...itemList]);
    setInputChagne("");
  };

  const deleteHander = (id) => {
    setItemList(itemList.filter((_, index) => index !== id));
  };

  const edithandler = (id) => {
    setupdateState(true);
    console.log("--> id", id);
    const newlist = itemList.find((_, index) => index === id);
    console.log(newlist);
  };

  const updatehandler = (item, id) => {
    setupdateState(false);
    setInputChagne(item);
  };

  return (
    <div className="container" style={{ backgrounColor: "aliceblue" }}>
      <div className="listbox">
        <HeaderComponent />

        {itemList.map((item, index) => {
          if (item.length === 0) {
            return null;
          } else {
            if (updateState) {
              return (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    updatehandler(item);
                  }}
                >
                  <input type="text" id={index} />
                  {/* id={index}
                  item={item} */}
                </form>
                // <Update
                //   edithandler={edithandler}
                //   id={index}
                //   item={item}
                //   setupdateState={setupdateState}
                //   setInputChagne={setInputChagne}
                //   inputChagne={inputChagne}
                // />
              );
            } else {
              return (
                <List
                  key={index}
                  item={item}
                  id={index}
                  deleteHander={deleteHander}
                  onEdit={edithandler}
                />
              );
            }
          }
        })}

        <FooterComponent
          inputChagne={inputChagne}
          setInputChagne={setInputChagne}
          handlesubmit={(e) => handlesubmit(e)}
        />
      </div>
    </div>
  );
};

export default Todo;
