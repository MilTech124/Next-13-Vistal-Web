import React, { useState, Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei"
import { Blaszak } from "../components/Configurator/Blaszak"
import emailjs from "@emailjs/browser"
import Colors from "../components/Configurator/Colors"
import Gate from "../components/Configurator/Gate"
import RoofType from "../components/Configurator/RoofType"
import BasicModal from "../components/Configurator/Dialog"

import Hello from "../components/Configurator/Hello"

import Modal from "@mui/material/Modal"
import Box from "@mui/material/Box"
import Checkbox from "@mui/material/Checkbox"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import Switch from "@mui/material/Switch"
import FormControlLabel from "@mui/material/FormControlLabel"
import Slider from "@mui/material/Slider"
import Radio from "@mui/material/Radio"
import Input from "@mui/material/Input"



import { Button} from "@mui/material"

function Test() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  }
  //MODAL
  const [open, setOpen] = React.useState(true)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const ariaLabel = { 'aria-label': 'description' };




  
  //MODAL
  const widthValue = [3.0, 3.5, 4.0, 4.5, 5.0, 5.5, 6.0, 6.5, 7.0, 7.5, 8,9]
  const RodzajeKonstrukcji = ["kątownik", "profil", "kątownik wzmocniony"]

  const [current, setCurrent] = useState(null)
  const [name, setName] = useState("")
  const [color, setColor] = useState("ocynk")
  const [colorRAL, setColorRAL] = useState("ocynk")
  const [direction, setDirection] = useState("pion")
  const [directionGate, setDirectionGate] = useState("pion")
  const [roof, setRoof] = useState("spadTyl")
  const [roofColorType,setRoofColorType]= useState("ocynkowa")
  const [roofColor, setRoofColor] = useState("ocynk")
  const [roofColorRAL, setRoofColorRAL] = useState("ocynk")
  const [gateColor, setGateColor] = useState("ocynk")
  const [gateColorRAL, setGateColorRAL] = useState("ocynk")
  const [gateColorType, setGateColorType] = useState("ocynk")
  const [colorType, setColorType] = useState("ocynkowa")
  const [gate, setGate] = useState("Uchylna")
  const [gate2, setGate2] = useState("Uchylna") 
  const [zamowienie, setZamowienie] = useState(false)
  const [box, setBox] = useState({   
    height: 2.5,
    width: 5,
    depth: 4,
    construction: "kątownik",
    gatePosition: "Środek",
    gatePosition2: "Brak",
    guard: false,
    warming: false,
    mounting: false,
    window: false,
    door: false,
    glass: false,
    gutter: false,
    tilesRoof: false,
    windowPosition: "Prawa",
    windowMeasure: 30,
    glassPosition: "Prawa",
    glassMeasure: 30,
    doorPosition: "Prawa",
    doorMeasure: 30,
    transport: false,
  })
  const env =
    "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/alps_field_1k.hdr"

  console.log(current)

  // FUNCTION
  const onChange = (e) => {
    setBox((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onChangeSwitch = (e) => {
    if (e.target.checked) {
      setCurrent(e.target.name)
    }
    console.log(e.target.checked)
    setBox((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.checked,
    }))
  }

  const onSubmit = () => {
    emailjs
    .send(
      "service_3j3n0o7",
      "template_r72xmpk",
      valuation,
      "oQq1UWWWHKs-7vYwK"
    )
    .then(
      (result) => {
        console.log(result.text)
      },
      (error) => {
        console.log(error.text)
      }
    )

  alert("Pomyslnie wysłano")
  router.push("/")
}
  // FUNCTION

  //COMOPONENTS
  const SendOrder = () => { 
    const chandleChange = (e) => {
      setName(e.target.value)
    }
    return (
      <>
      <h3 className="text-2xl p-2">Potwierdzenie zamówienia :</h3>
      <div className="flex">
        <div>
          <ul>
            <li>Wysokość: {box.height}m</li>
            <li>Szerokość: {box.width}m</li>
            <li>Głębokość: {box.depth}m</li>
            <li>Konstrukcja: {box.construction}</li>
            {colorType==="acrilic" ? <li>Kolor: {colorRAL}</li> :<li>Kolor: {color}</li>}      
            <li>Kierunek przetłoczeń garażu: {direction}</li>    
            {gateColorType==="acrilic" ? <li>Kolor bramy: {gateColorRAL}</li> :<li>Kolor bramy: {gateColor}</li>}
            <li>Kierunek przetłoczeń bramy: {directionGate}</li>      
            {roofColorType==="acrilic" ? <li>Kolor dachu: {roofColorRAL}</li> :<li>Kolor dachu: {roofColor}</li>}
            <li>Typ dachu: {roof}</li>
            <li>Typ bramy: {gate}</li>
            <li>Pozycja bramy:{box.gatePosition}</li>
            {box.width >=6 ?<li>Typ bramy 2: {gate2}</li> :null}
            {box.width >=6 ?<li>Pozycja bramy:{box.gatePosition2}</li> :null}
            <li>Okno: {box.window ? "Tak" : "Nie"}</li>
            {box.window ? <><li>Okno po stronie: {box.windowPosition}</li></> :null} 
            {box.window ? <><li>Pozycja okna {box.windowMeasure}cm</li></> :null}      
            <li>Drzwi: {box.door ? "Tak" : "Nie"}</li>
            {box.door ? <><li>Drzwi po stronie: {box.doorPosition}</li></> :null}
            {box.door ? <><li>Pozycja drzwi {box.doorMeasure}cm</li></> :null}
            <li>Świetlik: {box.glass ? "Tak" : "Nie"}</li>
            {box.glass ? <><li>Świetlik po stronie: {box.glassPosition}</li></> :null}
            {box.glass ? <><li>Pozycja świetlika {box.glassMeasure}cm</li></> :null}
            <li>Orynnowanie: {box.gutter ? "Tak" : "Nie"}</li>
            <li>Montaż: {box.mounting ? "Tak" : "Nie"}</li>
            <li>Transport: {box.transport ? "Tak" : "Nie"}</li>
            {name}
          </ul> 
        </div>
        <div>
          <h4>Dane kontaktowe:</h4>
         <Input inputProps={ariaLabel}  placeholder="Imie" value={name} type="text" onChange={chandleChange} name="name" id="name"/>
        </div>
      </div>

      </>
    )
  }

  //COMOPONENTS


  return (
    <div id="canvas-container" className="w-[100vw] h-[90vh] relative">
      {/* SETTING LEFT SIDE START*/}
      <div className="absolute top-5 flex flex-col z-50  bg-white/50 p-10 rounded-r-lg">
        {/* WINDOW SETTINGS        */}
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

        {box.window ? (
          <div>
            <RadioGroup
              name="windowPosition"
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              value={box.windowPosition}
              onChange={onChange}
            >
              <FormControlLabel value="Lewa" control={<Radio />} label="Lewa" />
              <FormControlLabel value="Tył" control={<Radio />} label="Tył" />
              <FormControlLabel
                value="Prawa"
                control={<Radio />}
                label="Prawa"
              />
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
              max={
                box.windowPosition === "Tył"
                  ? box.width * 100 - 10
                  : box.depth * 100 - 10
              }
              onChange={onChange}
            />
          </div>
        ) : null}
        {/* WINDOW SETTINGS        */}

        <FormControlLabel
          control={
            <Switch
              name="gutter"
              onChange={onChangeSwitch}
              checked={box.gutter}
              label="Rynny"
            />
          }
          label="Rynny"
        />
        {/* DOOR SETTINGS        */}
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

        {box.door ? (
          <div>
            <RadioGroup
              name="doorPosition"
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              value={box.doorPosition}
              onChange={onChange}
              className="gap-0"
            >
              <FormControlLabel value="Lewa" control={<Radio />} label="Lewa" />
              <FormControlLabel value="Tył" control={<Radio />} label="Tył" />
              <FormControlLabel
                value="Prawa"
                control={<Radio />}
                label="Prawa"
              />
            </RadioGroup>
            <p>Rozmieszczenie od krawędzi</p>
            <Slider
              aria-label="rozmieszczenie"
              name="doorMeasure"
              defaultValue={30}
              value={box.doorMeasure}
              valueLabelDisplay="auto"
              step={10}
              marks
              min={10}
              max={
                box.doorPosition === "Tył"
                  ? box.width * 100 - 10
                  : box.depth * 100 - 10
              }
              onChange={onChange}
            />
          </div>
        ) : null}
        {/* DOOR SETTINGS        */}
        {/* GLASS SETTINGS        */}
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

        {box.glass ? (
          <div>
            <RadioGroup
              name="glassPosition"
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              value={box.glassPosition}
              onChange={onChange}
            >
              <FormControlLabel value="Lewa" control={<Radio />} label="Lewa" />
              <FormControlLabel value="Tył" control={<Radio />} label="Tył" />
              <FormControlLabel
                value="Prawa"
                control={<Radio />}
                label="Prawa"
              />
            </RadioGroup>
            <p>Rozmieszczenie od krawędzi</p>
            <Slider
              aria-label="rozmieszczenie"
              name="glassMeasure"
              defaultValue={30}
              value={box.glassMeasure}
              valueLabelDisplay="auto"
              step={10}
              marks
              min={10}
              max={
                box.glassPosition === "Tył"
                  ? box.width * 100 - 10
                  : box.depth * 100 - 10
              }
              onChange={onChange}
            />
          </div>
        ) : null}
        {/* GLASS SETTINGS        */}
        <FormControlLabel
          control={
            <Switch
              name="tilesRoof"
              onChange={onChangeSwitch}
              checked={box.tilesRoof}
              label="Blachodachówka"
            />
          }
          label="Blachodachówka"
        />
      </div>
      {/* SETTING LEFT SIDE END*/}
      {/* SETTING RIGHT SIDE START*/}
      <div className="absolute right-0 top-5 w-[200px] flex flex-col z-50 gap-2 bg-white/50 p-10 rounded-l-lg">
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
              <MenuItem key={value} value={value}>
                {value} m
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Hello />
            <button
              className="py-3 px-5 border-2 mt-2 rounded-md"
              onClick={handleClose}
            >
              Rozumiem
            </button>
          </Box>
        </Modal>
        <Modal
          open={zamowienie}
          onClose={!zamowienie}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <SendOrder />
            <button
              className="py-3 px-5 border-2 mt-2 rounded-md"
              onClick={() => setZamowienie(false)}
            >
              Wyślij zamówienie
            </button>
          </Box>
        </Modal>
        

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
              <MenuItem key={value} value={value}>
                {value} m
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <BasicModal openModal={true}>
          <Colors
            color={color}
            current={current}
            setColor={setColor}
            setColorRAL={setColorRAL}
            colorType={colorType}
            setColorType={setColorType}
            gateColor={gateColor}
            setGateColorRAL={setGateColorRAL}
            setGateColor={setGateColor}
            gateColorType={gateColorType}
            setRoofColorRAL={setRoofColorRAL}
            setGateColorType={setGateColorType}
            roofColor={roofColor}
            setRoofColor={setRoofColor}
            direction={direction}
            setDirection={setDirection}
            directionGate={directionGate}
            setDirectionGate={setDirectionGate}
            roofColorType={roofColorType}
            setRoofColorType={setRoofColorType}
      
          />
        </BasicModal>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            Rodzaj Konstrukcji
          </InputLabel>
          <Select
            name="construction"
            labelId="demo-simple-select-label"
            id="construction"
            value={box.construction}
            label="Długość"
            onChange={onChange}
          >
            {RodzajeKonstrukcji.map((value) => (
              <MenuItem key={value} value={value}>
                {value}{" "}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControlLabel
          control={
            <Checkbox
              name="guard"
              onChange={onChangeSwitch}
              checked={box.guard}
            />
          }
          label="Zabezpieczenie antykorozyjne"
        />
        <FormControlLabel
          control={
            <Checkbox
              name="mounting"
              onChange={onChangeSwitch}
              checked={box.mounting}
            />
          }
          label="Kotwiczenie"
        />
      </div>
      {/* SETTING RIGHT SIDE END*/}

      {/* SETTING CENTER START */}
      <div className="absolute  left-1/2 transform -translate-x-1/2 z-50  bg-white/50 p-5 rounded-b-lg">
        <Gate gate={gate} setGate={setGate} />
        <Select
          name="gatePosition"
          labelId="demo-simple-select-label"
          id="gatePosition"
          value={box.gatePosition}
          label="Pozycja bramy"
          onChange={onChange}
          className="w-full"
        >
          <MenuItem value={"Lewa"}>Lewa</MenuItem>
          <MenuItem value={"Środek"}>Środek</MenuItem>
          <MenuItem value={"Prawa"}>Prawa</MenuItem>
        </Select>
        {/* //Gate 2 */}
        {box.width >= 6 ? <Gate gate={gate2} setGate={setGate2} /> : null}
        {box.width >= 6 ? (
          <Select
            name="gatePosition2"
            labelId="demo-simple-select-label"
            id="gatePosition2"
            value={box.gatePosition2}
            label="Pozycja bramy"
            onChange={onChange}
            className="w-full"
          >
           {gatePosition!="Brak" ? <MenuItem value={"Brak"}>Brak</MenuItem> :null} 
           {box.gatePosition!="Lewa" && box.width>=6  ?<MenuItem value={"Lewa"}>Lewa</MenuItem> :null}
           {box.gatePosition!="Środek" && box.width>=6 ? <MenuItem value={"Środek"}>Środek</MenuItem> :null}
            <MenuItem value={"Prawa"}>Prawa</MenuItem>
          </Select>
        ) : null}
      </div>
      {/* SETTING CENTER END */}
      {/* SETTING BOTTOM START */}
      <div className="absolute bottom-0  left-1/2 transform -translate-x-1/2 z-50  bg-white/50 p-5 rounded-t-lg">
        <RoofType roof={roof} setRoof={setRoof} />
      </div>
      {/* SETTING BOTTOM END */}

      {/* SETTING RIGHT SIDE START */}
      <div className="absolute bottom-5 right-10 z-10"> 
        <Button onClick={()=>setZamowienie(true)} variant="contained" color="error" className="bg-red-500" size="large">Zamów Wycenę</Button>
        <p className="text-white text-center">Zamów wycenę ustalonej konfiguracji</p>
      </div>
     
      {/* SETTING RIGHT SIDE END */}

      <Canvas shadows camera={{ position: [10, 6, 2], fov: 30 }}>
        <Suspense fallback={null}>
          <Environment
            files={env}
            ground={{ height: 5, radius: 40, scale: 20 }}
          />
          <ambientLight color={"white"} intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -5, -10]} />
          <Blaszak
            box={box}
            roof={roof}
            gate={gate}
            gate2={gate2}
            color={color}
            gateColor={gateColor}
            roofColor={roofColor}
            direction={direction}
            directionGate={directionGate}       
          />
          <OrbitControls
            minPolarAngle={0}
            maxDistance={20}
            minDistance={10}
            maxPolarAngle={Math.PI / 2.1}
          />
          <ContactShadows
            position={[0, -0, 0]}
            opacity={1.75}
            scale={20}
            blur={2.5}
            far={8}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Test
