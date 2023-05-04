import React, { createContext, useState } from "react";

export const SearchAreaContext = createContext();

export const SearchContextProvider = (props) => {
  const [nearbyResults, setNearbyResults] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedLocationAddress, setSelectedLocationAddress] = useState(null);
  const [searchInputFocusActive, setSearchInputFocusActive] = useState(false);
  const [searchInputReceived, setSearchInputReceived] = useState(false);


  

  return (
    <SearchAreaContext.Provider
      value={{
        nearbyResults: nearbyResults,
        setNearbyResults: setNearbyResults,
        selectedLocation: selectedLocation,
        setSelectedLocation: setSelectedLocation,
        searchInputFocusActive: searchInputFocusActive,
        setSearchInputFocusActive: setSearchInputFocusActive,
        searchInputReceived: searchInputReceived,
        setSearchInputReceived: setSearchInputReceived,
        selectedLocationAddress: selectedLocationAddress,
        setSelectedLocationAddress: setSelectedLocationAddress,
      }}
    >
      {props.children}
    </SearchAreaContext.Provider>
  );
};
