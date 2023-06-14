import Input from "@mui/material/Input"
import { TextField } from "@mui/material"
import FormControlLabel from "@mui/material/FormControlLabel"
import Switch from "@mui/material/Switch"

const  SendOrder = ({
	width,
	depth,
	color,
	direction,
	colorRAL,
	colorType,
	construction,
	gateColorType,
	gateColor,
	gateColorRAL,
	gatePosition,
	gatePosition2,
	gate2,
	directionGate,
	roofColorType,
	roofColor,
	roofColorRAL,
	roof,
	gate,
	window,
	glass,
	door,
	doorPosition,
	doorMeasure,
	glassPosition,
	glassMeasure,
	windowPosition,
	windowMeasure,
	gutter,mounting,
	transport,
	valuation,
	setValuation
}) => { 

//FUNCTIONS	
	const onChange = (e) => {
		setValuation((prevState) => ({
		  ...prevState,
		  [e.target.name]: e.target.value,
		}))
	}
	const onChangeSwitch = (e) => {
		
		setValuation((prevState) => ({
			...prevState,
			[e.target.name]: e.target.checked,
		  }))
	}

//FUNCTIONS	
    return (
      <>
      <h3 className="text-2xl p-2">Potwierdzenie zamówienia :</h3>
      <div className="flex">
        <div className="md:basis-1/2 order-2">
          <ul>			
            <li>Szerokość: {width}m</li>
            <li>Głębokość: {depth}m</li>
            <li>Konstrukcja: {construction}</li>
            {colorType==="acrilic" ? <li>Kolor: {colorRAL}</li> :<li>Kolor: {color}</li>}      
            <li>Kierunek przetłoczeń garażu: {direction}</li>    
            {gateColorType==="acrilic" ? <li>Kolor bramy: {gateColorRAL}</li> :<li>Kolor bramy: {gateColor}</li>}
            <li>Kierunek przetłoczeń bramy: {directionGate}</li>      
            {roofColorType==="acrilic" ? <li>Kolor dachu: {roofColorRAL}</li> :<li>Kolor dachu: {roofColor}</li>}
            <li>Typ dachu: {roof}</li>
            {gate==="Roleta" ?<li>Typ bramy: Segmentowa</li> : <li>Typ bramy: {gate}</li>}
            <li>Pozycja bramy:{gatePosition}</li>
            {width >=6 ?<li>Typ bramy 2: {gate2}</li> :null}
            {width >=6 ?<li>Pozycja bramy:{gatePosition2}</li> :null}
            <li>Okno: {window ? "Tak" : "Nie"}</li>
            {window ? <><li>Okno po stronie: {windowPosition}</li></> :null} 
            {window ? <><li>Pozycja okna: {windowMeasure}cm</li></> :null}      
            <li>Drzwi: {door ? "Tak" : "Nie"}</li>
            {door ? <><li>Drzwi po stronie: {doorPosition}</li></> :null}
            {door ? <><li>Pozycja drzwi: {doorMeasure}cm</li></> :null}
            <li>Świetlik: {glass ? "Tak" : "Nie"}</li>
            {glass ? <><li>Świetlik po stronie: {glassPosition}</li></> :null}
            {glass ? <><li>Pozycja świetlika: {glassMeasure}cm</li></> :null}
            <li>Orynnowanie: {gutter ? "Tak" : "Nie"}</li>
            <li>Transport: {valuation.transport ? "Tak" : "Nie"}</li>
          </ul> 
        </div>
        <div className="md:basis-1/2">
          <h4 className="text-xl">Dane kontaktowe:</h4> 
			<Input placeholder="Imie" value={valuation.name}  onChange={onChange} name="name" id="setName"/>
			<Input placeholder="Nazwisko" value={valuation.surname}  onChange={onChange} name="surname" id="setSurname"/>
			<Input placeholder="Telefon" value={valuation.phone}  onChange={onChange} name="phone" id="setPhone"/>
			<Input placeholder="Email" value={valuation.email}  onChange={onChange} name="email" id="setEmail"/>
			<Input placeholder="Ulica" value={valuation.street}  onChange={onChange} name="street" id="setStreet"/>
			<Input placeholder="Kod pocztowy" value={valuation.postCode}  onChange={onChange} name="postCode" id="setPostcode"/>
			<Input placeholder="Miasto" value={valuation.city}  onChange={onChange} name="city" id="setCity"/>
			<TextField placeholder="Uwagi"   multiline value={valuation.comments}  onChange={onChange} name="comments" id="setComments"/>
			<FormControlLabel
				control={
					<Switch
					name="transport"
					onChange={onChangeSwitch}
					checked={valuation.transport}
					label="Transport"
					/>
				}
				label="Transport"
			/>
        </div>
      </div>

      </>
    )
  }
  export default SendOrder;