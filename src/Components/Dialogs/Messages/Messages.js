import React from "react";
import AddMessageForm from "./AddMessageForm/AddMessageForm";
import MessageItem from "./MessageItem.js/MessageItem";
import './Messages.scss';
import MessagesHeader from "./MessagesHeader/MessagesHeader";

const Messages = (props) => {
    return (
        <div className="messages">
            <MessagesHeader />
            <div className="messages__content">
                <MessageItem />
                <MessageItem />
                <MessageItem />
            </div>
            <AddMessageForm />
        </div>
    )

}

export default Messages;