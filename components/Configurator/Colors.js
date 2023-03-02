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
            <div className='flex gap-1'>
                <button onClick={()=>{setColor("ocynk")}} className='p-4 w-4 bg-slate-300 rounded-full' style={color==="ocynk" ? borderStyle : null}></button>
                <button className='p-4 w-4 bg-slate-300 rounded-full'></button>
                <button className='p-4 w-4 bg-slate-300 rounded-full'></button>
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
            <div className='flex gap-1'>
                <button onClick={()=>{setColor("ocynk")}} className='p-4 w-4 bg-slate-300 rounded-full' style={color==="ocynk" ? borderStyle : null}></button>
                <button className='p-4 w-4 bg-slate-300 rounded-full'></button>
                <button className='p-4 w-4 bg-slate-300 rounded-full'></button>
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