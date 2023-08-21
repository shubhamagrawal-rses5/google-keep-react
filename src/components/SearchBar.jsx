import React from "react";
import IconButton from "../elements/IconButton";

function SearchBar({ searchString, setSearchString }) {
  function handleChange(e) {
    setSearchString(e.target.value);
  }

  function handleReset() {
    setSearchString("");
  }

  function handleSearchIconClick() {
    document.querySelector('input[aria-label="Search"]').focus();
  }

  return (
    <div className="searchbar-container">
      <IconButton
        icon={<i className="fas fa-search" />}
        styles={{ fontSize: "16px" }}
        onClick={handleSearchIconClick}
      />
      <input
        aria-label="Search"
        placeholder="Search"
        type="text"
        value={searchString}
        onChange={handleChange}
      ></input>

      <IconButton
        icon={<i className="fa-solid fa-xmark" />}
        styles={{ fontSize: "18px" }}
        onClick={handleReset}
      />
    </div>
  );
}

export default SearchBar;
