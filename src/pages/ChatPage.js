import React, { useContext } from 'react';
import '../css/chat.css';
import { InboxPeople } from '../components/InboxPeople';
import { ChatSelect } from '../components/ChatSelect';
import { Messages } from '../components/Messages';
import { ChatContext } from '../context/chat/ChatContext';

export const ChatPage = () => {

 const { chatState } = useContext(ChatContext);


  return (
    <div className="messaging">
    <div className="inbox_msg">

      <InboxPeople />

      {
        (chatState.activeChat)
            ? <Messages />
            : <ChatSelect />
      }


       
    </div>


</div>
  )
}
