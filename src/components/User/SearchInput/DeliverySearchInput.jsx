import React, { useContext, useEffect, useRef } from "react";
import Autocomplete from "react-google-autocomplete";
import { SearchAreaContext } from "../Contexts/SearchAreaContexts";
import addressDummyData from "../dummyData/dummy_deliveryAddress.json";


const DeliverySearchInput = (props) => {
  const {
    setNearbyResults,
    searchInputFocusActive,
    setSearchInputFocusActive,
    setSearchInputReceived,
    selectedStore,
    deliveryLocation,
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

  // parseAddress(testAddress);

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
        console.log("element vicinity", element.vicinity);
        return fetch(
          `https://maps.googleapis.com/maps/api/place/details/json?place_id=${element.place_id}&fields=${fields.name},${fields.formatted_address},${fields.opening_hours}&key=${MAP_KEY}`
        )
          .then((response) => response.json())
          .then((data) => {
            const regexStreetAddressOnly = /^[^,]*/;
            const regexCityStateZip = /,\s*(.*)/g;
            const regexShortAddress = /\s[0-9]+,\s*USA$/g;
            const regexDailyHours = /^([^\s]+)\s/;

            console.log(data.result.opening_hours.open_now);

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

  // *** DEVELOPMENT PLACE CHANGED FUNCTION *** //
  async function placeChangedDevelopment(addressDumyData) {
    console.log("running dummy addrress  function");
    setDeliveryLocation(addressDummyData);
  }

  // *** PRODUCTION PLACE CHANGED FUNCTION *** //
  async function placeChanged(place) {
    //search radius and location
    //TODO: Does this need to change?
    const locationLat = place.geometry.location.lat();
    const locationLong = place.geometry.location.lng();
    const location = `${locationLat}%2C${locationLong}`;
    const radius = 40000;


    //check for undefined address components

    let obj = {
      street_address: `${place.address_components[0].long_name} ${place.address_components[1].long_name}`,
      city_state_country: `${place.address_components[2].long_name}, ${place.address_components[4].short_name}, ${place.address_components[5].short_name}`,
      place_id: place.place_id,
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
    }

    console.log('obj', JSON.stringify(obj));

    //set deliveryLocation
    setDeliveryLocation(obj);

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
    <>
      <div className="w-full" onClick={focusInputCursor}>
        <Autocomplete
          apiKey={MAP_KEY}
          style={{ width: "100%" }}
          onPlaceSelected={placeChanged}
          // onPlaceSelected={null}
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
          onInput={handleUserInput}
          // onInput={null}
          ref={inputRef}
          // onError={(status, clearSuggestions) => clearSuggestions()}
          onError={(status, error, clearSuggestions) =>
            console.log("WAYS", error)
          }
        />
      </div>
      {/* <button
        className="w-40 h-20 bg-red-100"
        onClick={placeChangedDevelopment}
      >
        Run Dummy Data
      </button> */}
    </>
  );
};

export default DeliverySearchInput;
