import React, { useRef, useContext, useEffect, useState } from "react";
import PickupSearchInput from "../SearchInput/PickupSearchInput";
import searchIcon from "../../../assets/search.svg";
import closeIcon from "../../../assets/close-icon.svg";
import { SearchAreaContext } from "../Contexts/SearchAreaContexts";

const Search = () => {
  const {
    nearbyResults,
    setNearbyResults,
    searchInputFocusActive,
    setSearchInputFocusActive,
    searchInputReceived,
    setSearchInputReceived,
  } = useContext(SearchAreaContext);

  const searchIconRef = useRef(null);
  const closeIconRef = useRef(null);
  const inputPlaceHolderRef = useRef(null);

  let searchInputActive = true;

  useEffect(() => {
    nearbyResults.length > 0
      ? searchIconRef.current.classList.add("hidden")
      : searchIconRef.current.classList.remove("hidden");
    nearbyResults.length > 0
      ? closeIconRef.current.classList.remove("hidden")
      : closeIconRef.current.classList.add("hidden");
  }, [nearbyResults]);

  const handleCloseIcon = () => {
    console.log("close icon clicked");
    setNearbyResults([]);
    setSearchInputReceived(false);
    setSearchInputFocusActive(false);
  };

  const setSearchInputState = () => {
    if (searchInputFocusActive === true) {
      return;
    }
    if (searchInputFocusActive === false) {
      setSearchInputFocusActive(true);
    }
  };

  useEffect(() => {
    if (searchInputReceived === true) {
      inputPlaceHolderRef.current.classList.remove(
        "input-placehoder-text--input-focus-active-false"
      );
      inputPlaceHolderRef.current.classList.add(
        "input-placehoder-text--input-focus-active-true"
      );
    } else {
      inputPlaceHolderRef.current.classList.add(
        "input-placehoder-text--input-focus-active-false"
      );
      inputPlaceHolderRef.current.classList.remove(
        "input-placehoder-text--input-focus-active-true"
      );
    }
  }, [searchInputReceived]);

  return (
    <div className="search-container ">
      <div className="input-placeholder-text-container flex h-4 relative">
        <div
          ref={inputPlaceHolderRef}
          className="input-placehoder-text input-placehoder-text--input-focus-active-false absolute transition-all ease-in-out duration-[2000]"
          onClick={setSearchInputState}
        >
          <p>City, State, or Zip Code</p>
        </div>
      </div>
      <span>
        <div className="flex justify-between border-b border-black w-full">
          <PickupSearchInput searchInputActive={searchInputActive} />
          <img
            ref={searchIconRef}
            className="cursor-pointer"
            src={searchIcon}
            alt="search icon"
            style={{ width: "21px", height: "21px" }}
          />
          <img
            ref={closeIconRef}
            className="hidden cursor-pointer"
            src={closeIcon}
            alt="close icon"
            style={{ width: "21px", height: "21px" }}
            onClick={handleCloseIcon}
          />
        </div>
      </span>
    </div>
  );
};

export default Search;
