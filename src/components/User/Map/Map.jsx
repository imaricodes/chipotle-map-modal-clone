import React from 'react'
import {useRef, useEffect} from 'react'


const Map = ()  =>{

  const ref = useRef();

  const mapOptions = {
    center: {lat:42.3314, 
      lng:-83.0458},
      zoom: 11,
    

  }

  useEffect(() => {
    console.log('use effect called', ref.current)
    new window.google.maps.Map(ref.current, mapOptions
    );
  }, []);

  return (
   
     <div className="map w-full h-[320px] md:h-full"  ref={ref} id="map"/> 
  
  );
}

export default Map;