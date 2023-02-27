/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 blaszak.glb
*/

import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import * as THREE from "three";

export function Blaszak(props) {
  const { nodes, materials } = useGLTF('/configurator/blaszak.glb')
  const {width,height,depth}=props.box
  // ROOF CORDINATE
  let temp=0.10
  const roof = () => {  
    if(depth>2.5){return temp-(depth*0.009)}
    else {return temp+(depth*0.001)}
  }
  // ROOF CORDINATE
  // MATERIAL
  const ocynkTxt = useTexture({
    map:"./configurator/texture/blaszak_img0.jpg",   
  })
  ocynkTxt.map.repeat.set(1.2*width/2.7,1)
  ocynkTxt.map.wrapS=ocynkTxt.map.wrapT=THREE.RepeatWrapping
  // MATERIAL

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.calosc.geometry} position={[0, 1.25, 0]} scale={[depth/2.5,1,width/2.5]} >
        <meshStandardMaterial {...ocynkTxt} metalness="1" />
      </mesh>
      <mesh geometry={nodes.dach.geometry}  position={[0, 2.38, 0]} rotation={[0, 0, roof()]} scale={[depth/2.5,1,width/2.5]}>
        <meshStandardMaterial {...ocynkTxt} metalness="1" />
      </mesh>
      <mesh geometry={nodes.ramka.geometry} material={materials.czarny} position={[1.26*depth/2.5, 1.16, 0]} rotation={[0, 0, -Math.PI / 2]} />
      <mesh geometry={nodes['drzwi-cale'].geometry} material={materials.drzwi} position={[1.27*depth/2.5, 1.16, 0]} rotation={[0, 0, -Math.PI / 2]} />
      <mesh geometry={nodes.klamka.geometry} material={materials.klamki} position={[1.28*depth/2.5, 1.18, 0]} />
    </group>
  )
}

useGLTF.preload('/configurator/blaszak.glb')
