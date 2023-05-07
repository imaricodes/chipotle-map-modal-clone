import React, { useRef, useContext, useEffect, useState } from "react";
import PickupSearchInput from "../SearchInput/PickupSearchInput";
import SearchInputPlaceHolder from "./SearchInputPlaceHolder";
import DeliverySearchInput from "../SearchInput/DeliverySearchInput";
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
    deliveryModeActive,
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
     <SearchInputPlaceHolder
        inputPlaceHolderRef={inputPlaceHolderRef}
        placeHolderText={!deliveryModeActive ? "City, State, or Zip Code" : "Address"}
        
      /> 

      <span>
        <div className="flex justify-between border-b border-black w-full">
              {/* PICKUP SEARCH INPUT */}
          {!deliveryModeActive ? <PickupSearchInput searchInputActive={searchInputActive}/> : null}

              {/* DELIVERY SEARCH INPUT */}
          {deliveryModeActive ? <DeliverySearchInput searchInputActive={searchInputActive} /> : null}

          <img
            ref={searchIconRef}
            className="cursor-pointer"
            src={searchIcon}
            alt="search icon"
            style={{ width: "21px", height: "21px" }}
            onClick ={() => console.log("search icon clicked")}
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
