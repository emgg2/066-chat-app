import React from 'react';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({
    isAuthencated,
    redirectPath = '/auth/login',
    children
}) => {

    if(!isAuthencated){
        return ( <Navigate to={redirectPath} replace />)
    }
    return children;
 
}
