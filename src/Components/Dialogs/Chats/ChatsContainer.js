import React from "react";
import { connect } from "react-redux";
import { setChatFilter } from "../../../redux/dialogs-reducer";
import Chats from "./Chats";
import './Chats.scss';
import {getAuthUser, getUsers, sortDialogsByDate} from '../../../redux/selectors';
import { filterChatsBySearch } from "../../../utility/utility";

const ChatsContainer = ({users, auth,setChatFilter, chatFilter, dialogs}) => {
    
    let filtedDialogs = filterChatsBySearch(dialogs,chatFilter);

    return (
        <Chats dialogs={filtedDialogs} users={users}  auth={auth} setChatFilter={setChatFilter} 
         chatFilter={chatFilter}/>
    ) 
}

const mapStateToProps = (state) => ({
    dialogs: sortDialogsByDate(state),
    users: getUsers(state),
    auth: getAuthUser(state),
    chatFilter: state.dialogs.chatFilter
});

export default connect(mapStateToProps, {setChatFilter})(ChatsContainer);