import React from "react";
import { connect } from "react-redux";
import ChatItem from "./ChatItem/ChatItem";
import Chats from "./Chats";
import './Chats.scss';
import ChatsHeader from "./ChatsHeader/ChatsHeader";

const ChatsContainer = (props) => {
    return (
        <Chats dialogs={props.dialogs} users={props.users} auth={props.auth}/>
    )
}

const mapStateToProps = (state) => ({
    dialogs: state.dialogs.dialogs,
    users: state.users.users,
    auth: state.auth.userId
});

export default connect(mapStateToProps)(ChatsContainer);