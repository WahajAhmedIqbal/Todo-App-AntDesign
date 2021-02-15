import React, { useState } from "react";
import { HeaderComponent, FooterComponent } from "../../containers";
import List from "./create/list";
import Update from "./update";

const Todo = () => {
  const [itemList, setItemList] = useState([]);
  const [inputChagne, setInputChagne] = useState("");
  const [updatedList, setUpdatedList] = useState([])
  const [updatedInput, setUpdatedInput] = useState("");
  const [updateState, setupdateState] = useState(false);  
 
  const handlesubmit = (e) => {
    e.preventDefault();
    inputChagne !== "" && setItemList([...itemList, inputChagne]) 
    setInputChagne('')
  };

  const deleteHander = (id) => {
    setItemList(itemList.filter((_, index) => index !== id));
    setupdateState(false)   
  };

  const edithandler = (id) => {
    setupdateState(true);
    const newlist = itemList.find((_, index) => index === id);
    setUpdatedInput(newlist)
    setUpdatedList(newlist)
  };
  const updateFun = () => {
    const uplist = itemList.indexOf(updatedList)
    itemList.filter((_, index) => {
      if (index === uplist) {
          itemList[uplist] = updatedInput
      }
    })
    setupdateState(false)
    setUpdatedInput('')
  }

  const cancelFun = () => {
    setupdateState(false)
  }
  
  return (
    <div className="container" style={{ backgrounColor: "aliceblue" }}>
      <div className="listbox">
        <HeaderComponent />
        <section
        
        style={{
          minHeight: '66.2vh'
        }}>
          {
            itemList.length <= 0 ? <h1 
            style={{
              fontSize: 35,
              textAlign: "center",
              paddingTop: 35,
              color: "darkgrey"
            }}
            >Please Insert Items</h1> 
            : itemList.map((item, index) => {
              if (itemList.length < 0) {
                return <h1>hello worl</h1>;
              } else {
                 return (
                  <List
                 
                    key={index}
                    item={item}
                    id={index}
                    deleteHander={deleteHander}
                    onEdit={() => edithandler(index)}
                  />
                );
              }
             }
            )} 
        </section>
        {(updateState) ?
          <Update setUpdatedInput={setUpdatedInput} updatedInput={updatedInput} updateFun={updateFun} cancelFun={cancelFun} />
          :
          <FooterComponent inputChagne={inputChagne} setInputChagne={setInputChagne} handlesubmit={(e) => handlesubmit(e)} />}
      </div>
    </div>
  );
};

export default Todo;
