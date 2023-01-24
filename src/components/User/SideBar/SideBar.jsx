import React from 'react'
import SearchView from '../SearchView/SearchView'
import PickupView from '../PickupView/PickupView'

const SideBar = () => {
  return (
    <div className='find-a-chipotle-search flex-2 flex-col w-[375px] h-full'>
      
        <SearchView/>
        <PickupView/>
    
    </div>
  )
}

export default SideBar