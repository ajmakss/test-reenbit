import React from "react";
import { NavLink } from "react-router-dom";
import ChatItem from "./ChatItem/ChatItem";
import './Chats.scss';
import ChatsHeader from "./ChatsHeader/ChatsHeader";

const Chats = (props) => {

    let dialogsItems = props.dialogs.map(d => {
        return <NavLink to={`/${d.dialogId}`}>
            <ChatItem lastMessage={d.messages[d.messages.length - 1].messageText} />
        </NavLink>
    })

    console.log(dialogsItems)

    return (
        <div className="chats">
            <ChatsHeader />
            <h2>Chats</h2>
            {dialogsItems}
        </div>
    )
}

export default Chats;