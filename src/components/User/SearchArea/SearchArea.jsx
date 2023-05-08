import React, { useContext, useRef } from "react";
import SearchView from "../SearchView/SearchView";
import PickupView from "../PickupView/PickupView";
import RestaurantDetails from "../SearchArea/RestaurantDetails";
import { SearchAreaContext } from "../Contexts/SearchAreaContexts";
import DeliveryView from "../DeliveryView/DeliveryView";

const SearchArea = () => {
  const { showPickupDetail, deliveryModeActive } = useContext(SearchAreaContext);

  return (
    <div className="search-area flex flex-1 flex-col w-full h-full relative">
      {showPickupDetail && <RestaurantDetails />}

      <SearchView />
      { !deliveryModeActive ? <PickupView /> : null}
      { deliveryModeActive ? <DeliveryView />: null}
    </div>
  );
};

export default SearchArea;
