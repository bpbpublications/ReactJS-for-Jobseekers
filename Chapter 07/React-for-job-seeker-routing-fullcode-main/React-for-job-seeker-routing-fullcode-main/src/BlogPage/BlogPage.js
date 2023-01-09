import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { BLOG_DATA } from '../utilities/AppData';
import classes from './BlogPage.module.css';

const BlogPage = (props) => {
    const params = useParams(); //Hook provided by React Router to access URL Params
    const blogID = params && params.id;

    let blogDetails = null;
    for(let item of BLOG_DATA) {
        if(item.id === parseInt(blogID, 10)) {
            blogDetails = item;
        }
    }
    
    const navigate = useNavigate();
    useEffect(() => {
        if (!props.isUserLoggedIn){
           return navigate("/login");
        }
    },[props.isUserLoggedIn]);

    return(
        <div className={classes.MainContainer}>
            {
                !blogDetails ? <h2 className={classes.BlogHeading}>Blog Not Found!!</h2>
                :
                <div className={classes.BlogContentWrapper}>
                    <img className={classes.BlogThumbnail} src={blogDetails.thumbnail} alt={blogDetails.title} />
                    <h2 className={classes.BlogHeading}>{blogDetails.title}</h2>
                    <p className={classes.BlogDescription}>{blogDetails.description}</p>
                </div>
            }
        </div>
    );
}

export default BlogPage;