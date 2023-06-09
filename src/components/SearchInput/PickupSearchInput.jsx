import React, { useContext, useEffect, useRef } from "react";
import Autocomplete from "react-google-autocomplete";
import { MainModalContext } from "../../Contexts/MainModalContext";

//Data for development only
import nearbySearchDummyData from "../../devData/dummy_nearby_search_data.json";

const PickupSearchInput = () => {
  const {
    setNearbyResults,
    searchInputFocusActive,
    setSearchInputFocusActive,
    setSearchInputReceived,
    selectedStore,
  } = useContext(MainModalContext);

  const MAP_KEY = import.meta.env.VITE_MAPS_KEY;

  const inputRef = useRef(null);

  // *** FUNCTIONS *** //

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
  async function placeChangedDevelopment() {
    console.log("running dummy place change function");

    setNearbyResults(nearbySearchDummyData);
  }

  // DISABLED FOR DEVELOPMENT
  // *** PLACE CHANGED FUNCTION FOR PRODUCTION  *** //
  // async function placeChanged(place) {
  //   //search radius and location
  //   const locationLat = place.geometry.location.lat();
  //   const locationLong = place.geometry.location.lng();
  //   const location = `${locationLat}%2C${locationLong}`;
  //   const radius = 40000;

  //   //fetch nearby places based on user input location
  //   let storeLocations = await fetch(
  //     `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=${radius}&keyword=chipotle&fields=name&key=${MAP_KEY}`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       return data.results;
  //     })
  //     .catch((error) => console.log(error));

  //   //use place deatils api to get address for each location and add to location object
  //   let mapLocations = await addAdressToStoreLocations(storeLocations);

  //   setNearbyResults(mapLocations);
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
      // inputRef.current.value ="";
      // inputRef.current.value = selectedStore.address_short;
    }
  }, [selectedStore]);

  return (
    <>
      <div className="w-full" onClick={focusInputCursor}>
        <Autocomplete
          apiKey={MAP_KEY}
          style={{ width: "100%" }}
          //onPlaceSelected: live API disabled for development
          // onPlaceSelected={placeChanged}
          onPlaceSelected={null}
          options={{
            types: ["(regions)"],
            fields: ["geometry"],
            componentRestrictions: { country: "us" },
          }}
          placeholder=""
          // onIput: live API disabled for development
          onInput={handleUserInput}
          // onInput={null}
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

export default PickupSearchInput;
