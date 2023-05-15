import React from "react";
import { Wrapper } from "@googlemaps/react-wrapper";
import { Map } from "../ComponentsIndex";

const MapWrapper = () => {
  return (
    <div className="map-wrapper w-full relative">
      <Wrapper apiKey="AIzaSyCWzgD8qrlxljtiaIlJDF0P8AzrmvKlErc">
        <Map />
      </Wrapper>
    </div>
  );
};

export default MapWrapper;
