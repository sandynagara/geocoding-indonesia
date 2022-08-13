import React from 'react'
import Peta from "../components/Peta"
import InputAlamat from '../components/Toolbar/InputAlamat'


export default function Home() {
     

    var cobaPanggil = async () => {
      var url = "http://localhost:3000/api/data"
      fetch(url,{
          method:"GET",
      }).then(res=>res.json()).then(res=>console.log(res)).catch(err=>console.log(err))
    }

    return (
        <div>
            <div className='p-5 w-[300px] absolute z-10'>
                <InputAlamat onChange={cobaPanggil}/>
            </div>
            <Peta/>
        </div>
    )
}
