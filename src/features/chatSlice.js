import { createSlice } from '@reduxjs/toolkit';

export const chatSlice = createSlice({
    name: 'Chat',
    initialState: {
        uid: '',
        activeChat: null,
        users:[],
        messages:[]
    },
    reducers: {
      inicio: state=>{}
     

    }
})

export const {inicio} = chatSlice.actions

export default chatSlice.reducer