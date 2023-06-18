import React, { useContext, useState, useEffect } from 'react'
import { SendMessage } from './SendMessage'
import { IncomingMessage } from './IncomingMessage'
import { OutgoingMessage } from './OutgoingMessage'
import { ChatContext } from '../context/chat/ChatContext'
import { AuthContext } from '../auth/AuthContext'
import { ContextMenu } from './styles/styles'

export const Messages = () => {

    const { chatState } = useContext( ChatContext );
    const { auth } = useContext( AuthContext );
    const [clicked, setClicked] = useState(false);
    const [points, setPoints] = useState({
      x: 0,
      y: 0,
    });

    useEffect(() => {
      const handleClick = () => setClicked(false);
      window.addEventListener('click', handleClick);

    
      return () => {
        window.removeEventListener('click', handleClick)
      }
    }, [])
    

  return (
     <div className="mesgs">

     {/* Historia inicio */}
     <div 
        id="mensajes" 
        className="msg_history"
        onContextMenu={ ( e ) => {
            e.preventDefault();
            setClicked(true);
            setPoints({
              x: e.pageX,
              y: e.pageY
            });
            console.log("right Click", e.pageX, e.pageY);
        }}
      >
        {
            chatState.messages.map( msg => (           
                ( auth.uid === msg.to)
                     ? <IncomingMessage key={ msg._id } msg={ msg } />
                     : <OutgoingMessage key={ msg._id } msg={ msg } />

            ))
        }

        {
          clicked && (
            <ContextMenu top={points.y} left={ points.x }>
              <ul>
                <li>Remove</li> 
                <li>Remove all messages</li>               
              </ul>
            </ContextMenu>
          )
        }

     </div>
     {/* Historia Fin */}

    <SendMessage/>

 </div>

  )
}
