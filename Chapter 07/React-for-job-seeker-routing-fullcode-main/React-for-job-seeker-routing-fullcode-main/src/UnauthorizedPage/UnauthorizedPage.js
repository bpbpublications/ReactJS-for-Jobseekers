import classes from './UnauthorizedPage.module.css';

const UnauthorizedPage = () => {
    return(
        <div className={classes.MainContainer}>
            <h1 className={classes.MainHeading}>401: Unauthorized!</h1>
        </div>
    );
}

export default UnauthorizedPage;