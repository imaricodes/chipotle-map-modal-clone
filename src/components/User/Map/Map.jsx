import React from 'react'
import {useRef, useEffect} from 'react'
import pepperMarker from  '../../../assets/icon-1.png'


const Map = ()  =>{

  const ref = useRef();

  const mapOptions = {
    zoom: 7,
    center: { lat: -33, lng: 151 },
  }

  //add marker to map
  const image =
  // "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
  // "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png";
  pepperMarker;

const beachMarker = new google.maps.Marker({
  position: { lat: -33.89, lng: 151.274 },
  ref,
  icon: image,
});

const  createMarkers = () => {
  const image = pepperMarker;

}

  useEffect(() => {
    console.log('use effect called', ref.current)
    // new window.google.maps.Map(ref.current, mapOptions);
   let map = new google.maps.Map(ref.current, mapOptions);
    beachMarker.setMap(map);
  }, []);

  return (
   
     <div className="map w-full h-[320px] md:h-full"  ref={ref} id="map"/> 
  
  );
}

export default Map;