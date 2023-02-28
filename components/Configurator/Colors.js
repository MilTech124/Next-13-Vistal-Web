import React from 'react'
import Tooltip from '@mui/material/Tooltip';

function Colors({color,setColor,colorType,setColorType}) {
    const borderStyle={
        border:'solid 2px red',        
    }
  return (
    <>
    <p>Rodzaj Blachy</p>
    <div className='flex justify-between'>
     
    <Tooltip title="Ocynkowa">
        <button onClick={()=>{setColorType("ocynkowa")}} className='p-5 w-5 bg-slate-300 rounded-full' style={colorType==="ocynkowa" ? borderStyle : null}></button>
    </Tooltip>
    <Tooltip title="Drewnopodobna">
        <button onClick={()=>{setColorType("drewno")}} className='p-5 w-5 bg-amber-700 rounded-full' style={colorType==="drewno" ? borderStyle : null}></button>
    </Tooltip>
    <Tooltip title="Akrylowa">
        <button onClick={()=>{setColorType("Akrylowa")}} className='p-5 w-5 bg-yellow-300 rounded-full' style={colorType==="Akrylowa" ? borderStyle : null}></button>
    </Tooltip>
    </div>
    {colorType==="Akrylowa"
    ?   <div>
            <p>Kolory</p>
            <div className='flex gap-1'>
                <button onClick={()=>{setColor("ocynk")}} className='p-4 w-4 bg-slate-300 rounded-full' style={color==="ocynk" ? borderStyle : null}></button>
                <button className='p-4 w-4 bg-slate-300 rounded-full'></button>
                <button className='p-4 w-4 bg-slate-300 rounded-full'></button>
            </div>
        </div>
    :null}
    
    </>
  )
}

export default Colors