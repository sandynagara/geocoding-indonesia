import React from 'react'
import Image from 'next/image'
// import OpenStreetMap from '../../public/images/Basemap/OpenStreetMap.jpg'
// import EsriWorldImagery from '../../public/images/Basemap/EsriWorldImagenery.jpg'
// import EsriToPo from '../../public/images/Basemap/EsriToPo.jpg'
// import StadiaDark from '../../public/images/Basemap/StadiaDark.jpg'
// import GoogleMaps from '../../public/images/Basemap/GoogleMaps.jpg'
// import GoogleStreet from '../../public/images/Basemap/GoogleStreet.jpg'
import daftarBasemap from '../Basemaps/BasemapsList';
import {RiArrowDownSLine} from "react-icons/ri"

// const daftarBasemap = [
//     {
//       url: "https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
//       nama: "Google Satelite",
//       gambar: '/images/Basemap/GoogleMaps.jpg',
//     },
//     {
//       url: "https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
//       nama: "Google Streets",
//       gambar: '/images/Basemap/GoogleMaps.jpg',
//     },
//     {
//       url: "https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png",
//       nama: "OpenStreetMap",
//       gambar: '/images/Basemap/GoogleMaps.jpg',
//     },
//     {
//       url: "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png",
//       nama: "Stadia.AlidadeSmoothDark",
//       gambar: '/images/Basemap/GoogleMaps.jpg',
//     },
//     {
//       url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
//       nama: "Esri.WorldImagery",
//       gambar: '/images/Basemap/GoogleMaps.jpg',
//     },
//     {
//       url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",
//       nama: "Esri.WorldTopoMap",
//       gambar: '/images/Basemap/GoogleMaps.jpg',
//     },
//   ];

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