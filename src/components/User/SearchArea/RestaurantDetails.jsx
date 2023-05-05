import React, { useContext } from "react";
import { SearchAreaContext } from "../Contexts/SearchAreaContexts";

const RestaurantDetails = () => {
  const { showPickupDetail, setShowPickupDetail, selectedStore } =
    useContext(SearchAreaContext);

  const handleClose = () => {
    setShowPickupDetail((prev) => !prev);
  };

  console.log('selected store in restaurant details: ', JSON.stringify(selectedStore))
  return (
    <div className="restaurant-details-view  bg-white h-full w-full absolute top-0 left-0 z-10">
      <div className="restaurant-details px-5 pb-5 min-width-[325px] w-full">
        <div className="header flex bg-pink-100">
          <a href="#">{selectedStore.address_street} </a>
          {selectedStore.city}, {selectedStore.state}
           city and state under link, close  <button className="bg-blue-100" onClick={handleClose}>
          CLOSE
        </button>
        </div>
        <div className="pill bg-blue-100">
          'pill', currently closed/open
        </div>
        <div className="vicinity bg-yellow-100">
          vicinity (nearby cross streets)
        </div>
        <div className="btn-pickup bg-orange-100">
          Button = pickup
        </div>
        <div className="btn-catering bg-green-50">
          Button =catering
        </div>
        <div className="pickup-info bg-purple-50">
          pickup info (modal, use new dialog tag)
        </div>
        <div className="hours bg-blue-50">
          mon-sun 9am to 10pm
        </div>
       
      </div>
    </div>
  );
};

export default RestaurantDetails;
