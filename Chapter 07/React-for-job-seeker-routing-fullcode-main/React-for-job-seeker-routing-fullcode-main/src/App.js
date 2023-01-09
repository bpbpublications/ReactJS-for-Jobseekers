import { Routes, Route, BrowserRouter } from 'react-router-dom';

import classes from './App.module.css';
import Topbar from './Topbar/Topbar';
import HomePage from './HomePage/HomePage';
import BlogPage from './BlogPage/BlogPage';
import LoginPage from './LoginPage/LoginPage';
import React from 'react';
import NotFoundPage from './NotFoundPage/NotFoundPage';
import UnauthorizedPage from './UnauthorizedPage/UnauthorizedPage';
import SomethingWentWrongPage from './SomethingWentWrongPage/SomethingWentWrongPage';

function App() {
  const [isUserLoggedIn, setLoginStatus] = React.useState(false);

  const updateLoggedInStatus = (status) => {
    setLoginStatus(status)
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Topbar isUserLoggedIn={isUserLoggedIn} setLoginStatus={updateLoggedInStatus} />
        <main className={classes.MainContainer}>
          <Routes>
            <Route path={"/"} element={<HomePage />} />
            <Route path={"/blog/:id"} element={<BlogPage isUserLoggedIn={isUserLoggedIn} />} />
            <Route path={"/login"} element={<LoginPage isUserLoggedIn={isUserLoggedIn} setLoginStatus={updateLoggedInStatus} />} />
            <Route path={"/not-found"} element={<NotFoundPage />} />
            <Route path={"/something-went-wrong"} element={<SomethingWentWrongPage />} />
            <Route path={"/unauthorized"} element={<UnauthorizedPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;