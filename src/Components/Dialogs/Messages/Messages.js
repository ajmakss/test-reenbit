import React from "react";
import SendMessageForm from "./SendMessageForm/SendMessageForm";
import MessageItem from "./MessageItem.js/MessageItem";
import './Messages.scss';
import MessagesHeader from "./MessagesHeader/MessagesHeader";
import moment from 'moment';

const Messages = (props) => {
    let messagesItems = props.messages[0].messages.map(m => {

        let date = moment(m.createdAt).format('M/D/gg, h:mm a');

        return <MessageItem messageText={m.messageText}
            createdAt={date} auth={props.auth}
            userId={m.userId} users={props.users} />
    })

    let memberId = props.messages[0].members.filter(m => m.userId !== props.auth)[0];
    let currentMember = props.users.filter(u => u.userId === memberId.userId)[0];

    return (
        <div className="messages">
            <MessagesHeader currentMember={currentMember} />
            <div className="messages__content">
                {messagesItems}
            </div>
            <SendMessageForm addMessage={props.addMessage} currentDialog={props.currentDialog} 
            getMessage={props.getMessage} memberId={memberId}/>
        </div>
    )

}

export default Messages;