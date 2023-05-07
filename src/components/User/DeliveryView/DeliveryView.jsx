import React, { useContext, useEffect, useRef } from "react";
import DeliveryViewMessage from "./DeliveryViewMessage";
import DeliveryViewResults from "./DeliveryViewResults";
import { SearchAreaContext } from "../Contexts/SearchAreaContexts";

const DeliveryView = () => {
  const { nearbyResults, deliveryLocation } = useContext(SearchAreaContext);
  const DeliveryViewMessageRef = useRef(null);
  console.log('current delivery location?', deliveryLocation);

  useEffect(() => {}, [deliveryLocation]);

 

  return (
    <div>
 
        {deliveryLocation === null ? <DeliveryViewMessage /> : null}
      
        { deliveryLocation !==null ? <DeliveryViewResults /> : null}

    </div>
  );
};

export default DeliveryView;
