import React from "react";
import { useContext, useRef, useEffect } from "react";

import storeLocationMarker from "../../../assets/icon-store-location-marker.png";
import deliveryMarker from "../../../assets/icon-delivery-location-marker.png";
import { SearchAreaContext } from "../Contexts/SearchAreaContexts";

const Map = () => {
  const { nearbyResults, selectedStore, deliveryModeActive, deliveryLocation } =
    useContext(SearchAreaContext);
  const ref = useRef();

  //add marker to map
  const image = storeLocationMarker;

  useEffect(() => {
    let mapOptions = {};

    let map;

    if (deliveryModeActive && deliveryLocation !== null) {
      console.log("from MAP delivery mode active delivery location not null");
      mapOptions = {
        ...mapOptions,
        center: {
          lat: deliveryLocation.lat,
          lng: deliveryLocation.lng,
        },
        zoom: 13,
      };

      map = new google.maps.Map(ref.current, mapOptions);
      let marker = new google.maps.Marker({
        position: {
          lat: deliveryLocation.lat,
          lng: deliveryLocation.lng,
        },
        ref,
        icon: deliveryMarker,
      });
      marker.setMap(map);
      return;
    }

    // Pickup View, no search yet
    if (nearbyResults.length === 0) {
      console.log("from MAP no nearby results");
      mapOptions = {
        zoom: 3,
        center: { lat: 41.850033, lng: -87.6500523 },
      };

      //reset map with new center
      map = new google.maps.Map(ref.current, mapOptions);
    }

    if (nearbyResults.length > 0 && selectedStore === null) {
      mapOptions = {
        ...mapOptions,
        center: {
          lat: nearbyResults[0].geometry.location.lat,
          lng: nearbyResults[0].geometry.location.lng,
        },
        zoom: 10,
      };

      //reset map with new center
      map = new google.maps.Map(ref.current, mapOptions);

      nearbyResults.map((item) => {
        let marker = new google.maps.Marker({
          position: {
            lat: item.geometry.location.lat,
            lng: item.geometry.location.lng,
          },
          ref,
          icon: image,
        });
        marker.setMap(map);
      });
    }

    if (nearbyResults.length > 0 && selectedStore !== null) {
      mapOptions = {
        ...mapOptions,
        center: {
          lat: selectedStore.geometry.location.lat,
          lng: selectedStore.geometry.location.lng,
        },
        zoom: 13,
      };
      //reset map with new center
      map = new google.maps.Map(ref.current, mapOptions);
      nearbyResults.map((item) => {
        let marker = new google.maps.Marker({
          position: {
            lat: item.geometry.location.lat,
            lng: item.geometry.location.lng,
          },
          ref,
          icon: storeLocationMarker,
        });
        marker.setMap(map);
      });
    }
  }, [nearbyResults, selectedStore, deliveryLocation, deliveryModeActive]);

  return <div className="map w-full h-[320px] md:h-full" ref={ref} id="map" />;
};

export default Map;
