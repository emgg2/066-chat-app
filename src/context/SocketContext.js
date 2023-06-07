import React, { useContext, useEffect } from 'react';
import { createContext } from 'react';

import { AuthContext } from '../auth/AuthContext';
import { ChatContext } from './chat/ChatContext';
import { useSocket } from '../hooks/useSocket'

import { types } from '../types/types';
import { scrollToBottomAnimated } from '../helpers/scrolltoBottom';


export const SocketContext = createContext();


export const SocketProvider = ({ children }) => {
    const { socket, online, connectSocket, disconnectSocket } = useSocket('http://localhost:8080');
    const { auth } = useContext (AuthContext);
    const { dispatch } = useContext(ChatContext);
    useEffect(() => {
     
        if( auth.logged ) {
            connectSocket();
        }
    }, [auth, connectSocket])
    
    
    useEffect(() => {
     
        if( !auth.logged ) {
            disconnectSocket();
        }
    }, [auth, disconnectSocket])


    useEffect(() => {
        socket?.on('users-list', (users) => {
            dispatch({
                type: types.LoadedUsers,
                payload: users
            })
        })
    
    }, [socket, dispatch])

    useEffect(() => {
        socket?.on('personal-message', (message) => {
            dispatch({
                type: types.NewMessage,
                payload: message
            })
            setTimeout(() => {
                scrollToBottomAnimated('mensajes');
            }, 0)
            
        })
    }, [socket, dispatch])
    
    
    

    return (
        <SocketContext.Provider value={{ socket, online }}>
            { children }
        </SocketContext.Provider>
    )
}