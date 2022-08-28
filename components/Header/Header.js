import React from 'react'
import Image from 'next/image'
import logoUGM from "../images/logoUGM.png"
import logoLPDP from "../images/logoLPDP.png"
import logoBIG from "../images/logoBIG.png"
import useResponsive from '../utils/useResponsice'

function Header() {
  const { isTablet } = useResponsive();

  return (
    <div className='px-5 py-3 flex  font-medium text-white bg-primary items-center'>
        <div className="flex">
          <div className='mx-1'>
            <Image src={logoLPDP} width={50} height={50}/>
          </div>
          <div className='mx-1'>
            <Image src={logoUGM} width={50} height={50}/>
          </div>
          <div className='mx-1'>
            <Image src={logoBIG} width={50} height={50}/>
          </div>
        </div>
        {isTablet ?
          <div className=' ml-4 text-sm'>
            Uji Implementasi SNI 9037:2021 tentang Alamat
          </div> :
          <div className='text-xl ml-4'>
            Uji Implementasi SNI 9037:2021 tentang Alamat
           </div>
        }
        
    </div>
  )
}

export default Header