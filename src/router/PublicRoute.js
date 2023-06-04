import React from 'react'
import { Navigate } from 'react-router-dom'

export const PublicRoute = ({
    isAuthencated,
    redirectPath = '/',
    children
}) => {    
    
    if(isAuthencated){
        return ( <Navigate to={redirectPath} replace />)
    }
    return children;
 
}
