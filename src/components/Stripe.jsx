import React from 'react'

function Stripe({val}) {

   

  return (
    <div className='w-[16.7%] flex justify-between items-center px-4 py-4  border-r-[1.2px] border-l-[1.2px] border-b-[1.2px] border-t-[1.2px]'>
      <img src={val.url} alt="" />
        <span className='text-white font-semibold'>{val.number}</span>
    </div>
  )
}

export default Stripe