import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const Lineitems = ({ item, handlecheck, handledelete }) => {
  return (
    <li className="item" key={item.id}>
      <input
        type="checkbox"
        checked={item.checked}
        onChange={() => handlecheck(item.id)}
      />

      <label
        onDoubleClick={() => handlecheck(item.id)}
        style={item.checked ? { textDecoration: "line-through" } : null}>
        {item.item}
      </label>

      <FaTrashAlt
        onClick={() => handledelete(item.id)}
        tabIndex="0"
        role="button"
        id="trash"
      />
    </li>
  );
};

export default Lineitems;
