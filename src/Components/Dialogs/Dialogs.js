import React from "react";
import Chats from "./Chats/Chats";
import './Dialogs.scss';
import Messages from "./Messages/Messages";

const Dialogs = () => {
    return (
        <div className="dialogs">
        <Chats/>
        <Messages/>
    </div>)
}
export default Dialogs;