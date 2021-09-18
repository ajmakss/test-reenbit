import React from "react";
import SendMessageForm from "./SendMessageForm/SendMessageForm";
import MessageItem from "./MessageItem.js/MessageItem";
import './Messages.scss';
import MessagesHeader from "./MessagesHeader/MessagesHeader";

const Messages = (props) => {
    console.log(props.messages[0].messages)
    let messagesItems = props.messages[0].messages.map(m => {
        return <MessageItem messageText={m.messageText} />
    })

    return (
        <div className="messages">
            <MessagesHeader />
            <div className="messages__content">
                {messagesItems}
            </div>
            <SendMessageForm />
        </div>
    )

}

export default Messages;