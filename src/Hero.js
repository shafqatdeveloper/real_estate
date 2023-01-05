import React from 'react'
import PLA from './components/PLA'
import Products from './components/Products'
import SLA from './components/SLA'

export const Hero = () => {
  return (
    <div>
        <Products/>
        <PLA/>
        <SLA/>
    </div>
  )
}