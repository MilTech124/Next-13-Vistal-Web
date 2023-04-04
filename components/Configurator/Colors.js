import React from 'react'
import Tooltip from '@mui/material/Tooltip';

function Colors({color,setColor,colorType,setColorType,gateColorType,setGateColorType,gateColor,setGateColor,current}) {
    const borderStyle={
        border:'solid 2px red',        
    }
    const colors = [
		"#D4AC6E",
		"#5D181F",
		"#7B231E",
		"#015080",
		"#46593A",
		"#3C3F45",
		"#8C4932",
		"#5B403A",
		"#101012",
		"#A2A2A2",
		"#FCFFFE",
    	]
  return (
    <>
    {/* PLATE MAIN COLOR */}
    <h4 className='text-xl'>Rodzaj Blachy</h4>
    <div className='flex justify-between'>
     
    <Tooltip title="Ocynkowa">
        <button onClick={()=>{setColor("ocynk"),setColorType("ocynkowa")}} className='p-7 w-7 bg-slate-300 rounded-full' style={color==="ocynk" ? borderStyle : null}></button>
    </Tooltip>
    <Tooltip title="Drewnopodobna">
        <button onClick={()=>{setColorType("wood")}} className='p-7 w-7 bg-amber-700 rounded-full' style={colorType==="wood" ? borderStyle : null}></button>
    </Tooltip>
    <Tooltip title="Akrylowa">
        <button onClick={()=>{setColorType("acrilic")}} className='p-7 w-7 bg-yellow-300 rounded-full' style={colorType==="acrilic" ? borderStyle : null}></button>
    </Tooltip>
    </div>
    {colorType==="acrilic"
    ?   <div>
            <p>Kolory</p>
            <div className='flex gap-1 flex-wrap'>           
           {colors.map((singleColor,index)=>{return <button key={index} onClick={()=>{setColor(singleColor)}} className={"p-5 w-5 bg-["+singleColor+"] rounded-full"} style={singleColor===color ? borderStyle : null}>
           </button>}          
           )}
           {color}
            </div>
        </div>
    :null
    }
    {colorType==="wood"
        ?   <div>
                <p>Kolory</p>
                <div className='flex gap-1'>
                    <button onClick={()=>{setColor("dab")}} className='p-4 w-4 bg-orange-700 rounded-full'
                     style={color==="dab" ? borderStyle : null}></button>
                    <button onClick={()=>{setColor("orzech")}} className='p-4 w-4 bg-orange-900 rounded-full'
                     style={color==="orzech" ? borderStyle : null}></button>               
                </div>
            </div>
        :null
    }
    {/* PLATE MAIN COLOR */}
    <div>
    <h4 className='text-xl'>Brama:</h4>
    <div className='flex justify-between'>
     
     <Tooltip title="Ocynkowa">
         <button onClick={()=>{setGateColor("ocynk"),setGateColorType("ocynkowa")}} className='p-7 w-7 bg-slate-300 rounded-full' style={gateColor==="ocynk" ? borderStyle : null}></button>
     </Tooltip>
     <Tooltip title="Drewnopodobna">
         <button onClick={()=>{setGateColorType("wood")}} className='p-7 w-7 bg-amber-700 rounded-full' style={gateColorType==="wood" ? borderStyle : null}></button>
     </Tooltip>
     <Tooltip title="Akrylowa">
         <button onClick={()=>{setGateColorType("acrilic")}} className='p-7 w-7 bg-yellow-300 rounded-full' style={gateColorType==="acrilic" ? borderStyle : null}></button>
     </Tooltip>
     </div>
    </div>    

    {gateColorType==="acrilic"
    ?<div>
            <p>Kolory</p>
            <div className='flex gap-1 flex-wrap'>               
               {colors.map((singleColor,index)=>{return <button key={index} onClick={()=>{setGateColor(singleColor)}}
                className={"p-5 w-5 bg-["+singleColor+"]rounded-full"} style={singleColor===gateColor ? borderStyle : null}>
               </button>}
               )}
            </div>          
        </div>
       
:null
    }
     {gateColorType==="wood"
        ?   <div>
                <p>Kolory</p>
                <div className='flex gap-1'>
                    <button onClick={()=>{setGateColor("dab")}} className='p-5 w-5 bg-orange-700 rounded-full'
                     style={gateColor==="dab" ? borderStyle : null}></button>
                    <button onClick={()=>{setGateColor("orzech")}} className='p-5 w-5 bg-orange-900 rounded-full'
                     style={gateColor==="orzech" ? borderStyle : null}></button>               
                </div>
            </div>
        :null
    }
    
    {/* PLATE ROOF COLOR */}
    
    {/* PLATE ROOF COLOR */}

    
    </>
  )
}

export default Colors