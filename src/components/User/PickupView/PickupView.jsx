import React, {useContext, useEffect,useRef} from 'react'
import InitialMessage from '../../InitialMessage/InitialMessage'
import RestaurantContainer from '../RestaurantContainer/RestaurantContainer'
import { SearchAreaContext } from '../Contexts/SearchAreaContexts'


const PickupView = () => {
  const { nearbyResults } = useContext(SearchAreaContext);
  const initialMessageRef = useRef(null);
  

  useEffect(() => {
    console.log(initialMessageRef.current)
    nearbyResults.length > 0 ? initialMessageRef.current.classList.add('hidden') : initialMessageRef.current.classList.remove('hidden')
  }, [nearbyResults]);

  return (
    <div>
      <span ref={initialMessageRef}>

      <InitialMessage />
      </span>
      <RestaurantContainer/>
    </div>
  )
}

export default PickupView