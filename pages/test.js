import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sky, Environment,ContactShadows,BakeShadows,PivotControls } from "@react-three/drei";
import { Blaszak } from "../components/Configurator/Blaszak";

function Test() {
  const [box, setBox] = useState({
    height: 2.5,
    width: 2.5,
    depth: 2.5,
  });
  const env =
    "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/scythian_tombs_2k.hdr";
  const onChange = (e) => {
    setBox((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  const change = () => {
    console.log(box);
  };
  return (
    <div id="canvas-container" className="w-[100vw] h-[100vh]">
      <div>
        <h3 className="text-xl">Sterowanie boxem</h3>
        height
        <input
          className="bg-slate-300 rounded-lg "
          id="height"
          type="text"
          value={box.height}
          onChange={onChange}
        />
        width
        <input    className="bg-slate-300 rounded-lg"
          id="width"
          type="text"
          value={box.width}
          onChange={onChange}
        />depth
        <input className="bg-slate-300 rounded-lg"
          id="depth"
          type="text"
          value={box.depth}
          onChange={onChange}
        />
      </div>

      <button onClick={change}>Zmien</button>
      <Canvas shadows camera={{ position: [-6, 6, 12],fov:30 }}>
        <Environment files={env} ground={{ height: 5, radius: 40, scale: 17 }} />     
        <ambientLight color={"white"} intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -5, -10]} />       
        <Blaszak box={box}/>
        <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 2.1} />      
        <ContactShadows position={[0, -0, 0]} opacity={1.75} scale={20} blur={2.5} far={8} />
        <BakeShadows />
      </Canvas>
    </div>
  );
}

export default Test;
