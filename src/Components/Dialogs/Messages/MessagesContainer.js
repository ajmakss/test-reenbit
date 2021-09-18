import React from "react";
import { connect } from "react-redux";
import Messages from "./Messages";

import { withRouter } from 'react-router-dom';
import { compose } from "redux";

const MessagesContainer = (props) => {
    let messages = props.dialogs.filter(d => d.dialogId === props.match.params.messages);
    return (
        <Messages messages={messages}/>
    )

}

const mapStateToProps = (state) => ({
    dialogs: state.dialogs.dialogs
})
export default compose(
    connect(mapStateToProps),
    withRouter)(MessagesContainer)