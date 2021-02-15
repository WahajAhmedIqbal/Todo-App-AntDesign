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
  const [selectedInputId, setSelectedInputId] = useState(null);

  const handlesubmit = (e) => {
    e.preventDefault();
    //     const newlist = {
    //       id: Math.floor(Math.random() * 500),
    //       item: inputChagne
    //     }
    //     console.log(newlist)
    // setItemList([newlist , ...itemList])
    inputChagne !== "" && setItemList([...itemList, inputChagne]) && setInputChagne("");
  };


  const deleteHander = (id) => {

    // const removearr = [...itemList].filter((item, index) => index !== id )
    // setItemList(removearr)
    setItemList(itemList.filter((_, index) => index !== id));
    setupdateState(false)
  };

  const edithandler = (id) => {
    setupdateState(true);
    console.log(updatedInput)
    // setItemList([...itemList, inputChagne])
    setSelectedInputId(id)
    console.log(id)
    console.log(itemList)

    const newlist = itemList.find((item, index) => index === id);

    // console.log('newlist ---> edit fun', newlist)


    // // const nlist = itemList.filter((item, index) => index === id ? console.log('item filter===--->', item, 'index', index): console.log('null'))
    // // setUpdatedList([...updatedList, nlist])
    setUpdatedInput(newlist)
    setUpdatedList(newlist)
  };



  const updateFun = () => {

    console.log('itemlist before update---', itemList)
    console.log('updatedlist before update---', updatedList)



    const uplist = itemList.indexOf(updatedList)
    console.log('--->uplist', uplist)
    console.log('--->selected ID', selectedInputId)

    // const nlist = itemList.filter((item, index) => index === uplist )
    // console.log('nlist---', nlist)

    console.log(updatedInput)

    itemList.filter((item, index) => {
      if (index === uplist) {
          itemList[uplist] = updatedInput
      }
    })

    // alert(JSON.stringify(matchValue))




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
          minHeight: '80vh'
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
        {(updateState) ?
          <Update setUpdatedInput={setUpdatedInput} updatedInput={updatedInput} updateFun={updateFun} cancelFun={cancelFun} />
          :
          <FooterComponent inputChagne={inputChagne} setInputChagne={setInputChagne} handlesubmit={(e) => handlesubmit(e)} />}
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
