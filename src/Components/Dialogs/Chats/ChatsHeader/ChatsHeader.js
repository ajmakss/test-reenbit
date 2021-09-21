import React from "react";
import Avatar from "../../../Common/Avatar/Avatar";
import Facebook from "../../../Facebook/Facebook";
import './ChatsHeader.scss';
import FindChatForm from "./FindChatForm/FindChatForm";

const ChatsHeader = ({ auth,  setChatFilter, chatFilter }) => {

    return (
        <div className="chats__header">
            <div className="chats__user">
                <Avatar avatar={auth.avatar} online={auth.islogin} />
                {auth.islogin ? <span>{auth.userName}</span> : null}
                <Facebook/>
            </div>
            <div className="chats__search">
                <FindChatForm setChatFilter={setChatFilter} chatFilter={chatFilter} />
            </div>
        </div>
    )
}

export default ChatsHeader;