import React from "react";
import IconButton from "../elements/IconButton";
import Tooltip from "../elements/Tooltip";

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
      <Tooltip tooltipContent={"Search"}>
        <IconButton
          icon={<i className="fas fa-search" />}
          styles={{ fontSize: "16px" }}
          onClick={handleSearchIconClick}
        />
      </Tooltip>

      <input
        aria-label="Search"
        placeholder="Search"
        type="text"
        value={searchString}
        onChange={handleChange}
      ></input>
      <Tooltip tooltipContent={"Cancel"}>
        <IconButton
          icon={<i className="fa-solid fa-xmark" />}
          styles={{
            fontSize: "18px",
            visibility: searchString ? "visible" : "hidden",
          }}
          onClick={handleReset}
        />
      </Tooltip>
    </div>
  );
}

export default SearchBar;
