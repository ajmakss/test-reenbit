import React from "react";
import ChatItem from "./ChatItem/ChatItem";
import './Chats.scss';
import ChatsHeader from "./ChatsHeader/ChatsHeader";

const Chats = (props) => {
    return (
        <div className="chats">
            <ChatsHeader />
            <ChatItem />
        </div>
    )
}

export default Chats;