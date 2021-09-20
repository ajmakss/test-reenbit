import React from "react";
import Avatar from "../../../Common/Avatar/Avatar";
import './ChatsHeader.scss';
import FindChatForm from "./FindChatForm/FindChatForm";

const ChatsHeader = (props) => {
    let currentUser = props.users.filter(u => u.userId === props.auth)[0];
    return (
       <div className="chats__header">
            <Avatar avatar={currentUser.avatar}/>
            <div className="chats__search">
                <FindChatForm setChatFilter={props.setChatFilter} chatFilter={props.chatFilter}/>
            </div>
       </div>
    )
}

export default ChatsHeader;