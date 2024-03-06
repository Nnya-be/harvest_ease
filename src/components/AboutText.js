import React from 'react'
import SecondaryHeader from './SecondaryHeader'
import TertiaryHeader from './TertiaryHeader'

function AboutText() {
  return (
    <div className='flex flex-col justify-around items-start'>
        <h4 className='text-2xl'> Welcome </h4>
        <TertiaryHeader heading='We make use of innovations'></TertiaryHeader>
        <p className='text-start'>We understand the vital role agriculture plays in sustaining our planet. That's why sustainability is at the core of everything we do. By leveraging technology responsibly, we aim to minimize environmental impact, conserve resources, and contribute to a greener future.</p>

        <button> read more </button>
    </div>
  )
}

export default AboutText