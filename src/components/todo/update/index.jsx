import React, { useState } from "react";

const Update = ({}) => {
  const [item, setItem] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // edithandler(item);
      }}
    >
      <input
        type="text"
        // value={item}
        // onChange={(e) => setItem(e.target.value)}
      />
      <button>submit</button>
    </form>
  );
};

export default Update;
