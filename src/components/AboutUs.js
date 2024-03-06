import React from 'react'
import AboutText from './AboutText'
import AboutGallery from './AboutGallery'

function AboutUs() {
  return (
    <div className='p-10'>
        <div className='h-lvh px-4 py-8 grid-cols-2 grid-rows-1 gap-x-2 grid'>
        <AboutText></AboutText>
        <AboutGallery></AboutGallery>
        </div>
    </div>
  )
}

export default AboutUs