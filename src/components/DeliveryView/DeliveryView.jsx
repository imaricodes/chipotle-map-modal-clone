import React, { useContext, useEffect } from "react";
import DeliveryViewMessage from "./DeliveryViewMessage";
import DeliveryViewResults from "./DeliveryViewResults";
import { MainModalContext } from "../../Contexts/MainModalContext";

const DeliveryView = () => {
  const { deliveryLocation } = useContext(MainModalContext);

  useEffect(() => {}, [deliveryLocation]);

  return (
    <div>
      {deliveryLocation === null ? <DeliveryViewMessage /> : null}

      {deliveryLocation !== null ? <DeliveryViewResults /> : null}
    </div>
  );
};

export default DeliveryView;
