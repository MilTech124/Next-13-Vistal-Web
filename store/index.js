import {configureStore} from '@reduxjs/toolkit'
import userSlice from './reducers/user.reducer' 
import notificationsReducer from './reducers/notifications.reducer'
import modalReducer from './reducers/modal.reducer'

export const store =configureStore({
    reducer:{
        user:userSlice,
        notifications:notificationsReducer,
        modal:modalReducer
    }
})