import React, { useEffect, useContext, useRef } from "react";
import locationTarget from "../../assets/location-target.svg";
import { MainModalContext } from "../../Contexts/MainModalContext";

import { Restaurants } from "../ComponentsIndex";

const RestaurantContainer = () => {
  const { nearbyResults, showPickupDetail } = useContext(MainModalContext);
  const targetSectionRef = useRef(null);

  useEffect(() => {
    nearbyResults.length > 0
      ? targetSectionRef.current.classList.add("hidden")
      : targetSectionRef.current.classList.remove("hidden");
  }, [nearbyResults]);

  return (
    <div className="restaurant-container flex flex-col  relative">
      <span className=" pl-8 pb-1 mb-4">
        <p className="text-base font-tradeGothicBold text-[#451400] font-bold ">
          NEARBY
        </p>
      </span>
      <span
        ref={targetSectionRef}
        className="flex flex-col items-center border-y border-dashed pt-6 pb-6 mb-24"
      >
        <div className="mb-2 ">
          <img src={locationTarget} alt="location target" />
        </div>
        <div>
          <p className="opacity-90">
            Tap the target to find the closest Chipotle
          </p>
        </div>
      </span>

      {!showPickupDetail && <Restaurants />}
    </div>
  );
};

export default RestaurantContainer;
