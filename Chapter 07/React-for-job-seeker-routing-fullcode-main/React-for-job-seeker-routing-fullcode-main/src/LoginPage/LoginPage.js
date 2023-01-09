import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import classes from './LoginPage.module.css';

const LoginPage = (props) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (props.isUserLoggedIn){
           return navigate("/");
        }
    },[props.isUserLoggedIn]);

    const onLoginClick = () => {
        props.setLoginStatus(true);
        navigate("/", {replace: true})
    }

    return(
        <div className={classes.MainContainer}>
            <h2>Login Page!</h2>
            <button className={classes.LoginButton} onClick={onLoginClick}>Login</button>
        </div>
    );
}

export default LoginPage;