import React from 'react'
import { SendMessage } from './SendMessage'
import { IncomingMessage } from './IncomingMessage'
import { OutgoingMessage } from './OutgoingMessage'
import { useSelector } from 'react-redux';

export const Messages = () => {
    const auth = useSelector( state => state.auth );
    const chatState = useSelector ( state => state.chat);

  return (
     <div className="mesgs">

     {/* Historia inicio */}
     <div 
        id="mensajes" 
        className="msg_history"
      >
        {
            chatState.messages.map( msg => (           
                ( auth.uid === msg.to)
                     ? <IncomingMessage key={ msg._id } msg={ msg } />
                     : <OutgoingMessage key={ msg._id } msg={ msg } />

            ))
        }


     </div>
     {/* Historia Fin */}

    <SendMessage/>

 </div>

  )
}
