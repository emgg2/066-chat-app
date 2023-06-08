import React from 'react';
import { AppRouter } from './router/AppRouter';

import store from './app/store';
import { Provider } from 'react-redux';

import { SocketProvider } from './context/SocketContext';

import moment from 'moment';

import 'moment/locale/es';
moment.locale('es');



export const ChatApp = () => {
  return ( 
    <Provider store={ store }>        
        <SocketProvider>
            <AppRouter />
        </SocketProvider>    
    </Provider>
  )
}
