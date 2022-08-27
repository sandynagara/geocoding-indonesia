import React from 'react'
import Image from 'next/image'
import logo from "../images/logo.png"

function Header() {


  return (
    <div className='px-5 py-3 flex  font-medium text-white bg-primary items-center'>
        <Image src={logo} width={50} height={50} />
        <div className='text-xl ml-4'>
            Uji Implementasi SNI 9037:2021 tentang Alamat
        </div>
    </div>
  )
}

export default Header