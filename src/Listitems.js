import React from "react";
import Lineitems from "./Lineitems";
import "./Content.css";

const Listitems = ({ items, handlecheck, handledelete }) => {
  return (
    <ul>
      {items.map((item) => (
        <Lineitems
          item={item}
          key={item.id}
          handlecheck={handlecheck}
          handledelete={handledelete}
        />
      ))}
    </ul>
  );
};

export default Listitems;
