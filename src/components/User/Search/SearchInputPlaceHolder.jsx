import React, { useRef, useContext, useEffect, useState, useLayoutEffect } from "react";
import { SearchAreaContext } from "../Contexts/SearchAreaContexts";

const SearchInputPlaceHolder = (props) => {
  const {
    searchInputFocusActive,
    setSearchInputFocusActive,
  } = useContext(SearchAreaContext);

  const placeHolderText =  props.placeHolderText


  const setSearchInputState = () => {
    if (searchInputFocusActive === true) {
      return;
    }
    if (searchInputFocusActive === false) {
      setSearchInputFocusActive(true);
    }
  };

  return (
    <div className="input-placeholder-text-container flex h-4 relative">
      <div
        ref={props.inputPlaceHolderRef}
        className="input-placehoder-text input-placehoder-text--input-focus-active-false absolute transition-all ease-in-out duration-[2000]"
        onClick={setSearchInputState}
      >
        <p>{placeHolderText}</p>
      </div>
    </div>
  );
};

export default SearchInputPlaceHolder;
