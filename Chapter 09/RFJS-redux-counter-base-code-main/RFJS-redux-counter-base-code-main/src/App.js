import React from 'react';
import Topbar from './Topbar/Topbar';
import Homepage from './Homepage/Homepage';

import classes from './App.module.css';

class App extends React.Component {
  state = {
    totalLikes: 0,
  }

  updateLikes = (incrementValue) => {
    const updatedVal = this.state.totalLikes + incrementValue;
    this.setState({totalLikes: updatedVal})
  }

  render() {
    return (
      <div className={classes.App}>
        <Topbar likesCount={this.state.totalLikes} />

        <Homepage updateLikes={this.updateLikes} />
      </div>
    );
  }
}

export default App;