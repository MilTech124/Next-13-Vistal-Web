import React from 'react'

function Gate({gate,setGate}) {
const styleGate={
    background: "white",
    borderRadius: "8px"
}
  return (
    <div className='flex gap-2'>
     <button onClick={()=>setGate("Roleta")} style={gate==="Roleta" ? styleGate :null} ><img width={70} src="./configurator/icon/ware_icon.svg"/></button>
     <button onClick={()=>setGate("Uchylna")} style={gate==="Uchylna" ? styleGate :null}><img width={70} src="./configurator/icon/open_door.svg"/></button>
     <button onClick={()=>setGate("Naboki")} style={gate==="Naboki" ? styleGate :null}><img width={70} src="./configurator/icon/double_open.svg"/></button>
     {/* <button><img src="./configurator/icon/part_open.svg"/></button> */}
  
    </div>
  )
}

export default Gate