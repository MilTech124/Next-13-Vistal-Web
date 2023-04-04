/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 blaszak.glb
*/

import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import * as THREE from "three";
import { Text } from '@react-three/drei'

export function Blaszak(props) {
  const { nodes, materials } = useGLTF('/configurator/garaze.glb')
  const {width,height,depth,windowMeasure,window,windowPosition,glass,door,gutter,tilesRoof,glassMeasure,glassPosition,doorPosition,doorMeasure}=props.box
  const {gate,color,gateColor,roof}=props


  // ROOF CORDINATE START
  let temp=0.10
  const roofCordinate = () => {  
    if(depth>2.5 && depth<8){return temp-(depth*0.009)}else if(depth>7){return temp-(depth*0.008)}
    else {return temp+(depth*0.001)}
  }
  // ROOF CORDINATE END

  //-------------------------------------------MATERIALS--------------------------------
  // MATERIAL OCYNK
  const Doortxt = useTexture({
    map:"./configurator/texture/ocynk1.jpg",   
  })
  Doortxt.map.repeat.set(1.2,1)
  Doortxt.map.wrapS=Doortxt.map.wrapT = THREE.RepeatWrapping
  // MATERIAL  OCYNK

  // MATERIAL OCYNK2
   const ocynkTxt = useTexture({
    map:"./configurator/texture/ocynk1v2.jpg",       
  })
  ocynkTxt.map.repeat.set(1.2*width/2.7,1)
  ocynkTxt.map.wrapS = ocynkTxt.map.wrapT = THREE.RepeatWrapping
  // MATERIAL OCYNK2

  // MATERIAL OCYNK DOOR
   const ocynkDoor = useTexture({
    map:"./configurator/texture/ocynk1.jpg",       
  })
  ocynkDoor.map.repeat.set(1.2,1)
  ocynkDoor.map.wrapS = ocynkDoor.map.wrapT = THREE.RepeatWrapping
  // MATERIAL OCYNK2

  // MATERIAL WOOD
   const wood = useTexture({
    map:"./configurator/texture/wood.jpg",  
    normalMap:"./configurator/texture/normal.jpg" ,
    bumpMap:"./configurator/texture/bumpwood.jpg" ,
    
      })
  wood.map.repeat.set(1.2*width/2.7,1)
  wood.normalMap.repeat.set(1.2*width/2.7,1)
  wood.bumpMap.repeat.set(1.2*width/2.7,1)
  wood.map.wrapS = wood.map.wrapT = THREE.RepeatWrapping
  wood.bumpMap.wrapS = wood.bumpMap.wrapT = THREE.RepeatWrapping
  wood.normalMap.wrapS = wood.normalMap.wrapT = THREE.RepeatWrapping
  
  // MATERIAL WOOD

  // MATERIAL WOOD FOR GATE 
  const woodGate2 = useTexture({
    map:"./configurator/texture/wood2.jpg",  
  
      })
  woodGate2.map.repeat.set(1.4,1)
  woodGate2.map.wrapS = woodGate2.map.wrapT = THREE.RepeatWrapping
  // wood.map.rotation="1.56"
  // wood.normaMap.rotation="1.56"
  // MATERIAL WOOD FOR GATE 

  const gateColorTXT=useTexture({
    map:"./configurator/texture/ocynk1.jpg", 
  })
  const gateTextureSegment=useTexture({
    map:"./configurator/texture/wood2.jpg",  
    normalMap:"./configurator/texture/normal.jpg" ,
    bumpMap:"./configurator/texture/bumpwood.jpg" ,
  })



  const roofMat=useTexture({
    map:"./configurator/texture/roof/albedo.jpg",
    displacementMap:"./configurator/texture/roof/displacement.jpg",
    aoMap:"./configurator/texture/roof/AO.jpg",
    bumpMap:"./configurator/texture/roof/normal.jpg",
    roughness:"./configurator/texture/roof/roughnes.jpg"
  })
 
  roofMat.map.repeat.set(2*width/2.5,2*depth/2.5)
  roofMat.displacementMap.repeat.set(2*width/2.5,2*depth/2.5)
  roofMat.aoMap.repeat.set(2*width/2.5,2*depth/2.5)
  roofMat.bumpMap.repeat.set(2*width/2.5,2*depth/2.5)
  roofMat.roughness.repeat.set(2*width/2.5,2*depth/2.5)
  roofMat.map.rotation=Math.PI

  roofMat.map.wrapS = roofMat.map.wrapT = THREE.RepeatWrapping
  roofMat.displacementMap.wrapS = roofMat.displacementMap.wrapT = THREE.RepeatWrapping
  roofMat.aoMap.wrapS = roofMat.aoMap.wrapT = THREE.RepeatWrapping
  roofMat.bumpMap.wrapS = roofMat.bumpMap.wrapT = THREE.RepeatWrapping
  roofMat.roughness.wrapS = roofMat.roughness.wrapT = THREE.RepeatWrapping
  roofMat.displacementScale=0.1
  roofMat.bumpScale=0.1


  gateColorTXT.map.repeat.set(1.4,1)
  gateColorTXT.map.wrapS = gateColorTXT.map.wrapT = THREE.RepeatWrapping

  gateTextureSegment.map.repeat.set(0.8,1)
  gateTextureSegment.normalMap.repeat.set(0.8,1)
  gateTextureSegment.bumpMap.repeat.set(0.8,1)
  gateTextureSegment.bumpMap.rotation=Math.PI/2
  gateTextureSegment.map.rotation=Math.PI/2
  gateTextureSegment.normalMap.rotation=Math.PI/2
  gateTextureSegment.map.wrapS = gateTextureSegment.map.wrapT = THREE.RepeatWrapping
  gateTextureSegment.normalMap.wrapS = gateTextureSegment.normalMap.wrapT = THREE.RepeatWrapping
  gateTextureSegment.bumpMap.wrapS = gateTextureSegment.bumpMap.wrapT = THREE.RepeatWrapping
  gateTextureSegment.normalScale=0.5

  
    //-------------------------------------------MATERIALS--------------------------------



  return (
    <group {...props} dispose={null}>
      <group visible={roof==='spadTyl'} >
        <mesh geometry={nodes.bryla.geometry} castShadow material={materials.drzwi} position={[0, 1.25, 0]} scale={[depth/2.5,1,width/2.5]} >
          {color==="dab"
          ?<meshStandardMaterial {...wood} metalness="1" roughness={1} color="#D0A102"/>
          :color==="ocynk"
          ?<meshStandardMaterial {...ocynkTxt} metalness="1" roughness={0.4}  />
          :color==="orzech" 
          ? <meshStandardMaterial {...wood} metalness="1" roughness={0.8} color="#7A5F04"/>
          :color ? <meshStandardMaterial {...ocynkTxt} metalness="1" roughness={1} color={color} /> 
          :null
          }
        </mesh>
        {tilesRoof
        ? <mesh geometry={nodes.dach.geometry} castShadow material={materials.drzwi} position={[0, 2.37, 0]} rotation={[0, 0, roofCordinate()]} scale={[depth/2.5,1,width/2.5]}>         
            <meshStandardMaterial  {...roofMat}  roughness="0.2"  color="#000"/>   
          </mesh>
         :null
        }
         {!tilesRoof
        ? <mesh geometry={nodes.dach.geometry} castShadow material={materials.drzwi} position={[0, 2.38, 0]} rotation={[0, 0, roofCordinate()]} scale={[depth/2.5,1,width/2.5]}>         
            <meshStandardMaterial  {...ocynkTxt} metalness="1" roughness={0.4}/>        
          </mesh>
         :null
        }       
        {gutter
        ?<group>
            <mesh geometry={nodes.spust.geometry} castShadow material={materials['Rynny.002']} position={[-1.31 *depth/2.5, 1.19, -1.28*width/2.5]} rotation={[Math.PI, -1.3, Math.PI]} />
            <mesh geometry={nodes.rynna.geometry} castShadow material={materials['Rynny.002']} position={[-1.32 *depth/2.5, 2.21, 0]} rotation={[-Math.PI / 2, Math.PI / 2,0]} scale={[1,width/2.5,1]} />          
        </group>
        :null}
      </group>

      <group visible={roof==='spadPrzod'}>
        <mesh geometry={nodes.bryla1.geometry} castShadow material={materials.drzwi} position={[0, 1.25, 0]}  scale={[depth/2.5,1,width/2.5]} >
          {color==="dab"
            ?<meshStandardMaterial {...wood} metalness="1" roughness={1} color="#D0A102"/>
            :color==="ocynk"
            ?<meshStandardMaterial {...ocynkTxt} metalness="1" roughness={0.4}  />
            :color==="orzech" 
            ? <meshStandardMaterial {...wood} metalness="1" roughness={0.8} color="#7A5F04"/>
            :color ? <meshStandardMaterial {...ocynkTxt} metalness="1" roughness={1} color={color} /> 
            :null
            }
        </mesh>
        <mesh visible={tilesRoof} geometry={nodes.dach1.geometry} castShadow material={materials.drzwi} position={[0, 2.52, 0]} rotation={[0, 0, -roofCordinate()*0.7]} scale={[depth/2.5,1,width/2.5]} >
        <meshStandardMaterial  {...roofMat}  roughness="0.2"  color="#000"/>   
        </mesh>
        <mesh visible={!tilesRoof} geometry={nodes.dach1.geometry} castShadow material={materials.drzwi} position={[0, 2.57, 0]} rotation={[0, 0, -roofCordinate()*0.7]} scale={[depth/2.5,1,width/2.5]} >
        <meshStandardMaterial  {...ocynkTxt} metalness="1" roughness={0.4}/>        
        </mesh>
        <mesh geometry={nodes.spust1.geometry} castShadow material={materials['Rynny.001']} position={[1.28, 1.29, -1.25]} rotation={[Math.PI, -1.3, Math.PI]} />
        <mesh geometry={nodes.rynna1.geometry}castShadow  material={materials['Rynny.001']} position={[1.3, 2.43, 0]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} />
      </group>
     
      <group visible={roof==='spadLewy'}>
        <mesh geometry={nodes.dach2.geometry} castShadow material={materials.drzwi} position={[0, 2.57, -0.01]} rotation={[0.08, -1.57, 0]} />
        <mesh geometry={nodes.bryla2.geometry} castShadow material={materials['drzwi.007']} position={[0, 1.25, 0]} />
        <mesh geometry={nodes.spust2.geometry} castShadow material={materials['Rynny.003']} position={[-1.22, 1.3, 1.3]} />
        <mesh geometry={nodes.rynna2.geometry} castShadow material={materials['Rynny.003']} position={[0.03, 2.45, 1.3]} rotation={[0, 0, -Math.PI / 2]} />
      </group>

      <group visible={roof==='spadPrawy'}>       
        <mesh geometry={nodes.dach3.geometry} castShadow material={materials.drzwi} position={[0, 2.58, 0.04]} rotation={[-0.08, 1.57, 0]} />
        <mesh geometry={nodes.rynna3.geometry} castShadow material={materials.Rynny} position={[-0.04, 2.45, -1.3]} rotation={[0, 0, -Math.PI / 2]} />
        <mesh geometry={nodes.spust3.geometry} castShadow material={materials.Rynny} position={[-1.22, 1.29, -1.29]} />
        <mesh geometry={nodes.bryla3.geometry} castShadow material={materials['drzwi.008']} position={[0, 1.25, 0]} />
      </group>

      <group visible={roof==='dwuspad'}>
      <mesh geometry={nodes.dach4.geometry} castShadow material={materials.drzwi} position={[0, 2.64, 0.65]} rotation={[0.26, -Math.PI / 2, 0]} />
      <mesh geometry={nodes.rynna4.geometry} castShadow material={materials.Rynny} position={[-0.04, 2.45, -1.3]} rotation={[0, 0, -Math.PI / 2]} />
      <mesh geometry={nodes.spust4.geometry} castShadow material={materials.Rynny} position={[-1.22, 1.29, -1.29]} />
      <mesh geometry={nodes.bryla4.geometry} castShadow material={materials['drzwi.008']} position={[0, 1.25, 0]} />
      <mesh geometry={nodes.dach4v2.geometry} castShadow material={materials['drzwi.009']} position={[0, 2.65, -0.63]} rotation={[-0.26, Math.PI / 2, 0]} />
      <mesh geometry={nodes.spust4v2.geometry} castShadow material={materials['Rynny.004']} position={[-1.27, 1.3, 1.3]} />
      <mesh geometry={nodes.rynna4v2.geometry} castShadow material={materials['Rynny.004']} position={[-0.02, 2.45, 1.3]} rotation={[0, 0, -Math.PI / 2]} />
      </group>

      {/* DOOR START */}
      {door && doorPosition==="Lewa"
      ? <group position={depth> 4 ? [(0.9*(depth/2.5))-doorMeasure*0.008,0,0]:[(0.4*(depth/2.5))-doorMeasure*0.006,0,0]}>  
      {/*  */}
          <mesh geometry={nodes['drzwi-male-bok'].geometry} material={materials.drzwi} position={[0.35, 0.99, 1.27*width/2.5]} rotation={[Math.PI / 2, 0, 0]} >
            {gateColor==="dab" ? <meshStandardMaterial {...woodGate2} metalness="1" roughness={1} color="#D0A102"/>
              :gateColor==="orzech" ? <meshStandardMaterial {...woodGate2} metalness="1" roughness={0.8} color="#7A5F04"/>
              :gateColor==="ocynk"  ?<meshStandardMaterial {...ocynkDoor} metalness="1" roughness={0.4}  />
              :gateColor ? <meshStandardMaterial {...ocynkTxt} metalness="1" roughness={0.8} color={gateColor}/>
              :<meshStandardMaterial {...Doortxt} metalness="1" roughness={0.4} />
            }
          </mesh>
          <mesh geometry={nodes['dzwi-male-obramowka'].geometry} material={materials.czarny} position={[0.35, 1.01, 1.26*width/2.5]} rotation={[Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Klamka.geometry} material={materials.klamki} position={[0.01*depth/2.5, 1.04, 1.26*width/2.5]} />
        </group>
     :null}
      {door && doorPosition==="Prawa"
      ? <group position={depth> 4 ? [(0.9*(depth/2.5))-doorMeasure*0.008,0,0]:[(0.4*(depth/2.5))-doorMeasure*0.006,0,0]}>  
      {/*  */}
          <mesh geometry={nodes['drzwi-male-bok'].geometry} material={materials.drzwi} position={[0.35, 0.99, -1.27*width/2.5]} rotation={[Math.PI / -2, 0, 0]} >
            {gateColor==="dab" ? <meshStandardMaterial {...woodGate2} metalness="1" roughness={1} color="#D0A102"/>
              :gateColor==="orzech" ? <meshStandardMaterial {...woodGate2} metalness="1" roughness={0.8} color="#7A5F04"/>
              :gateColor==="ocynk"  ?<meshStandardMaterial {...ocynkDoor} metalness="1" roughness={0.4}  />
              :gateColor ? <meshStandardMaterial {...ocynkTxt} metalness="1" roughness={0.8} color={gateColor}/>
              :<meshStandardMaterial {...Doortxt} metalness="1" roughness={0.4} />
            }
          </mesh>
          <mesh geometry={nodes['dzwi-male-obramowka'].geometry} material={materials.czarny} position={[0.35, 1.01, -1.26*width/2.5]} rotation={[Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Klamka.geometry} material={materials.klamki} position={[0.01, 1.04, -1.28*width/2.5]}  rotation={[Math.PI / 1, 0, 0]}/>
        </group>
     :null}
      {door && doorPosition==="Tył"    
      ? <group position={[((-2*(depth/2.5))+2)*0.63,0,(0.45*width)-(doorMeasure)*(0.005+(width/2.5)*0.001)]} rotation={[0, Math.PI / 2, 0]}>  
      {/*  */}
          <mesh geometry={nodes['drzwi-male-bok'].geometry} material={materials.drzwi} position={[0.35, 0.99, -1.27]} rotation={[Math.PI / -2, 0, 0]} >
            {gateColor==="dab" ? <meshStandardMaterial {...woodGate2} metalness="1" roughness={1} color="#D0A102"/>
            :gateColor==="orzech" ? <meshStandardMaterial {...woodGate2} metalness="1" roughness={0.8} color="#7A5F04"/>
            :gateColor==="ocynk"  ?<meshStandardMaterial {...ocynkDoor} metalness="1" roughness={0.4}  />
            :gateColor ? <meshStandardMaterial {...ocynkTxt} metalness="1" roughness={0.8} color={gateColor}/>
            :<meshStandardMaterial {...Doortxt} metalness="1" roughness={0.4} />
        }
          </mesh>
          <mesh geometry={nodes['dzwi-male-obramowka'].geometry} material={materials.czarny} position={[0.35, 1.01, -1.26]} rotation={[Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Klamka.geometry} material={materials.klamki} position={[0.01, 1.04, -1.28]}  rotation={[Math.PI / 1, 0, 0]}/>
        </group>
     :null}
     {/* DOOR END */}

    {/* GATES START */}

      {gate==="Uchylna"
      ? <group>
          <mesh geometry={nodes['dzwi-calosc'].geometry} position={[1.27*depth/2.5, 1.16, 0]} rotation={[0, 0, -Math.PI / 2]} >
          {gateColor==="dab"
          ?<meshStandardMaterial {...woodGate2} metalness="1" roughness={1} color="#D0A102"/>
          :gateColor==="ocynk"
          ?<meshStandardMaterial {...ocynkDoor} metalness="1" roughness={0.4}  />
          :gateColor==="orzech" 
          ? <meshStandardMaterial {...woodGate2} metalness="1" roughness={0.8} color="#7A5F04"/>
          :gateColor ?<meshStandardMaterial {...gateColorTXT} metalness="1" roughness={0.8} color={gateColor}/>
          :null
          }                   
          </mesh>
          <mesh geometry={nodes.pokretlo.geometry} material={materials.klamki} position={[1.28*depth/2.5, 1.18, 0]} />
        </group>
      :null}

      {gate==="Naboki"
      ? <group>
          <mesh geometry={nodes['podwojnedzwi-front001'].geometry} material={materials['drzwi.003']}  position={[1.27*depth/2.5, 1.16, 0.57]} rotation={[0, 0, -Math.PI / 2]} >
          {gateColor==="dab"
          ?<meshStandardMaterial {...woodGate2} metalness="1" roughness={1} color="#D0A102" repeat={[2,1]} />
          :gateColor==="ocynk"
          ?<meshStandardMaterial {...ocynkDoor} metalness="1" roughness={0.4}  />
          :gateColor==="orzech" 
          ? <meshStandardMaterial {...woodGate2} metalness="1" roughness={0.8} color="#7A5F04"/>
          :gateColor ?<meshStandardMaterial {...gateColorTXT} metalness="1" roughness={0.8} color={gateColor}/>
          :null
          }  
          </mesh>
          <mesh geometry={nodes.klamkafront.geometry} material={materials['klamki.001']} position={[1.27*depth/2.5, 1.18, -0.07]} rotation={[0, Math.PI / 2, 0]} />
        </group>
      :null
      }
      {gate==="Roleta"
      ? <group>
          <mesh geometry={nodes['dzwi-calosc'].geometry} position={[1.27*depth/2.5, 1.16, 0]} rotation={[0, 0, -Math.PI / 2]} >
          {gateColor==="dab"
          ?<meshStandardMaterial {...gateTextureSegment} metalness="1" roughness={1} color="#D0A102"/>       
          :gateColor==="orzech" 
          ? <meshStandardMaterial {...gateTextureSegment} metalness="1" roughness={0.8} color="#7A5F04"/>
          :gateColor ?<meshStandardMaterial {...gateTextureSegment} metalness="1" roughness={0.8} color={gateColor}/>
          :null
          }                   
          </mesh>
          <mesh geometry={nodes.pokretlo.geometry} material={materials.klamki} position={[1.28*depth/2.5, 1.18, 0]} />
        </group>
      :null}
     
      <mesh geometry={nodes.ramka003.geometry} material={materials.czarny} position={[1.26*depth/2.5, 1.16, 0]} rotation={[0, 0, -Math.PI / 2]} />
   
      <Text
      position={[2+depth/2.5, 0.2, 0]}
      lineHeight={0.8}
      rotation={[0, Math.PI / 2, 0]}
      font="/Ki-Medium.ttf"
      fontSize={1}
      material-toneMapped={false}
      anchorX="center"
      anchorY="middle">
      {'Vistal'}
    </Text>
      
      
      {/* GATES START */}

      {/* GLASS START */}
      {glass && glassPosition==="Lewa" ? <mesh geometry={nodes.swietlik.geometry} material={materials['Material.001']} position={[(0.9*depth/2.5)-glassMeasure*0.007, 2.0, 1.26*width/2.5]} rotation={[Math.PI / 2, 0, 0]} />:null}
      {glass && glassPosition==="Prawa" ? <mesh geometry={nodes.swietlik.geometry} material={materials['Material.001']} position={[(0.9*depth/2.5)-glassMeasure*0.007, 2.0, -1.26*width/2.5]} rotation={[Math.PI / 2, 0, 0]} />:null}
      {glass && glassPosition==="Tył" ? <mesh geometry={nodes.swietlik.geometry} material={materials['Material.001']} position={[-1.26*depth/2.5,2,-0.36*width+glassMeasure*0.0073]} rotation={[Math.PI / 2, 0, Math.PI / 2]} />:null}
      {/* GLASS END */}
     
      {/* SHOW WINDOW AND POSITION*/}
      {window&&windowPosition==="Lewa"
      ? <group position={[(1*depth/2.5)-windowMeasure*0.008,1.90,1.26*width/2.5]} rotation={[Math.PI / 1,0,0]}>
          <mesh geometry={nodes.Cube002.geometry} material={materials.Material} />
          <mesh geometry={nodes.Cube002_1.geometry} material={materials.okno} />
        </group>
        :null}     
      {window&&windowPosition==="Prawa"
      ? <group position={[(1*depth/2.5)-windowMeasure*0.008,1.90,-1.26*width/2.5]} rotation={[0,0,0]}>
          <mesh geometry={nodes.Cube002.geometry} material={materials.Material} />
          <mesh geometry={nodes.Cube002_1.geometry} material={materials.okno} />
        </group>
        :null}     
      {window&&windowPosition==="Tył"
      ? <group position={[-1.26*depth/2.5,1.60,-0.4*width+windowMeasure*0.008]} rotation={[0, Math.PI / 2, 0]}>
          <mesh geometry={nodes.Cube002.geometry} castShadow material={materials.Material} />
          <mesh geometry={nodes.Cube002_1.geometry} castShadow material={materials.okno} />
        </group>
        :null}     
      {/* SHOW WINDOW */}
      </group>
  )
}

useGLTF.preload('/configurator/garaze.glb')
