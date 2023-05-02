import React, { useContext, useEffect, useState } from "react";

import { SearchAreaContext } from "../Contexts/SearchAreaContexts";

const Restaurants = () => {
  const { nearbyResults } = useContext(SearchAreaContext);
  const [streetAddressOnly, setStreetAddressOnly] = useState(null);
  const regex = /^[^,]*/;

  useEffect(() => {
    console.log("nearbyResults in restaurants component", nearbyResults);
    let addressesOnly = nearbyResults.map((restaurant) => {
      // const regex = /^(\d+)\s+((?:[NSns][EWew])?\s*[\w]+\s+[\w\s]+?(?=,|[\w]*\d))/;
      // const regex = /^[0-9]+\s+[a-zA-Z0-9\s#,-]+(?=\s[A-Z]{2}\s[0-9]{5})/;
      const regex = /^[^,]*/;

      const match = restaurant.address.match(regex);
      // console.log('match: ', match[0]);
      return match[0];
    });

    console.log("addressesOnly", addressesOnly);
    setStreetAddressOnly(addressesOnly.map(item => item));
  }, [nearbyResults]);


  const handleAddressLink = (e) => {
    // console.log('e.target', e.target.innerText);
    // e.preventDefault();
    console.log('clicked')
    // console.log(e)
    // console.log(e.target)
    // console.log('index', index);
    // console.log('clicked address',nearbyResults[index].address);
    // console.log('clicked address',item.address);
  };

  return (
    //TODO: use roads api to find nearest intersection
      <div className="restaurant-container flex flex-col">
        {/* {
          streetAddressOnly && streetAddressOnly.map((item, index) => (
            <div key={index} className="restaurant-name">
              {item}
            </div>
        ))} */}
        {
          nearbyResults && nearbyResults.map((item, index) => (
            <a key={index} className="restaurant-name cursor-pointer underline" onClick={handleAddressLink}>
              {item.address.match(regex)[0]}
            </a>
        ))}

      </div>

  );
};

export default Restaurants;
