import React, { useRef, useContext, useEffect } from "react";
import PickupSearchInput from "../SearchInput/PickupSearchInput";
import SearchInputPlaceHolder from "./SearchInputPlaceHolder";
import DeliverySearchInput from "../SearchInput/DeliverySearchInput";
import searchIcon from "../../assets/search.svg";
import closeIcon from "../../assets/close-icon.svg";
import { SearchAreaContext } from "../../Contexts/SearchAreaContexts";

const Search = () => {
  const {
    nearbyResults,
    setNearbyResults,
    setSearchInputFocusActive,
    searchInputReceived,
    setSearchInputReceived,
    deliveryModeActive,
    deliveryLocation,
    setDeliveryLocation,
    selectedStore,
  } = useContext(SearchAreaContext);

  const searchIconRef = useRef(null);
  const closeIconRef = useRef(null);
  const inputPlaceHolderRef = useRef(null);

  let searchInputActive = true;

  useEffect(() => {
    if (!deliveryModeActive) {
      if (nearbyResults.length === 0) {
        if (searchIconRef.current.classList.contains("hidden")) {
          searchIconRef.current.classList.remove("hidden");
          closeIconRef.current.classList.add("hidden");
        } else return;
      }

      if (nearbyResults.length > 0) {
        if (searchIconRef.current.classList.contains("hidden")) {
          return;
        } else {
          searchIconRef.current.classList.add("hidden");
          closeIconRef.current.classList.remove("hidden");
        }
      }
    }

    if (deliveryModeActive) {
      if (deliveryLocation === null) {
        if (searchIconRef.current.classList.contains("hidden")) {
          searchIconRef.current.classList.remove("hidden");
          closeIconRef.current.classList.add("hidden");
        } else return;
      }

      if (deliveryLocation !== null) {
        if (searchIconRef.current.classList.contains("hidden")) {
          return;
        } else {
          searchIconRef.current.classList.add("hidden");
          closeIconRef.current.classList.remove("hidden");
        }
      }
    }
  }, [deliveryModeActive, nearbyResults, deliveryLocation]);

  const handleCloseIcon = () => {
    if (!deliveryModeActive) {
      console.log("pickup close icon clicked");
      setNearbyResults([]);
      setSearchInputReceived(false);
      setSearchInputFocusActive(false);
    }
    if (deliveryModeActive) {
      console.log("pickup close icon clicked");
      setDeliveryLocation(null);
      setSearchInputReceived(false);
      setSearchInputFocusActive(false);
    }
  };

  //*** UNCOMMENT FOR PRODUCTION ***/
  // useEffect(() => {
  //   if (searchInputReceived === true) {
  //     inputPlaceHolderRef.current.classList.remove(
  //       "input-placehoder-text--input-focus-active-false"
  //     );
  //     inputPlaceHolderRef.current.classList.add(
  //       "input-placehoder-text--input-focus-active-true"
  //     );
  //   } else {
  //     inputPlaceHolderRef.current.classList.add(
  //       "input-placehoder-text--input-focus-active-false"
  //     );
  //     inputPlaceHolderRef.current.classList.remove(
  //       "input-placehoder-text--input-focus-active-true"
  //     );
  //   }
  // }, [searchInputReceived]);

  //*** COMMENT OUT FOR PRODUCTION ***/
  useEffect(() => {
    if (searchInputReceived === true || selectedStore !== null) {
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
  }, [searchInputReceived, selectedStore]);

  return (
    <div className="search-container ">
      <SearchInputPlaceHolder
        inputPlaceHolderRef={inputPlaceHolderRef}
        placeHolderText={
          !deliveryModeActive ? "City, State, or Zip Code" : "Address"
        }
      />

      <span>
        <div className="flex justify-between border-b border-black w-full">
          {/* PICKUP SEARCH INPUT */}
          {!deliveryModeActive ? (
            <PickupSearchInput searchInputActive={searchInputActive} />
          ) : null}

          {/* DELIVERY SEARCH INPUT */}
          {deliveryModeActive ? (
            <DeliverySearchInput searchInputActive={searchInputActive} />
          ) : null}

          <img
            ref={searchIconRef}
            className="cursor-pointer"
            src={searchIcon}
            alt="search icon"
            style={{ width: "21px", height: "21px" }}
            onClick={() => console.log("search icon clicked")}
          />

          <img
            ref={closeIconRef}
            className="hidden cursor-pointer "
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
