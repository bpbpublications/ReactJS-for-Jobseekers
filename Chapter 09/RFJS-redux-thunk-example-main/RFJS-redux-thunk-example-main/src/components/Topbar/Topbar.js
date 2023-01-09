import React from 'react';
import { useSelector } from 'react-redux';
import classes from './Topbar.module.css';

const Topbar = () => {
    const users = useSelector(globalState => globalState.userList);

    return (
        <div className={classes.Topbar}>
            <h2>Total Users: {users && users.length ? users.length : 0}</h2>
        </div>
    );
}

export default Topbar;