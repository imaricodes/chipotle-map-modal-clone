import React from "react";
import { SearchArea, MapWrapper } from "../../ComponentsIndex";

const SearchContainer = () => {
  return (
    <div className=" search-container flex flex-col h-screen w-full md:flex-row-reverse relative">
      <MapWrapper />
      <SearchArea />
    </div>
  );
};

export default SearchContainer;
