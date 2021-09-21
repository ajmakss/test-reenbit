import React from "react";
import './FindChatForm.scss';
import search from '../../../../../img/search.svg'

const FindChatForm = ({ setChatFilter, chatFilter }) => {

    const onChatFilterChange = (e) => {
        setChatFilter(e.currentTarget.value)
    }
    return (
        <div className="chat__form">
            <input type="text" placeholder="Search or start new chat" value={chatFilter} onChange={(e) => onChatFilterChange(e)} />
            <div className="chat__search-icon">
                <img src={search} alt="" />
            </div>
        </div>
    )
}
export default FindChatForm;