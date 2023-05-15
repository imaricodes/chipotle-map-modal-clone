import React, { useEffect, useContext, useRef } from "react";
import { SearchContainer } from "../ComponentsIndex";
import { SearchAreaContext } from "../../Contexts/SearchAreaContexts";

const ModalContainer = () => {
  const modalRef = useRef(null);

  const {
    locationModalActive,
    setLocationModalActive,
    setNearbyResults,
    setDeliveryLocation,
    setDeliveryModeActive,
    setPickupInfoModalActive,
    setShowPickupDetail,
    setSelectedStore,
  } = useContext(SearchAreaContext);

  const handleCloseModal = () => {
    setLocationModalActive(false);
    setNearbyResults([]);
    setDeliveryLocation(null);
    setDeliveryModeActive(false);
    setPickupInfoModalActive(false);
    setShowPickupDetail(null),
      setSelectedStore(null),
      modalRef.current.classList.toggle("hidden");
  };

  useEffect(() => {
    if (locationModalActive) {
      modalRef.current.classList.toggle("hidden");
      modalRef.current.classList.toggle("flex");
    } else {
      modalRef.current.classList.add("hidden");
    }
  }, [locationModalActive]);

  return (
    <div ref={modalRef} className="modal-container  relative hidden">
      {/* TODO: Replace text x with icon */}
      <button
        onClick={handleCloseModal}
        className="h-10 w-10 absolute z-[9000] drop-shadow-md right-5 rounded-full bg-white top-8 flex justify-center items-center text-[#624738] font-bold text-[30px] cursor-pointer "
      >
        X
      </button>
      <SearchContainer />
    </div>
  );
};

export default ModalContainer;
