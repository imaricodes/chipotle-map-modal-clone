import React, { useContext, useEffect, useRef } from "react";
import Autocomplete from "react-google-autocomplete";
import { SearchAreaContext } from "../Contexts/SearchAreaContexts";

const SearchInput = (props) => {
  const {
    setNearbyResults,
    searchInputFocusActive,
    setSearchInputFocusActive,
    setSearchInputReceived,
    selectedStore
  } = useContext(SearchAreaContext);

  const MAP_KEY = import.meta.env.VITE_MAPS_KEY;

  const inputRef = useRef(null);

  async function addAdressToStoreLocations(data) {
    let address;

    //add address property to each object in data array
    let result = await Promise.all(
      data.map(async (element) => {
        return fetch(
          `https://maps.googleapis.com/maps/api/place/details/json?place_id=${element.place_id}&fields=formatted_address&key=${MAP_KEY}`
        )
          .then((response) => response.json())
          .then((data) => {

            const regexStreetAddressOnly = /^[^,]*/;
            const regexShortAddress = /\s[0-9]+,\s*USA$/g;
            address = data.result.formatted_address;

            //add addresses to map location object
            element.address_long = address;
            element.address_short= address.replace(regexShortAddress, '');
            // element.address_short = address.match(regexShortAddress)[0];
            element.address_street = address.match(regexStreetAddressOnly)[0]
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

    //use place deatils api to get address for each location and add to location object
    let mapLocations = await addAdressToStoreLocations(storeLocations);

    setNearbyResults(mapLocations);
  }

  const focusInputCursor = (e) => {
    e.preventDefault();
    inputRef.current.focus();
    setSearchInputFocusActive(true);
  };

  const handleUserInput = (e) => {
    e.target.value.length > 0
      ? setSearchInputReceived(true)
      : setSearchInputReceived(false);
  };

  useEffect(() => {
    if (searchInputFocusActive === true) {
      inputRef.current.focus();
    }

    if (searchInputFocusActive === false) {
      inputRef.current.value = "";
    }
  }, [searchInputFocusActive]);

  useEffect(() => {
    if (selectedStore) {
      inputRef.current.value = selectedStore.address_short;
    }
  }, [selectedStore]);

  return (
    <div className="w-full" onClick={focusInputCursor}>
      <Autocomplete
        apiKey={MAP_KEY}
        style={{ width: "100%" }}
        onPlaceSelected={placeChanged}
        options={{
          types: ["(regions)"],
          fields: ["address_components", "geometry", "icon", "name"],
          componentRestrictions: { country: "us" },
        }}
        placeholder=""
        onInput={handleUserInput}
        ref={inputRef}
      />
    </div>
  );
};

export default SearchInput;
