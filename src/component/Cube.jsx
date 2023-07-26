import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, RenderTexture, Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const Cube = () => {
    const textRef = useRef()
    useFrame(state => )
  return (
    <mesh>
    <boxGeometry args={[2,2,2]} />
        <meshStandardMaterial>
            <RenderTexture attach="map"  >
                <PerspectiveCamera
                    makeDefault
                    position={[0,0,2]}
                />
                <color attach="background" args={["#dc9dcd"]}/>
                <Text ref={textRef} fontSize={1} color="#555" >
                    HELLO
                </Text>
            </RenderTexture>
        </meshStandardMaterial>
 </mesh>
  )
}

export default Cube
