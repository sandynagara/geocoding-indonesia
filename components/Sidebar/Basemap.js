import React,{useState} from 'react'
import Image from 'next/image'
import OpenStreetMap from '../images/Basemap/OpenStreetMap.jpg'
import EsriWorldImagery from '../images/Basemap/EsriWorldImagenery.jpg'
import EsriToPo from '../images/Basemap/EsriToPo.jpg'
import StadiaDark from '../images/Basemap/StadiaDark.jpg'
import GoogleMaps from '../images/Basemap/GoogleMaps.jpg'
import GoogleStreet from '../images/Basemap/GoogleStreet.jpg'

const daftarBasemap = [
  {
    url: "https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
    nama: "Google Satelite",
    gambar: GoogleMaps,
  },
  {
    url: "https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
    nama: "Google Streets",
    gambar: GoogleStreet,
  },
  {
    url: "https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    nama: "OpenStreetMap",
    gambar: OpenStreetMap,
  },
  {
    url: "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png",
    nama: "Stadia.AlidadeSmoothDark",
    gambar: StadiaDark,
  },
  {
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    nama: "Esri.WorldImagery",
    gambar: EsriWorldImagery,
  },
  {
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",
    nama: "Esri.WorldTopoMap",
    gambar: EsriToPo,
  },
];

function Basemap({basemapSelect,setBasemapSelect,menuSelect}) {


  return (
    <div className=' ml-[90px] z-10 h-screen fixed bg-white overflow-scroll sidebar py-2 duration-500' style={menuSelect == "Basemap" ? {marginLeft:"88px"}:{marginLeft:"-400px"}}>
        {daftarBasemap.map((data,index)=>{
            return <div className=' cursor-pointer relative' key={index} onClick={()=>setBasemapSelect(data["url"])}>
                <Image src={data["gambar"]} height={140} width={240}/>
                <div className='bg-white px-2 py-1 items-center flex text-sm h-6 absolute z-20 bottom-2'>
                    <div className=' w-4 h-4 rounded-full mr-2 border-primary border-2' style={basemapSelect == data["url"] ? {backgroundColor:"#004A74"} : {backgroundColor:"#FFFFFF"}}></div>
                    <div>{data["nama"]}</div>
                </div>
            </div>
        })}
    </div>
  )
}

export default Basemap