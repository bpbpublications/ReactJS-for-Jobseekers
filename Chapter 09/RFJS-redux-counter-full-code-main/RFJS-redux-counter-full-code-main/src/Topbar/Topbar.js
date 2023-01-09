import React from 'react';
import { useSelector } from 'react-redux';
import classes from './Topbar.module.css';

const Topbar = () => {
    const totalLikes = useSelector(globalState => globalState.like.likesCounter);
    const totalDislikes = useSelector(globalState => globalState.dislike.dislikesCounter);

    return (
        <div className={classes.Topbar}>
            <h2>Total Likes: {totalLikes}</h2>
            <h2>Total Dislikes: {totalDislikes}</h2>
        </div>
    );
}

export default Topbar;