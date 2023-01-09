import React from 'react';
import classes from './Topbar.module.css';

const Topbar = (props) => {
    return (
        <div className={classes.Topbar}>
            <h2>Total Likes: {props.likesCount}</h2>
        </div>
    );
}

export default Topbar;