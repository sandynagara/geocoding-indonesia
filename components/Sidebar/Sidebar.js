import React from 'react'
import ItemSidebar from './ItemSidebar'

function Sidebar() {
  return (
    <div className='right-0 h-screen w-[300px] bg-white z-10 absolute px-5 py-5'>
        <ItemSidebar/>
    </div>
  )
}

export default Sidebar