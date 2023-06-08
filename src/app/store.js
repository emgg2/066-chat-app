import { configureStore } from '@reduxjs/toolkit';
import chatReducer from '../features/chatSlice';
import authReducer from '../features/authSlice';

export default configureStore({
    reducer: {
        chat: chatReducer,
        auth: authReducer,
        
    }
})