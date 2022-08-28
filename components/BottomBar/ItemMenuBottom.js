import React from 'react'

function ItemMenuBottom({icon,nama="belum dinamai",setMenuSelect,menuSelect,lebarSidebar}) {
  return (
    <div className='py-2 mx-1 mb-2 px-2 text-xs font-medium text-primary flex flex-col items-center border-2  hover:bg-sky-100 hover:border-2 rounded-lg hover:border-primary hover:cursor-pointer'
      onClick={()=>{
     
        setMenuSelect({nama:nama,lebarSidebar:lebarSidebar})
      }}
    >
        {icon}
        <div className='text-center mt-1'>
            {nama}
        </div>
    </div>
  )
}

export default ItemMenuBottom