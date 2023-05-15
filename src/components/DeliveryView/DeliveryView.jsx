import React, { useContext, useEffect } from "react";
import DeliveryViewMessage from "./DeliveryViewMessage";
import DeliveryViewResults from "./DeliveryViewResults";
import { SearchAreaContext } from "../../Contexts/SearchAreaContexts";

const DeliveryView = () => {
  const { deliveryLocation } = useContext(SearchAreaContext);

  useEffect(() => {}, [deliveryLocation]);

  return (
    <div>
      {deliveryLocation === null ? <DeliveryViewMessage /> : null}

      {deliveryLocation !== null ? <DeliveryViewResults /> : null}
    </div>
  );
};

export default DeliveryView;
