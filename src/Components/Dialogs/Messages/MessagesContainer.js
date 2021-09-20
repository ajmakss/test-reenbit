import React from "react";
import { connect } from "react-redux";
import Messages from "./Messages";
import { addMessage, getMessage } from "../../../redux/dialogs-reducer";

import { withRouter } from 'react-router-dom';
import { compose } from "redux";

const MessagesContainer = (props) => {
    let currentDialog = props.match.params.dialogId;
    let messages = props.dialogs.filter(d => d.dialogId === currentDialog);

    return <Messages messages={messages} addMessage={props.addMessage}
            currentDialog={currentDialog} auth={props.auth}
            users={props.users} getMessage={props.getMessage}
            currentDialog={currentDialog} />

};

const mapStateToProps = (state) => ({
    dialogs: state.dialogs.dialogs,
    auth: state.auth.userId,
    users: state.users.users
});
export default compose(
    connect(mapStateToProps, { addMessage, getMessage }),
    withRouter)(MessagesContainer)