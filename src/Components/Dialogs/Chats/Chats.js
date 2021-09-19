import React from "react";
import { NavLink } from "react-router-dom";
import ChatItem from "./ChatItem/ChatItem";
import './Chats.scss';
import ChatsHeader from "./ChatsHeader/ChatsHeader";
import moment from 'moment';

const Chats = (props) => {

    let sortedDialogs = props.dialogs.sort((a,b) => {
        console.log(a.messages)
        return new Date(b.messages[b.messages.length - 1].createdAt) - new Date(a.messages[a.messages.length - 1].createdAt)
    });

    let dialogsItems = sortedDialogs.map(d => {
        let date = moment(d.messages[d.messages.length - 1].createdAt).format('ll');
        return <NavLink to={`/${d.dialogId}`}>
            <ChatItem lastMessage={d.messages[d.messages.length - 1].messageText} createdAt={date} />
        </NavLink>
    })
    return (
        <div className="chats">
            <ChatsHeader />
            <h2>Chats</h2>
            {dialogsItems.sort()}
        </div>
    )
}

export default Chats;