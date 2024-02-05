import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Search = ({ id, value, onInputChange, type = "text", children }) => {
  return (
    <div className="search">
      <label htmlFor={id}>{children}</label>
      &nbsp;
      <input
        id={id}
        type={type}
        value={value}
        onChange={onInputChange}
        placeholder="Sök kanal"
      />
      <div className="search-icon">
        <FaMagnifyingGlass />
      </div>
    </div>
  );
};
export default Search;
