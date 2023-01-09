import BlogCard from '../BlogCard/BlogCard';
import { BLOG_DATA } from '../utilities/AppData';
import classes from './HomePage.module.css';

const HomePage = () => {
    const renderBlogCards = BLOG_DATA && BLOG_DATA.map(item => {
        return (
            <BlogCard key={item.id} id={item.id} thumbnail={item.thumbnail} title={item.title} />
        )
    })

    return(
        <div className={classes.MainContainer}>
            <h2>All Blogs</h2>

            <div className={classes.BlogGrid}>{renderBlogCards}</div>
        </div>
    );
}

export default HomePage;