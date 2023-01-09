import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import classes from './LoginPage.module.css';

const LoginPage = (props) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (props.isUserLoggedIn){
           return navigate("/");
        }
    },[navigate, props.isUserLoggedIn]);

    const onLoginClick = () => {
        props.setLoginStatus(true);
        navigate("/", {replace: true})
    }

    return(
        <div className={classes.MainContainer}>
            <form className={classes.LoginForm}>
                <h2 className={classes.MainHeading}>Login</h2>
                <label className={classes.InputLabel}>Username</label>
                <input className={classes.InputBox} type="text" />
                <label className={classes.InputLabel}>Password</label>
                <input className={classes.InputBox} type="password" />
                <input type="submit" className={classes.LoginButton} value="Login" />
            </form>
        </div>
    );
}

export default LoginPage;
