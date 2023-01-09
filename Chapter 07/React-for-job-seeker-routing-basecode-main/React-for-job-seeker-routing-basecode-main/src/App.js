import logo from './logo.svg';
import classes from './App.module.css';
import Topbar from './Topbar/Topbar';
import HomePage from './HomePage/HomePage';
import BlogPage from './BlogPage/BlogPage';
import LoginPage from './LoginPage/LoginPage';

function App() {
  return (
    <div className="App">
      <Topbar />

      <main className={classes.MainContainer}>
        <HomePage />
        <BlogPage />
        <LoginPage />
      </main>
    </div>
  );
}

export default App;
