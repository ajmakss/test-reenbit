import React from "react";
import Avatar from "../../../Common/Avatar/Avatar";
import './ChatsHeader.scss';
import FindChatForm from "./FindChatForm/FindChatForm";

const ChatsHeader = ({ auth, users, setChatFilter, chatFilter }) => {

    let currentUser = users.filter(u => u.userId === auth)[0];

    return (
        <div className="chats__header">
            <Avatar avatar={currentUser.avatar} online={true} />
            <div className="chats__search">
                <FindChatForm setChatFilter={setChatFilter} chatFilter={chatFilter} />
            </div>
        </div>
    )
}

export default ChatsHeader;