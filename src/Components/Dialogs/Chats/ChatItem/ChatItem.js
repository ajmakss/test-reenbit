import React from "react";
import Avatar from "../../../Common/Avatar/Avatar";
import './ChatItem.scss';

const ChatItem = ({ currentMember, lastMessage, memberName, createdAt }) => {
    return (
        <div className="chat">
            <div className="chat__wrapper">
                <Avatar avatar={currentMember.avatar} online={currentMember.online} />
                <div className="chat__context">
                    <span className="chat__name">{memberName}</span>
                    <span className="chat__lastMessage">{lastMessage.length > 40 ? `${lastMessage.substring(0, 20)}...` : lastMessage}</span>
                </div>
            </div>

            <span className="chat__date">{createdAt}</span>
        </div>
    )
}

export default ChatItem;