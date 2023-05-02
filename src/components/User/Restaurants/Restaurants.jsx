import React, { useContext, useEffect, useState } from "react";

import { SearchAreaContext } from "../Contexts/SearchAreaContexts";

const Restaurants = () => {
  const { nearbyResults, setSelectedLocation } = useContext(SearchAreaContext);
  const [streetAddressOnly, setStreetAddressOnly] = useState(null);
  const regexStreetAddressOnly = /^[^,]*/;

  useEffect(() => {
    if (nearbyResults.length > 0) {
      let addressesOnly = nearbyResults.map((restaurant) => {
        const match = restaurant.address.match(regexStreetAddressOnly);
        return match[0];
      });

      setStreetAddressOnly(addressesOnly.map((item) => item));
    } else return;
  }, [nearbyResults]);

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

      setSelectedLocation(currentLocation);
    }
  };

  return (
    //TODO: use roads api to find nearest intersection?
    <div className="restaurant-container flex flex-col">
      {nearbyResults &&
        nearbyResults.map((item, index) => (
          <a
            key={index}
            id={index}
            className="restaurant-name cursor-pointer underline"
            onClick={handleAddressLink}
          >
            {item.address.match(regexStreetAddressOnly)[0]}
          </a>
        ))}
    </div>
  );
};

export default Restaurants;
