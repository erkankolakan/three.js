import React from 'react'
import Navbar from './Navbar'
import { styled } from 'styled-components'
import { Canvas } from '@react-three/fiber'
import {  MeshDistortMaterial, OrbitControls,Sphere } from '@react-three/drei'
import { Material } from 'three'


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: space-between;
  flex-direction:column;
  align-items:center;
  gap:10px;

  @media only screen and (max-width:768px){
    height:200vh;
   


    
  }



`

const Container = styled.div`
  height: 100%;
  scroll-snap-align:center;
  width:1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width:768px){
    width:100%;
    flex-direction:column;
    align-items:center;
    justify-content:center;

  }
  

`


const Left = styled.div`
  flex:2;
  display:flex;
  flex-direction:column;
  justify-content:center;
  gap:20px


  @media only screen and (max-width:768px){
    flex:1;
    align-items:center;
  }
`
const Title = styled.h1`
  font-size: 74px;
  font-weight: 900;

  
  @media only screen and (max-width:768px){
    text-align:center;
  }

`
const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; 
  gap: 10px;


 

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
  font-size: 20px;

  
  @media only screen and (max-width:768px){
    padding:20px;
    text-align:center;
  }
`
const Button = styled.button`
  background-color: #da4ea2;
  border-radius:5px;
  padding:10px;
  color:white;
  width:120px;
  font-weight: 500;
  @media only screen and (max-width:768px){
  
    margin:auto;

  }
`


const Right = styled.div`
  flex:3;
  position:relative;

  @media only screen and (max-width:768px){
    flex:2;
    width:100%;
  }

 


`
const Img = styled.img`
  width: 800px;
  height: 600px;
  object-fit:contain;
  position:absolute;
  right:0;
  top:0;
  left:0;
  bottom:0;
  margin:auto;

  /*Bu kisim animasyon vermek için kullanilir*/
  animation: animate 2s infinite ease alternate;
  
  @keyframes animate {
    to{
      transform: translateY(20px);
    }
  }

  
  @media only screen and (max-width:768px){
    wigth:300px;
    height:300px;
  }

`


const Hero = () => {
  return (
    <Section>
      <Navbar/>
      <Container>
        <Left>
            <Title>Think. Make. Solve.</Title>
            <WhatWeDo>
              <Line src="./img/line.png"/>
              <Subtitle>What We Do</Subtitle>
            </WhatWeDo>
              <Desc>We enjoy creating delinghtful, human-centered digital experiences.</Desc>
              <Button>Learn More</Button>
        </Left>


        <Right>
        <Canvas>
          <OrbitControls enableZoom={false} /> 
            <ambientLight intensity={5} />
            <directionalLight position={[3,2,1]} />
            <Sphere args={[1,100,200]} scale={2.5}> 
            <MeshDistortMaterial color="#220736" attach="material" distort={0.5} speed={2}/>
            </Sphere>
          </Canvas>
            <Img src="./img/moon.png"/>
        </Right> 
      </Container>
    </Section>
  )
}

export default Hero

//<Sphere args={[1,100,200]}/> sphere cismin adı args ise cismin boyutlandırması için kullandığımız bir tag