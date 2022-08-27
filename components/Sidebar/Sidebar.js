import React from 'react'
import ItemMenu from './ItemMenu'
import {AiFillHome,AiOutlineReload,AiFillInfoCircle} from 'react-icons/ai'
import {FaMap} from 'react-icons/fa'

function Sidebar({setMenuSelect}) {
  return (
    <div className='left-0 fixed w-[88px] h-screen bg-white z-[11] px-1 py-2 border-r-2 border-primary'>
        <ItemMenu 
          icon={<AiFillHome size={30} color="#004A74" className='mb-1'/>} 
          nama="Home" 
          setMenuSelect={setMenuSelect}
          lebarSidebar = {240}
        />
        <ItemMenu 
          icon={<AiOutlineReload size={30} color="#004A74" className='mb-1'/>} 
          nama="Reset View"
          setMenuSelect={setMenuSelect}
          lebarSidebar = {0}
      />
        <ItemMenu icon={<FaMap size={30} color="#004A74" className='mb-1'/>} 
        nama="Basemap"
        setMenuSelect={setMenuSelect}
        lebarSidebar = {240}
        />
        <ItemMenu icon={<AiFillInfoCircle size={30} color="#004A74" className='mb-1'/>} 
        nama="Informasi"
        setMenuSelect={setMenuSelect}
        lebarSidebar = {240}
        />
    </div>
  )
}

export default Sidebar