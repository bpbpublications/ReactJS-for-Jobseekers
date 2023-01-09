import axios from 'axios';
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

    const onLoginClick = (e) => {
        e.preventDefault();
        const formElement = e.target;
        const usernameElement = formElement.uname;
        const passwordElement = formElement.pwd;

        const requestData = {
            email: usernameElement.value,
            password: passwordElement.value
        }

        // You con login ONLY with the email addresses available in the response of this API request "https://reqres.in/api/users?page=1". You can open the URL in the browser. You can enter any string as a password for login API.
        
        axios.post("https://reqres.in/api/login", requestData)
        .then(successResponse => {
            alert("Login Successful");
            props.setLoginStatus(true);
            navigate("/", {replace: true})
        })
        .catch(error => console.log(error));
    }

    return(
        <div className={classes.MainContainer}>
            <form className={classes.LoginForm} onSubmit={onLoginClick}>
                <h2 className={classes.MainHeading}>Login</h2>
                <label className={classes.InputLabel}>Username</label>
                <input className={classes.InputBox} type="text" name='uname' required />
                <label className={classes.InputLabel}>Password</label>
                <input className={classes.InputBox} type="password" name='pwd' required />
                <input type="submit" className={classes.LoginButton} value="Login" />
            </form>
        </div>
    );
}

export default LoginPage;
