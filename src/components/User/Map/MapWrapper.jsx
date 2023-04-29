import React from 'react'
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import {Map} from '../../ComponentsIndex'

const MapWrapper = () => {
  
    const MAP_KEY = import.meta.env.DEV_VITE_APP_GOOGLE_MAP_API_KEY

    return (
      <div className='map-wrapper flex  w-full 
      '>
        {/* //TEMP: for production add MAP_KEY to wrapper API key */}
       <Wrapper apiKey='AIzaSyAcpjfyjXc1pj0e2RaG9c5NE8_yEJ9z5KI'>
        <Map/>
        </Wrapper>
     
  
      </div>
    );
}

export default MapWrapper