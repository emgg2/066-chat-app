import React, { useContext }  from 'react'
import { hourMonth } from '../helpers/hourMonth'
import { BiChevronsDown } from "react-icons/bi"
import { ContextMenu } from './styles/styles'
import useContextMenu from '../hooks/useContextMenu'
import { SocketContext } from '../context/SocketContext'

export const OutgoingMessage = ({msg} ) => {
  const { clicked, setClicked, points, setPoints } = useContextMenu();
  const { socket } = useContext ( SocketContext);
  const eraseMessage = ({target}) => {
    socket.emit('remove-message', target.id);
  }
  const eraseChat = () => {
    socket.emit('remove-chat');
  }

  return (
     <div 
        className="outgoing_msg" 
        onContextMenu={ ( e ) => {
          e.preventDefault();
          setClicked(true);
          setPoints({
            x: e.pageX,
            y: e.pageY
          });

        }}
      >
        <div className="sent_msg">
            <p>
              { msg.message }
              <BiChevronsDown 
                className='contextMenu-icon'
              />
            </p>              
            <span className="time_date">  { hourMonth( msg.createdAt ) } </span>
        </div>
        {
          clicked && (
            <ContextMenu top={points.y} left={ points.x }>
              <ul>
                <li
                  onClick={eraseMessage}
                  id={msg.uid}
                
                  
                >
                  Remove
                </li> 
                <li
                  onClick={eraseChat}
                >
                  Remove all messages
                </li>               
              </ul>
            </ContextMenu>
          )
        } 
    </div>
  )
}
