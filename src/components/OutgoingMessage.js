import React  from 'react'
import { hourMonth } from '../helpers/hourMonth'
import { BiChevronsDown } from "react-icons/bi"
import { ContextMenu } from './styles/styles'
import useContextMenu from '../hooks/useContextMenu'

export const OutgoingMessage = ({key, msg} ) => {
  const { clicked, setClicked, points, setPoints } = useContextMenu();
  console.log(key);
  
  const removeMessage = ({target}) => {
    console.log('Remove message', target._id)
  } 

  const removeAllMessages = () => {
    console.log("remove all messages")
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
                  onClick={removeMessage}
                  id={msg.id}
                
                  
                >
                  Remove
                </li> 
                <li
                  onClick={removeAllMessages}
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
