import React, { useEffect } from 'react';
import { createContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadedUsersChat, newMessageChat } from '../features/chatSlice';


import { useSocket } from '../hooks/useSocket'

import { scrollToBottomAnimated } from '../helpers/scrolltoBottom';


export const SocketContext = createContext();


export const SocketProvider = ({ children }) => {
    const { socket, online, connectSocket, disconnectSocket } = useSocket('http://localhost:8080');
    const auth = useSelector( state => state.auth);
    
    const dispatch = useDispatch();
    
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
            dispatch(loadedUsersChat ( users ));
        })
    
    }, [socket, dispatch])

    useEffect(() => {
        socket?.on('personal-message', (message) => {

            dispatch(newMessageChat ( message ));

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