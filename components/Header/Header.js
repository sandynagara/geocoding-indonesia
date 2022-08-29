import React from 'react'
import Image from 'next/image'
import logoUGM from "../../public/images/logoUGM.png" 
import logoLPDP from "../../public/images/logoLPDP.png"
import logoBIG from "../../public/images/logoBIG.png"
import useResponsive from '../utils/useResponsice'

function Header() {
  const { isTablet } = useResponsive();

  return (
    <div className='px-5 py-3 flex font-medium text-white bg-primary items-center'>
        <div className="flex">
          <div className='mx-1'>
            <Image src={logoLPDP} width={40} height={40}/>
          </div>
          <div className='mx-1'>
            <Image src={logoUGM} width={40} height={40}/>
          </div>
          <div className='mx-1'>
            <Image src={logoBIG} width={40} height={40}/>
          </div>
        </div>
        {isTablet ?
          <div className=' ml-4 text-sm'>
            Uji Implementasi SNI 9037:2021 tentang Alamat
          </div> :
          <div className='text-lg ml-4'>
            Uji Implementasi SNI 9037:2021 tentang Alamat
           </div>
        }
        
    </div>
  )
}

export default Header