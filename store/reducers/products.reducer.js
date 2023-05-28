import { createSlice } from '@reduxjs/toolkit'

const initialState = {   
   currentproduct: "Drewnopodobne",
   Products:["Drewnopodobne","Akrylowe", "Ocynkowe", "Z płyty warstwowej","Schowki ogrodowe" ,"Kojce dla psów","Garaże 35m2","Bramy Garażowe","Wiaty śmietnikowe","Wiaty na drewno","Wiaty","Słupki ogrodzeniowe"]
  }



  export const productSlice = createSlice({
    name:'currentProduct',
    initialState,
    reducers:{
        change:(state,action)=>{
            state.currentproduct=action.payload
         },
        
    }
  })

  export const {change} = productSlice.actions
  export default productSlice.reducer
