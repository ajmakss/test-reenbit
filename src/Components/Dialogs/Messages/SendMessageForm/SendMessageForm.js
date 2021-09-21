import React from "react";
import './SendMessageForm.scss';
import sendMessage from '../../../../img/send-message.svg'

const SendMessageForm = ({ currentDialog, memberId, addMessage, getMessage }) => {

    const message = React.createRef();

    const onSendMessage = () => {
        addMessage(currentDialog, message.current.value, 6);
        message.current.value = '';
        getMessage(currentDialog, memberId.userId)
    }
    const onPressEnter = (e) => {
        if (e.keyCode === 13) {
           onSendMessage()
        }
    }
    return (
        <div className="add-message">
            <input ref={message} type="text" placeholder="Type your message" onKeyDown={(e) => onPressEnter(e)} />
            <button onClick={onSendMessage} >
                <img src={sendMessage} alt="" />
            </button>
        </div>
    )
}

export default SendMessageForm;