import React from 'react';
import './styles.css';

const User = ({email, avatar, name}) => {
    return (
        <div>
            <img className="img img-circle avatar"
                 src={avatar ? avatar : 'https://www.techgeekx.com/image/user-dummy-pic.png'}
                 alt={name}
                 title={email}>
            </img>
        </div>
    );
};

export default User;