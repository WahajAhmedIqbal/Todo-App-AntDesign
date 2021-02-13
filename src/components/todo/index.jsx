import React, { useState } from "react";
import { HeaderComponent, FooterComponent } from "../../containers";
import List from "./create/list";
import Update from "./update";

const Todo = () => {
  const [itemList, setItemList] = useState(["item1", "item2"]);
  const [updatedList, setUpdatedList] = useState([])
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
    setupdateState(false)
  };

  const edithandler = (id) => {
    setupdateState(true);
    console.log("edithandler--> id", id);
    const newlist = itemList.find((_, index) => index === id);
    console.log('-----> item  ',newlist);
    setUpdatedList(newlist)
    setUpdatedInput(newlist)
    console.log('input test--> ',updatedInput )
  };

  

  const updateFun = () => {
    console.log('input test--> ',updatedInput )


    setItemList([...itemList, updatedInput])

    setupdateState(false)
  
   


    
  }

  const cancelFun = () => {
    setupdateState(false)

  }

  

  return (
    <div className="container" style={{ backgrounColor: "aliceblue" }}>
      <div className="listbox">
        <HeaderComponent />
        <section style={{
          minHeight:'80vh'
        }}>
        {itemList.map((item, index) => {
          if (item.length === 0) {
            return null;
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
        {/* <Update />
        <FooterComponent /> */}
       { (updateState) ? <Update setUpdatedInput={setUpdatedInput} updatedInput={updatedInput} updateFun={updateFun} cancelFun={cancelFun}/> : <FooterComponent inputChagne={inputChagne} setInputChagne={setInputChagne} handlesubmit={(e) => handlesubmit(e)}/> }
         {/* {updateState &&  } */}
          {/* <Update  /> */}
        {/* <FooterComponent
          inputChagne={inputChagne}
          setInputChagne={setInputChagne}
          handlesubmit={(e) => handlesubmit(e)}
        /> */}
      </div>
    </div>
  );
};

export default Todo;
