import React, { useContext, useEffect } from 'react';
import {  BrowserRouter, Route, Routes } from 'react-router-dom';
//import {  RouterProvider, createBrowserRouter } from 'react-router-dom';

import { ChatPage } from '../pages/ChatPage';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { AuthContext } from '../auth/AuthContext';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
//import ErrorPage from '../pages/ErrorPage';

// let router =  createBrowserRouter([
//   {
//     path: "/",
//     element: <ChatPage />,
//     errorElement: <ErrorPage />
//   },
//   {
//     path: "/auth/login",
//     element: <LoginPage />,  
//     errorElement: <ErrorPage />
//   },
//   {
//     path: '/auth/register',
//     element:  <RegisterPage />,
//     errorElement: <ErrorPage />
//   },
//   {
//     path:'*',
//     element: <ChatPage />
//   }


// ]);


// export function AppRouter(){
//   return ( 
//     <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
//   )
// }
export const AppRouter = () => {

  const { auth, checkToken } = useContext(AuthContext); 

  useEffect(() => {
   checkToken();
  }, [checkToken])
  


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

