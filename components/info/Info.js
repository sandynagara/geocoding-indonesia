import React from 'react'

function Info({data=""}) {
  return (
    <div className='fixed bottom-0 right-0 bg-white py-1 px-3 font-medium'>
        {data}
    </div>
  )
}

export default Info