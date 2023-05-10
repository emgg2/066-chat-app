import React from 'react';
import '../css/chat.css';
import { InboxPeople } from '../components/InboxPeople';
import { ChatSelect } from '../components/ChatSelect';
import { Messages } from '../components/Messages';

export const ChatPage = () => {
  return (
    <div className="messaging">
    <div className="inbox_msg">

      <InboxPeople />

      {
        (true)
            ? <Messages />
            : <ChatSelect />
      }


       
    </div>


</div>
  )
}
