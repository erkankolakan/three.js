/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 cat2.gltf --transform 
Files: cat2.gltf [2.77MB] > cat2-transformed.glb [172.85KB] (94%)
Author: Muru (https://sketchfab.com/muru)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/knight-cat-adb1d82f85f74ef6b2947b517b6987f6
Title: Knight Cat
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/cat2-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.polySurface1_lambert1_0.geometry} material={materials.lambert1} />
    </group>
  )
}

useGLTF.preload('/cat2-transformed.glb')