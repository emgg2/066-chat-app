import React, { useContext, useState } from 'react'
import { useSelector } from 'react-redux';
import { SocketContext } from '../context/SocketContext';


export const SendMessage = () => {

    const [message, setMessage] = useState('');
    const auth = useSelector( state => state.auth );
    const chatState = useSelector( state => state.chat);
    const { socket } = useContext ( SocketContext);



    
    const onChange = ({ target }) => {
        setMessage(target.value); 

    }

    const onSubmit = ( ev ) => {
        ev.preventDefault();
        if( message.length === 0 ) { return }
        setMessage('');

        socket.emit('personal-message', {
            from: auth.uid ,
            to: chatState.activeChat,
            message
        })

    }

  return (
    <form onSubmit={ onSubmit }>
        <div className="type_msg row">
            <div className="input_msg_write col-sm-9">
                <input 
                    type="text" 
                    className="write_msg" 
                    placeholder="Mensaje..." 
                    value={ message }
                    onChange={ onChange }
                />
            </div>
            <div className="col-sm-3 text-center">
                <button className="msg_send_btn mt-3" type="submit">
                    enviar
                </button>
            </div>
        </div>
     </form>
  )
}
