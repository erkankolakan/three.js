import React from 'react'
import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Cat from './Cat'
// import Cat2 from './Cat2'
import { styled } from 'styled-components'





const CatAnimation = () => {

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





  return (
    <>
        <Canvas>
            <OrbitControls enableZoom={false} />
            
            <Stage >
                <Cat />
            </Stage>
        </Canvas>
        <Desc>
          We desing products with a strong focus on both world class desing and ensuring yoour product is a market success.
      </Desc>
    
    </>
  )
}

export default CatAnimation
