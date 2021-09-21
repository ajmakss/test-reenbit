import React from "react";
import './Avatar.scss';
import propfileAvatar from '../../../img/profile-avatar.png'

const Avatar = ({avatar, online}) => {
    return (
        <div className="avatar">
            <div className={`avatar__img`}>
                <img src={avatar ? avatar : propfileAvatar} alt="avatar icon" />
            </div>
            <img className={`avatar__status ${online ? 'avatar__status-online' : ''}`} src="https://trac.cyberduck.io/raw-attachment/wiki/help/en/howto/mount/sync/overlay-sync.png" alt="online-status-icon" />

        </div>
    )
}
export default Avatar;