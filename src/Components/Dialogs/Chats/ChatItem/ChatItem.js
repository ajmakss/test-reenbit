import React from "react";
import Avatar from "../../../Common/Avatar/Avatar";
import './ChatItem.scss';

const ChatItem = (props) => {
    return (
        <div className="chat">
            <div className="chat__wrapper">
                <Avatar avatar={props.currentMember.avatar} online={props.currentMember.online}/>
                <div className="chat__context">
                    <span className="chat__name">{props.memberName}</span>
                    <span className="chat__lastMessage">{props.lastMessage.length > 40 ? `${props.lastMessage.substring(0, 20)}...` : props.lastMessage}</span>
                </div>
            </div>

            <span className="chat__date">{props.createdAt}</span>
        </div>
    )
}

export default ChatItem;