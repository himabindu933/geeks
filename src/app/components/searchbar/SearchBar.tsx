import React from "react";
import { AiOutlineSearch } from "react-icons/Ai";

const SearchBar = () => {
  return (
    <>
      <div className="searchBar">
        <input placeholder="search here" />
        <AiOutlineSearch size={35} className="searchBar__icon" />
      </div>
    </>
  );
};

export default SearchBar;
