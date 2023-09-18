import React from "react";
import "./Content.css";
import { FaPlus } from "react-icons/fa";
const Additems = ({ newItems, SetnewItems, handlesubmit }) => {
  return (
    <form className="additems" onSubmit={handlesubmit}>
      <input
        type="text"
        placeholder="Add Item"
        required
        autoFocus
        value={newItems}
        onChange={(e) => SetnewItems(e.target.value)}
      />
      <button className="addbutton" type="submit">
        <FaPlus />
      </button>
    </form>
  );
};

export default Additems;
