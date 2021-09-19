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

    return (
        <div className="messages">
            <MessagesHeader />
            <div className="messages__content">
                {messagesItems}
            </div>
            <SendMessageForm addMessage={props.addMessage} dialogId={props.dialogId} />
        </div>
    )

}

export default Messages;