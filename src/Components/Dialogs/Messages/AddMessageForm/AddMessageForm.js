import React from "react";
import './AddMessageForm.scss';

const AddMessageForm = (props) => {
    return (
        <div className="add-message">
            <input type="text" placeholder="Type your message" />
            <button>Send</button>
        </div>
    )
}

export default AddMessageForm;