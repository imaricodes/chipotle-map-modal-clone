import React, { useContext, useRef } from "react";
import SearchView from "../SearchView/SearchView";
import PickupView from "../PickupView/PickupView";
import RestaurantDetails from "../SearchArea/RestaurantDetails";
import { SearchAreaContext } from "../Contexts/SearchAreaContexts";

const SearchArea = () => {
  const { showPickupDetail } = useContext(SearchAreaContext);

  return (
    <div className="search-area flex flex-1 flex-col w-full h-full relative">
      {showPickupDetail && <RestaurantDetails />}

      <SearchView />
      <PickupView />
    </div>
  );
};

export default SearchArea;
