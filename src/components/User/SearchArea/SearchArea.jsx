import React from 'react'
import SearchView from '../SearchView/SearchView'
import PickupView from '../PickupView/PickupView'

const SearchArea = () => {
  return (
    <div className='search-area flex flex-1 flex-col w-full h-full'>
      
        <SearchView/>
        <PickupView/>
    
    </div>
  )
}

export default SearchArea