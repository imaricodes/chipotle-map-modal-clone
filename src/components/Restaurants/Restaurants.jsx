import React, { useContext } from "react";

import { SearchAreaContext } from "../../Contexts/SearchAreaContexts";

const Restaurants = () => {
  const { nearbyResults, setShowPickupDetail, setSelectedStore } =
    useContext(SearchAreaContext);

  const handleAddressLink = (e) => {
    //TODO: this prevent default may have to go if it prevents the click and zoom feature
    e.preventDefault();
    if (nearbyResults.length > 0) {
      //TODO: here, using element target id, do something like zoom in on map, proabably will use nearby results, or hide other markers, or zoom in to coordinates (this would have to be passed using context.. something like selected location, also need to add this function to the markers themselves!)

      let currentLocation = {
        center: {
          lat: nearbyResults[e.target.id].geometry.location.lat,
          lng: nearbyResults[e.target.id].geometry.location.lng,
        },
        zoom: 16,
      };

      setSelectedStore(nearbyResults[e.target.id]);

      setShowPickupDetail(true);
    }
  };

  return (
    //TODO: use roads api to find nearest intersection?
    <div className="restaurant-container flex flex-col">
      {nearbyResults &&
        nearbyResults.map((item, index) => (
          <div className="  restaurant-list-bg--animate " key={index}>
            <div className="py-4 ml-5 mr-5 border-b ">
              <a
                id={index}
                className="restaurant-name cursor-pointer underline font-bold text-[#451400] text-base"
                onClick={handleAddressLink}
              >
                {item.address_street}
              </a>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Restaurants;
