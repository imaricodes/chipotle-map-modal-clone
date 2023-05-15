import React, { useContext } from "react";
// import SearchView from "../SearchView/SearchView";
// import PickupView from "../PickupView/PickupView";
// import RestaurantDetails from "../SearchArea/RestaurantDetails";
import { MainModalContext } from "../../Contexts/MainModalContext";
// import DeliveryView from "../DeliveryView/DeliveryView";

import {
  SearchView,
  PickupView,
  RestaurantDetails,
  DeliveryView,
} from "../ComponentsIndex";

const SearchArea = () => {
  const { showPickupDetail, deliveryModeActive } = useContext(MainModalContext);

  return (
    <div className="search-area flex  flex-col min-w-[375px] w-full h-full relative md:w-[375px]">
      {showPickupDetail && <RestaurantDetails />}

      <SearchView />
      {!deliveryModeActive ? <PickupView /> : null}
      {deliveryModeActive ? <DeliveryView /> : null}
    </div>
  );
};

export default SearchArea;
