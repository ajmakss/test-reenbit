import React from "react";
import './SendMessageForm.scss';
import sendMessage from '../../../../img/send-message.svg'

const SendMessageForm = (props) => {
    return (
        <div className="add-message">
            <input type="text" placeholder="Type your message" />
            <button onClick={() => console.log('click')}>
                <img src={sendMessage} alt="" />
            </button>
        </div>
    )
}

export default SendMessageForm;