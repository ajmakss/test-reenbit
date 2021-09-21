import React from "react";
import { NavLink } from "react-router-dom";
import ChatItem from "./ChatItem/ChatItem";
import './Chats.scss';
import ChatsHeader from "./ChatsHeader/ChatsHeader";
import moment from 'moment';
import { getCurrentMemember } from "../../../utility/utility";

const Chats = ({users, auth,setChatFilter, chatFilter, dialogs}) => {

    let dialogsItems = dialogs.map(d => {

        let lastMessage = d.messages[d.messages.length - 1];
        let date = moment(lastMessage.createdAt).format('ll');

        let currentMember = getCurrentMemember(d.members, auth.userId, users);


        let memberName = (lastMessage.userId === auth.userId) ? 'Me' : currentMember.username;

        return <NavLink to={`/${d.dialogId}`} className="chat__item" key={`${d.dialogId}`}>
            <ChatItem lastMessage={d.messages[d.messages.length - 1].messageText}
                createdAt={date} currentMember={currentMember} memberName={memberName} />
        </NavLink>
    })
    return (
        <div className="chats">
            <ChatsHeader auth={auth} users={users} setChatFilter={setChatFilter} chatFilter={chatFilter} />
            <h2>Chats</h2>
            <div className="chats__wrapper">
                {dialogsItems.sort()}
            </div>
        </div>
    )
}

export default Chats;