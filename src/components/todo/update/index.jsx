import React, { useState } from "react";
import cancel from '../../../assests/cancel.png'
import check from '../../../assests/check.png'


const Update = ({setUpdatedInput, updateFun, cancelFun, updatedInput}) => {

  const updateform = (e) => {
    e.preventDefault()
  }
  return (
      <div
      style={{
        position: "sticky",
        // bottom: "5px",
        bottom: 1,
        textAlign: "center",
        height: 138,
        backgroundImage:
          " linear-gradient(to bottom, rgba(500,73,49,0), azure)",
      }}
    >
   <form style={{ display: "grid" }} onSubmit={e => updateform(e)}>
     {/* <h4>update Task</h4> */}
     
        <input
          className=''
          style={{
            display: null,
            height: 40,
            width: "97%",
            justifySelf: "center",
            border: "2px solid",
            marginBottom: 10,
            borderRadius: 20,
            outline: 'none',
            textAlign: 'center'
          }}
          type="text"
          value={updatedInput}
          onChange={(e) => setUpdatedInput(e.target.value)}
        />
        <button
          style={{
            background: "none",
            border: "none",
            width: "fit-content",
            justifySelf: "center",
          }}
        >
          <spna
          style={{
            position:'fixed',
            bottom: 11,
            left: '28%'
          }}
          className='img'>
          <img
          style={{
            width:60,
            marginRight: 40
          }}
          src={check}
          onClick={() => updateFun()}
          /> 
          <img
          style={{
            width:60
          }}
          src={cancel}
          onClick={cancelFun}
          /> 
          </spna>
          {/* <PlusCircleTwoTone
          onClick={handleInput}
             onClick={handlesubmit}
            style={{ fontSize: 65, cursor: "pointer" }}
          /> */}
        </button>
   </form>
    </div>
  );
};

export default Update;
