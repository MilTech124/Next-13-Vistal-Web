import React from 'react'

function RoofType({roof,setRoof}) {
	const styleGate={
		background: "white",
		borderRadius: "8px"
	}
  return (
	<div className='flex gap-2'>
	<button onClick={()=>setRoof("spadTyl")} style={roof==="spadTyl" ? styleGate :null} ><img width={50} src="./configurator/icon/tyl.png"/></button>
	<button onClick={()=>setRoof("spadLewy")} style={roof==="spadLewy" ? styleGate :null}><img width={50} src="./configurator/icon/lewo.png"/></button>	
	<button onClick={()=>setRoof("dwuspad")} style={roof==="dwuspad" ? styleGate :null}><img width={50} src="./configurator/icon/prawo-lewo.png"/></button>
	<button onClick={()=>setRoof("spadPrawy")} style={roof==="spadPrawy" ? styleGate :null}><img width={50} src="./configurator/icon/prawo.png"/></button>
	<button onClick={()=>setRoof("spadPrzod")} style={roof==="spadPrzod" ? styleGate :null}><img width={50} src="./configurator/icon/przod.png"/></button>

 
   </div>
  )
}

export default RoofType