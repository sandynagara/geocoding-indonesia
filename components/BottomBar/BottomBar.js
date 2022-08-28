import React from 'react'
import {AiFillHome,AiOutlineReload,AiFillInfoCircle} from 'react-icons/ai'
import {FaMap} from 'react-icons/fa'
import ItemMenuBottom from './ItemMenuBottom'

function BottomBar({setMenuSelect}) {
  return (
    <div className='fixed bottom-0 w-full bg-white py-1 px-3 font-medium flex justify-between'>
        <ItemMenuBottom 
          icon={<AiFillHome size={25} color="#004A74" className='mb-1'/>} 
          nama="Home" 
          setMenuSelect={setMenuSelect}
          lebarSidebar = {240}
        />
        <ItemMenuBottom 
          icon={<AiOutlineReload size={25} color="#004A74" className='mb-1'/>} 
          nama="Reset View"
          setMenuSelect={setMenuSelect}
          lebarSidebar = {0}
      />
        <ItemMenuBottom icon={<FaMap size={25} color="#004A74" className='mb-1'/>} 
        nama="Basemap"
        setMenuSelect={setMenuSelect}
        lebarSidebar = {240}
        />
        <ItemMenuBottom icon={<AiFillInfoCircle size={25} color="#004A74" className='mb-1'/>} 
        nama="Informasi"
        setMenuSelect={setMenuSelect}
        lebarSidebar = {240}
        />
    </div>
  )
}

export default BottomBar