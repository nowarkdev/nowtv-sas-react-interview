import React from 'react';
import './styles.css';
import Moment from 'react-moment';
import User from "../user/index";

const Message = ({message, timestamp, email, avatar, fullName}) => {
    return (
        <div className="well well-sm alert alert-info chat">
            <div className="message-wrapper">
                <User email={email} avatar={avatar} name={fullName}/>
                <span className="message-text">{message}</span>
            </div>
            <div className="message-time">
                <Moment format="DD MMM YYYY HH:mm">
                    {timestamp}
                </Moment>
            </div>
        </div>
    );
};

export default Message;