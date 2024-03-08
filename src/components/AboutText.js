import React from 'react'
//import SecondaryHeader from './SecondaryHeader'
import TertiaryHeader from './TertiaryHeader'

function AboutText() {
  return (
    <div className='flex flex-col justify-between h-5/6 pr-20 items-start'>
        <h4 className='text-2xl m-3 text-slate-700'> Welcome </h4>
        <TertiaryHeader heading='We make use of innovations'></TertiaryHeader>
        <div className='w-2/6 border-b-4 border-green-500'></div>
        <p className='text-justify text-slate-700'>We understand the vital role agriculture plays in sustaining our planet. That's why sustainability is at the core of everything we do. By leveraging technology responsibly, we aim to minimize environmental impact, conserve resources, and contribute to a greener future.We trade in sophisticated machinery for massive crop production, crop yield and crop harvest.</p>
        <button className='text-xl  border-2  border-green-600 hover:bg-green-600 px-6 py-4 rounded-lg hover:text-emerald-300 capitalize'> read more </button>
    </div>
  )
}

export default AboutText