import React from "react";
import { useContext, useRef, useEffect } from "react";

import pepperMarker from "../../../assets/icon-1.png";
import { SearchAreaContext } from "../Contexts/SearchAreaContexts";

const Map = () => {
  const { nearbyResults, selectedLocation } = useContext(SearchAreaContext);
  const ref = useRef();

  //add marker to map
  const image = pepperMarker;

  //use create markers in the use effect below
  const createMarkers = () => {
    let markers = [];
    nearbyResults.array.forEach((element) => {});
    const image = pepperMarker;
  };

  useEffect(() => {
    let mapOptions = {};

    let map;

    if (nearbyResults.length === 0) {
      mapOptions = {
        zoom: 3,
        center: { lat: 41.850033, lng: -87.6500523 },
      };

      //reset map with new center
      map = new google.maps.Map(ref.current, mapOptions);
    }

    if (nearbyResults.length > 0 && selectedLocation === null) {
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

    if (nearbyResults.length > 0 && selectedLocation !== null) {
      mapOptions = {
        ...mapOptions,
        center: {
          lat: selectedLocation.center.lat,
          lng: selectedLocation.center.lng,
        },
        zoom: selectedLocation.zoom,
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
  }, [nearbyResults, selectedLocation]);

  return <div className="map w-full h-[320px] md:h-full" ref={ref} id="map" />;
};

export default Map;
