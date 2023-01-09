import axios from "axios";
import React from "react";
import classes from "./Homepage.module.css";

class Homepage extends React.Component {
  state = {
    todoList: null
  };
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => {
        this.setState({ todoList: response.data });
      })
      .catch((error) => {
        console.log(error.toString());
      });
  }
  render() {
    const todoCards =
      this.state.todoList &&
      this.state.todoList.map((item) => {
        return (
          <div className={classes.TODOCard}>
            <h3 className={classes.TODOHeading}>{item.title}</h3>
          </div>
        );
      });
    return <div className={classes.MainContainer}>{todoCards}</div>;
  }
}

export default Homepage;
