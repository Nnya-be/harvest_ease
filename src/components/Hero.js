import React from 'react'
import SecondaryHeader from './SecondaryHeader'

function Hero() {
  return (
    <div className='flex justify-between items-start flex-col my-32 md:mx-20 lg:ml-60 xl:mx-60 '>
            <h1 className='text-white text-3xl md:text-6xl text-start md:px-2 xl:px-4 lg:mx-4 inline-block pl-8 md:py-8 xl:w-4/5 capitalize'>We are an innovative agricultural company</h1>
        <SecondaryHeader  className="font-semibold" heading="Bridging Agrictulture"></SecondaryHeader>
        <div className='block border-8 h-80 w-80 absolute md:inset-x-2 inset-y-40 lg:inset-x-20 md:max-lg:inset-y-20 -z-10 mx-20 md:mx-16'>

        </div>

    </div>
  )
}

export default Hero