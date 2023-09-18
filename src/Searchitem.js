import React from "react";

const Searchitem = ({ search, setsearch }) => {
  return (
    <form className="search" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        id="search"
        role="searchbox"
        placeholder="Search"
        value={search}
        onChange={(e) => setsearch(e.target.value)}
      />
    </form>
  );
};

export default Searchitem;
