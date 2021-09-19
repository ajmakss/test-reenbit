import React from "react";
import { NavLink } from "react-router-dom";
import ChatItem from "./ChatItem/ChatItem";
import './Chats.scss';
import ChatsHeader from "./ChatsHeader/ChatsHeader";
import moment from 'moment';

const Chats = (props) => {

    let sortedDialogs = props.dialogs.sort((a,b) => {
        return new Date(b.messages[b.messages.length - 1].createdAt) - new Date(a.messages[a.messages.length - 1].createdAt)
    });

    let dialogsItems = sortedDialogs.map(d => {
        let date = moment(d.messages[d.messages.length - 1].createdAt).format('ll');
        let memberId = d.members.filter(m => m.userId !== props.auth)[0];
        let currentMember = props.users.filter(u => u.userId === memberId.userId)[0];
        let memberName = (d.messages[d.messages.length - 1].userId === props.auth) ? 'Me' : currentMember.username;

        return <NavLink to={`/${d.dialogId}`}>
            <ChatItem lastMessage={d.messages[d.messages.length - 1].messageText} 
            createdAt={date}  currentMember={currentMember} memberName={memberName}/>
        </NavLink>
    })
    return (
        <div className="chats">
            <ChatsHeader auth={props.auth} users={props.users}/>
            <h2>Chats</h2>
            {dialogsItems.sort()}
        </div>
    )
}

export default Chats;