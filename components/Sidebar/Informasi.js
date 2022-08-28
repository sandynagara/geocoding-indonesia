import React from 'react'

function Informasi({menuSelect}) {
  return (
    <div className=' ml-[90px] p-2 w-[250px] z-10 h-screen fixed bg-white overflow-scroll sidebar py-2 duration-500' style={menuSelect == "Informasi" ? {marginLeft:"88px"}:{marginLeft:"-400px"}}>
        <div className='p-2 bg-sky-800 rounded-sm text-white'>
            <div className='font-bold'>
                Kota :
            </div>
            <div className=''>
                Kota Yogyakarta
            </div>
        </div>
    </div>
  )
}

export default Informasi