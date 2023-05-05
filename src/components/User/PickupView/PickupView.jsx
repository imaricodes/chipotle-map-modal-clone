import React, { useContext, useEffect, useRef } from "react";
import PickupViewMessage from "../../PickupViewMessage/PickupViewMessage";
import RestaurantContainer from "../RestaurantContainer/RestaurantContainer";
import { SearchAreaContext } from "../Contexts/SearchAreaContexts";

const PickupView = () => {
  const { nearbyResults } = useContext(SearchAreaContext);
  const PickupViewMessageRef = useRef(null);

  useEffect(() => {
    nearbyResults.length > 0
      ? PickupViewMessageRef.current.classList.add("hidden")
      : PickupViewMessageRef.current.classList.remove("hidden");
  }, [nearbyResults]);

  return (
    <div>
      <span ref={PickupViewMessageRef}>
        <PickupViewMessage />
      </span>
      <RestaurantContainer />
    </div>
  );
};

export default PickupView;
