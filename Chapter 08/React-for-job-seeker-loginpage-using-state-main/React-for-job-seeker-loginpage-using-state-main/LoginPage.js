import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import classes from './LoginPage.module.css';

const LoginPage = (props) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (props.isUserLoggedIn){
           return navigate("/");
        }
    },[navigate, props.isUserLoggedIn]);

    const onLoginClick = (e) => {
        e.preventDefault();

        const requestData = {
            email: username,
            password: password
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

    const onInputChange = (e, forElem) => {
        switch(forElem) {
            case "username":
                return setUsername(e.target.value);
            case "password":
                return setPassword(e.target.value);
            default:
                return;
        }
    }

    return(
        <div className={classes.MainContainer}>
            <form className={classes.LoginForm} onSubmit={onLoginClick}>
                <h2 className={classes.MainHeading}>Login</h2>
                <label className={classes.InputLabel}>Username</label>
                <input value={username} className={classes.InputBox} type="text" required onInput={(e) => onInputChange(e, "username")} />
                <label className={classes.InputLabel}>Password</label>
                <input value={password} className={classes.InputBox} type="password" required onInput={(e) => onInputChange(e, "password")} />
                <input type="submit" className={classes.LoginButton} value="Login" />
            </form>
        </div>
    );
}

export default LoginPage;
