import React from 'react'
import Navbar from './Navbar'
import { styled } from 'styled-components'


const Section = styled.div`
  height: 100vh;
  scroll-snap-align:center;
  display: flex;
`




const Hero = () => {
  return (
    <Section>
      <Navbar/>
    </Section>
  )
}

export default Hero
