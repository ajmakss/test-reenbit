import React from "react";
import { NavLink } from "react-router-dom";
import ChatItem from "./ChatItem/ChatItem";
import './Chats.scss';
import ChatsHeader from "./ChatsHeader/ChatsHeader";
import moment from 'moment';

const Chats = (props) => {
    let dialogsItems = props.dialogs.map(d => {
        let date = moment(d.messages.createdAt).format('MMM MM, YYYY');
        return <NavLink to={`/${d.dialogId}`}>
            <ChatItem lastMessage={d.messages[d.messages.length - 1].messageText} createdAt={date} />
        </NavLink>
    })

    return (
        <div className="chats">
            <ChatsHeader />
            <h2>Chats</h2>
            {dialogsItems}
        </div>
    )
}

export default Chats;