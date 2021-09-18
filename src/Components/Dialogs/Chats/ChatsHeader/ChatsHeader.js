import React from "react";
import Avatar from "../../../Common/Avatar/Avatar";
import './ChatsHeader.scss';
import FindChatForm from "./FindChatForm/FindChatForm";

const ChatsHeader = (props) => {
    return (
       <div className="chats__header">
            <Avatar/>
            <div className="chats__search">
                <FindChatForm/>
            </div>
       </div>
    )
}

export default ChatsHeader;