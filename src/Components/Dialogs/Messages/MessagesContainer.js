import React from "react";
import { connect } from "react-redux";
import Messages from "./Messages";
import { addMessage } from "../../../redux/dialogs-reducer";

import { withRouter } from 'react-router-dom';
import { compose } from "redux";

const MessagesContainer = (props) => {
    let messages = props.dialogs.filter(d => d.dialogId === props.match.params.messages);
    return (
        <Messages messages={messages} addMessage={props.addMessage}
         dialogId={props.match.params.messages} auth={props.auth} users={props.users}/>
    )

}

const mapStateToProps = (state) => ({
    dialogs: state.dialogs.dialogs,
    auth: state.auth.userId,
    users: state.users.users
})
export default compose(
    connect(mapStateToProps, {addMessage}),
    withRouter)(MessagesContainer)