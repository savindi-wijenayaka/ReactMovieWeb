import React, { useState, useRef } from "react";
import FontAwesome from "react-fontawesome";
import {
  StyledSearchBar,
  StyledSearchBarContent
} from "../styles/StyledSearchBar";

const SearchBar = ({ callback }) => {
  const [state, setstate] = useState("");
  const timeOut = useRef(null);

  const handleSearch = event => {
    const { value } = event.target;

    clearTimeout(timeOut.current);
    setstate(value);

    timeOut.current = setTimeout(() => {
      callback(value);
    }, 500);
  };

  return (
    <StyledSearchBar>
      <StyledSearchBarContent>
        <FontAwesome
          className="fa-search"
          name="search"
          size="2x"
        ></FontAwesome>
        <input
          type="text"
          placeholder="Type something to Search"
          onChange={handleSearch}
          value={state}
        ></input>
      </StyledSearchBarContent>
    </StyledSearchBar>
  );
};

export default SearchBar;
