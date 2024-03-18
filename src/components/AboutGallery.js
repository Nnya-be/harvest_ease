import React from 'react'

function AboutGallery() {
  return (
    <div className='lg:grid lg:visible invisible hidden lg:ml-5  xl:mx-5 grid-cols-2 grid-rows-1 gap-x-4 lg:h-4/6 xl:h-5/6 justify-center items-center'>
      <img className='w-full h-full' src='https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFncmljdWx0dXJlfGVufDB8fDB8fHww' alt='image'></img>
      <img className='w-full h-full' src='https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWdyaWN1bHR1cmV8ZW58MHx8MHx8fDA%3D' alt='image_2'></img>
    </div>
  )
}

export default AboutGallery