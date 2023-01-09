import { Link } from 'react-router-dom';
import classes from './Topbar.module.css';

import SearchIcon from '../assets/icons/search.svg'; //Don't forget to add the icon folder and search file. You can download it from the full documentation.

const Topbar = (props) => {
    const onSearchEnter = (e) => {
        // Implement Search Redirect Here
    }

    return (
        <header className={classes.MainContainer}>
            <nav className={classes.MenuWrapper}>
                <Link className={classes.MenuItem} to='/'>Home</Link>
                {
                    props.isUserLoggedIn ?
                    <p className={classes.MenuItem} onClick={() => props.setLoginStatus(false)}>Logout</p>
                    :
                    <Link className={classes.MenuItem} to='/login'>Login</Link>
                }
            </nav>

            <form className={classes.SearchWrapper} onSubmit={onSearchEnter}>
                <input className={classes.SearchBox} type="search" placeholder='Search Here' />
                <img className={classes.SearchIcon} src={SearchIcon} alt="Search Icon" />
            </form>
        </header>
    );
}

export default Topbar;