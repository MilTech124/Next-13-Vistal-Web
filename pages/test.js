import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import Floor from "../components/Configurator/Floor";
import Box from "../components/Configurator/Box";
import LightBulb from "../components/Configurator/LightBulb";
import { OrbitControls } from "@react-three/drei";


function Test() {
    const [box,setBox]=useState()
  return (
    <div id="canvas-container" className="w-[100vw] h-[100vh]">
    <input id="in"></input>
      <Canvas shadows={true} camera={{ position: [-6, 10, 10] }}>
        <ambientLight color={"white"} intensity={0.3} />
        <LightBulb position={[0, 3, 0]} />
         <Box rotateX={3} rotateY={0.2} />
         <OrbitControls></OrbitControls>
        <Floor position={[0, -1, 0]} />
      </Canvas>
    </div>
  );
}

export default Test;
