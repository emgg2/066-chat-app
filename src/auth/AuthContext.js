import React, { createContext, useState, useCallback } from 'react';
import { fetchWithoutToken } from '../helpers/fetch';

export const AuthContext = createContext();

const InitialState = {
    uid: null,
    checking: true,
    logged: false,
    name: null,
    email: null
}



export const AuthProvider = ({children}) => {

    const [auth, setAuth] = useState(InitialState);

    const login = async  (email, password) => {

        const resp = await fetchWithoutToken('login', { email, password }, 'POST');
        if ( resp.ok ) {
            localStorage.setItem ('token', resp.token );
            const { user } = resp;

            setAuth ({
                uid: user.uid,
                checking: false,
                logged: true,
                name: user.name,
                email: user.email

            });
            console.log("Autenticado!!!");
        }

        return resp.ok;       

    }

    const register = async ( name, email, password ) => {
        
        const resp = await fetchWithoutToken('login/new', {name,email,password}, 'POST');
        if( resp.ok ){
            localStorage.setItem('token', resp.token);
            const { user } = resp;
            setAuth({
                uid: user.uid,
                checking: false,
                logged: true, 
                name:user.name,
                email: user.email
            });
            console.log ("User created and Logged!!");

        }
        return resp.ok;
    }

    // Esta es especial pq va a estar en un UseEffect
    const checkToken = useCallback(() => {}, [] )

    const logout = () => {

    }
    
  return (
    <AuthContext.Provider value={{
        auth,
        login,
        register,
        checkToken,
        logout,
    }}>
        {children}
    </AuthContext.Provider>
  )
}
