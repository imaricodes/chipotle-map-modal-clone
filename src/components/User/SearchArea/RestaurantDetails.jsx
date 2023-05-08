import React, { useContext, useRef } from "react";
import { SearchAreaContext } from "../Contexts/SearchAreaContexts";
// import closeIcon from "../../../assets/close-icon.svg";
import infoIcon from "../../../assets/info-orange-brown.svg";
import closeIcon from "../../../assets/close-icon-restaurant-details.svg";
import { set } from "y";

const RestaurantDetails = () => {

  
  const { showPickupDetail, setShowPickupDetail, selectedStore, setPickupInfoModalActive } =
    useContext(SearchAreaContext);

    console.log('selected store is open?', selectedStore.is_open_now);

  const mapURLParameters = {
    lat: selectedStore.geometry.location.lat,
    lng: selectedStore.geometry.location.lng,
    place_id: selectedStore.place_id,
    zoom: 16,
  };

  const mapURLQuery = `https://www.google.com/maps/search/?api=1&query=${mapURLParameters.lat},${mapURLParameters.lng}&query_place_id=${mapURLParameters.place_id}&zoom=${mapURLParameters.zoom}`;

  const handleClose = () => {
    setShowPickupDetail((prev) => !prev);
  };



  const openModal = () => {
    setPickupInfoModalActive(prev => !prev);
  }

const storeOpen = false;

  return (
    <div className="restaurant-details-view  bg-white h-full w-full absolute pt-8 top-0 left-0 z-10">
        
    

      <div className="restaurant-details px-5 pb-5 min-width-[325px] w-full">
        <div className="header flex justify-between mb-3 relative">
          <div className="flex flex-col text-[#54392d]">
            <a
              className="font-bold underline"
              href={mapURLQuery}
              target="_blank"
            >
              {selectedStore.address_parsed.street}
            </a>
            <p className="text-base text-[#54392d]">
              {selectedStore.address_parsed.city},{" "}
              {selectedStore.address_parsed.state_zip}
            </p>
          </div>

          <button
            className="cursor-pointer absolute top-0 right-2"
            onClick={handleClose}
          >
            <img
              src={closeIcon}
              alt="close icon"
              style={{ width: "21px", height: "21px" }}
            />
          </button>
        </div>
        {!selectedStore.is_open_now && (
          <div className="mb-5 bg-[#AC2318] font-tradeGothicBold rounded-xl text-center inline-block px-2 py-1 text-white uppercase text-xs ">
            <p>currently closed</p>
          </div>
        )}

        {/* TODO: Figure out how to calculate nearby cross streets */}

        <div
          className="btn-pickup button text-white border border-[#451400]"
          style={
            !selectedStore.is_open_now ? {
              backgroundColor: "#D4CBC7",
              border: "none",
            } : {
              backgroundColor: "#451400",
              border: "none",
            } 
  
          }
        >
          pickup here
        </div>

        <div className="btn-pickup  button-catering   bg-white  mb-7  text-[#451400]  text-lg border border-[#451400]">
          order catering
        </div>

        <div className="pickup-info flex items-center gap-2 mb-5 cursor-pointer">
          <img
            src={infoIcon}
            alt="info icon"
            onClick={openModal}
            style={{ width: "16px", height: "19px" }}
          />
          <p className="text-sm font-bold text-[#59382b]">Pickup</p>
        </div>
        <div className="hours ">
          <p className="text-[#756456] font-extralight">
            Mon-Sun: {selectedStore.daily_hours}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetails;
