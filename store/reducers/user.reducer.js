import {createSlice} from '@reduxjs/toolkit'
import {
    registerUser,
} from '../actions/user.action'
const DEFAULT_STATE={
    loading:false,
    data:{
        _id:'',
        user:'',
        role:'user' 
    },
    auth:false
}

export const userSlice=createSlice({
    name:'user',
    initialState:
        DEFAULT_STATE
    ,
    reducers:{ 
        logout:(state)=>{
            state.auth=false
            state.data={
                _id:'',
                user:'',
                role:'user' 
            }
        },
        login:(state,action)=>{
            state.auth=true
            state.data=action.payload    
        }
    },
    extraReducers:(builder)=>{
     builder
     .addCase(registerUser.pending,(state)=>{
        state.loading=true
     })
     .addCase(registerUser.fulfilled,(state,action)=>{
        state.loading=false
        state.data=action.payload
        state.auth=true
     })
     
    }
})
export const {logout,login}=userSlice.actions
export default userSlice.reducer