import React from "react";
import ChatsContainer from "./Chats/ChatsContainer";
import './Dialogs.scss';
import MessagesContainer from "./Messages/MessagesContainer";

const Dialogs = () => {
    return (
        <div className="dialogs">
            <ChatsContainer />
            <MessagesContainer />
        </div>)
}
export default Dialogs;