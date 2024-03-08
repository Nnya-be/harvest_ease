import React from 'react'

function TertiaryHeader(props) {
    const heading = props.heading;
  return (
    <div>
        <h3 className='text-7xl text-start font-bold  flex divide-x-4'>{heading}</h3>
    </div>
  )
}

export default TertiaryHeader