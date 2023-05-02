import React, {useContext, useEffect} from 'react'

import {SearchAreaContext} from '../Contexts/SearchAreaContexts'

const Restaurants = () => {

  const { nearbyResults } = useContext(SearchAreaContext);
  console.log('nearbyResults in restaurants component', nearbyResults)

  useEffect(() => {
    console.log('nearbyResults in restaurants component', nearbyResults);
    let addressesOnly = nearbyResults.map((restaurant) => {
      return restaurant.address;
    })
    
  }, [nearbyResults]);

  return (
    <div className='no-restaurants flex flex-col justify-center items-center   py-6'>
     
       <div className='restaurant-container'>
      {/* <span className='font-bold uppercase pl-8 pb-1 mb-1'>Nearby</span> */}
      {nearbyResults.map((restaurant, index) => (

        

       
            <div key={index} className='restaurant-name'>{restaurant.address}</div>
        )
      )
    }
    </div>
    </div>
  )
}

export default Restaurants