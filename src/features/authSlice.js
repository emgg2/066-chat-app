import { createSlice } from '@reduxjs/toolkit';
import { fetchWithoutToken, fetchWithToken } from '../helpers/fetch';

export const authSlice = createSlice({
    name: 'Auth',
    initialState: {
        uid: '',
        checking: true,
        logged: false, 
        name: null,
        email: null        
    },
    reducers: {
        initStateAuth (state) {
            state.uid = null
            state.checking = false
            state.logged = false 
            state.name = null
            state.email = null       
            
        } , 
        setAuth (state, action) {
            state.uid = action.payload.uid
            state.checking = false
            state.logged = true
            state.name = action.payload.name
            state.email = action.payload.email

        },
      

    }
})

export const { setAuth, initStateAuth} = authSlice.actions

export const login = ( email, password) => async (dispatch) => {
    const resp = await fetchWithoutToken('login', {email, password}, 'POST');
    if( resp.ok ) {
        localStorage.setItem('token', resp.token );
        const { user } = resp;
        dispatch(setAuth( user ));          
             
    }
    return resp.ok;
  

}

export const register = ( name, email, password ) => async (dispatch) => {
    const resp = await fetchWithoutToken('login/new', {name,email,password}, 'POST');
        
    if( resp.ok ){
        localStorage.setItem('token', resp.token);
        const { user } = resp;
        dispatch (setAuth( user ));        
    }
    return resp.ok;

}

export const checkToken = () => async (dispatch) =>{
    const token = localStorage.getItem('token');
            if(!token) {
                 dispatch(initStateAuth());
                return false;
            }
            const resp= await fetchWithToken('login/renew');

            if (resp.ok){
                localStorage.setItem('token', resp.token);
                const { user } = resp;
                dispatch(setAuth(user));
                return true;
            }else{
                dispatch(initStateAuth());
                return false;
            }

};

export const logout = () => (dispatch) => {
    localStorage.removeItem('token');
    dispatch(initStateAuth());

}

export default authSlice.reducer