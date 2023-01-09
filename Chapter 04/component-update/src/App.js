import React from "react";
import "./styles.css";

class App extends React.Component {
  state = {
    books: [],
    showBooks: true
  };

  bookVisibilityHandler = () => {
    this.setState({ showBooks: !this.state.showBooks });
  };

  shouldComponentUpdate = () => {
    console.log("Inside shouldComponentUpdate()");
    return false;
  };

  componentDidUpdate = () => {
    console.log("Inside componentDidUpdate()");
  };

  render() {
    console.log("Inside render()");
    return (
      <div className="App">
        <button onClick={this.bookVisibilityHandler}>Show/Hide Books</button>
        {this.state.showBooks ? <h1>Book List</h1> : null}
      </div>
    );
  }
}

export default App;
