import React from 'react';
import '../css/chat.css';
import { InboxPeople } from '../components/InboxPeople';
import { ChatSelect } from '../components/ChatSelect';
import { Messages } from '../components/Messages';
import { useSelector } from 'react-redux';




export const ChatPage = () => {

  const chatState = useSelector( state => state.chat);
 

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
