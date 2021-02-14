import React, { useEffect, useState } from "react";
import { HeaderComponent, FooterComponent } from "../../containers";
import List from "./create/list";
import Update from "./update";

const Todo = () => {
  const [itemList, setItemList] = useState(['item1', 'item22']);
  const [inputChagne, setInputChagne] = useState("");
  const [updatedList, setUpdatedList] = useState([])
  const [updatedInput, setUpdatedInput] = useState("");
  const [updateState, setupdateState] = useState(false);

  const handlesubmit = (e) => {
    e.preventDefault();

//     const newlist = {
//       id: Math.floor(Math.random() * 500),
//       item: inputChagne
//     }
//     console.log(newlist)
// setItemList([newlist , ...itemList])
    setItemList([inputChagne, ...itemList]);
    setInputChagne("");
    
  };
  

  const deleteHander = (id) => {

    // const removearr = [...itemList].filter((item, index) => index !== id )
    // setItemList(removearr)
    setItemList(itemList.filter((_, index) => index !== id));
    setupdateState(false)
  };

  const edithandler = (id) => {
    setupdateState(true);
    const newlist = itemList.find((item, index) => index === id);
    
    console.log('newlist ---> edit fun', newlist)
    

    // const nlist = itemList.filter((item, index) => index === id ? console.log('item filter===--->', item, 'index', index): console.log('null'))
    // setUpdatedList([...updatedList, nlist])
    setUpdatedList(newlist)
    setUpdatedInput(newlist)
    };

  
  
  const updateFun = () => {

   
     const uplist = itemList.indexOf(updatedList) 
     console.log('--->uplist',uplist)

    const nlist = itemList.filter((item, index) => index === uplist )
    console.log('nlist---', nlist)

    

    setItemList(prev => prev.map((item, index) => (index === uplist ? updatedInput : inputChagne)))

   

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
