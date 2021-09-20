import React from "react";
import './FindChatForm.scss';
import search from '../../../../../img/search.svg'

const FindChatForm = (props) => {

    const onChatFilterChange = (e) => {
        props.setChatFilter(e.currentTarget.value)
        console.log(props.chatFilter)
    }
    return (
        <div className="chat__form">
        <input type="text" placeholder="Search or start new chat" value={props.chatFilter} onChange={(e) => onChatFilterChange(e)} />
        <div className="chat__search-icon">
            <img src={search} alt="" />
        </div>
        </div>
    )
}
export default FindChatForm;