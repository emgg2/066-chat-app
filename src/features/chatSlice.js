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
        activateChat: (state, action) => {
          if( state.activeChat !== action.payload)
          {
            state.activeChat = action.payload
          }

        },
        loadMessagesChat: (state, action) => {
          state.messages = action.payload
        },
        loadedUsersChat: (state, action) => {
          state.users = action.payload  
        },
        newMessageChat: (state, action) => {
          if( state.activeChat === action.payload.from ||
              state.activeChat === action.payload.to 
          ){
              state.messages.push(action.payload);
          }
        }

     

    }
})



export const { activateChat, loadMessagesChat, loadedUsersChat, newMessageChat } = chatSlice.actions

export default chatSlice.reducer