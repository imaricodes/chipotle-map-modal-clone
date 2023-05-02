import React from "react";
import SearchView from "../SearchView/SearchView";
import PickupView from "../PickupView/PickupView";
import { SearchContextProvider } from "../Contexts/SearchAreaContexts";

const SearchArea = () => {
  return (
    <div className="search-area flex flex-1 flex-col w-full h-full">
      <SearchContextProvider>
        <SearchView />
        <PickupView />
      </SearchContextProvider>
    </div>
  );
};

export default SearchArea;
