import React, { useContext } from 'react'
import { ChatContext } from '../context/chat/ChatContext';
import { types } from '../types/types';
import { scrollToBottom } from '../helpers/scrolltoBottom';
import { fetchWithToken } from '../helpers/fetch';


export const SidebarChatItem = ({ user }) => {

    const { chatState,  dispatch } = useContext( ChatContext);
    const { activeChat } = chatState;    

    const onClick = async () => {
        dispatch({            
            type: types.ActivateChat,
            payload: user.uid
        });
        const resp = await fetchWithToken(`messages/${ user.uid }`);  
        dispatch({
            type: types.LoadMessages, 
            payload: resp.messages
        })
        setTimeout(() => {
			scrollToBottom('mensajes')
		}, 0);
        
    }

  return (
    <div 
        className={`chat_list ${ ( user.uid === activeChat ) && 'active_chat' } `}
        onClick={ onClick }
    >
         <div className="chat_people">
             <div className="chat_img"> 
                 <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" />
             </div>
             <div className="chat_ib">
                 <h5>{ user.name }</h5>                
                 {
                    ( user.online ) 
                        ? <span className="text-success">Online</span>
                        : <span className="text-danger">Offline</span>
                 }
                 
                 
             </div>
         </div>
     </div>
  )
}
