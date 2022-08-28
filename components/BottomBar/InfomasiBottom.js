import React from 'react'
import {RiArrowDownSLine} from "react-icons/Ri"

function InfomasiBottom({menuSelect,setMenuSelect,informasiPersil}) {

    var ItemInformasi = ({judul="Belum terdapat judul",isi="Belum terdapat isi"}) => {
        return  <div className='p-2 bg-sky-800 rounded-sm text-sm text-white mt-2'>
        <div className=' font-semibold'>
            {judul}
        </div>
        <div className=' text-xs mt-1'>
            {isi}
        </div>
        </div> 
    }
    

  return (
    <div className='z-10 w-full fixed bottom-0  bg-white overflow-scroll  duration-500' style={menuSelect == "Informasi" ? {marginBottom:"0px"}: {marginBottom:"-1200px"}}>
        <div className='flex justify-between  items-center p-2 font-medium bg-white text-black'>
            Informasi
            <RiArrowDownSLine color='gray' size={23} className="cursor-pointer" onClick={()=>{
                setMenuSelect({nama:"Reset",lebarSidebar:0})
            }}/>
        </div>
        {informasiPersil ? <div className='px-2'>
            <ItemInformasi judul='Alamat' isi={informasiPersil["Alamat"]}/>
            <ItemInformasi judul='Kode Pos' isi={informasiPersil["KODE_POS"]}/>
            <ItemInformasi judul='Kecamatan' isi={informasiPersil["KECAMATAN"]}/>
            <ItemInformasi judul='Kelurahan' isi={informasiPersil["KELURAHAN"]}/>
            <ItemInformasi judul='Provinsi' isi={informasiPersil["PROVINSI"]}/>
        </div>
       
        : 
        <div className='w-full h-full p-10 font-semibold flex justify-center items-center'>
            Belum ada informasi
        </div>
        }
    </div>
  )
}

export default InfomasiBottom