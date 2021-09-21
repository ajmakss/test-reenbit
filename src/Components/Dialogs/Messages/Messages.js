import React from "react";
import SendMessageForm from "./SendMessageForm/SendMessageForm";
import MessageItem from "./MessageItem.js/MessageItem";
import './Messages.scss';
import MessagesHeader from "./MessagesHeader/MessagesHeader";
import moment from 'moment';
import { getCurrentMemember } from "../../../utility/utility";

const Messages = ({messages,addMessage,currentDialog, auth, users, getMessage}) => {
    let messagesItems = messages[0].messages.map(m => {
        let messageKey= `${currentDialog}_${m.messageId}`;

        let date = moment(m.createdAt).format('M/D/gg, h:mm a');

        return <MessageItem key={messageKey} messageText={m.messageText} createdAt={date} auth={auth} userId={m.userId} users={users} />
    });

    let memberId = messages[0].members.filter(m => m.userId !== auth)[0];
    let currentMember = getCurrentMemember(messages[0].members, auth, users);

    return (
        <div className="messages">
            <MessagesHeader currentMember={currentMember} pageYOffset />
            <div className="messages__content"  >
                {messagesItems ? messagesItems : <h1>Error</h1>}
            </div>
            <SendMessageForm addMessage={addMessage} currentDialog={currentDialog}
                getMessage={getMessage} memberId={memberId} />
        </div>
    )

}

export default Messages;