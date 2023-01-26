import {configureStore} from '@reduxjs/toolkit'
import userSlice from './reducers/user.reducer' 
import notificationsReducer from './reducers/notifications.reducer'

export const store =configureStore({
    reducer:{
        user:userSlice,
        notifications:notificationsReducer

    }
})