import React from 'react'
import SearchInput from '../SearchInput/SearchInput'
import searchIcon from '../../../assets/search.svg'



const Search = () => {
  return (
    <div className='search-container flex justify-between border-b border-black'>
      <SearchInput/>
      <img src={searchIcon} alt="search icon" style={{width:'21px', height:'21px'}} />

      
      </div>
  )
}

export default Search