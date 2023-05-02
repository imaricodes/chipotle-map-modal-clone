import React, { createContext, useState } from "react";

export const SearchAreaContext = createContext();

export const SearchContextProvider = (props) => {
  const [nearbyResults, setNearbyResults] = useState([]);
  const [placeID, setPlaceID] = useState(null);
  

  return (
    <SearchAreaContext.Provider
      value={{
        nearbyResults: nearbyResults,
        setNearbyResults: setNearbyResults,
      }}
    >
      {props.children}
    </SearchAreaContext.Provider>
  );
};
