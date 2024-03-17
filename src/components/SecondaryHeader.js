import React from 'react'

function SecondaryHeader(props) {
    const heading = props.heading;
  return (
    <div className='flex justify-between  md:w-80 mx-6'>
        <span className='border-2 border-white'></span>
        <h2 className='text-xl pl-4 md:text-3xl font-semibold text-slate-100 '>{heading}</h2>
    </div>
  )
}

export default SecondaryHeader