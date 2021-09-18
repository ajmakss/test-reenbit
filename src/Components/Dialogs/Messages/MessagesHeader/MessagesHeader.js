import React from "react";
import './MessagesHeader.scss';
import Avatar from '../../../Common/Avatar/Avatar'
const MessagesHeader = (props) => {
    return (
        <div className="messages__header">
            <Avatar online={true}/>
            <span>Name</span>
        </div>
    )
}

export default MessagesHeader;