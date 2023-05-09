import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';



export const ChatApp = () => {
  return (
    
    <RouterProvider router={AppRouter} />
  )
}
