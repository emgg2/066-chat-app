import { createSlice } from '@reduxjs/toolkit';

export const chatSlice = createSlice({
    name: 'Socket',
    initialState: {
      
    },
    reducers: {
     inicio: state=>{}

    }
})

export const {inicio} = chatSlice.actions

export default chatSlice.reducer