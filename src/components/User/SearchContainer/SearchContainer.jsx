import React, { useRef, useContext, useEffect } from "react";
import { SearchArea, MapWrapper } from "../../ComponentsIndex";
import { SearchAreaContext } from "../Contexts/SearchAreaContexts";
import { set } from "y";

const SearchContainer = () => {
  const { pickupInfoModalActive, setPickupInfoModalActive} = useContext(SearchAreaContext);

  const dialogRef = useRef(null);

  const closeModal = () => {
    dialogRef.current.close();
    setPickupInfoModalActive(false);
  };

  useEffect(() => {
    pickupInfoModalActive
      && dialogRef.current.showModal()
      
  }, [pickupInfoModalActive]);

  return (
    <div
      className=" search-container flex flex-col h-screen w-full md:flex-row-reverse relative"
    >
      <dialog className="bg-yellow-50 h-[100%] w-full absolute top-0" ref={dialogRef}>
        <div >This is a modal</div>
        <button onClick={closeModal}>Close</button>
      </dialog>
      {/* <MapWrapper /> */}
      <SearchArea />
    </div>
  );
};

export default SearchContainer;
