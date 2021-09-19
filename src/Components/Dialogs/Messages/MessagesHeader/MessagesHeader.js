import React from "react";
import './MessagesHeader.scss';
import Avatar from '../../../Common/Avatar/Avatar'
const MessagesHeader = (props) => {
    return (
        <div className="messages__header">
            <Avatar avatar={props.currentMember.avatar} online={true}/>
            <span>{props.currentMember.username}</span>
        </div>
    )
}

export default MessagesHeader;