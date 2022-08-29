import React from 'react'
import {RiArrowDownSLine} from "react-icons/ri"

function WelcomeBottom({menuSelect,setMenuSelect}) {
  return (
    <div className='z-10 px-2 py-3 fixed bottom-0  bg-white overflow-scroll h-full  duration-500' style={menuSelect == "Home" ? {marginBottom:"0px"}: {marginBottom:"-1200px"}}>
        <div className="font-semibold flex justify-between">
          Selamat Datang
          <RiArrowDownSLine color='gray' size={23} className="cursor-pointer" onClick={()=>{
                setMenuSelect({nama:"Reset",lebarSidebar:0})
          }}/>
        </div>
      
        <div className='text-sm mt-2 text-gray-600 text-justify'>
          Penelitian tentang Penyusunan Standar Nasional dan Sistem Geocoding Alamat Wilayah Perkotaan dan Perdesaan Indonesia dilaksanakan oleh Tim Peneliti dari DIrektorat Penelitian UGM bekerja sama dengan Badan Informasi Geospasial dengan pendanaan oleh LPDP melalui skema Riset Inovatif-Produktif tahun 2019 – 2022. 
          </div>
          <div  className='text-sm mt-2 text-gray-600 text-justify'>
          Salah satu hasil penelitian adalah SNI 9037:2021 tentang Pengalamatan di Perkotaan dan Perdesaan. Website ini menyajikan hasil uji implementasi alamat yang memiliki geocode sehingga memudahkan pencarian suatu lokasi. 
          </div>
          <div  className='text-sm mt-2 text-gray-600 text-justify'>
          Uji Implementasi dilaksanakan di Jakarta, Semarang, Manado, Kulon Progo, dan Klungkung. Informasi lebih lanjut dapat diperoleh dari Ketua Tim Peneliti Heri Sutanta, Ph.D. melalui email herisutanta@ugm.ac.id.
          </div>
    </div>
  )
}

export default WelcomeBottom