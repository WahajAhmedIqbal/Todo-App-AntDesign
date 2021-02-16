import React, { useState } from "react";
import image from "../../assests/add.png";

const Footer = ({ inputChagne, setInputChagne, handlesubmit }) => {
  const [inputtype, setinputtype] = useState(false);
  const [rotat, setRotat] = useState(false);
  const [colo, setColo] = useState(false);

  const handleInput = () => {
    setinputtype(!inputtype);
    setRotat(!rotat);
    setColo(!colo);
  };

  let classes = !inputtype ? "none " : null;
  let rot = rotat ? "rotate(45deg)" : null;
  let colour = colo ? "#f95454" : "cornflowerblue";

  return (
    <div
      style={{
        position: "sticky",
        bottom: "-10px",
        textAlign: "center",
        height: 149,
        backgroundImage:
          " linear-gradient(to bottom, rgba(500,73,49,0), azure)",
      }}
    >
      <form onSubmit={handlesubmit} style={{ display: "grid" }}>
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
          value={inputChagne}
          onChange={(e) => setInputChagne(e.target.value)}
        />
        <button
          className="animate__fadeOut "
          style={{
            background: "none",
            border: "none",
            width: "fit-content",
            justifySelf: "center",
          }}
        >
          <span
            style={{
              position: "fixed",
              bottom: 11,
              left: "42%",
            }}
            className="img"
          >
            <img
              style={{
                width: 60,
                transform: rot,
                backgroundColor: colour,
                borderRadius: 43,
                transitionDuration: "0.3s",
              }}
              src={image}
              onClick={handleInput}
            />
          </span>
        </button>
      </form>
    </div>
  );
};

export default Footer;
