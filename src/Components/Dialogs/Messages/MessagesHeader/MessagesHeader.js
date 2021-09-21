import React from "react";
import './MessagesHeader.scss';
import Avatar from '../../../Common/Avatar/Avatar'
import { NavLink } from "react-router-dom";
import arrowback from '../../../../img/arrow-back.svg';
const MessagesHeader = ({ currentMember }) => {
    return (
        <div className="messages__header">
            <NavLink to='/' className="messages__back "><button><img src={arrowback} alt="icon back" /></button></NavLink>
            <Avatar avatar={currentMember.avatar} online={currentMember.online} />
            <span>{currentMember.username}</span>
        </div>
    )
}

export default MessagesHeader;