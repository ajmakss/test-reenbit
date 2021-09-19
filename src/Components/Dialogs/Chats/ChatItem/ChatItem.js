import React from "react";
import Avatar from "../../../Common/Avatar/Avatar";
import './ChatItem.scss';

const ChatItem = (props) => {
    return (
        <div className="chat">
            <div className="chat__wrapper">
                <Avatar avatar={props.currentMember.avatar} online={props.currentMember.online}/>
                <div className="chat__context">
                    <span>{props.memberName}</span>
                    <span>{props.lastMessage.length > 20 ? `${props.lastMessage.substring(0, 20)}...` : props.lastMessage}</span>
                </div>
            </div>

            <span className="chat__date">{props.createdAt}</span>
        </div>
    )
}

export default ChatItem;