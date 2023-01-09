import classes from './Topbar.module.css';

const Topbar = () => {
    return (
        <header className={classes.MainContainer}>
            <nav className={classes.MenuWrapper}>
                <a className={classes.MenuItem} href='#'>Home</a>
                <a className={classes.MenuItem} href='#'>Login</a>
            </nav>
        </header>
    );
}

export default Topbar;