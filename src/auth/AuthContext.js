import React, { createContext, useState, useCallback } from 'react';
import { fetchWithoutToken, fetchWithToken } from '../helpers/fetch';

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

        }
        return resp.ok;
    }

    // Esta es especial pq va a estar en un UseEffect
    //Esta hecha on un UseCallback pq la quieremos colocar dentro de un Efecto, al hacerlo de esta manera se memoriza 
    // y no se va a volver a reconstruir, no se va a volver a disparar ese efecto constantemente

    const checkToken = useCallback(async () => {
        const token = localStorage.getItem('token');
            if(!token) {
                 setAuth({
                    uid: null,
                    checking: false,
                    logged: false,
                    name: null,
                    email: null
    
                });
                return false;
            }

            const resp= await fetchWithToken('login/renew');

            if (resp.ok){
                localStorage.setItem('token', resp.token);
                const { user } = resp;
                setAuth({
                    uid: user.uid,
                    checking: false,
                    logged: true, 
                    name:user.name,
                    email: user.email
                });
                return true;
            }else{
                setAuth({              
                    checking: false,
                    logged: false,             
                });
                return false;
            }
                
    }, [] );

    const logout = () => {
        localStorage.removeItem('token');
        setAuth({              
            checking: false,
            logged: false,             
        });

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
