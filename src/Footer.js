import React from "react";
import "./Footer.css";

const Footer = ({ length }) => {
  return (
    <h1 id="footer">
      {length} list {length == 1 ? "item" : "items"}
    </h1>
  );
};

export default Footer;
