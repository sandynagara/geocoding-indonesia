import React from 'react'

function Informasi({menuSelect,informasiPersil}) {

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
    <div className=' ml-[90px] px-2 w-[250px] z-10 h-screen fixed bg-white overflow-scroll sidebar py-1 duration-500' style={menuSelect == "Informasi" ? {marginLeft:"88px"}:{marginLeft:"-400px"}}>
        {informasiPersil ? <div>
            <ItemInformasi judul='Alamat' isi={informasiPersil["Alamat"]}/>
            <ItemInformasi judul='Kode Pos' isi={informasiPersil["KODE_POS"]}/>
            <ItemInformasi judul='Kecamatan' isi={informasiPersil["KECAMATAN"]}/>
            <ItemInformasi judul='Kelurahan' isi={informasiPersil["KELURAHAN"]}/>
            <ItemInformasi judul='Provinsi' isi={informasiPersil["PROVINSI"]}/>
        </div>
       
        : 
        <div className='w-full h-full font-semibold flex justify-center items-center'>
            Belum ada informasi
        </div>
        }
        
    </div>
  )
}

export default Informasi