import React from 'react'
import { Wrapper } from "@googlemaps/react-wrapper";
import {Map} from '../../ComponentsIndex'

const MapWrapper = () => {
    const MAP_KEY = import.meta.env.DEV_VITE_APP_GOOGLE_MAP_API_KEY

    return (
      <div className='map-wrapper flex-1' style={{height: '100vh', width: '100%', backgroundColor: 'yellow'}}>
       <Wrapper apiKey={MAP_KEY}>
        <Map/>
        </Wrapper>
     
  
      </div>
    );
}

export default MapWrapper