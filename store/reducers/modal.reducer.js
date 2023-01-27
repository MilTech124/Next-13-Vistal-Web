import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    visible: false,
    title:'',
    prize:null,
    link:null
  }



  export const modalSlice = createSlice({
    name:'modal',
    initialState,
    reducers:{
        change:(state,action)=>{
            state.visible=!state.visible
            state.title=action.payload 
            state.prize=action.payload.prize       
            state.link=action.payload.link       
        },
        
    }
  })

  export const {change} = modalSlice.actions
  export default modalSlice.reducer
