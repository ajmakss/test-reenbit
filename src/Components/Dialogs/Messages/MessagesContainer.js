import React from "react";
import { connect } from "react-redux";
import Messages from "./Messages";
import { addMessage, getMessage } from "../../../redux/dialogs-reducer";

import { withRouter } from 'react-router-dom';
import { compose } from "redux";
import { getAuthUser, getDialogs, getUsers } from "../../../redux/selectors";

const MessagesContainer = ({ match, dialogs, addMessage, auth, users, getMessage }) => {

    let currentDialog = match.params.dialogId;
    let messages = dialogs.filter(d => d.dialogId === currentDialog);

    return <Messages messages={messages} addMessage={addMessage}
        currentDialog={currentDialog} auth={auth}
        users={users} getMessage={getMessage}/>

};

const mapStateToProps = (state) => ({
    dialogs: getDialogs(state),
    auth: getAuthUser(state),
    users: getUsers(state)
});
export default compose(
    connect(mapStateToProps, { addMessage, getMessage }),
    withRouter)(MessagesContainer)