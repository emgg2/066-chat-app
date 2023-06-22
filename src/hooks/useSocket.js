import { useCallback, useEffect, useState } from 'react';
import io from 'socket.io-client';


export const useSocket = ( serverPath ) => {
    
    const [ socket, setSocket ] = useState(null);
    const [ online, setOnline ] = useState(false);

    const connectSocket = useCallback(()=>{
            // forcenew lo q hace es que siempre se cree una nueva conexion, si  no se pone se va a usar la anterior
        const token = localStorage.getItem('token');
            
        const socketTemp =  io.connect( serverPath, {
            transports: ['websocket'],
            autoConnect: true,
            forceNew: true,
            query:{
                'x-token': token
            }

        } );        
        
        setSocket( socketTemp );    

    }, [serverPath])

    const disconnectSocket = useCallback(()=>{
        console.log("desconectando", socket);


       socket?.disconnect();

    }, [ socket ])


    useEffect(() => {
        setOnline( socket?.connected );
    }, [socket])

    useEffect(() => {   
        socket?.on('connect', () => setOnline( true ));   
    }, [ socket ])

    useEffect(() => {
        socket?.on('disconnect', () => setOnline( false ));
    }, [ socket ])

    return {
        socket,
        online,
        connectSocket,
        disconnectSocket,
    }
}