import React from 'react'
import locationTarget from '../../../assets/location-target.svg'

const Restaurants = () => {
  return (
    <div className='no-restaurants flex flex-col justify-center items-center  border-y border-dashed py-6'>
      <div className="mb-2 mt-4"> <img src={locationTarget} alt="location target" /></div>
      <div>Tap the target to find the closest Chipotle</div>
    </div>
  )
}

export default Restaurants