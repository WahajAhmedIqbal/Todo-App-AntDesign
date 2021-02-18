import React, { useState } from "react";
import cancel from "../../../assets/cancel.png";
import check from "../../../assets/check.png";
import "./updateStyle.css";

const Update = ({ setUpdatedInput, updateFun, cancelFun, updatedInput }) => {
  const updateForm = (e) => {
    e.preventDefault();
  };

  const _RenderInput = () => (
    <input
      className="input-box"
      type="text"
      value={updatedInput}
      onChange={(e) => setUpdatedInput(e.target.value)}
    />
  );
  const _RenderButton = () => (
    <button className="btn-style">
      <span className="span1-" className="img">
        <img
          className="animate__animated animate__backInRight update-img"
          src={check}
          onClick={() => updateFun()}
        />
        <img
          className="animate__animated animate__backInLeft cancel-img"
          src={cancel}
          onClick={cancelFun}
        />
      </span>
    </button>
  );

  return (
    <div className="main-update-box">
      <form className="form-box" onSubmit={(e) => updateForm(e)}>
        {_RenderInput()}
        {_RenderButton()}
      </form>
    </div>
  );
};

export default Update;
