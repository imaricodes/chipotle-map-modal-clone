import React, { createContext, useState } from "react";

export const SearchAreaContext = createContext();

export const SearchContextProvider = (props) => {
  const [nearbyResults, setNearbyResults] = useState([]);

  const [searchInputFocusActive, setSearchInputFocusActive] = useState(false);
  const [searchInputReceived, setSearchInputReceived] = useState(false);
  const [showPickupDetail, setShowPickupDetail] = useState(false);
  const [selectedStore, setSelectedStore] = useState(null);
  const [pickupInfoModalActive, setPickupInfoModalActive] = useState(false);
  const [deliveryModeActive, setDeliveryModeActive] = useState(false);

  return (
    <SearchAreaContext.Provider
      value={{
        nearbyResults: nearbyResults,
        setNearbyResults: setNearbyResults,
        searchInputFocusActive: searchInputFocusActive,
        setSearchInputFocusActive: setSearchInputFocusActive,
        searchInputReceived: searchInputReceived,
        setSearchInputReceived: setSearchInputReceived,
        showPickupDetail: showPickupDetail,
        setShowPickupDetail: setShowPickupDetail,
        selectedStore: selectedStore,
        setSelectedStore: setSelectedStore,
        pickupInfoModalActive: pickupInfoModalActive,
        setPickupInfoModalActive: setPickupInfoModalActive,
        deliveryModeActive: deliveryModeActive,
        setDeliveryModeActive: setDeliveryModeActive,
      }}
    >
      {props.children}
    </SearchAreaContext.Provider>
  );
};
