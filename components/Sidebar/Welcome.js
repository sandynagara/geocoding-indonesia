import React from 'react'

function Welcome({menuSelect}) {
  return (
    <div className='w-[240px] p-2 ml-[88px] z-10 h-screen fixed bg-white overflow-scroll sidebar py-2 duration-500'  style={menuSelect == "Home" ? {marginLeft:"88px"}:{marginLeft:"-400px"}}>
        <div className="font-semibold">
          Selamat Datang
        </div>
      
        <div className='text-sm mt-2 text-gray-600'>
        VicPlan is a tool that you can use to view, query and create your own property reports. More than a mapping tool, it's a gateway to a whole range of planning information.
        </div>
    </div>
  )
}

export default Welcome