import React from 'react'
import Restaurants from '../Restaurants/Restaurants'

const RestaurantContainer = () => {
  return (
    <div className='restaurant-container'>
      <span className='font-bold uppercase pl-8 pb-1 mb-1'>Nearby</span>
    <Restaurants/>
    </div>
  )
}

export default RestaurantContainer