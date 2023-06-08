import React from 'react'
import { SidebarChatItem } from './SidebarChatItem'
import { useSelector } from 'react-redux';

export const Sidebar = () => {
  const auth = useSelector( state => state.auth );
  const chatState = useSelector ( state => state.chat );



  const { uid } = auth;
   
  return (
     <div className="inbox_chat">
       
    {
        chatState.users
            .filter( user => uid !== user.uid)
            .map( (user) => (
                <SidebarChatItem  
                    key={ user.uid }
                    user={ user }
                />
            ))
    }   


     {/* Espacio extra para scroll */}
     <div className="extra_space"></div>


 </div>
  )
}
