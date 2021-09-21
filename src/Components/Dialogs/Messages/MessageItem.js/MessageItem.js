import React from "react";
import Avatar from "../../../Common/Avatar/Avatar";
import './MessageItem.scss';

const MessageItem = ({ messageText, createdAt, auth, userId, users }) => {

    let user = users.filter(u => u.userId === userId)[0];
    return (

        <div className={`message ${userId === auth ? 'message-mine' : ''}`} >

            {userId === auth ? null : <Avatar avatar={user.avatar} />}
            <div className="message__item">
                <div className={`message__text ${userId === auth ? 'message__text-mine' : ''}`}>
                    <span>{messageText}</span>
                </div>
                <span className={`message__date ${userId === auth ? 'message__date-mine' : ''}`}>{createdAt}</span>
            </div>

        </div>


    )
}

export default MessageItem;