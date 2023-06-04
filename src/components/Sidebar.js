import React, { useContext } from 'react'
import { SidebarChatItem } from './SidebarChatItem'
import { AuthContext } from '../auth/AuthContext';
import { ChatContext } from '../context/chat/ChatContext'

export const Sidebar = () => {

  const { chatState } = useContext(ChatContext);
  const { auth } = useContext(AuthContext);

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
