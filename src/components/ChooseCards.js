import React from 'react'
import logo from '../logo.svg'
import SectionParagraph from './SectionParagraph'


function ChooseCards(props) {
    const card_details = props.details
  return (
    <div className='w-56 xl:w-72 h-80 xl:h-96 border-green-600 border-2 flex flex-col justify-around hover:bg-green-600 hover:text-slate-400 items-center p-2 rounded-lg py-4 my-4'>
        <img src={card_details.icon} className='w-16 xl:w-28'></img>
        <h4 className='text-slate-700 md:text-[1.1rem] xl:text-2xl'>{card_details.heading}</h4>
        <div className='px-2'> 
        <SectionParagraph paragraph={card_details.paragraph}></SectionParagraph>
        </div>
    </div>
  )
}

export default ChooseCards