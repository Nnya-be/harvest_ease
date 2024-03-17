import React from 'react'
import AboutText from './AboutText'
import AboutGallery from './AboutGallery'

function AboutUs() {
  return (
    <div className=' md:py-16 lg:pl-2 lg:py-8 xl:p-10'>
        <div className='md:my-10 h-svh md:h-lvh lg:items-center px-10 py-14 grid-cols-2 grid-rows-1 gap-x-2  md:flex  md:justify-between md:flex-col lg:grid'>
        <AboutText></AboutText>
        <AboutGallery></AboutGallery>
        </div>
    </div>
  )
}

export default AboutUs