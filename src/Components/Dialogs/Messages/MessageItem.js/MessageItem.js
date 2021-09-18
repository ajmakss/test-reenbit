import React from "react";
import Avatar from "../../../Common/Avatar/Avatar";
import './MessageItem.scss';

const MessageItem = (props) => {
    return (
        <div className="message message-mine">
            <Avatar />
            <div className="message__item">
                <div className="message__text">
                    <span>{props.messageText}</span>
                </div>
                <span className="message__date">{props.createdAt}</span>
            </div>
        </div>
    )
}

export default MessageItem;