import React from 'react'
import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Chair from './Chair'
import Monster_happy_oscar_creativo from './Monster_happy_oscar_creativo'


const WebDesing = () => {
  return (
    <Canvas>
      <Stage>  
        <Monster_happy_oscar_creativo/>
      </Stage>
      <ambientLight 
       />
      <OrbitControls enableZoom={false}/>
    </Canvas>
  )
}

export default WebDesing


// stage(sahne) ortamı tam bir sahne moduna çeviriyor ve çoğu özelliği yazmadan otomatik bir şekilde sahneyi güzelleştirir