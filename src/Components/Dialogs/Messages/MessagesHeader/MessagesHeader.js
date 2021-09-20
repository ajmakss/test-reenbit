import React from "react";
import './MessagesHeader.scss';
import Avatar from '../../../Common/Avatar/Avatar'
import { NavLink } from "react-router-dom";
import arrowback from '../../../../img/arrow-back.svg';
const MessagesHeader = (props) => {
    return (
        <div className="messages__header">
            <NavLink to='/' className="messages__back "><button><img src={arrowback} alt="icon back" /></button></NavLink>
            <Avatar avatar={props.currentMember.avatar} online={props.currentMember.online}/>
            <span>{props.currentMember.username}</span>
        </div>
    )
}

export default MessagesHeader;