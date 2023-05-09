import React from 'react'
import { useContext, Wrapper, Status } from "@googlemaps/react-wrapper";
import {Map} from '../../ComponentsIndex'
// import { SearchAreaContext } from "../Contexts/SearchAreaContexts";

const MapWrapper = () => {
  
    const MAP_KEY = import.meta.env.DEV_VITE_APP_GOOGLE_MAP_API_KEY

    // const { nearbyResults } = useContext(SearchAreaContext);

    return (
      <div className='map-wrapper flex  w-full 
      '>
        {/* //TEMP: for production add MAP_KEY to wrapper API key */}
       <Wrapper apiKey='AIzaSyCWzgD8qrlxljtiaIlJDF0P8AzrmvKlErc'>
        <Map />
        </Wrapper>
     
  
      </div>
    );
}

export default MapWrapper