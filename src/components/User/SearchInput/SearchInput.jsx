import React, { useContext } from "react";
import Autocomplete from "react-google-autocomplete";
import { SearchAreaContext } from "../Contexts/SearchAreaContexts";

const SearchInput = () => {
  const { nearbyResults, setNearbyResults } = useContext(SearchAreaContext);
  const MAP_KEY = import.meta.env.VITE_MAPS_KEY;

  async function addAdressToStoreLocations(data) {
    console.log("data in get address ", data);

    let address;

    //add address property to each object in data array
    let result = await Promise.all(
      data.map(async (element) => {
        return fetch(
          `https://maps.googleapis.com/maps/api/place/details/json?place_id=${element.place_id}&fields=formatted_address&key=${MAP_KEY}`
        )
          .then((response) => response.json())
          .then((data) => {
            address = data.result.formatted_address;
            //add address to map location object
            element.address = address;
            return element;
          })
          .catch((error) => console.log(error));
      })
    );
    return result;
  }

  async function placeChanged(place) {
    //search radius and location
    const locationLat = place.geometry.location.lat();
    const locationLong = place.geometry.location.lng();
    const location = `${locationLat}%2C${locationLong}`;
    const radius = 40000;

    //fetch nearby places based on user input location
    let storeLocations = await fetch(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=${radius}&keyword=chipotle&key=${MAP_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        return data.results;
      })
      .catch((error) => console.log(error));

    let mapLocations = await addAdressToStoreLocations(storeLocations);

    setNearbyResults(mapLocations);
  }
  return (
    <div className="w-full">
      <Autocomplete
        apiKey={MAP_KEY}
        style={{ width: "100%" }}
        onPlaceSelected={placeChanged}
        options={{
          types: ["(regions)"],
          fields: ["address_components", "geometry", "icon", "name"],
          componentRestrictions: { country: "us" },
        }}
      />
    </div>
  );
};

export default SearchInput;
