import React from "react";
import Avatar from "../../../Common/Avatar/Avatar";
import './ChatItem.scss';

const ChatItem = (props) => {
    return (
        <div className="chat">
            <div className="chat__wrapper">
                <Avatar avatar={props.avatar}/>
                <div className="chat__context">
                    <span>Name</span>
                    <span>{props.lastMessage.length > 20 ? `${props.lastMessage.substring(0, 20)}...` : props.lastMessage}</span>
                </div>
            </div>

            <span>date</span>
        </div>
    )
}

export default ChatItem;