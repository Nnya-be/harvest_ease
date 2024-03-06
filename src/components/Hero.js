import React from 'react'
import SecondaryHeader from './SecondaryHeader'

function Hero() {
  return (
    <div className='flex justify-between items-start flex-col my-32 mx-60 '>
        <SecondaryHeader heading="Brindging Agrictulture"></SecondaryHeader>
            <h1 className='text-white text-6xl text-start px-4 inline-block py-8 w-4/5 capitalize'>We are an innovative agrictultural company</h1>
        <div className='block border-8 h-80 w-80 absolute inset-x-2 inset-y-40 -z-10 mx-20'>

        </div>
    </div>
  )
}

export default Hero