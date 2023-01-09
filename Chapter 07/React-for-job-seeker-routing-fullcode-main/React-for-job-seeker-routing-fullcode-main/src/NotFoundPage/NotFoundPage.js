import classes from './NotFoundPage.module.css';

const NotFoundPage = () => {
    return(
        <div className={classes.MainContainer}>
            <h1 className={classes.MainHeading}>404: Not Found!</h1>
        </div>
    );
}

export default NotFoundPage;