import React from 'react'
import locationPepper from "../../assets/chipotle-location.svg"


const InitialMessage = () => {
  return (
    <div className='initial-message flex justify-center  flex-col items-center mt-12 mb-16 '>
        <img src={locationPepper} alt="location pepepr" style={{width: '65px', height: '85px'}} />
        <div className='message mx-11 mb-11 mt-7'><p>Find a Chipotle to order online, see a menu, and get info.</p></div>
    </div>
  )
}

export default InitialMessage