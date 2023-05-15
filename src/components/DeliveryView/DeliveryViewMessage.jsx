import React from 'react'
import locationPepper from "../../assets/chipotle-location.svg"


const DeliveryViewMessage = () => {
  return (
    <div className='initial-message flex justify-center  flex-col items-center mt-9 mb-3'>
        <img src={locationPepper} alt="location pepepr" style={{width: '65px', height: '85px'}} />
        <div className='message mx-11 mb-11 mt-7'><p>Search for a delivery address to get started</p><p>Menu pricing for delivery is higher and fees apply.</p></div>
    </div>
  )
}

export default DeliveryViewMessage