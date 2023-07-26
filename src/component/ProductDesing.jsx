import React from 'react'
import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import styled from 'styled-components'
import Chair from './Chair'
import Cyberpunk_car from './Cyberpunk_car'


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
`

const ProductDesing = () => {
  return (
    <>
    <Canvas>
      <Stage environment="city" intensity={0.6}>  
        {/* <Chair/> */}
        <Cyberpunk_car/>
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

export default ProductDesing

