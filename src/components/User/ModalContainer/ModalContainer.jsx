import React from 'react'
import { SearchContainer } from '../../ComponentsIndex';
import { SearchContextProvider } from "../Contexts/SearchAreaContexts";

const ModalContainer = () => {
  return (
 

<div className='modal-container flex'>
<SearchContextProvider>
<SearchContainer />
</SearchContextProvider>
</div>

  )
}

export default ModalContainer