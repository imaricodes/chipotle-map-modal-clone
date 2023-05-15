import React, { useContext, useEffect, useRef } from "react";
import Autocomplete from "react-google-autocomplete";
import { SearchAreaContext } from "../../Contexts/SearchAreaContexts";
import addressDummyData from "../../devData/dummy_deliveryAddress.json";

const DeliverySearchInput = () => {
  const {
    searchInputFocusActive,
    setSearchInputFocusActive,
    setSearchInputReceived,
    selectedStore,
    setDeliveryLocation,
  } = useContext(SearchAreaContext);

  const MAP_KEY = import.meta.env.VITE_MAPS_KEY;

  const inputRef = useRef(null);

  const parseAddress = (address) => {
    let obj = {};
    let parsedElement = "";
    let trimmedElement = "";
    let arr = address.split(",");

    arr.forEach((element, index) => {
      parsedElement = element.replace(/,\s*$/, "");
      trimmedElement = parsedElement.trim();

      switch (index) {
        case 0:
          obj.street = trimmedElement;
          break;
        case 1:
          obj.city = trimmedElement;
          break;
        case 2:
          obj.state_zip = trimmedElement;
          break;
        default:
          break;
      }
    });

    return obj;
  };

  async function addAdressToStoreLocations(data) {
    let address;

    const fields = {
      formatted_address: "formatted_address",
      city: "city",
      state: "state",
      zip: "zip",
      name: "name",
      opening_hours: "opening_hours",
    };

    //add address property to each object in data array
    let result = await Promise.all(
      data.map(async (element) => {
        return fetch(
          `https://maps.googleapis.com/maps/api/place/details/json?place_id=${element.place_id}&fields=${fields.name},${fields.formatted_address},${fields.opening_hours}&key=${MAP_KEY}`
        )
          .then((response) => response.json())
          .then((data) => {
            const regexStreetAddressOnly = /^[^,]*/;
            const regexShortAddress = /\s[0-9]+,\s*USA$/g;
            const regexDailyHours = /^([^\s]+)\s/;

            address = data.result.formatted_address;

            //add addresses to map location object
            element.address_long = address;
            element.address_short = address.replace(regexShortAddress, "");
            element.address_street = address.match(regexStreetAddressOnly)[0];
            element.daily_hours =
              data.result.opening_hours.weekday_text[0].replace(
                regexDailyHours,
                ""
              );
            element.is_open_now = data.result.opening_hours.open_now;

            //parse the formatted address to get city, state, and zip
            let parsedAddress = parseAddress(address);
            element.address_parsed = parsedAddress;
            return element;
          })
          .catch((error) => console.log(error));
      })
    );
    return result;
  }

  // *** PLACE CHANGED FUNCTION FOR DEVLEOPMENT *** //
  async function placeChangedDevelopment(addressDumyData) {
    setDeliveryLocation(addressDummyData);
  }

  // DIABLED FOR DEVELOPMENT
  // *** PLACE CHANGED FUNCTION FOR PRODUCTIONS*** //
  // async function placeChanged(place) {
  //   //search radius and location
  //   //TODO: Does this need to change?
  //   const locationLat = place.geometry.location.lat();
  //   const locationLong = place.geometry.location.lng();

  //   //check for undefined address components

  //   let locationDetails = {
  //     street_address: `${place.address_components[0].long_name} ${place.address_components[1].long_name}`,
  //     city_state_country: `${place.address_components[2].long_name}, ${place.address_components[4].short_name}, ${place.address_components[5].short_name}`,
  //     place_id: place.place_id,
  //     lat: place.geometry.location.lat(),
  //     lng: place.geometry.location.lng(),
  //   }

  //   //set deliveryLocation
  //   setDeliveryLocation(locationDetails);

  // }

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
    <>
      <div className="w-full" onClick={focusInputCursor}>
        <Autocomplete
          // apiKey: disabled for development
          // apiKey={MAP_KEY}
          style={{ width: "100%" }}
          //onPlaceSelected: live API disabled for development
          // onPlaceSelected={placeChanged}
          onPlaceSelected={null}
          options={{
            types: ["address"],
            fields: [
              "address_components",
              "geometry.location",
              "formatted_address",
              "place_id",
            ],
            componentRestrictions: { country: "us" },
          }}
          placeholder=""
          //onInput: live API disabled for development
          // onInput={handleUserInput}
          onInput={null}
          ref={inputRef}
        />
        <button
          className="py-4 px-4 text-sm  bg-red-100"
          onClick={placeChangedDevelopment}
        >
          Due to prohibitive Google Maps API costs, this demo runs with dummy
          data. The mapping, however, is live. Click this box to run demo with
          dummy data.
        </button>
      </div>
    </>
  );
};

export default DeliverySearchInput;
