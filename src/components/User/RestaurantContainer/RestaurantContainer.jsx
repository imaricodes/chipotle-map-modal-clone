import React, { useEffect, useContext, useRef} from 'react'
import Restaurants from '../Restaurants/Restaurants'
import locationTarget from '../../../assets/location-target.svg'
import { SearchAreaContext } from '../Contexts/SearchAreaContexts'


const RestaurantContainer = () => {
  const { nearbyResults } = useContext(SearchAreaContext);
  const targetSectionRef = useRef(null);
  useEffect(() => {
    nearbyResults.length > 0 ? targetSectionRef.current.classList.add('hidden') : targetSectionRef.current.classList.remove('hidden')

  }, [nearbyResults]);

  return (
    <div className='restaurant-container flex flex-col'>
      <span className='font-bold uppercase pl-8 pb-1 mb-1'>Nearby</span>
      <span ref={targetSectionRef} className='inline-block border-y border-dasshed bg-yellow-200'>
      <div className="mb-2 mt-4"> <img src={locationTarget} alt="location target" /></div>
      <div>Tap the target to find the closest Chipotle</div>
      </span>
    

    <Restaurants/>
    </div>
  )
}

export default RestaurantContainer