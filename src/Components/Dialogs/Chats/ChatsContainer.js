import React from "react";
import { connect } from "react-redux";
import ChatItem from "./ChatItem/ChatItem";
import Chats from "./Chats";
import './Chats.scss';
import ChatsHeader from "./ChatsHeader/ChatsHeader";

const ChatsContainer = (props) => {
    return (
        <Chats dialogs={props.dialogs}/>
    )
}

const mapStateToProps = (state) => ({
    dialogs: state.dialogs.dialogs
});

export default connect(mapStateToProps)(ChatsContainer);