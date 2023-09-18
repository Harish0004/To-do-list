import React, { useState } from "react";
import "./Content.css";
import Listitems from "./Listitems.js";

const Content = ({ items, handlecheck, handledelete }) => {
  return (
    <main id="content">
      {items.length ? (
        <Listitems
          items={items}
          handlecheck={handlecheck}
          handledelete={handledelete}
        />
      ) : (
        <p>Your list is empty</p>
      )}
    </main>
  );
};

export default Content;
