import React from 'react'
import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import styled from 'styled-components'
import Monster_happy_oscar_creativo from './Monster_happy_oscar_creativo'

const Desc = styled.div`
  width:200px;
  heigth:70px;
  padding:20px;
  background-color:white;
  color:black;
  border-radius:10px;
  position:absolute;
  bottom:100px;
  right:100px;

  @media only screen and (max-width:768px){
    width:200px;
    height:150px;
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    margin:auto;

  }


`

const WebDesing = () => {
  return (
    <>
      <Canvas>
        <Stage environment="city" intensity={0.6}>  
          {/* <Chair/> */}
          <Monster_happy_oscar_creativo/>
          {/* <Cyberpunk_car/> */}
        </Stage>
        <ambientLight 
        />
        <OrbitControls enableZoom={false}/>
      </Canvas>
      <Desc>
          We desing products with a strong focus on both world class desing and ensuring yoour product is a market success.
      </Desc>
    </>
  )
}

export default WebDesing


// stage(sahne) ortamı tam bir sahne moduna çeviriyor ve çoğu özelliği yazmadan otomatik bir şekilde sahneyi güzelleştirir