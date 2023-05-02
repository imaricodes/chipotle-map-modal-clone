import React, { createContext, useState } from "react";

export const SearchAreaContext = createContext();

export const SearchContextProvider = (props) => {
  const [nearbyResults, setNearbyResults] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);


  

  return (
    <SearchAreaContext.Provider
      value={{
        nearbyResults: nearbyResults,
        setNearbyResults: setNearbyResults,
        selectedLocation: selectedLocation,
        setSelectedLocation: setSelectedLocation,
      }}
    >
      {props.children}
    </SearchAreaContext.Provider>
  );
};
