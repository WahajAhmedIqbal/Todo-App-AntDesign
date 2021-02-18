import React, { useState } from "react";
import image from "../../assets/add.png";
import "./footerStyle.css";

const Footer = ({ inputChange, setInputChange, handleSubmit }) => {
  const [inputType, setInputType] = useState(false);
  const [rotate, setRotate] = useState(false);
  const [colo, setColo] = useState(false);

  const handleInput = () => {
    setInputType(!inputType);
    setRotate(!rotate);
    setColo(!colo);
  };

  let classes = !inputType ? "none " : null;
  let rot = rotate ? "rotate(45deg)" : null;
  let colour = colo ? "#f95454" : "cornflowerblue";

  // Render Function
  const _RenderInput = () => {
    return (
      <input
        className="animate__animated animate__pulse animate__faster"
        style={{
          display: classes,
          height: 41,
          width: "98%",
          justifySelf: "center",
          border: "none",
          marginBottom: 50,
          borderRadius: 20,
          outline: "none",
          textAlign: "center",
          backgroundColor: "#aac8f5",
        }}
        type="text"
        placeholder="Add Items"
        value={inputChange}
        onChange={(e) => setInputChange(e.target.value)}
      />
    );
  };

  const _RenderButton = () => {
    return (
      <button className="animate__fadeOut footer-btn add-btn">
        <img
          style={{
            width: 60,
            transform: rot,
            backgroundColor: colour,
            borderRadius: 43,
            transitionDuration: "0.3s",
          }}
          className="add-img"
          src={image}
          onClick={handleInput}
        />
      </button>
    );
  };

  return (
    <div className="footer-main-box">
      <form onSubmit={handleSubmit} className="form-main-box">
        {_RenderInput()}
        {_RenderButton()}
      </form>
    </div>
  );
};

export default Footer;
