import React, { useEffect } from 'react';
import {  BrowserRouter, Route, Routes } from 'react-router-dom';

import { ChatPage } from '../pages/ChatPage';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { useSelector, useDispatch } from 'react-redux';
import { checkToken } from '../features/authSlice';




export const AppRouter = () => {

 const auth = useSelector( state => state.auth );
 const dispatch = useDispatch();
  
  

  useEffect(() => {
    dispatch(checkToken());
  }, [dispatch])
  


  if (auth.checking) {
    return <h1>Espere por favor </h1>
  }

  
  return (        
          <BrowserRouter>
            <Routes>               
                <Route path='/'  >                  
                  <Route index element={ 
                    <PrivateRoute isAuthencated={ auth.logged }>
                        <ChatPage/>
                    </PrivateRoute>
                    }/>
                  <Route path='auth'>
                    <Route index path="login" element={ 
                      <PublicRoute isAuthencated={ auth.logged }>
                          <LoginPage /> 
                          </PublicRoute>
                      }  />                                      
                    <Route path="register" element={ 
                      <PublicRoute isAuthencated={ auth.logged }>
                          <RegisterPage />
                      </PublicRoute>
                      } />
                    <Route path="*" element={
                      <PublicRoute isAuthencated={ auth.logged }>
                          <LoginPage />
                      </PublicRoute>
                      } />                         

                  </Route>  
                  <Route exact path='chat' element={
                      <PrivateRoute isAuthencated={ auth.logged } >
                            <ChatPage /> 
                      </PrivateRoute>
                    } />  
                  <Route path="*" element={
                      <PublicRoute isAuthencated={ auth.logged }>
                            <LoginPage />
                      </PublicRoute>
                    } />                                  
                </Route>
            </Routes>
          </BrowserRouter>        
  )
}

