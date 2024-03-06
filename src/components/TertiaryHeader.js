import React from 'react'

function TertiaryHeader(props) {
    const heading = props.heading;
  return (
    <>
        <h3 className='text-7xl text-start font-bold border-b-4 border-green-500 flex divide-x-4'>{heading}</h3>
    </>
  )
}

export default TertiaryHeader