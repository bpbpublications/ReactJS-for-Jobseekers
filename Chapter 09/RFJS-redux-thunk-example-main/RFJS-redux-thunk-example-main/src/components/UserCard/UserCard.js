import React from 'react';

import classes from './UserCard.module.css';

const UserCard = ({firstName, lastName}) => {
    return (
        <div className={classes.MainCard}>
            <h2 className={classes.UserFullName}>{`${firstName} ${lastName}`}</h2>
        </div>
    )
}

export default UserCard;