import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { ChatPage } from '../pages/ChatPage';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import ErrorPage from '../pages/ErrorPage';

export const AppRouter =  createBrowserRouter([
  {
    path: "/",
    element: <ChatPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/login",
    element: <LoginPage />,  
    errorElement: <ErrorPage />
  },
  {
    path: '/register',
    element:  <RegisterPage />,
    errorElement: <ErrorPage />
  }
]);