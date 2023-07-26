import React from 'react'
import { styled } from 'styled-components'
import { Canvas } from '@react-three/fiber'
import { OrbitControls} from '@react-three/drei'
import Cube from './Cube'



const Container = styled.div`
    height: 100vh;
    scroll-snap-align: center;

`

const Test = () => {
  return (
    <Container>
        <Canvas>
            <OrbitControls 
                enableZoom={false}
            /> 
            <ambientLight
                intensity={1}
            />
            <directionalLight
                position={[3,2,1]}
            />
             <Cube/>
        </Canvas>
    </Container>
  )
}

export default Test

 
// <OrbitControls/> Objenin 3d kazanmasını sağlar
// <meshStandardMaterial color="hotpink"/> metaryelin türünü saptayarak ona özellikler vermemizi sağlar
// <ambientLight intensity={1}/> ortama ışık vermemizi sağlar 
// <directionalLight position={[3,2,1]}/> bölgesel olarak ışık vermemizi sağlar