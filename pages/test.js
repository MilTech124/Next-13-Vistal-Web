import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import {OrbitControls,Environment,ContactShadows,BakeShadows} from "@react-three/drei";
import { Blaszak } from "../components/Configurator/Blaszak";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import Slider from "@mui/material/Slider";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Colors from "../components/Configurator/Colors";

function Test() {
  const widthValue = [2.5, 3.0, 3.5, 4.0, 4.5, 5.0, 5.5, 6.0, 6.5, 7.0, 7.5, 8];
  const [current,setCurrent]=useState(null)
  const [color,setColor]=useState('red')
  const [colorType,setColorType]=useState('red')
  const [box, setBox] = useState({    
    height: 2.5,
    width: 2.5,
    depth: 2.5,
    window: false,
    door: false,
    glass: false,
    gutter:false,
    windowPosition: "Prawa",
    windowMeasure: 30,
  });
  const env ="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/scythian_tombs_2k.hdr"

  // FUNCTION
  const onChange = (e) => {
    setBox((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onChangeSwitch = (e) => { 
    if(e.target.checked){
      setCurrent(e.target.name)
    }  
   console.log(e.target.checked);
    setBox((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.checked,
    }));
  };

  

  // FUNCTION
  console.log(box);
  console.log(current);

  return (
    <div id="canvas-container" className="w-[100vw] h-[90vh] relative">
      <div className="absolute top-5 flex flex-col z-50 gap-5 bg-white/50 p-10 rounded-lg">
        <FormControlLabel
            control={
              <Switch
                name="window"
                onChange={onChangeSwitch}
                checked={box.window}
                label="Okno"
              />
            }
            label="Okno"
          />
        <FormControlLabel
            control={
              <Switch
                name="gutter"
                onChange={onChangeSwitch}
                checked={box.guter}
                label="Rynny"
              />
            }
            label="Rynny"
          />
        <FormControlLabel
            control={
              <Switch
                name="door"
                onChange={onChangeSwitch}
                checked={box.door}
                label="Drzwi"
              />
            }
            label="Drzwi"
          />
        <FormControlLabel
            control={
              <Switch
                name="glass"
                onChange={onChangeSwitch}
                checked={box.glass}
                label="Świetlik"
              />
            }
            label="Świetlik"
          />
      </div>
      <div className="absolute right-0 top-5 w-[200px] flex flex-col z-50 gap-5 bg-white/50 p-10 rounded-lg">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Szerokość</InputLabel>
          <Select
            name="width"
            labelId="demo-simple-select-label"
            id="width"
            value={box.width}
            label="szerokosc"
            onChange={onChange}
          >
            {widthValue.map((value) => (
              <MenuItem value={value}>{value} m</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Długość</InputLabel>
          <Select
            name="depth"
            labelId="demo-simple-select-label"
            id="depth"
            value={box.depth}
            label="Długość"
            onChange={onChange}
          >
            {widthValue.map((value) => (
              <MenuItem value={value}>{value} m</MenuItem>
            ))}
          </Select>
        </FormControl>
       
        {box.window && current==="window"? (
          <div>
            <RadioGroup name="windowPosition" row aria-labelledby="demo-row-radio-buttons-group-label"         
              value={box.windowPosition}
              onChange={onChange}
            >
              <FormControlLabel value="Lewa" control={<Radio />}label="Lewa"/>
              <FormControlLabel value="Tył" control={<Radio />} label="Tył" />
              <FormControlLabel value="Prawa" control={<Radio />}label="Prawa"/>
            </RadioGroup>
            <p>Rozmieszczenie od krawędzi</p>
            <Slider
              aria-label="rozmieszczenie"
              name="windowMeasure"
              defaultValue={30}
              value={box.windowMeasure}
              valueLabelDisplay="auto"
              step={10}
              marks
              min={10}
              max={ box.windowPosition==="Tył" ? box.width * 100 - 10 : box.depth * 100 - 10}
              onChange={onChange}
            />
          </div>
        ) : null}

        <Colors color={color} setColor={setColor} colorType={colorType} setColorType={setColorType} />
      </div>
      
     

      <Canvas shadows camera={{ position: [10, 6, 12], fov: 30 }}>
        <Environment
          files={env}
          ground={{ height: 5, radius: 40, scale: 17 }}
        />
        <ambientLight color={"white"} intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -5, -10]} />
        <Blaszak box={box}/>
        <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 2.1} />
        <ContactShadows
          position={[0, -0, 0]}
          opacity={1.75}
          scale={20}
          blur={2.5}
          far={8}
        />
        <BakeShadows />
      </Canvas>
    </div>
  );
}

export default Test;
