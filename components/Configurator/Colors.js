import React from 'react'
import Tooltip from '@mui/material/Tooltip';

function Colors({color,setColor,colorType,setColorType,gateColorType,setGateColorType,gateColor,setGateColor,current}) {
    const borderStyle={
        border:'solid 2px red',        
    }
  return (
    <>
    {/* PLATE MAIN COLOR */}
    <p>Rodzaj Blachy</p>
    <div className='flex justify-between'>
     
    <Tooltip title="Ocynkowa">
        <button onClick={()=>{setColor("ocynk"),setColorType("ocynkowa")}} className='p-5 w-5 bg-slate-300 rounded-full' style={color==="ocynk" ? borderStyle : null}></button>
    </Tooltip>
    <Tooltip title="Drewnopodobna">
        <button onClick={()=>{setColorType("wood")}} className='p-5 w-5 bg-amber-700 rounded-full' style={colorType==="wood" ? borderStyle : null}></button>
    </Tooltip>
    <Tooltip title="Akrylowa">
        <button onClick={()=>{setColorType("acrilic")}} className='p-5 w-5 bg-yellow-300 rounded-full' style={colorType==="acrilic" ? borderStyle : null}></button>
    </Tooltip>
    </div>
    {colorType==="acrilic"
    ?   <div>
            <p>Kolory</p>
            <div className='flex gap-1 flex-wrap'>
            <button onClick={()=>{setColor("#D4AC6E")}} className='p-4 w-4 bg-[#D4AC6E] rounded-full' style={color ? borderStyle : null}></button>
                <button onClick={()=>{setColor("#5D181F")}} className='p-4 w-4 bg-[#5D181F] rounded-full' style={color ? borderStyle : null}></button>               
                <button onClick={()=>{setColor("#7B231E")}} className='p-4 w-4 bg-[#7B231E] rounded-full' style={color ? borderStyle : null}></button>               
                <button onClick={()=>{setColor("#015080")}} className='p-4 w-4 bg-[#015080] rounded-full' style={color ? borderStyle : null}></button>               
                <button onClick={()=>{setColor("#46593A")}} className='p-4 w-4 bg-[#46593A] rounded-full' style={color ? borderStyle : null}></button>               
                <button onClick={()=>{setColor("#3C3F45")}} className='p-4 w-4 bg-[#3C3F45] rounded-full' style={color ? borderStyle : null}></button>               
                <button onClick={()=>{setColor("#8C4932")}} className='p-4 w-4 bg-[#8C4932] rounded-full' style={color ? borderStyle : null}></button>               
                <button onClick={()=>{setColor("#5B403A")}} className='p-4 w-4 bg-[#5B403A] rounded-full' style={color ? borderStyle : null}></button>               
                <button onClick={()=>{setColor("#101012")}} className='p-4 w-4 bg-[#101012] rounded-full' style={color ? borderStyle : null}></button>               
                <button onClick={()=>{setColor("#A2A2A2")}} className='p-4 w-4 bg-[#A2A2A2] rounded-full' style={color ? borderStyle : null}></button>               
                <button onClick={()=>{setColor("#FCFFFE")}} className='p-4 w-4 bg-[#FCFFFE] rounded-full' style={color ? borderStyle : null}></button> 
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
    <p>Brama:</p>
    <div className='flex justify-between'>
     
     <Tooltip title="Ocynkowa">
         <button onClick={()=>{setGateColor("ocynk"),setGateColorType("ocynkowa")}} className='p-5 w-5 bg-slate-300 rounded-full' style={gateColor==="ocynk" ? borderStyle : null}></button>
     </Tooltip>
     <Tooltip title="Drewnopodobna">
         <button onClick={()=>{setGateColorType("wood")}} className='p-5 w-5 bg-amber-700 rounded-full' style={gateColorType==="wood" ? borderStyle : null}></button>
     </Tooltip>
     <Tooltip title="Akrylowa">
         <button onClick={()=>{setGateColorType("acrilic")}} className='p-5 w-5 bg-yellow-300 rounded-full' style={gateColorType==="acrilic" ? borderStyle : null}></button>
     </Tooltip>
     </div>
    </div>    

    {gateColorType==="acrilic"
    ?<div>
            <div className='flex gap-1 flex-wrap'>
                <button onClick={()=>{setGateColor("#D4AC6E")}} className='p-4 w-4 bg-[#D4AC6E] rounded-full' style={gateColor ? borderStyle : null}></button>
                <button onClick={()=>{setGateColor("#5D181F")}} className='p-4 w-4 bg-[#5D181F] rounded-full' style={gateColor ? borderStyle : null}></button>               
                <button onClick={()=>{setGateColor("#7B231E")}} className='p-4 w-4 bg-[#7B231E] rounded-full' style={gateColor ? borderStyle : null}></button>               
                <button onClick={()=>{setGateColor("#015080")}} className='p-4 w-4 bg-[#015080] rounded-full' style={gateColor ? borderStyle : null}></button>               
                <button onClick={()=>{setGateColor("#46593A")}} className='p-4 w-4 bg-[#46593A] rounded-full' style={gateColor ? borderStyle : null}></button>               
                <button onClick={()=>{setGateColor("#3C3F45")}} className='p-4 w-4 bg-[#3C3F45] rounded-full' style={gateColor ? borderStyle : null}></button>               
                <button onClick={()=>{setGateColor("#8C4932")}} className='p-4 w-4 bg-[#8C4932] rounded-full' style={gateColor ? borderStyle : null}></button>               
                <button onClick={()=>{setGateColor("#5B403A")}} className='p-4 w-4 bg-[#5B403A] rounded-full' style={gateColor ? borderStyle : null}></button>               
                <button onClick={()=>{setGateColor("#101012")}} className='p-4 w-4 bg-[#101012] rounded-full' style={gateColor ? borderStyle : null}></button>               
                <button onClick={()=>{setGateColor("#A2A2A2")}} className='p-4 w-4 bg-[#A2A2A2] rounded-full' style={gateColor ? borderStyle : null}></button>               
                <button onClick={()=>{setGateColor("#FCFFFE")}} className='p-4 w-4 bg-[#FCFFFE] rounded-full' style={gateColor ? borderStyle : null}></button>                         
            </div>
        </div>
:null
    }
     {gateColorType==="wood"
        ?   <div>
                <p>Kolory</p>
                <div className='flex gap-1'>
                    <button onClick={()=>{setGateColor("dab")}} className='p-4 w-4 bg-orange-700 rounded-full'
                     style={gateColor==="dab" ? borderStyle : null}></button>
                    <button onClick={()=>{setGateColor("orzech")}} className='p-4 w-4 bg-orange-900 rounded-full'
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