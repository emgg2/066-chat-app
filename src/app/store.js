import { configureStore } from '@reduxjs/toolkit';
import chatReducer from '../features/chatSlice';
import authReducer from '../features/authSlice';
import socketReducer from '../features/socketSlice';

export default configureStore({
    reducer: {
        chat: chatReducer,
        auth: authReducer,
        socket: socketReducer     
        
    }
})