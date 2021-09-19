import React from "react";
import Avatar from "../../../Common/Avatar/Avatar";
import './MessageItem.scss';

const MessageItem = (props) => {

    let user = props.users.filter(u => u.userId === props.userId)[0];
    return (
        <>
            <div className={`message ${props.userId === props.auth ? 'message-mine' : ''}`} >
                {props.userId === props.auth ? null : <Avatar avatar={user.avatar}/> }
                <div className="message__item">
                    <div className={`message__text ${props.userId === props.auth ? 'message__text-mine' : ''}`}>
                        <span>{props.messageText}</span>
                    </div>
                    <span className={`message__date ${props.userId === props.auth ? 'message__date-mine' : ''}`}>{props.createdAt}</span>
                </div>
            </div>
            {/* <div className="message message-mine">
                <div className="message__item">
                    <div className="message__text  message__text-mine">
                        <span>{props.messageText}</span>
                    </div>
                    <span className="message__date message__date-mine">{props.createdAt}</span>
                </div>
            </div> */}
        </>

    )
}

export default MessageItem;