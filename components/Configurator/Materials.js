import { useTexture } from "@react-three/drei";
import * as THREE from "three";
//-------------------------------------------MATERIALS--------------------------------
// MATERIAL DOOR OCYNK
export default function Materials(width, depth) {
const Doortxt = useTexture({
  map: "../../configurator/texture/ocynk1.jpg",
});
Doortxt.map.repeat.set(1.2, 1);
Doortxt.map.wrapS = Doortxt.map.wrapT = THREE.RepeatWrapping;
// MATERIAL DOOR OCYNK

//MATERIAL COLORS
const colorTxt = useTexture({
  normalMap: "./configurator/texture/ocynkNormal.jpg",
});
colorTxt.normalMap.repeat.set((1.2 * width) / 2.7, 1);
colorTxt.normalMap.wrapS = Doortxt.map.wrapT = THREE.RepeatWrapping;
//MATERIAL COLORS

// MATERIAL OCYNK2
const ocynkTxt = useTexture({
  map: "./configurator/texture/ocynk1v2.jpg",
});
ocynkTxt.map.repeat.set((1.2 * width) / 2.7, 1);
ocynkTxt.map.wrapS = ocynkTxt.map.wrapT = THREE.RepeatWrapping;
// MATERIAL OCYNK2

// MATERIAL OCYNK DOOR
const ocynkDoor = useTexture({
  map: "./configurator/texture/ocynk1.jpg",
});
ocynkDoor.map.repeat.set(1.2, 1);
ocynkDoor.map.wrapS = ocynkDoor.map.wrapT = THREE.RepeatWrapping;
// MATERIAL OCYNK2

// MATERIAL WOOD
const wood = useTexture({
  map: "./configurator/texture/wood.jpg",
});
wood.map.repeat.set((1.2 * width) / 2.7, 1);
wood.map.wrapS = wood.map.wrapT = THREE.RepeatWrapping;

// MATERIAL WOOD

// MATERIAL WOOD FOR GATE
const woodGate2 = useTexture({
  map: "./configurator/texture/wood2.jpg",
});
woodGate2.map.repeat.set(1.4, 1);
woodGate2.map.wrapS = woodGate2.map.wrapT = THREE.RepeatWrapping;
// wood.map.rotation="1.56"
// wood.normaMap.rotation="1.56"
// MATERIAL WOOD FOR GATE

const gateColorTXT = useTexture({
  map: "./configurator/texture/ocynk1.jpg",
});
const gateTextureSegment = useTexture({
  map: "./configurator/texture/wood2.jpg",
  normalMap: "./configurator/texture/normal.jpg",
  bumpMap: "./configurator/texture/bumpwood.jpg",
});

const roofMat = useTexture({
  map: "./configurator/texture/roof/albedo.jpg",
  displacementMap: "./configurator/texture/roof/displacement.jpg",
  aoMap: "./configurator/texture/roof/AO.jpg",
  bumpMap: "./configurator/texture/roof/normal.jpg",
  roughness: "./configurator/texture/roof/roughnes.jpg",
});

roofMat.map.repeat.set((2 * width) / 2.5, (2 * depth) / 2.5);
roofMat.displacementMap.repeat.set((2 * width) / 2.5, (2 * depth) / 2.5);
roofMat.aoMap.repeat.set((2 * width) / 2.5, (2 * depth) / 2.5);
roofMat.bumpMap.repeat.set((2 * width) / 2.5, (2 * depth) / 2.5);
roofMat.roughness.repeat.set((2 * width) / 2.5, (2 * depth) / 2.5);
roofMat.map.rotation = Math.PI;

roofMat.map.wrapS = roofMat.map.wrapT = THREE.RepeatWrapping;
roofMat.displacementMap.wrapS = roofMat.displacementMap.wrapT =
  THREE.RepeatWrapping;
roofMat.aoMap.wrapS = roofMat.aoMap.wrapT = THREE.RepeatWrapping;
roofMat.bumpMap.wrapS = roofMat.bumpMap.wrapT = THREE.RepeatWrapping;
roofMat.roughness.wrapS = roofMat.roughness.wrapT = THREE.RepeatWrapping;
roofMat.displacementScale = 0.1;
roofMat.bumpScale = 0.1;

gateColorTXT.map.repeat.set(1.4, 1);
gateColorTXT.map.wrapS = gateColorTXT.map.wrapT = THREE.RepeatWrapping;

gateTextureSegment.map.repeat.set(0.8, 1);
gateTextureSegment.normalMap.repeat.set(0.8, 1);
gateTextureSegment.bumpMap.repeat.set(0.8, 1);
gateTextureSegment.bumpMap.rotation = Math.PI / 2;
gateTextureSegment.map.rotation = Math.PI / 2;
gateTextureSegment.normalMap.rotation = Math.PI / 2;
gateTextureSegment.map.wrapS = gateTextureSegment.map.wrapT =
  THREE.RepeatWrapping;
gateTextureSegment.normalMap.wrapS = gateTextureSegment.normalMap.wrapT =
  THREE.RepeatWrapping;
gateTextureSegment.bumpMap.wrapS = gateTextureSegment.bumpMap.wrapT =
  THREE.RepeatWrapping;
gateTextureSegment.normalScale = 0.5;

//-------------------------------------------MATERIALS--------------------------------
}