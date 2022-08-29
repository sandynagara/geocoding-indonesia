import React from 'react'
import Image from 'next/image'
import daftarBasemap from '../Basemaps/BasemapsList';
import {RiArrowDownSLine} from "react-icons/ri";

function BasemapBottom({basemapSelect,setBasemapSelect,menuSelect,setMenuSelect}) {
  return (
    <div className='z-10 w-full fixed bottom-0  bg-white overflow-scroll  duration-500' style={menuSelect == "Basemap" ? {marginBottom:"0px"}: {marginBottom:"-1200px"}}>
        <div className='flex justify-between items-center p-2 font-medium bg-white text-black'>
            Basemap
            <RiArrowDownSLine color='gray' size={23} className="cursor-pointer" onClick={()=>{
                setMenuSelect({nama:"Reset",lebarSidebar:0})
            }}/>
        </div>
        <div className='grid grid-cols-2'>
            {daftarBasemap.map((data,index)=>{
                return <div 
                key={index}
                className=' border-primary' 
                style={basemapSelect == data["url"] ? {borderColor:"#004A74",borderWidth:"4px"}:{border:"none"} }
                onClick={()=>setBasemapSelect(data["url"])}
                >
                    <Image src={data["gambar"]} height="200em" width="300em"/>
                </div>
            })}
        </div>
        
    </div>
  )
}

export default BasemapBottom