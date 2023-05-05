import React from 'react'
import ToggleContainer from '../Toggle/ToggleContainer.jsx'
import Search from '../Search/Search.jsx'


const SearchView = () => {

  return (
    <div className='search-view w-full  mb-[2px] pt-[30px] pr-[30px] pb-[23px] pl-[30px] '>
      <ToggleContainer/>
      <Search/>
   
    </div>
  )
}

export default SearchView