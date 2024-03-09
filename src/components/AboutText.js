import React from 'react'
//import SecondaryHeader from './SecondaryHeader'
import TertiaryHeader from './TertiaryHeader'
import LineGreen from './LineGreen'
import SectionParagraph from './SectionParagraph'
import ReadMoreButton from './ReadMoreButton';

const text = "At Harvest Ease Innovators, we're more than just a company – we're a team of passionate innovators dedicated to making a difference in agriculture. With a focus on engineering excellence and customer satisfaction, we're committed to delivering high-quality solutions that meet the evolving needs of our customers.";

function AboutText() {
  return (
    <div className='flex flex-col justify-between h-5/6 pr-20 items-start'>
        <h4 className='text-2xl m-3 text-slate-700'> Welcome </h4>
        <TertiaryHeader heading='We make use of innovations'></TertiaryHeader>
        <LineGreen></LineGreen>
        <SectionParagraph paragraph={text}></SectionParagraph>
        <ReadMoreButton></ReadMoreButton>
    </div>
  )
}

export default AboutText