import React from "react";
import Book from "./Book/Book";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: []
    };

    console.log("Inside constructor()");
  }

  componentDidMount() {
    console.log("Inside componentDidMount()");
  }

  render() {
    console.log("Inside render()");
    return (
      <div className="App">
        <h1>Book List</h1>
        <Book id={1} title="The Cold Start problem" author="Andrew Chen" />
        <Book id={2} title="The Cold Start problem" author="Andrew Chen" />
        <Book id={3} title="The Cold Start problem" author="Andrew Chen" />
      </div>
    );
  }
}

export default App;
