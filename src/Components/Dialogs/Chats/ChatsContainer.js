import React from "react";
import { connect } from "react-redux";
import { setChatFilter } from "../../../redux/dialogs-reducer";
import Chats from "./Chats";
import './Chats.scss';

const ChatsContainer = (props) => {
    return (
        <Chats dialogs={props.dialogs} users={props.users}
         auth={props.auth} setChatFilter={props.setChatFilter} 
         chatFilter={props.chatFilter}/>
    ) 
}

const mapStateToProps = (state) => ({
    dialogs: state.dialogs.dialogs,
    users: state.users.users,
    auth: state.auth.userId,
    chatFilter: state.dialogs.chatFilter
});

export default connect(mapStateToProps, {setChatFilter})(ChatsContainer);