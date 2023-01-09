import React from 'react';
import Topbar from './components/Topbar/Topbar';
import Homepage from './containers/Homepage/Homepage';

import classes from './App.module.css';

class App extends React.Component {
  render() {
    return (
      <div className={classes.App}>
        <Topbar />
        <Homepage />
      </div>
    );
  }
}

export default App;