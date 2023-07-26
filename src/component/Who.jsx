import React from 'react'
import { styled } from 'styled-components'
import { Canvas } from '@react-three/fiber'
import { OrbitControls} from '@react-three/drei'
import Cube from './Cube'


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content:center;
`

const Container = styled.div`
  height: 100vh;
  scroll-snap-align:center;
  width:1400px;
  display: flex;
  justify-content: space-between;
`


const Left = styled.div`
  flex:1;

`



const Right = styled.div`
  flex:1;
  display:flex;
  flex-direction:column;
  justify-content:center;
  gap:20px
`
const Title = styled.h1`
  font-size: 74px;
  font-weight: 900;

`
const WhatWeDo = styled.div`
  display:flex;
  align-items:center;
  justify-contet:center;
  gap:10px
`
const Line = styled.img`
  height: 5px;
`
const Subtitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: #da4ea2;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    transform: translateX(10px) ;
    right:5px
  }
`;

const Desc = styled.p`

`
const Button = styled.button`
  background-color: #da4ea2;
  border-radius:5px;
  padding:10px;
  color:white;
  width:130px;
  font-weight: 500;
`






const Hero = () => {
  return (
    <Section>
      <Container>
        <Left> 
          <Canvas camera={{fox:25, position:[5,5,5] } }>
            <OrbitControls 
                enableZoom={false}
                autoRotate
            /> 
            <ambientLight
                intensity={1}
            />
            <directionalLight
                position={[3,2,1]}
            />
             <Cube/>
          </Canvas>
        </Left>
          <Right>
            <Title>Think outside the square space</Title>
                <WhatWeDo>
                  <Line src="./img/line.png"/>
                  <Subtitle>What We Are</Subtitle>
                </WhatWeDo>
                  <Desc>a creative group of designers and developers with a passion for the arts.</Desc>
                  <Button>See our works</Button>
          </Right>
      </Container>
    </Section>
  )
}

export default Hero