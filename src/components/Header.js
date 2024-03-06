import React from 'react'
import Navigation from './Navigation'
import Hero from './Hero'

function Header() {
  return (
    <div className='overflow-hidden bg-gradient-to-bl from-stone-700/80 to-stone-700/80 h-lvh '>
        <img  className='absolute inset-0 w-full h-full object-cover -z-10 blur-sm' src='https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFncmljdWx0dXJlfGVufDB8fDB8fHww'></img>
        <Navigation></Navigation>
        <Hero></Hero>
    </div>
  )
}

export default Header