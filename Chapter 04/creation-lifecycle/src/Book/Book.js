import React from "react";
import classes from "./Book.module.css";

class Book extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title,
      author: this.props.author
    };

    console.log(`Inside Book${this.props.id} constructor()`);
  }

  componentDidMount() {
    console.log(`Inside Book${this.props.id} componentDidMount()`);
  }

  render() {
    console.log(`Inside Book${this.props.id} render()`);
    return (
      <div className={classes.BookCard}>
        <h1>Title: {this.state.title}</h1>
        <p>Author: {this.state.author}</p>
      </div>
    );
  }
}

export default Book;
