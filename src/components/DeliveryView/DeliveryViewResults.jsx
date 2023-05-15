import React, { useEffect, useContext } from "react";
import locationPepper from "../../assets/chipotle-location.svg";
import { MainModalContext } from "../../Contexts/MainModalContext";
import carGold from "../../assets/car-gold.svg";

const DeliveryViewResults = () => {
  const {
    setDeliveryLocation,
    deliveryLocation,
    setNearbyResults,
    setDeliveryModeActive,
  } = useContext(MainModalContext);

  const handlePickupInstead = () => {
    setNearbyResults([]);
    setDeliveryModeActive(false);
    setDeliveryLocation(null);
  };

  useEffect(() => {}, [deliveryLocation]);

  return (
    <div className=" flex justify-center px-5 flex-col items-center mt-9 mb-56">
      <img
        src={carGold}
        alt="gold car icon"
        style={{ width: "65px", height: "85px" }}
      />
      <div className="message mx-11 mb-11 mt-7 text-center flex flex-col">
        <span className="mb-3 inline-block">
          <p className="uppercase text-[#451400] font-tradeGothicBold text-lg font-bold">
            You're in Luck,<br></br> We can deliver to
          </p>
        </span>

        <span className="inline-block flex-column mb-4 text-[#451400] text-sm font-light">
          <p>{deliveryLocation.street_address}</p>
          <p>{deliveryLocation.city_state_country}</p>
        </span>
        <p className="text-[#8c766d]">
          Menu pricing for delivery is higher and fees apply.
        </p>
      </div>
      <div className="button text-white border-[#451400] bg-[#451400] w-full ">
        Add Adress Details
      </div>
      <p
        className="uppercase font-bold underline text-[#B68207] cursor-pointer"
        onClick={handlePickupInstead}
      >
        Pickup Instead
      </p>
    </div>
  );
};

export default DeliveryViewResults;
