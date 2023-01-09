import React from 'react';
import { Link } from 'react-router-dom';

import classes from './BlogCard.module.css';

const BlogCard = ({id, thumbnail, title}) => {
    return (
        <div className={classes.BlogCard}>
            <Link to={`/blog/${id}`}>
                <img className={classes.BlogThumbnail} src={thumbnail} alt={title} />
                <p className={classes.BlogTitle}>{title}</p>
            </Link>
        </div>
    );
}

export default BlogCard;