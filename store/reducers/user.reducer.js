import {createSlice} from '@reduxjs/toolkit'
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
    initialState:{
        DEFAULT_STATE
    },
    reducers:{}
})

export default userSlice.reducer