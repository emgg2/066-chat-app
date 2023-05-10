import React from 'react';
import {  BrowserRouter, Route, Routes } from 'react-router-dom';
//import {  RouterProvider, createBrowserRouter } from 'react-router-dom';

import { ChatPage } from '../pages/ChatPage';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
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

  
  return (        
          <BrowserRouter>
            <Routes>               
                <Route path='/'  >                  
                  <Route index element={ <ChatPage/>}/>
                  <Route path='auth'>
                    <Route index path="login" element={ 
                          <LoginPage /> 
                      }  />                  
                    <Route path="login" element={ 
                          <LoginPage />
                        } />
                    <Route path="register" element={ 
                          <RegisterPage />
                      } />
                    <Route path="*" element={
                          <LoginPage />
                      } />                         

                  </Route>  
                  <Route exact path='chat' element={
                            <ChatPage /> 
                    } />  
                  <Route path="*" element={
                            <ChatPage />
                    } />                                  
                </Route>
            </Routes>
          </BrowserRouter>        
  )
}

