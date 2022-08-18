import React from 'react'

function InputAlamat({onChange=()=>{}}) {
  return (
    <input className='p-2 w-full border-black border-2'
      placeholder='Cari alamat bidang tanah'
      onChange={(value)=>onChange(value.target.value)}
    />
  )
}

export default InputAlamat