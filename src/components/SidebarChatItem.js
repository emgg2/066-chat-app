import React from 'react'
import { scrollToBottom } from '../helpers/scrolltoBottom';
import { fetchWithToken } from '../helpers/fetch';
import { useSelector, useDispatch } from 'react-redux';
import { loadMessagesChat, activateChat } from '../features/chatSlice';


export const SidebarChatItem = ({ user }) => {

    const chatState = useSelector( state => state.chat );
    const dispatch = useDispatch();

    const { activeChat } = chatState;    

    const onClick = async () => {

        dispatch(activateChat(user.uid));            
        const resp = await fetchWithToken(`messages/${ user.uid }`);  

        dispatch(loadMessagesChat(resp.messages));
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
