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
        bottom: 1,
        textAlign: "center",
        height: 148,
        backgroundImage:
          " linear-gradient(to bottom, rgba(500,73,49,0), azure)",
      }}
    >
   <form style={{ display: "grid" }} onSubmit={e => updateform(e)}>
        <input
          className=''
          style={{
            display: null,
            height: 41,
            width: "98%",
            justifySelf: "center",
            border: "none",
            marginBottom: 50,
            borderRadius: 20,
            outline: 'none',
            textAlign: 'center',
            backgroundColor: '#aac8f5'
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
          <span
          style={{
            position:'fixed',
            bottom: 11,
            left: '28%'
          }}
          className='img'>
          <img
          className='animate__animated animate__backInRight'
          style={{
            width:55,
            marginRight: 40
          }}
          src={check}
          onClick={() => updateFun()}
          /> 
          <img
          className='animate__animated animate__backInLeft'
          style={{
            width:55
          }}
          src={cancel}
          onClick={cancelFun}
          /> 
          </span>
        </button>
   </form>
    </div>
  );
};

export default Update;
