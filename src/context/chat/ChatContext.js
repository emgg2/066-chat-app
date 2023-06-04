import React, { createContext, useReducer } from "react";
import { chatReducer } from "./chatReducer.js";

export const ChatContext = createContext();

const initialState = {
    uid: '',
    activeChat: null, // user UID I want to send a message
    users:      [],
    messages:   [] // chat selected

}


export const ChatProvider = ({children}) => {
    const [chatState, dispatch] = useReducer(chatReducer, initialState);

    
  return (
    <ChatContext.Provider value={{
        chatState,
        dispatch
    }}>
      { children}  
    </ChatContext.Provider>
  )
}
