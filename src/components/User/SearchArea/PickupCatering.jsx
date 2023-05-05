import React, {useContext} from 'react'
import { SearchAreaContext } from "../Contexts/SearchAreaContexts";

const PickupCatering = () => {
  const {showPickupDetail, setShowPickupDetail } = useContext(SearchAreaContext);

  const handleClose = () => {
    setShowPickupDetail(prev => !prev)
  }
  return (
    <div className="pickupCatering  bg-green-300 h-full w-full absolute top-0 left-0 z-10">
      <button className='bg-blue-100' onClick={handleClose}>CLOSE</button>
          close icon address with link pickup button catering button link to
          pickup modal store hours
        </div>
  )
}

export default PickupCatering