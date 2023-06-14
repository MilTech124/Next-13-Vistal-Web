import React, { useState } from 'react'
import Tooltip from '@mui/material/Tooltip';

function Colors({color,setColor,colorType,setColorType,gateColorType,setGateColorType,
    gateColor,setGateColor,roofColor,setRoofColor,direction,setDirection,directionGate,setDirectionGate,setColorRAL,
    setGateColorRAL,setRoofColorRAL,roofColorType,setRoofColorType}) {
    const borderStyle={
        boxShadow:'0px 0px 5px 5px',
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
        const colorsRAL=[
            "RAL 1002",
            "RAL 3005",
            "RAL 3011",
            "RAL 5010",
            "RAL 6020",
            "RAL 7016",
            "RAL 8004",
            "RAL 8017",
            "RAL 9005",
            "RAL 9006",
            "RAL 9010",
        ]
  return (
    <>
{/* PLATE MAIN COLOR */}    
    <h4 className='text-2xl pb-2'>Rodzaj Blachy Ściany:</h4>
    <div className='flex justify-between'>     
    <Tooltip title="Ocynkowa">
        <button onClick={()=>{setColor("ocynk"),setColorType("ocynkowa")}} className='p-7 w-7 h-7 bg-slate-300 rounded-full' style={color==="ocynk" ? borderStyle : null}></button>
    </Tooltip>
    <Tooltip title="Drewnopodobna">
        <button onClick={()=>{setColorType("wood")}} className='p-7 w-7 h-7 bg-amber-700 rounded-full' style={colorType==="wood" ? borderStyle : null}></button>
    </Tooltip>
    <Tooltip title="Akrylowa">
        <button onClick={()=>{setColorType("acrilic")}} className='p-7 w-7 h-7 bg-yellow-300 rounded-full' style={colorType==="acrilic" ? borderStyle : null}></button>
    </Tooltip>
    <Tooltip title="Przetloczenia">
        {direction==='Poziom' 
        ?<button onClick={()=>{setDirection("Pion")}} className='w-10 h-10 border-4  transition-all'><img src='/configurator/icon/Arrow.svg'/>Poziom</button>
        : <button onClick={()=>{setDirection("Poziom")}} className='w-10 h-10 border-4 rotate-90  transition-all'><img src='/configurator/icon/Arrow.svg'/>Pion</button> }
        
    </Tooltip>  
    </div>
  
    
    {colorType==="acrilic"
    ?   <div>
            <p>Kolory</p>
            <div className='flex gap-1 flex-wrap'>
        {colors.map((singleColor,index)=>{return <div><button key={index} onClick={()=>{(setColor(singleColor), setColorRAL(colorsRAL[index]))}} className={`p-5 w-5 h-5 border rounded-full`} 
            style={{
               boxShadow:(color === singleColor) ? '0px 0px 3px 3px' : null,
                backgroundColor: singleColor
            }}>
           </button>{colorsRAL[index]}
           </div> }
           )}
            </div>
        </div>
    :null
    }
    {colorType==="wood"
        ?   <div>
                <p>Kolory</p>
                <div className='flex gap-1'>
                    <div>
                        <button onClick={()=>{setColor("dab")}} className='p-5 w-5 h-5 bg-orange-700 rounded-full'
                        style={color==="dab" ? borderStyle : null}></button>
                        <p>Dąb</p>
                    </div>
                   <div>
                    <button onClick={()=>{setColor("orzech")}} className='p-5 w-5 h-5 bg-orange-900 rounded-full'
                        style={color==="orzech" ? borderStyle : null}></button> 
                        <p>Orzech</p>
                   </div>
                                  
                </div>
            </div>
        :null
    }
{/* PLATE MAIN COLOR */}
    <div>
    <h4 className='text-xl'>Brama:</h4>
    <div className='flex justify-between'>
     
     <Tooltip title="Ocynkowa">
         <button onClick={()=>{setGateColor("ocynk"),setGateColorType("ocynkowa")}} className='p-7 w-7 h-7 bg-slate-300 rounded-full' style={gateColor==="ocynk" ? borderStyle : null}></button>
     </Tooltip>
     <Tooltip title="Drewnopodobna">
         <button onClick={()=>{setGateColorType("wood")}} className='p-7 w-7 h-7 bg-amber-700 rounded-full' style={gateColorType==="wood" ? borderStyle : null}></button>
     </Tooltip>
     <Tooltip title="Akrylowa">
         <button onClick={()=>{setGateColorType("acrilic")}} className='p-7 w-7 h-7 bg-yellow-300 rounded-full' style={gateColorType==="acrilic" ? borderStyle : null}></button>
     </Tooltip>
     <Tooltip title="Przetloczenia">
        {directionGate==='Poziom'
        ?<button onClick={()=>{setDirectionGate("Pion")}} className='w-10 h-10 border-4  transition-all'><img src='/configurator/icon/Arrow.svg'/>Poziom</button>
        : <button onClick={()=>{setDirectionGate("Poziom")}} className='w-10 h-10 border-4  rotate-90 transition-all'><img src='/configurator/icon/Arrow.svg'/>Pion</button> }
    </Tooltip>
     </div>
    </div>
    {gateColorType==="acrilic"
    ?<div>
            <p>Kolory</p>
            <div className='flex gap-1 flex-wrap'>
               {colors.map((singleColor,index)=>{return <div><button key={index} onClick={()=>{setGateColor(singleColor), setGateColorRAL(colorsRAL[index])}}
                className={"p-5 w-5 h-5 border rounded-full"} 
                style={{
                    boxShadow:(gateColor === singleColor) ? '0px 0px 3px 3px' : null,
                     backgroundColor: singleColor
                 }}>
               </button> {colorsRAL[index]}</div> }
               )}
            </div>
        </div>
       
:null
    }
     {gateColorType==="wood"
        ?   <div>
                <p>Kolory</p>
                <div className='flex gap-1'>
                    <div>
                        <button onClick={()=>{setGateColor("dab")}} className='p-5 w-5 h-5 bg-orange-700 rounded-full'
                        style={gateColor==="dab" ? borderStyle : null}></button>
                        <p>Dąb</p>
                    </div>
                    <div>
                        <button onClick={()=>{setGateColor("orzech")}} className='p-5 w-5 h-5 bg-orange-900 rounded-full'
                        style={gateColor==="orzech" ? borderStyle : null}></button>   
                        <p>Orzech</p>
                    </div>
                             
                </div>
            </div>
        :null
    }
{/* PLATE ROOF COLOR */}
    <div>
    <h4 className='text-xl'>Dach:</h4>
    <div className='flex justify-between'>
     
     <Tooltip title="Ocynkowa">
         <button onClick={()=>{setRoofColor("ocynk"),setRoofColorType("ocynk")}} className='p-7 w-7 h-7 bg-slate-300 rounded-full' style={roofColorType==="ocynk" ? borderStyle : null}></button>
     </Tooltip>
     <Tooltip title="Drewnopodobna">
         <button onClick={()=>{setRoofColorType("wood")}} className='p-7 w-7 h-7 bg-amber-700 rounded-full' style={roofColorType==="wood" ? borderStyle : null}></button>
     </Tooltip>
     <Tooltip title="Akrylowa">
         <button onClick={()=>{setRoofColorType("acrilic")}} className='p-7 w-7 h-7 bg-yellow-300 rounded-full' style={roofColorType==="acrilic" ? borderStyle : null}></button>
     </Tooltip>
     </div>
    </div>    

    {roofColorType==="acrilic"
    ?<div>
            <p>Kolory</p>
            <div className='flex gap-1 flex-wrap'>
               {colors.map((singleColor,index)=>{return <div><button key={index} onClick={()=>{setRoofColor(singleColor),setRoofColorRAL(colorsRAL[index])}}
                className={"p-5 w-5 h-5 border rounded-full"} 
                style={{
                    boxShadow:(roofColor === singleColor) ? '0px 0px 3px 3px' : null,
                     backgroundColor: singleColor
                 }}>
               </button>{colorsRAL[index]}</div>}
               )}
            </div>
        </div>
       
:null
    }
     {roofColorType==="wood"
        ?   <div>
                <p>Kolory</p>
                <div className='flex gap-1'>
                    <button onClick={()=>{setRoofColor("dab")}} className='p-5 w-5 h-5 bg-orange-700 rounded-full'
                     style={roofColor==="dab" ? borderStyle : null}></button>
                    <button onClick={()=>{setRoofColor("orzech")}} className='p-5 w-5 h-5 bg-orange-900 rounded-full'
                     style={roofColor==="orzech" ? borderStyle : null}></button>               
                </div>
            </div>
        :null
    }

    
{/* PLATE ROOF COLOR */}
    </>
  )
}

export default Colors